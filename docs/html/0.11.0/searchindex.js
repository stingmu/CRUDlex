Search.setIndex({envversion:46,filenames:["api/AbstractData","api/ControllerProvider","api/DataFactoryInterface","api/Entity","api/EntityDefinition","api/EntityDefinitionFactory","api/EntityDefinitionFactoryInterface","api/EntityDefinitionValidator","api/EntityDefinitionValidatorInterface","api/EntityValidator","api/FileProcessorInterface","api/ManyValidator","api/MimeTypes","api/MySQLData","api/MySQLDataFactory","api/ReferenceValidator","api/ServiceProvider","api/SimpleFilesystemFileProcessor","api/StreamedFileResponse","api/TwigExtensions","api/UniqueValidator","index","manual/addons","manual/constraints","manual/crudyamlreference","manual/datastructures","manual/datatypes","manual/definitionvalidation","manual/events","manual/extendedfeatures","manual/introduction","manual/layouts","manual/setup","manual/templates"],objects:{"":{"AbstractData::$definition":[0,1,1,""],"AbstractData::$events":[0,1,1,""],"AbstractData::$fileProcessor":[0,1,1,""],"AbstractData::DELETION_FAILED_EVENT":[0,2,1,""],"AbstractData::DELETION_FAILED_STILL_REFERENCED":[0,2,1,""],"AbstractData::DELETION_SUCCESS":[0,2,1,""],"AbstractData::countBy":[0,0,1,""],"AbstractData::create":[0,0,1,""],"AbstractData::createEmpty":[0,0,1,""],"AbstractData::createFiles":[0,0,1,""],"AbstractData::delete":[0,0,1,""],"AbstractData::deleteChildren":[0,0,1,""],"AbstractData::deleteFile":[0,0,1,""],"AbstractData::deleteFiles":[0,0,1,""],"AbstractData::doDelete":[0,0,1,""],"AbstractData::enrichEntityWithMetaData":[0,0,1,""],"AbstractData::get":[0,0,1,""],"AbstractData::getDefinition":[0,0,1,""],"AbstractData::getFormFields":[0,0,1,""],"AbstractData::getIdToNameMap":[0,0,1,""],"AbstractData::getManyFields":[0,0,1,""],"AbstractData::getReferenceIds":[0,0,1,""],"AbstractData::hasManySet":[0,0,1,""],"AbstractData::hydrate":[0,0,1,""],"AbstractData::listEntries":[0,0,1,""],"AbstractData::performOnFiles":[0,0,1,""],"AbstractData::popEvent":[0,0,1,""],"AbstractData::pushEvent":[0,0,1,""],"AbstractData::renderFile":[0,0,1,""],"AbstractData::shouldExecuteEvents":[0,0,1,""],"AbstractData::update":[0,0,1,""],"AbstractData::updateFiles":[0,0,1,""],"ControllerProvider::buildUpListFilter":[1,0,1,""],"ControllerProvider::connect":[1,0,1,""],"ControllerProvider::create":[1,0,1,""],"ControllerProvider::delete":[1,0,1,""],"ControllerProvider::deleteFile":[1,0,1,""],"ControllerProvider::edit":[1,0,1,""],"ControllerProvider::getAfterDeleteRedirectParameters":[1,0,1,""],"ControllerProvider::getNotFoundPage":[1,0,1,""],"ControllerProvider::modifyEntity":[1,0,1,""],"ControllerProvider::modifyFilesAndSetFlashBag":[1,0,1,""],"ControllerProvider::renderFile":[1,0,1,""],"ControllerProvider::setLocale":[1,0,1,""],"ControllerProvider::setValidationFailedFlashes":[1,0,1,""],"ControllerProvider::setupI18n":[1,0,1,""],"ControllerProvider::setupRoutes":[1,0,1,""],"ControllerProvider::setupTemplates":[1,0,1,""],"ControllerProvider::show":[1,0,1,""],"ControllerProvider::showList":[1,0,1,""],"ControllerProvider::staticFile":[1,0,1,""],"DataFactoryInterface::createData":[2,0,1,""],"Entity::$definition":[3,1,1,""],"Entity::$entity":[3,1,1,""],"Entity::__construct":[3,0,1,""],"Entity::get":[3,0,1,""],"Entity::getDefinition":[3,0,1,""],"Entity::getRaw":[3,0,1,""],"Entity::populateViaRequest":[3,0,1,""],"Entity::set":[3,0,1,""],"Entity::toType":[3,0,1,""],"EntityDefinition::$children":[4,1,1,""],"EntityDefinition::$childrenLabelFields":[4,1,1,""],"EntityDefinition::$deleteCascade":[4,1,1,""],"EntityDefinition::$fields":[4,1,1,""],"EntityDefinition::$filter":[4,1,1,""],"EntityDefinition::$initialSortAscending":[4,1,1,""],"EntityDefinition::$initialSortField":[4,1,1,""],"EntityDefinition::$label":[4,1,1,""],"EntityDefinition::$listFields":[4,1,1,""],"EntityDefinition::$locale":[4,1,1,""],"EntityDefinition::$localeLabels":[4,1,1,""],"EntityDefinition::$pageSize":[4,1,1,""],"EntityDefinition::$serviceProvider":[4,1,1,""],"EntityDefinition::$standardFieldLabels":[4,1,1,""],"EntityDefinition::$table":[4,1,1,""],"EntityDefinition::__construct":[4,0,1,""],"EntityDefinition::addChild":[4,0,1,""],"EntityDefinition::checkFieldNames":[4,0,1,""],"EntityDefinition::getChildren":[4,0,1,""],"EntityDefinition::getChildrenLabelFields":[4,0,1,""],"EntityDefinition::getEditableFieldNames":[4,0,1,""],"EntityDefinition::getField":[4,0,1,""],"EntityDefinition::getFieldLabel":[4,0,1,""],"EntityDefinition::getFieldNames":[4,0,1,""],"EntityDefinition::getFilter":[4,0,1,""],"EntityDefinition::getFilteredFieldNames":[4,0,1,""],"EntityDefinition::getInitialSortField":[4,0,1,""],"EntityDefinition::getLabel":[4,0,1,""],"EntityDefinition::getListFields":[4,0,1,""],"EntityDefinition::getLocale":[4,0,1,""],"EntityDefinition::getPageSize":[4,0,1,""],"EntityDefinition::getPublicFieldNames":[4,0,1,""],"EntityDefinition::getReadOnlyFields":[4,0,1,""],"EntityDefinition::getServiceProvider":[4,0,1,""],"EntityDefinition::getSubTypeField":[4,0,1,""],"EntityDefinition::getTable":[4,0,1,""],"EntityDefinition::getType":[4,0,1,""],"EntityDefinition::isDeleteCascade":[4,0,1,""],"EntityDefinition::isInitialSortAscending":[4,0,1,""],"EntityDefinition::setChildrenLabelFields":[4,0,1,""],"EntityDefinition::setDeleteCascade":[4,0,1,""],"EntityDefinition::setField":[4,0,1,""],"EntityDefinition::setFieldLabel":[4,0,1,""],"EntityDefinition::setFilter":[4,0,1,""],"EntityDefinition::setInitialSortAscending":[4,0,1,""],"EntityDefinition::setInitialSortField":[4,0,1,""],"EntityDefinition::setLabel":[4,0,1,""],"EntityDefinition::setListFields":[4,0,1,""],"EntityDefinition::setLocale":[4,0,1,""],"EntityDefinition::setPageSize":[4,0,1,""],"EntityDefinition::setServiceProvider":[4,0,1,""],"EntityDefinition::setTable":[4,0,1,""],"EntityDefinition::setType":[4,0,1,""],"EntityDefinitionFactory::createEntityDefinition":[5,0,1,""],"EntityDefinitionFactoryInterface::createEntityDefinition":[6,0,1,""],"EntityDefinitionValidator::validate":[7,0,1,""],"EntityDefinitionValidatorInterface::validate":[8,0,1,""],"EntityValidator::$definition":[9,1,1,""],"EntityValidator::$entity":[9,1,1,""],"EntityValidator::__construct":[9,0,1,""],"EntityValidator::buildUpData":[9,0,1,""],"EntityValidator::buildUpRules":[9,0,1,""],"EntityValidator::fieldConstraintsToRules":[9,0,1,""],"EntityValidator::fieldTypeToRules":[9,0,1,""],"EntityValidator::validate":[9,0,1,""],"FileProcessorInterface::createFile":[10,0,1,""],"FileProcessorInterface::deleteFile":[10,0,1,""],"FileProcessorInterface::renderFile":[10,0,1,""],"FileProcessorInterface::updateFile":[10,0,1,""],"ManyValidator::getInvalidDetails":[11,0,1,""],"ManyValidator::isValid":[11,0,1,""],"MimeTypes::$mimeTypes":[12,1,1,""],"MimeTypes::getMimeType":[12,0,1,""],"MimeTypes::getMimeTypeByExtension":[12,0,1,""],"MimeTypes::getMimeTypeByFileInfo":[12,0,1,""],"MySQLData::$database":[13,1,1,""],"MySQLData::$definition":[13,1,1,""],"MySQLData::$events":[13,1,1,""],"MySQLData::$fileProcessor":[13,1,1,""],"MySQLData::$useUUIDs":[13,1,1,""],"MySQLData::DELETION_FAILED_EVENT":[13,2,1,""],"MySQLData::DELETION_FAILED_STILL_REFERENCED":[13,2,1,""],"MySQLData::DELETION_SUCCESS":[13,2,1,""],"MySQLData::__construct":[13,0,1,""],"MySQLData::addFilter":[13,0,1,""],"MySQLData::addPagination":[13,0,1,""],"MySQLData::addSort":[13,0,1,""],"MySQLData::countBy":[13,0,1,""],"MySQLData::create":[13,0,1,""],"MySQLData::createEmpty":[13,0,1,""],"MySQLData::createFiles":[13,0,1,""],"MySQLData::delete":[13,0,1,""],"MySQLData::deleteChildren":[13,0,1,""],"MySQLData::deleteFile":[13,0,1,""],"MySQLData::deleteFiles":[13,0,1,""],"MySQLData::doDelete":[13,0,1,""],"MySQLData::enrichEntityWithMetaData":[13,0,1,""],"MySQLData::enrichWithMany":[13,0,1,""],"MySQLData::enrichWithManyField":[13,0,1,""],"MySQLData::enrichWithReference":[13,0,1,""],"MySQLData::fetchReferencesForField":[13,0,1,""],"MySQLData::generateUUID":[13,0,1,""],"MySQLData::get":[13,0,1,""],"MySQLData::getDefinition":[13,0,1,""],"MySQLData::getFormFields":[13,0,1,""],"MySQLData::getIdToNameMap":[13,0,1,""],"MySQLData::getManyFields":[13,0,1,""],"MySQLData::getManyIds":[13,0,1,""],"MySQLData::getReferenceIds":[13,0,1,""],"MySQLData::hasChildren":[13,0,1,""],"MySQLData::hasManySet":[13,0,1,""],"MySQLData::hydrate":[13,0,1,""],"MySQLData::listEntries":[13,0,1,""],"MySQLData::performOnFiles":[13,0,1,""],"MySQLData::popEvent":[13,0,1,""],"MySQLData::pushEvent":[13,0,1,""],"MySQLData::renderFile":[13,0,1,""],"MySQLData::saveMany":[13,0,1,""],"MySQLData::setValuesAndParameters":[13,0,1,""],"MySQLData::shouldExecuteEvents":[13,0,1,""],"MySQLData::update":[13,0,1,""],"MySQLData::updateFiles":[13,0,1,""],"MySQLDataFactory::$database":[14,1,1,""],"MySQLDataFactory::$useUUIDs":[14,1,1,""],"MySQLDataFactory::__construct":[14,0,1,""],"MySQLDataFactory::createData":[14,0,1,""],"ReferenceValidator::getInvalidDetails":[15,0,1,""],"ReferenceValidator::isValid":[15,0,1,""],"ServiceProvider::$datas":[16,1,1,""],"ServiceProvider::boot":[16,0,1,""],"ServiceProvider::configureDefinition":[16,0,1,""],"ServiceProvider::createDefinition":[16,0,1,""],"ServiceProvider::getData":[16,0,1,""],"ServiceProvider::getEntities":[16,0,1,""],"ServiceProvider::getLocaleLabels":[16,0,1,""],"ServiceProvider::getLocales":[16,0,1,""],"ServiceProvider::getTemplate":[16,0,1,""],"ServiceProvider::init":[16,0,1,""],"ServiceProvider::initChildren":[16,0,1,""],"ServiceProvider::initLocales":[16,0,1,""],"ServiceProvider::initMissingServiceProviders":[16,0,1,""],"ServiceProvider::readYaml":[16,0,1,""],"ServiceProvider::register":[16,0,1,""],"ServiceProvider::setLocale":[16,0,1,""],"ServiceProvider::validateEntityDefinition":[16,0,1,""],"SimpleFilesystemFileProcessor::$basePath":[17,1,1,""],"SimpleFilesystemFileProcessor::__construct":[17,0,1,""],"SimpleFilesystemFileProcessor::createFile":[17,0,1,""],"SimpleFilesystemFileProcessor::deleteFile":[17,0,1,""],"SimpleFilesystemFileProcessor::getPath":[17,0,1,""],"SimpleFilesystemFileProcessor::renderFile":[17,0,1,""],"SimpleFilesystemFileProcessor::updateFile":[17,0,1,""],"StreamedFileResponse::getStreamedFileFunction":[18,0,1,""],"TwigExtensions::formatDate":[19,0,1,""],"TwigExtensions::formatDateTime":[19,0,1,""],"TwigExtensions::formatFloat":[19,0,1,""],"TwigExtensions::formatTime":[19,0,1,""],"TwigExtensions::getLanguageName":[19,0,1,""],"TwigExtensions::registerTwigExtensions":[19,0,1,""],"UniqueValidator::getInvalidDetails":[20,0,1,""],"UniqueValidator::isValid":[20,0,1,""],"UniqueValidator::isValidUnique":[20,0,1,""],"UniqueValidator::isValidUniqueMany":[20,0,1,""],AbstractData:[0,3,1,""],ControllerProvider:[1,3,1,""],DataFactoryInterface:[2,4,1,""],Entity:[3,3,1,""],EntityDefinition:[4,3,1,""],EntityDefinitionFactory:[5,3,1,""],EntityDefinitionFactoryInterface:[6,4,1,""],EntityDefinitionValidator:[7,3,1,""],EntityDefinitionValidatorInterface:[8,4,1,""],EntityValidator:[9,3,1,""],FileProcessorInterface:[10,4,1,""],ManyValidator:[11,3,1,""],MimeTypes:[12,3,1,""],MySQLData:[13,3,1,""],MySQLDataFactory:[14,3,1,""],ReferenceValidator:[15,3,1,""],ServiceProvider:[16,3,1,""],SimpleFilesystemFileProcessor:[17,3,1,""],StreamedFileResponse:[18,3,1,""],TwigExtensions:[19,3,1,""],UniqueValidator:[20,3,1,""]}},objnames:{"0":["php","method","PHP method"],"1":["php","attr","PHP attribute"],"2":["php","const","PHP const"],"3":["php","class","PHP class"],"4":["php","interface","PHP interface"]},objtypes:{"0":"php:method","1":"php:attr","2":"php:const","3":"php:class","4":"php:interface"},terms:{"5px":31,"__construct":[3,4,9,13,14,17],"__dir__":[22,29,31,32],"_dir_":31,"abstract":[0,24,32],"b\u00fccher":24,"boolean":[0,1,3,4,9,13,19,20,21,24],"case":[0,4,13,22,24,25,26,29,31,33],"char":26,"class":[0,1,3,4,5,7,9,10,11,12,13,14,15,16,17,18,19,20,26,31],"default":[4,5,24,25,26,27,29,31,32],"float":[3,9,19,21,24],"function":[0,12,13,18,24,28],"int":[25,26,33],"long":[0,13],"new":[0,1,4,6,13,22,26,29,31,32],"null":[0,1,3,4,13,16,19,25,26,28,29],"public":4,"return":[0,1,2,3,4,6,8,9,10,12,13,16,17,18,19,20,28],"static":1,"switch":21,"throw":[16,27],"true":[0,1,4,13,20,22,23,24,26,28,29],"void":[0,8,10,13],"while":29,abbrevi:30,abc:26,abl:30,about:[25,26,28],abov:26,access:[9,16,21],accord:[9,13,16],achiev:33,action:[0,1,13,16,21,28,30],activ:[1,24,26,29],actual:[0,9,32],add:[0,4,13,22,26,29,32,33],addchild:4,addev:22,addfilt:13,addit:[21,29],addon:21,addpagin:13,addsort:13,adjust:33,admin:21,administr:30,after:[0,1,13,16,28],afterward:16,again:13,against:[9,22],alert:31,all:[0,1,4,9,13,16,17,19,22,24,25,26,29,30,31,32,33],allow:[24,26,29],along:24,alreadi:31,also:31,alter:26,although:32,alwai:[24,26,30],amazon:[22,26],amazons3fileprocessor:22,amet:26,amount:[0,4,13,25],ani:[0,13,22],anoth:[0,13,24,31],anyth:27,api:[21,22,24],app:[1,16,19,22,26,27,28,29,31,32,33],appear:4,applic:[1,16,19,22,30,31],appropri:[1,29],around:[22,29],arrai:[0,1,4,6,8,9,13,16,20,22,26,29,31,32],arround:3,ascend:[0,4,13,24,29],assign:0,assum:[25,31],attent:[26,29],author:[23,24,25,26,29],auto:[21,22],auto_incr:25,automat:22,autor:29,avail:[0,13,16,19,21,25,26,28,32],awar:[0,10,13],back:[22,26],bar:26,base:[17,26],basepath:17,basic:30,befor:[0,13,27,28,31],behaviour:24,belong:[0,13,26],besid:25,best:16,between:26,big:29,bigger:29,bigint:26,bit:[27,29],block:[31,33],blue:26,bodi:31,book:[23,24,25,26,29,31,32,33],book_ibfk_1:26,booklist:33,bool:33,booleanfield:33,boolfield:33,boot:16,bootstrap:31,bore:29,both:23,bottom:31,box:0,branch:22,broke:[0,13],broken:26,btn:31,buch:29,build:[0,1,9,24,25],buildupdata:9,builduplistfilt:1,builduprul:9,button:[26,31,33],call:[0,13,16,31],can:[0,2,13,23,24,26,28,29,31,33],cancel:28,care:32,cascad:[0,13,21],caus:[1,24],certain:[16,28,31],chain:[0,13],chang:[24,29,33],chapter:[22,25,29,30,31,32],charact:26,charset:[26,32],check:[0,4,9,11,13,15,20],checkfieldnam:4,child:4,children:[0,4,13,16,21,24],childrenlabelfield:[4,24,26],choic:[25,26],chosen:26,clear:28,click:26,clickabl:26,close:31,closur:[0,13,18,28],code:[1,19,28],color:26,column:[24,25,33],com:[12,26],combin:21,come:[30,31,32],compos:32,comprehens:26,concret:16,condit:0,configur:[13,16,22,30],configuredefinit:16,connect:[1,22],consetetur:26,constant:[0,13],constraint:[9,20,21],construct:[2,17],constructor:[3,4,9,13,14,17],contain:[0,4,9,10,13,16,19,29],content:[16,21,23,26,31,32,33],continu:[25,29],control:[1,2,22,23,25,32],controllercollect:1,controllerproviderinterfac:1,convert:[3,22],cost:27,could:29,count:[0,9,24],countbi:[0,13],cours:3,cover:24,creat:[0,1,2,4,6,10,13,16,22,25,26,28,29,30,31,32,33],created_at:[0,4,6,13,24,25,29],createdata:[2,14],createdefinit:16,createempti:[0,13],createentitydefinit:[5,6],createfil:[0,10,13,17,28],creation:[0,1,6,21,22,25,28],cross:[24,26],crud:[1,4,5,6,8,16,21,22],cruddata:1,cruddatafactoryinterfac:29,crudfil:16,crudlexamazons3fileprocessor:21,crudlexentitydefinitionvalidatorinterfac:27,crudlexsampl:25,crudlexus:21,crudmysqldata:29,crudusersetup:22,css:31,current:[0,1,4,6,13,16,19,23,26,29,32],cursor:31,custom:21,cut:26,danger:31,data:[0,1,2,3,4,7,8,9,10,13,16,20,21],databas:[2,3,13,14,23,25,26,28,30,32],datafactori:[16,22,26,29,32],datasourc:[0,13],date:[9,19,21,24],datefield:33,datepick:31,datetim:[9,19,21,22,24,25],datetimefield:33,datetimepick:31,dbal:[13,14],dbname:32,debug:27,decim:26,declar:[4,25,26],defens:[17,26],defin:[0,3,4,13,16,19,23,25,26,28,31,32],definit:[0,1,2,3,4,7,8,9,13,14,16,21,23],definitionschema:7,delet:[0,1,4,10,13,17,21,24,25],deletecascad:[0,4,13,24,26],deletechildren:[0,13],deleted_at:[4,25,29],deletefil:[0,1,10,13,17,28],deletion_failed_ev:[0,13],deletion_failed_still_referenc:[0,13],deletion_success:[0,13],depend:[3,16],deriv:29,descend:[0,13,24,29],describ:[21,22,25,26,30],descript:[21,22,24],desir:[16,19,22,29,31],detail:[1,4,24,26,29,30],determin:16,differ:26,dir:26,directli:[25,28,33],disabl:29,discuss:32,dismiss:31,displai:[4,19,21,24,25,26],div:31,doc:22,doctrin:[13,14],doctrineserviceprovid:32,dodelet:[0,13],doesn:[17,26,28,29],dolor:26,don:[4,26,31,33],dot:[26,31],doubl:[19,26],driver:21,dropdown:0,due:[0,13],dure:5,each:[0,13,16,22,25,30,31,33],ead:30,earth:24,easi:[21,23,30],easili:29,edit:[1,4,24,26,30,31,33],editor:[24,26],editpag:29,effect:19,either:[0,1,13,16,23,24,26],element:[4,26],elet:30,els:[0,3,19,26,29],email:22,empti:[0,13,19],end:24,endblock:31,endfor:31,endif:31,engin:26,enrich:[0,13],enrichentitywithmetadata:[0,13],enrichwithmani:13,enrichwithmanyfield:13,enrichwithrefer:13,enter:24,entiti:[0,1,2],entitydefinit:[0,1,2,3],entitynam:[0,10,13,17],entiydefinitionfactoryinterfac:5,entri:[0,4,13,16,25,29,30],environ:27,error:[1,9,24],etc:[22,26,30],even:28,event:[0,13,21,22],ever:17,everi:[21,28,29],everyth:20,exact:25,exactli:[0,30],exampl:[0,3,19,23,25,26,28,29,31,32,33],except:[16,27],exclud:[0,4],excludedelet:[0,13],excludeid:[0,13],execut:[0,13,28],exist:[0,4,10,13,16,23,25,33],exlud:4,expect:1,expectedvers:9,explain:24,extend:21,extens:[12,19],extract:[0,13],factori:[1,14,16],fail:[0,1,9,13,19],fall:26,fals:[0,1,4,13,14,19,22,24,26,28,29],far:[25,33],featur:[21,22,24],fetch:13,fetchreferencesforfield:13,few:26,field:[0,1,3,4,5,6,9,10,13,16,17,20,21,22,23,24],fieldconstraintstorul:9,fieldlabel:33,fieldnam:4,fieldstructur:6,fieldtypetorul:9,file:[0,1,2,4,10,12,13,16,17,18,21,22,24],filefield:33,fileinfo:21,filenam:[16,18],fileprocessor:[0,2,13,14,16,22,26],fileprocessorinterfac:[0,2],filesystem:26,fill:[23,26],filter:[0,1,4,13,19,21,24],filteract:1,filteroper:[0,1,13],filtertous:1,find:[12,33],fire:[0,13],firewal:22,first:[0,13,22,25,28,29,31,32],fit:16,fix:[0,13,21,24],fixedfield:33,flag:[13,14],flash:[1,24,31],flashbag:31,flashtyp:31,flashtypeavail:31,flexibl:[6,30],floatfield:33,floatstep:[24,26],folder:31,follow:[22,26,31,32],foo:26,footer:[31,33],forc:26,foreign:21,forget:26,form:[0,13,21,24,26],format:19,formatd:19,formatdatetim:19,formatfloat:19,formattim:19,found:[1,4],from:[0,3,8,9,10,12,13,16,21,22,24,26,28,29],frontpag:24,fulfil:0,full:[0,13,26],fullfil:0,further:[26,32],futur:[24,32],gener:[1,13,18,21,22,30,31],generateuuid:13,get:[0,1,3,4,12,13,16,19,22,25,26,28,29,31],getafterdeleteredirectparamet:1,getchildren:4,getchildrenlabelfield:4,getdata:[16,22,28],getdefinit:[0,3,13],geteditablefieldnam:4,getent:16,getfield:4,getfieldlabel:4,getfieldnam:4,getfilt:4,getfilteredfieldnam:4,getformfield:[0,13],getidtonamemap:[0,13],getinitialsortfield:4,getinvaliddetail:[11,15,20],getlabel:4,getlanguagenam:19,getlistfield:4,getlocal:[4,16],getlocalelabel:16,getmanyfield:[0,13],getmanyid:13,getmimetyp:12,getmimetypebyextens:12,getmimetypebyfileinfo:12,getnotfoundpag:1,getpages:4,getpath:17,getpublicfieldnam:4,getraw:3,getreadonlyfield:4,getreferenceid:[0,13],getserviceprovid:4,getstreamedfilefunct:18,getsubtypefield:4,gettabl:4,gettempl:16,getter:[16,22],gettoken:22,gettyp:4,give:[26,33],given:[0,3,4,5,7,8,9,13,16,17,18,19,24,26,28],global:21,goe:16,gone:26,good:[16,25,30,31,33],got:25,grab:22,green:26,guid:[29,32],had:26,hand:[2,6,22,27,29],handl:[1,10,22,26,28],hard:30,haschildren:13,hash:[22,28],hasmanyset:[0,13],have:[0,13,22,23,24,25,26,29,30,31,32,33],head:31,header:[0,10,13,31,33],here:[0,10,13,22,24,25,26,29],hide:25,hierarchi:31,him:22,hint:[4,21],hold:[0,1,3,4,13,14,16,17],homepag:24,host:32,how:[3,12,22,24,28,29,31],html:26,http:[0,1,10,12,13,25,26,32],hydrat:[0,13],i18n:[1,21],ident:24,idtodata:13,imag:26,implement:[1,2,3,5,13,14,16,17,21,25,26],implicit:4,includ:[0,4,10,13,21,31],includemani:4,increment:21,index:[21,26],info:12,inform:[25,29],inheritdoc:[5,7,11,13,14,15,17,20],init:16,initchildren:16,initi:[4,16,21,22,24],initialsortascend:[4,24,29],initialsortfield:[4,24,29],initlocal:16,initmissingserviceprovid:16,innodb:26,input:[1,3],inset:9,instanc:[0,1,2,4,6,9,13,14,16,22,26,31,32],instanti:22,instead:[21,28],instruct:24,integ:[0,1,3,4,9,13,21,24,25],integerfield:33,interfac:[2,6,8,10,22,27],intern:[4,22,29,32,33],interrupt:28,intfield:33,introduct:21,invalid:[1,3,4,16],ipsum:26,isdeletecascad:4,isinitialsortascend:4,isn:13,isopenonsundai:24,isutc:19,isvalid:[11,15,20],isvaliduniqu:20,isvaliduniquemani:20,item:[4,24,25,26],itself:[31,32],javascript:31,jqueri:31,json:32,just:[0,4,6,10,12,13,23,26,29,31,33],kei:[0,3,4,5,6,9,13,14,16,21,24,25],kept:32,known:31,label:[4,5,6,16,21,22,23,24,25,26],label_:29,label_d:[24,29],lambda:18,languag:[19,24],larg:24,last:[25,26,28],later:32,latest:[0,13],layer:32,layout:[16,21],lead:26,least:1,let:[22,25],level:[29,31],lib:[23,26],librari:[22,23,24,25,26,28,29],librarybook:[24,26],librarybook_ibfk_1:26,librarybook_ibfk_2:26,like:[0,3,4,6,10,13,16,19,22,24,26,28,29,31,32,33],line:[24,26],linebreak:26,link:[25,29,31],list:[0,1,4,16,21,24,26,28],listentri:[0,1,13],listfield:[4,24,29],listview:[4,29],local:[1,4,6,16,29],locale_fallback:29,localelabel:[4,5,6],localeserviceprovid:29,lock:[1,9,25],log:21,longer:[24,26],longtext:26,look:[3,12,31],lorem:26,lot:30,mail:[22,28],make:[6,26,29],manag:[2,21,22],managei18n:29,mandatori:23,mani:[0,4,11,13,20,21,22,24],manual:21,manyfield:13,map:[1,9,12,13,16],margin:31,mark:29,master:22,matter:3,maximum:[0,13],mean:26,meant:22,mechan:[25,26],medium:24,mediumint:26,mediumtext:26,menu:31,messag:25,metadata:[0,13],metayaml:7,method:[1,13],might:[19,22,24,26,27,28,29,30],mime:12,mimetyp:[0,10],minim:[25,30,32],miss:16,mix:[0,1,3,4,12,13],mode:1,modif:[1,28],modifi:28,modifyent:1,modifyfilesandsetflashbag:1,moment:[0,13,28,31],more:[22,25,26,28,29,31,32],most:[30,31],mount:[25,32],much:[26,29],multi:[24,26],multilin:[21,24],multilinefield:33,must:[0,13,24,28],myauthor:29,mybooklayout:31,mycreatebooklayout:31,mycustomvalid:27,myfileprocessor:26,mylayout:31,myownentitydefinitionfactori:29,myshowlayout:31,mysql:[13,21,25],mysqldata:0,mysqldatafactori:2,name:[0,1,4,10,13,16,17,19,23,24,25,26,29,30,31,32],namefield:[0,13,22,23,24,26],navig:[24,25],need:[16,22,23,26,30,31,33],newli:[0,2,10,13],next:[29,30,32],notat:19,note:[23,25,29,33],noth:[4,16],now:[17,25,26,32],number:[24,29],object:[3,28,32],occur:24,off:[16,21],offer:[1,4,16,22,29,30],often:[29,30],onc:24,onli:[1,4,9,24,25,26,29,30,32],open:24,oper:[0,1,22],optimist:[1,9,25],optimisticlock:1,option:[0,24,26,29,32],order:[0,4,13,16,22,26,28,29,31],other:[4,26],otherent:26,othernam:26,our:[23,25,26],output:[0,10,13,18],overrid:[21,26],overview:24,own:[0,21,27],packag:[26,29],page:[1,4,21,24,25,26],pages:[4,24,29],pagin:[13,21],pai:26,pair:3,panel:21,param:[0,13],paramet:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,26,28],paramsoper:[0,13],parent:[24,26],pars:[8,16,19],part:[22,33],pass:[0,3,9,13],password:21,password_reset:22,passwordreset:22,path:[17,24,25,26,31],pattern:19,pdate:30,pecl:21,per:[4,23,25,29],perform:[0,9,13,20,22,27],performonfil:[0,13],persist:0,philiplb:[31,32],php:[12,21,26],physic:26,picker:31,place:[25,31],planet:24,plu:[22,31],point:[0,13,24,27,30,31,33],pointer:31,pop:[0,13],popev:[0,13,28],popul:[3,22],populateviarequest:3,possibl:[13,24,26,27,29],post:1,postprocess:1,precis:24,predefin:24,prefil:[0,13],prefix:31,prepend:31,prepopul:21,present:[24,29],previou:25,price:24,primari:[13,14,21],process:[0,13],processor:[0,2,13,16,24],produc:26,product:27,profil:21,project:[22,25,29],proper:26,properti:[0,3,4,9,12,13,14,16,17,24,31],protect:[0,3,4,9,12,13,14,16,17],provid:[2,4,6,9,16,19,22,27,29,31,32],push:28,pushev:[0,13,28],queri:13,querybuild:13,question:12,quick:[9,30],raw:[0,3,9,13],react:28,read:[0,4,16],readabl:22,readyaml:16,real:26,reat:30,recommend:[22,26,31],red:26,redirect:1,redirectpag:1,refer:[0,1,4,9,13,15,21,22,23],referenc:[4,13,24,26,29],referencefield:33,regist:[16,19,22,26,27,28,29,31,32],registertwigextens:19,registr:[5,6,29],regular:20,rel:26,relat:[13,24,26],relationship:[24,26],releas:24,reli:32,remov:[0,13,26,28],render:[0,1,10,13,31,33],renderfield:33,renderfil:[0,1,10,13,17],replac:26,repres:[3,24,26],request:[0,1,3,10,13,17],requir:[9,21,22,23,24,32],reset:21,resolv:31,resourc:1,respons:[0,1,10,13,18],rest:[26,33],result:[0,19],retriev:[0,26],right:16,romaricdrigon:7,root:33,rout:1,row:[0,3,13,23,24,25,29],rule:9,sadipsc:26,sai:[3,25],salt:22,same:[0,4,23,25,30],sampl:[25,26],save:[1,13,26,28],savemani:13,scientif:19,scratch:21,search:[21,29],second:[22,25],section:[16,31,32],secur:22,securityserviceprovid:22,see:[0,2,3,4,9,13,14,16,17,22,25,26],seiten:29,select:[0,24,26,33],sens:[26,29],serv:1,servic:[2,4,6,16,27,31],serviceprovid:[2,4,5,6],serviceproviderinterfac:16,session:31,set:[0,1,3,4,9,10,13,16,21,22,24],setchildrenlabelfield:4,setdeletecascad:4,setfield:[4,33],setfieldlabel:4,setfilt:4,setinitialsortascend:4,setinitialsortfield:4,setlabel:4,setlistfield:4,setlocal:[1,4,16],setmethod:13,setpages:4,setserviceprovid:4,settabl:4,settyp:4,setup:[1,16,19,21,26,28,29,30],setupi18n:1,setuprout:1,setuptempl:1,setvalidationfailedflash:1,setvalu:13,setvaluesandparamet:13,sever:22,shorten:[19,26],should:[0,4,23,24,27,28,31,32],shouldexecuteev:[0,13],show:[1,16,21],showlist:1,shown:26,side:[24,26],signatur:[0,13,28],silex:[1,16,21,22,29,30,31,32],silexcontrollercollect:1,simpl:[25,29],simplefilesystemfileprocessor:10,simpli:[17,22,33],singl:[1,3,4,9,21,24,25,26],sit:26,situat:28,size:[0,10,13,24,26],skip:[0,13],small:[18,24,25],smallint:26,soft:[0,24,25],some:[13,22,24,25,29,30,31],someon:28,someth:28,sometim:29,somewher:29,sort:[0,4,13,21,24,26],sortascend:[0,13],sortfield:[0,13],sourc:[4,24],space:26,special:29,specif:[0,3,10,13,24,29,31],specifi:[0,4,33],sql:25,src:[31,33],stackoverflow:12,stand:30,standard:[18,31],standardfieldlabel:[4,5,6],start:[24,30,31,33],staticfil:1,statu:1,step:[24,26],still:[13,26,30],stop:[0,13],storag:26,store:[1,4,17,24,26,28,32],stream:[0,10,13,18],string:[0,1,3,4,6,9,10,12,13,16,17,18,19,25,29],structur:[4,21],sub:[0,4,13,22,24],subchapt:31,subchildren:0,subfold:[17,26],subset:0,subtyp:4,success:[0,13,31],superset:0,support:[23,26,29,32],sure:27,surround:22,symfoni:22,symfonycomponenthttpfoundationredirectrespons:1,symfonycomponenthttpfoundationrespons:10,system:[16,17],tabl:[0,4,5,6,13],tag:[22,31],take:[0,3,13,24,28,32],taken:24,tediou:30,templat:[1,16,21,31,32],text:[21,22,23,24,25],textfield:33,than:[26,29],thatfield:[22,24,26],thatid:[0,13],thei:[0,4,13,26,28,33],them:[13,22],thi:[0,1,2,3,4,9,10,13,16,17,21,22,23,24,25,26,27,28,29,30,31,32,33],thing:9,think:26,thisfield:[22,24,26],those:[26,33],though:26,three:[4,26,28],through:32,thx:12,time:[19,24,25,26,28,32],timestamp:[25,26],timestr:19,timezon:19,tinyint:26,tinytext:26,titel:[24,29],titl:[23,24,25,26,29],token:22,token_storag:22,told:25,too:[0,10,13],tooltip:[26,31],totyp:3,toward:4,translat:[21,26],translationserviceprovid:29,tri:19,turn:21,tweak:33,twig:[16,19,31,33],twigserviceprovid:31,two:[22,23,25,29],txt:26,type:[0,3,4,9,12,20,21,22,23,24,25],unchang:19,under:25,uniqu:[9,20,22,23,24],until:26,upcom:13,updat:[0,1,10,13,25,28],update_at:29,updated_at:[0,4,6,13,24,25,29],updatefil:[0,10,13,17,28],upload:[0,1,2,10,13,21,22,24,26],url:[21,24,25],urlfield:33,usag:29,useful:3,user:[2,21],userbas:22,usernam:22,userprovid:21,userrol:22,usersetup:22,useuuid:[13,14],utc:[19,25],utf8:[26,32],util:18,uuid:[13,14,21],valid:[1,3,7,8,9,11,15,16,20,21,25],validateentitydefinit:[16,27],valu:[0,3,4,9,11,13,15,19,20,21,22,23,24,26],varchar:[26,29],vari:30,variat:2,variou:[25,31],vendor:31,version:[0,4,9,13,22,25,29],via:[6,19,22,26],view:[4,24,26,29,30,31,33],visit:29,visual:[24,26],wai:32,want:[2,22,26,27,28,29,31,33],web:21,well:4,were:[4,28],what:[2,3,13,24,25,26,28],whatev:32,when:[4,22,24,25,29,31],whenev:30,where:[1,4,17,25,28,29,30,31],whether:[0,1,4,9,13,14,19,20,23,24],which:[1,4,8,18,19,24,26,28,32,33],whole:[16,28],within:26,without:26,work:[22,33],would:[25,26,29,31],write:[0,13,30],wrong:[16,27],www:26,wysiwym:[21,24],yaml:[4,6,16,21],yet:[16,29],yml:[7,8,16,22,25,26,27,29,32],you:[22,25,26,27,28,29,30,31,32,33],your:[16,21,22,25,26,27,28,29,30],youraccesskei:22,yourbucket:22,yourcrud:[22,26,29,32],yourdbnam:32,yourdbpassword:32,yourdbus:32,yourhost:32,yoursecretaccesskei:22},titles:["CRUDlex\\AbstractData","CRUDlex\\ControllerProvider","CRUDlex\\DataFactoryInterface","CRUDlex\\Entity","CRUDlex\\EntityDefinition","CRUDlex\\EntityDefinitionFactory","CRUDlex\\EntityDefinitionFactoryInterface","CRUDlex\\EntityDefinitionValidator","CRUDlex\\EntityDefinitionValidatorInterface","CRUDlex\\EntityValidator","CRUDlex\\FileProcessorInterface","CRUDlex\\ManyValidator","CRUDlex\\MimeTypes","CRUDlex\\MySQLData","CRUDlex\\MySQLDataFactory","CRUDlex\\ReferenceValidator","CRUDlex\\ServiceProvider","CRUDlex\\SimpleFilesystemFileProcessor","CRUDlex\\StreamedFileResponse","CRUDlex\\TwigExtensions","CRUDlex\\UniqueValidator","Welcome to CRUDlex&#8217;s documentation!","Addons","Constraints","CRUD YAML Reference","Data Structure Definition","Data Types","Definition Validation","Events","Extended Features","Introduction","Overriding Layouts","Setup","Overriding Templates"],titleterms:{"boolean":26,"float":26,"switch":29,abstractdata:0,access:22,action:[31,33],addit:33,addon:22,admin:22,auto:29,cascad:26,children:26,combin:29,constraint:23,controllerprovid:1,creation:29,crud:24,crudlex:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],crudlexamazons3fileprocessor:22,crudlexus:22,custom:27,data:[22,25,26],datafactoryinterfac:2,date:26,datetim:26,definit:[25,27],delet:26,descript:29,displai:29,document:21,entiti:[3,25,29,31],entitydefinit:[4,29],entitydefinitionfactori:5,entitydefinitionfactoryinterfac:6,entitydefinitionvalid:7,entitydefinitionvalidatorinterfac:8,entityvalid:9,event:28,extend:29,featur:29,field:[25,29,33],file:26,fileprocessorinterfac:10,filter:29,fix:26,foreign:26,form:[29,33],from:31,global:31,hint:26,i18n:29,implement:[27,29],includ:33,increment:29,indic:21,initi:29,instead:29,integ:26,introduct:30,kei:[26,29],label:29,layout:[31,33],list:29,log:22,manag:29,mani:26,manyvalid:11,mimetyp:12,multilin:26,mysql:26,mysqldata:13,mysqldatafactori:14,off:[27,29],overrid:[31,33],own:[29,31],page:[29,33],pagin:29,panel:22,paramet:29,password:22,prepopul:29,primari:29,profil:29,refer:[24,26],referencevalid:15,reset:22,role:22,scratch:31,serviceprovid:16,set:[26,29],setup:32,show:26,simplefilesystemfileprocessor:17,singl:[31,33],sort:29,streamedfilerespons:18,structur:25,tabl:21,templat:33,text:26,translat:29,turn:27,twigextens:19,type:26,uniquevalid:20,url:26,user:22,userprovid:22,uuid:29,valid:27,valu:29,web:29,welcom:21,wysiwym:26,yaml:24,your:31}})