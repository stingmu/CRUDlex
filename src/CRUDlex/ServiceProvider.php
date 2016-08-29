<?php

/*
 * This file is part of the CRUDlex package.
 *
 * (c) Philip Lehmann-Böhm <philip@philiplb.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace CRUDlex;

use Pimple\Container;
use Pimple\ServiceProviderInterface;
use Silex\Provider\LocaleServiceProvider;
use Silex\Provider\SessionServiceProvider;
use Silex\Provider\TranslationServiceProvider;
use Silex\Provider\TwigServiceProvider;
use Symfony\Component\Intl\Intl;
use Symfony\Component\Translation\Loader\YamlFileLoader;
use Symfony\Component\Yaml\Yaml;

/**
 * The ServiceProvider setups and initializes the whole CRUD system.
 * After adding it to your Silex-setup, it offers access to {@see AbstractData}
 * instances, one for each defined entity off the CRUD YAML file.
 */
class ServiceProvider implements ServiceProviderInterface {

    /**
     * Holds the {@see AbstractData} instances.
     */
    protected $datas;

    /**
     * Holds whether we manage the i18n.
     */
    protected $manageI18n;

    /**
     * Formats the given time value to a timestring defined by the $pattern
     * parameter.
     *
     * If the value is false (like null), an empty string is
     * returned. Else, the value is tried to be parsed as datetime via the
     * given pattern. If that fails, it is tried to be parsed with the pattern
     * 'Y-m-d H:i:s'. If that fails, the value is returned unchanged. Else, it
     * is returned formatted with the given pattern. The effect is to shorten
     * 'Y-m-d H:i:s' to 'Y-m-d' for example.
     *
     * @param string $value
     * the value to be formatted
     * @param string $timezone
     * the timezone of the value
     * @param string $pattern
     * the pattern with which the value is parsed and formatted
     *
     * @return string
     * the formatted value
     */
    protected function formatTime($value, $timezone, $pattern) {
        if (!$value) {
            return '';
        }
        $result = \DateTime::createFromFormat($pattern, $value, new \DateTimeZone($timezone));
        if ($result === false) {
            $result = \DateTime::createFromFormat('Y-m-d H:i:s', $value, new \DateTimeZone($timezone));
        }
        if ($result === false) {
            return $value;
        }
        $result->setTimezone(new \DateTimeZone(date_default_timezone_get()));
        return $result->format($pattern);
    }

    /**
     * Reads and returns the contents of the given Yaml file. If
     * it goes wrong, it throws an exception.
     *
     * @param string $fileName
     * the file to read
     *
     * @return array
     * the file contents
     *
     * @throws \RuntimeException
     * thrown if the file could not be read or parsed
     */
    protected function readYaml($fileName) {
        try {
            $fileContent = file_get_contents($fileName);
            $parsedYaml  = Yaml::parse($fileContent);
            if (!is_array($parsedYaml)) {
                $parsedYaml = [];
            }
            return $parsedYaml;
        } catch (\Exception $e) {
            throw new \RuntimeException('Could not open CRUD file '.$fileName, $e->getCode(), $e);
        }
    }

    /**
     * Initializes needed but yet missing service providers.
     *
     * @param Container $app
     * the application container
     */
    protected function initMissingServiceProviders(Container $app) {

        if (!$app->offsetExists('translator')) {
            $app->register(new LocaleServiceProvider());
            $app->register(new TranslationServiceProvider(), [
                'locale_fallbacks' => ['en'],
            ]);
        }

        if (!$app->offsetExists('session')) {
            $app->register(new SessionServiceProvider());
        }

        if (!$app->offsetExists('twig')) {
            $app->register(new TwigServiceProvider());
            $app['twig.loader.filesystem']->addPath(__DIR__.'/../views/', 'crud');
        }
    }

    /**
     * Initializes the available locales.
     *
     * @param Container $app
     * the application container
     *
     * @return array
     * the available locales
     */
    protected function initLocales(Container $app) {
        $app['translator']->addLoader('yaml', new YamlFileLoader());
        $localeDir = __DIR__.'/../locales';
        $locales   = $this->getLocales();
        foreach ($locales as $locale) {
            $app['translator']->addResource('yaml', $localeDir.'/'.$locale.'.yml', $locale);
        }
        return $locales;
    }

    /**
     * Initializes the children of the data entries.
     */
    protected function initChildren() {
        foreach ($this->datas as $name => $data) {
            $fields = $data->getDefinition()->getFieldNames();
            foreach ($fields as $field) {
                if ($data->getDefinition()->getType($field) == 'reference') {
                    $this->datas[$data->getDefinition()->getReferenceEntity($field)]->getDefinition()->addChild($data->getDefinition()->getTable(), $field, $name);
                }
            }
        }
    }

    /**
     * Gets a map with localized entity labels from the CRUD YML.
     *
     * @param array $locales
     * the available locales
     * @param array $crud
     * the CRUD entity map
     *
     * @return array
     * the map with localized entity labels
     */
    protected function getLocaleLabels($locales, $crud) {
        $localeLabels = [];
        foreach ($locales as $locale) {
            if (array_key_exists('label_'.$locale, $crud)) {
                $localeLabels[$locale] = $crud['label_'.$locale];
            }
        }
        return $localeLabels;
    }

    /**
     * Configures the EntityDefinition according to the given
     * CRUD entity map.
     *
     * @param EntityDefinition $definition
     * the definition to configure
     * @param array $crud
     * the CRUD entity map
     */
    protected function configureDefinition(EntityDefinition $definition, array $crud) {
        $toConfigure = [
            'deleteCascade',
            'listFields',
            'filter',
            'childrenLabelFields',
            'pageSize',
            'initialSortField',
            'initialSortAscending'
        ];
        foreach ($toConfigure as $field) {
            if (array_key_exists($field, $crud)) {
                $function = 'set'.ucfirst($field);
                $definition->$function($crud[$field]);
            }
        }
    }

    /**
     * Creates and setups an EntityDefinition instance.
     *
     * @param Container $app
     * the application container
     * @param array $locales
     * the available locales
     * @param array $crud
     * the parsed YAML of a CRUD entity
     * @param string $name
     * the name of the entity
     *
     * @return EntityDefinition
     * the EntityDefinition good to go
     */
    protected function createDefinition(Container $app, array $locales, array $crud, $name) {
        $label               = array_key_exists('label', $crud) ? $crud['label'] : $name;
        $localeLabels        = $this->getLocaleLabels($locales, $crud);
        $standardFieldLabels = [
            'id' => $app['translator']->trans('crudlex.label.id'),
            'created_at' => $app['translator']->trans('crudlex.label.created_at'),
            'updated_at' => $app['translator']->trans('crudlex.label.updated_at')
        ];

        $entityDefinitionFactory = $app->offsetExists('crud.entitydefinitionfactory') ? $app['crud.entitydefinitionfactory'] : new EntityDefinitionFactory();

        $definition = $entityDefinitionFactory->createEntityDefinition(
            $crud['table'],
            $crud['fields'],
            $label,
            $localeLabels,
            $standardFieldLabels,
            $this
        );
        $this->configureDefinition($definition, $crud);
        return $definition;
    }

    /**
     * Validates the parsed entity definition.
     *
     * @param Container $app
     * the application container
     * @param array $entityDefinition
     * the entity definition to validate
     */
    protected function validateEntityDefinition(Container $app, array $entityDefinition) {
        $doValidate = !$app->offsetExists('crud.validateentitydefinition') || $app['crud.validateentitydefinition'] === true;
        if ($doValidate) {
            $validator = $app->offsetExists('crud.entitydefinitionvalidator')
                ? $app['crud.entitydefinitionvalidator']
                : new EntityDefinitionValidator();
            $validator->validate($entityDefinition);
        }
    }

    /**
     * Initializes the instance.
     *
     * @param DataFactoryInterface $dataFactory
     * the factory to create the concrete AbstractData instances
     * @param string $crudFile
     * the CRUD YAML file to parse
     * @param FileProcessorInterface $fileProcessor
     * the file processor used for file fields
     * @param boolean $manageI18n
     * holds whether we manage the i18n
     * @param Container $app
     * the application container
     */
    public function init(DataFactoryInterface $dataFactory, $crudFile, FileProcessorInterface $fileProcessor, $manageI18n, Container $app) {

        $parsedYaml = $this->readYaml($crudFile);

        $this->validateEntityDefinition($app, $parsedYaml);

        $this->initMissingServiceProviders($app);

        $this->manageI18n = $manageI18n;
        $locales          = $this->initLocales($app);
        $this->datas      = [];
        foreach ($parsedYaml as $name => $crud) {
            $definition         = $this->createDefinition($app, $locales, $crud, $name);
            $this->datas[$name] = $dataFactory->createData($definition, $fileProcessor);
        }

        $this->initChildren();

    }

    /**
     * Implements ServiceProviderInterface::register() registering $app['crud'].
     * $app['crud'] contains an instance of the ServiceProvider afterwards.
     *
     * @param Container $app
     * the Container instance of the Silex application
     */
    public function register(Container $app) {
        $app['crud'] = function() use ($app) {
            $result        = new static();
            $fileProcessor = $app->offsetExists('crud.fileprocessor') ? $app['crud.fileprocessor'] : new SimpleFilesystemFileProcessor();
            $manageI18n    = $app->offsetExists('crud.manageI18n') ? $app['crud.manageI18n'] : true;
            $result->init($app['crud.datafactory'], $app['crud.file'], $fileProcessor, $manageI18n, $app);
            return $result;
        };
    }

    /**
     * Getter for the {@see AbstractData} instances.
     *
     * @param string $name
     * the entity name of the desired Data instance
     *
     * @return AbstractData
     * the AbstractData instance or null on invalid name
     */
    public function getData($name) {
        if (!array_key_exists($name, $this->datas)) {
            return null;
        }
        return $this->datas[$name];
    }

    /**
     * Getter for all available entity names.
     *
     * @return string[]
     * a list of all available entity names
     */
    public function getEntities() {
        return array_keys($this->datas);
    }

    /**
     * Formats the given value to a date of the format 'Y-m-d'.
     *
     * @param string $value
     * the value, might be of the format 'Y-m-d H:i' or 'Y-m-d'
     * @param boolean $isUTC
     * whether the given value is in UTC
     *
     * @return string
     * the formatted result or an empty string on null value
     */
    public function formatDate($value, $isUTC) {
        $timezone = $isUTC ? 'UTC' : date_default_timezone_get();
        return $this->formatTime($value, $timezone, 'Y-m-d');
    }

    /**
     * Formats the given value to a date of the format 'Y-m-d H:i'.
     *
     * @param string $value
     * the value, might be of the format 'Y-m-d H:i'
     * @param boolean $isUTC
     * whether the given value is in UTC
     *
     * @return string
     * the formatted result or an empty string on null value
     */
    public function formatDateTime($value, $isUTC) {
        $timezone = $isUTC ? 'UTC' : date_default_timezone_get();
        return $this->formatTime($value, $timezone, 'Y-m-d H:i');
    }

    /**
     * Calls PHPs
     * {@link http://php.net/manual/en/function.basename.php basename} and
     * returns it's result.
     *
     * @param string $value
     * the value to be handed to basename
     *
     * @return string
     * the result of basename
     */
    public function basename($value) {
        return basename($value);
    }

    /**
     * Determines the Twig template to use for the given parameters depending on
     * the existance of certain keys in the Container $app in this order:
     *
     * crud.$section.$action.$entity
     * crud.$section.$action
     * crud.$section
     *
     * If nothing exists, this string is returned: "@crud/<action>.twig"
     *
     * @param Container $app
     * the Silex application
     * @param string $section
     * the section of the template, either "layout" or "template"
     * @param string $action
     * the current calling action like "create" or "show"
     * @param string $entity
     * the current calling entity
     *
     * @return string
     * the best fitting template
     */
    public function getTemplate(Container $app, $section, $action, $entity) {
        $crudSection       = 'crud.'.$section;
        $crudSectionAction = $crudSection.'.'.$action;

        $offsets = [
            $crudSectionAction.'.'.$entity,
            $crudSection.'.'.$entity,
            $crudSectionAction,
            $crudSection
        ];
        foreach ($offsets as $offset) {
            if ($app->offsetExists($offset)) {
                return $app[$offset];
            }
        }

        return '@crud/'.$action.'.twig';
    }

    /**
     * Gets whether CRUDlex manages the i18n system.
     *
     * @return boolean
     * true if CRUDlex manages the i18n system
     */
    public function isManagingI18n() {
        return $this->manageI18n;
    }

    /**
     * Sets the locale to be used.
     *
     * @param string $locale
     * the locale to be used.
     */
    public function setLocale($locale) {
        foreach ($this->datas as $data) {
            $data->getDefinition()->setLocale($locale);
        }
    }

    /**
     * Gets the available locales.
     *
     * @return array
     * the available locales
     */
    public function getLocales() {
        $localeDir     = __DIR__.'/../locales';
        $languageFiles = scandir($localeDir);
        $locales       = [];
        foreach ($languageFiles as $languageFile) {
            if (in_array($languageFile, ['.', '..'])) {
                continue;
            }
            $extensionPos = strpos($languageFile, '.yml');
            if ($extensionPos !== false) {
                $locale    = substr($languageFile, 0, $extensionPos);
                $locales[] = $locale;
            }
        }
        sort($locales);
        return $locales;
    }

    /**
     * Gets a language name in the given language.
     *
     * @param string $language
     * the language code of the desired language name
     *
     * @return string
     * the language name in the given language or null if not available
     */
    public function getLanguageName($language) {
        return Intl::getLanguageBundle()->getLanguageName($language, $language, $language);
    }

    /**
     * Formats a float to not display in scientific notation.
     *
     * @param float $float
     * the float to format
     *
     * @return double|string
     * the formated float
     */
    public function formatFloat($float) {

        if (!$float) {
            return $float;
        }

        $zeroFraction = $float - floor($float) == 0 ? '0' : '';

        // We don't want values like 0.004 converted to  0.00400000000000000008
        if ($float > 0.0001) {
            return $float.($zeroFraction === '0' ? '.'.$zeroFraction : '');
        }

        // We don't want values like 0.00004 converted to its scientific notation 4.0E-5
        return rtrim(sprintf('%.20F', $float), '0').$zeroFraction;
    }

}
