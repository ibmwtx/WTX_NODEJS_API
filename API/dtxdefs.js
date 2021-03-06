
 
    var ref = require('ref');
    var ffi = require('ffi');
	
    global.MPIRC            = ref.types.int;
    global.HMPIMAP          = ref.refType('void');	
    global.HMPICARD         = ref.refType('void');
    global.QWORD            = ref.types.long_long
    global.intptr           = ref.refType('int');
    global.HMPIADAPT        = ref.refType('void');
    global.HMPISTREAM       = ref.refType('void');
    global.MPIPROP          = ref.types.int;		
    global.HMPIOBJ          = ref.refType('void');	
    global.stringptr        = ref.refType('string');
    global.HMPISTREAMPAGE   = ref.refType('void');
    global.HMPISTREAM       = ref.refType('void');		
	 
    /* Property Types */
    global.MPI_PROP_TYPE_NONE       = 0
    global.MPI_PROP_TYPE_INT        = 1
    global.MPI_PROP_TYPE_TEXT       = 2
    global.MPI_PROP_TYPE_BINARY     = 3
    global.MPI_PROP_TYPE_OBJECT     = 4
    global.MPI_PROP_TYPE_PTR        = 5
    global.MPI_PROP_TYPE_INDEXED    = 0x800
	
    /* Object types */
    global.MPI_OBJTYPE_BASE         = 0x000
    global.MPI_OBJTYPE_OBJECT       = 0x1000
    global.MPI_OBJTYPE_MAP          = 0x1001
    global.MPI_OBJTYPE_CARD         = 0x1002
    global.MPI_OBJTYPE_ADAPTER      = 0x1003
    global.MPI_OBJTYPE_CONNECTION   = 0x1004
    global.MPI_OBJTYPE_TRACE        = 0x0005
    global.MPI_OBJTYPE_ADAPTCOLL    = 0x0006
    global.MPI_OBJTYPE_MESSAGE      = 0x0007
    global.MPI_OBJTYPE_MESSAGECOLL  = 0x0008
    global.MPI_OBJTYPE_STREAMPAGE   = 0x0009
    global.MPI_OBJTYPE_STREAM       = 0x000a
	
    /* Adapter types for "special" adapters*/
    global.MPI_ADAPTYPE_FILE        = 0
    global.MPI_ADAPTYPE_BUFFER      = 4
    global.MPI_ADAPTYPE_DATABASE    = 5
    global.MPI_ADAPTYPE_APP         = 6
    global.MPI_ADAPTYPE_ANY         = 30
    global.MPI_ADAPTYPE_STREAM      = 31
    global.MPI_ADAPTYPE_XDS         = 32
    global.MPI_ADAPTYPE_SDO         = 33
    global.MPI_ADAPTYPE_SINK        = 113
	
    /* Defines for MPIP_MAP_RUNTIME_APPLICATION */
    /* Can be user defined also */
    global.MPIP_RT_APP_UNDEFINED    = 0
    global.MPIP_RT_APP_API          = "API"
    global.MPIP_RT_APP_CMDSVR       = "CMDSERVER"
    global.MPIP_RT_APP_LAUNCHER     = "LAUNCHER"
    global.MPIP_RT_APP_WMB          = "WMB"
	
    /* Property bases  */
    global.MPI_PROPBASE_OBJECT	    = 0
    global.MPI_PROPBASE_MAP         = 100
    global.MPI_PROPBASE_CARD        = 200
    global.MPI_PROPBASE_ADAPTER     = 300
    global.MPI_PROPBASE_CONNECTION  = 400
    global.MPI_PROPBASE_USER        = 1000
	
    /* Base object properties */
    global.MPIP_OBJECT_ERROR_CODE   = MPI_PROPBASE_OBJECT
    global.MPIP_OBJECT_ERROR_MSG    = MPI_PROPBASE_OBJECT + 1
    global.MPIP_OBJECT_PARENT       = MPI_PROPBASE_OBJECT + 2
	
    /* Adapter properties */
    global.MPIP_ADAPTER_TYPE                = MPI_PROPBASE_ADAPTER 
    global.MPIP_ADAPTER_ABBREV              = MPI_PROPBASE_ADAPTER + 1
    global.MPIP_ADAPTER_PROVIDER_CODE       = MPI_PROPBASE_ADAPTER + 2
    global.MPIP_ADAPTER_PROVIDER_MSG        = MPI_PROPBASE_ADAPTER + 3
    global.MPIP_ADAPTER_WILDCARD            = MPI_PROPBASE_ADAPTER + 4
    global.MPIP_ADAPTER_CONTEXT             = MPI_PROPBASE_ADAPTER + 5
    global.MPIP_ADAPTER_ON_SUCCESS          = MPI_PROPBASE_ADAPTER + 6
    global.MPIP_ADAPTER_ON_FAILURE          = MPI_PROPBASE_ADAPTER + 7
    global.MPIP_ADAPTER_RETRY               = MPI_PROPBASE_ADAPTER + 8
    global.MPIP_ADAPTER_RETRY_ATTEMPTS      = MPI_PROPBASE_ADAPTER + 9
    global.MPIP_ADAPTER_RETRY_INTERVAL      = MPI_PROPBASE_ADAPTER + 10
    global.MPIP_ADAPTER_SCOPE               = MPI_PROPBASE_ADAPTER + 11
    global.MPIP_ADAPTER_WARNINGS            = MPI_PROPBASE_ADAPTER + 12
    global.MPIP_ADAPTER_FETCH_UNIT          = MPI_PROPBASE_ADAPTER + 13
    global.MPIP_ADAPTER_QUANTITY            = MPI_PROPBASE_ADAPTER + 14
    global.MPIP_ADAPTER_LISTEN_TIME         = MPI_PROPBASE_ADAPTER + 15
    global.MPIP_ADAPTER_MSG_COLLECTION      = MPI_PROPBASE_ADAPTER + 16
    global.MPIP_ADAPTER_USER_DATA           = MPI_PROPBASE_ADAPTER + 17
    global.MPIP_ADAPTER_COMMANDLINE         = MPI_PROPBASE_ADAPTER + 18
    global.MPIP_ADAPTER_DATA_TO_ADAPT       = MPI_PROPBASE_ADAPTER + 19
    global.MPIP_ADAPTER_DATA_FROM_ADAPT     = MPI_PROPBASE_ADAPTER + 20
    global.MPIP_ADAPTER_LISTEN_USESAMECONN  = MPI_PROPBASE_ADAPTER + 21
    global.MPIP_ADAPTER_SQL_STMT            = MPI_PROPBASE_ADAPTER + 22
    global.MPIP_ADAPTER_TRACE_OBJECT        = MPI_PROPBASE_ADAPTER + 23
    global.MPIP_ADAPTER_NUM_MESSAGES        = MPI_PROPBASE_ADAPTER + 24
    global.MPIP_ADAPTER_DB_INFO             = MPI_PROPBASE_ADAPTER + 25
    global.MPIP_ADAPTER_GLOBAL_TX           = MPI_PROPBASE_ADAPTER + 26
    global.MPIP_ADAPTER_RES_ALIAS_HANDLE    = MPI_PROPBASE_ADAPTER + 27
    global.MPIP_ADAPTER_RES_ALIAS_SYSTEM    = MPI_PROPBASE_ADAPTER + 28
    global.MPIP_ADAPTER_ENABLE_TRANSACTIONS = MPI_PROPBASE_ADAPTER + 29
    /* XDS support  */
    global.MPIP_ADAPTER_CALLBACK_PTR                = MPI_PROPBASE_ADAPTER + 30
    global.MPIP_ADAPTER_CAN_SET_INPUT_DATA_OBJECT   = MPI_PROPBASE_ADAPTER + 31
    global.MPIP_ADAPTER_CAN_GET_OUTPUT_DATA_OBJECT  = MPI_PROPBASE_ADAPTER + 32
    global.MPIP_ADAPTER_JNI_ENV_PTR                 = MPI_PROPBASE_ADAPTER + 33
    global.MPIP_ADAPTER_EXT_DATA_HANDLER_PTR        = MPI_PROPBASE_ADAPTER + 34
	
    /* Connection properties */
    global.MPIP_CONNECTION_USER_DATA            = MPI_PROPBASE_CONNECTION
    global.MPIP_CONNECTION_INUSE                = MPI_PROPBASE_CONNECTION + 1
    global.MPIP_CONNECTION_NUMBER               = MPI_PROPBASE_CONNECTION + 2
    global.MPIP_CONNECTION_TRANSACTION_COUNT    = MPI_PROPBASE_CONNECTION + 3
    global.MPIP_CONNECTION_STATE                = MPI_PROPBASE_CONNECTION + 4
    global.MPIP_CONNECTION_STATE_TIMESTAMP      = MPI_PROPBASE_CONNECTION + 5
    global.MPIP_CONNECTION_ON_SUCCESS           = MPI_PROPBASE_CONNECTION + 6
    global.MPIP_CONNECTION_ON_FAILURE           = MPI_PROPBASE_CONNECTION + 7
    global.MPIP_CONNECTION_SCOPE                = MPI_PROPBASE_CONNECTION + 8
    global.MPIP_CONNECTION_GLOBAL_TX            = MPI_PROPBASE_CONNECTION + 9
    global.MPIP_CONNECTION_MODE                 = MPI_PROPBASE_CONNECTION + 10
	
    /* Map properties */
    global.MPIP_MAP_MAP_NAME                        = MPI_PROPBASE_MAP
    global.MPIP_MAP_INSTANCE                        = MPI_PROPBASE_MAP + 1
    global.MPIP_MAP_WATCH_NUMBER                    = MPI_PROPBASE_MAP + 2
    global.MPIP_MAP_GTX_CONTEXT                     = MPI_PROPBASE_MAP + 3
    global.MPIP_MAP_GTX_MANAGER                     = MPI_PROPBASE_MAP + 4
    global.MPIP_MAP_TRANSACTION_COUNT               = MPI_PROPBASE_MAP + 5
    global.MPIP_MAP_AUDIT_SWITCH                    = MPI_PROPBASE_MAP + 6
    global.MPIP_MAP_AUDIT_BURST_DATA                = MPI_PROPBASE_MAP + 7
    global.MPIP_MAP_AUDIT_BURST_EXECUTION           = MPI_PROPBASE_MAP + 8
    global.MPIP_MAP_AUDIT_SUMMARY_EXECUTION         = MPI_PROPBASE_MAP + 9
    global.MPIP_MAP_AUDIT_SETTINGS_MAP              = MPI_PROPBASE_MAP + 10
    global.MPIP_MAP_AUDIT_SETTINGS_DATA             = MPI_PROPBASE_MAP + 11
    global.MPIP_MAP_AUDIT_LOCATION                  = MPI_PROPBASE_MAP + 12
    global.MPIP_MAP_AUDIT_DIRECTORY                 = MPI_PROPBASE_MAP + 13
    global.MPIP_MAP_AUDIT_DIRECTORY_CUSTOM_VALUE    = MPI_PROPBASE_MAP + 14
    global.MPIP_MAP_AUDIT_FILENAME                  = MPI_PROPBASE_MAP + 15
    global.MPIP_MAP_AUDIT_FILENAME_ACTION           = MPI_PROPBASE_MAP + 16
    global.MPIP_MAP_AUDIT_FILENAME_CUSTOM_VALUE     = MPI_PROPBASE_MAP + 17
    global.MPIP_MAP_AUDIT_MEMORY_SIZED              = MPI_PROPBASE_MAP + 18
    global.MPIP_MAP_TRACE_SWITCH                    = MPI_PROPBASE_MAP + 19
    global.MPIP_MAP_TRACE_LOCATION                  = MPI_PROPBASE_MAP + 20
    global.MPIP_MAP_TRACE_DIRECTORY                 = MPI_PROPBASE_MAP + 21
    global.MPIP_MAP_TRACE_DIRECTORY_CUSTOM_VALUE    = MPI_PROPBASE_MAP + 22
    global.MPIP_MAP_TRACE_FILENAME                  = MPI_PROPBASE_MAP + 23
    global.MPIP_MAP_TRACE_FILENAME_CUSTOM_VALUE     = MPI_PROPBASE_MAP + 24
    global.MPIP_MAP_TRACE_INPUT_CONTENT             = MPI_PROPBASE_MAP + 25
    global.MPIP_MAP_TRACE_INPUT_CARD_NUMBER         = MPI_PROPBASE_MAP + 26
    global.MPIP_MAP_TRACE_INPUT_CARD_START          = MPI_PROPBASE_MAP + 27
    global.MPIP_MAP_TRACE_INPUT_CARD_END            = MPI_PROPBASE_MAP + 28
    global.MPIP_MAP_TRACE_RULES_CONTENT             = MPI_PROPBASE_MAP + 29
    global.MPIP_MAP_TRACE_RULES_CARD_NUMBER         = MPI_PROPBASE_MAP + 30
    global.MPIP_MAP_TRACE_SUMMARY_CONTENT           = MPI_PROPBASE_MAP + 31
    global.MPIP_MAP_WORKSPACE_LOCATION              = MPI_PROPBASE_MAP + 32
    global.MPIP_MAP_WORKSPACE_DIRECTORY             = MPI_PROPBASE_MAP + 33
    global.MPIP_MAP_WORKSPACE_DIRECTORY_CUSTOM      = MPI_PROPBASE_MAP + 34
    global.MPIP_MAP_WORKSPACE_FILE_PREFIX           = MPI_PROPBASE_MAP + 35
    global.MPIP_MAP_WORKSPACE_FILE_ACTION           = MPI_PROPBASE_MAP + 36
    global.MPIP_MAP_WORKSPACE_PAGING_SIZE           = MPI_PROPBASE_MAP + 37
    global.MPIP_MAP_WORKSPACE_PAGING_COUNT          = MPI_PROPBASE_MAP + 38
    global.MPIP_MAP_SLIDING_CENTURY                 = MPI_PROPBASE_MAP + 39
    global.MPIP_MAP_SLIDING_CENTURY_CCLOOKUP        = MPI_PROPBASE_MAP + 40
    global.MPIP_MAP_CUSTOM_VALIDATION               = MPI_PROPBASE_MAP + 41
    global.MPIP_MAP_CV_VALIDATION_ERROR             = MPI_PROPBASE_MAP + 42
    global.MPIP_MAP_CV_RESTRICTION_ERROR            = MPI_PROPBASE_MAP + 43
    global.MPIP_MAP_CV_SIZE_ERROR                   = MPI_PROPBASE_MAP + 44
    global.MPIP_MAP_CV_PRESENTATION_ERROR           = MPI_PROPBASE_MAP + 45
    global.MPIP_MAP_MAP_RETRY                       = MPI_PROPBASE_MAP + 46
    global.MPIP_MAP_MAP_RETRY_ATTEMPTS              = MPI_PROPBASE_MAP + 47
    global.MPIP_MAP_MAP_RETRY_INTERVAL              = MPI_PROPBASE_MAP + 48
    global.MPIP_MAP_BURST_RESTART                   = MPI_PROPBASE_MAP + 49
    global.MPIP_MAP_BURST_RESTART_ERROR_LIMIT       = MPI_PROPBASE_MAP + 50
    global.MPIP_MAP_WARNINGS_EVERY                  = MPI_PROPBASE_MAP + 51
    global.MPIP_MAP_WARNINGS_14                     = MPI_PROPBASE_MAP + 52
    global.MPIP_MAP_WARNINGS_18                     = MPI_PROPBASE_MAP + 53
    global.MPIP_MAP_WARNINGS_21                     = MPI_PROPBASE_MAP + 54
    global.MPIP_MAP_WARNINGS_26                     = MPI_PROPBASE_MAP + 55
    global.MPIP_MAP_WARNINGS_27                     = MPI_PROPBASE_MAP + 56
    global.MPIP_MAP_WARNINGS_28                     = MPI_PROPBASE_MAP + 57
    global.MPIP_MAP_WARNINGS_29                     = MPI_PROPBASE_MAP + 58
    global.MPIP_MAP_BURST_NUMBER                    = MPI_PROPBASE_MAP + 59
    global.MPIP_MAP_INITPENDING_HIGH                = MPI_PROPBASE_MAP + 60
    global.MPIP_MAP_INITPENDING_LOW                 = MPI_PROPBASE_MAP + 61
    global.MPIP_MAP_WARNINGS_34                     = MPI_PROPBASE_MAP + 62
    global.MPIP_MAP_AUDIT_BURST_DATA_SIZE_VALIDATION = MPI_PROPBASE_MAP + 63
    global.MPIP_MAP_DESTROY_OBJECT_POOL             = MPI_PROPBASE_MAP + 64
    global.MPIP_MAP_COMMON_TRACE_SWITCH             = MPI_PROPBASE_MAP + 65
    global.MPIP_MAP_COMMON_TRACE_ACTION             = MPI_PROPBASE_MAP + 66
    global.MPIP_MAP_COMMON_TRACE_FILE               = MPI_PROPBASE_MAP + 67
    global.MPIP_MAP_RUNTIME_APPLICATION             = MPI_PROPBASE_MAP + 68
    global.MPIP_MAP_ENABLE_TRANSACTIONS             = MPI_PROPBASE_MAP + 69
    global.MPIP_MAP_PUT_CALLBACK_PTR                = MPI_PROPBASE_MAP + 70
    global.MPIP_MAP_TRACE_CALLBACK_PTR              = MPI_PROPBASE_MAP + 71
    global.MPIP_MAP_MULTITHREADED                   = MPI_PROPBASE_MAP + 72
    global.MPIP_MAP_USE_RESOURCE_MANAGER            = MPI_PROPBASE_MAP + 73
    global.MPIP_MAP_ENTITY_RESOLVER                 = MPI_PROPBASE_MAP + 74
    global.MPIP_MAP_REMOTE_AUDIT                    = MPI_PROPBASE_MAP + 75
    global.MPIP_MAP_REMOTE_WARNINGS                 = MPI_PROPBASE_MAP + 76
    global.MPIP_MAP_RUNMAP_CALLBACK_PTR             = MPI_PROPBASE_MAP + 77
    global.MPIP_MAP_GET_CALLBACK_PTR                = MPI_PROPBASE_MAP + 78
    global.MPIP_MAP_XPATH_CALLBACK_PTR              = MPI_PROPBASE_MAP + 79
    global.MPIP_MAP_XSLT_CALLBACK_PTR               = MPI_PROPBASE_MAP + 80	
    global.MPIP_MAP_SUBST_CHARS                     = MPI_PROPBASE_MAP + 81
    global.MPIP_MAP_SUBST_LENGTH                    = MPI_PROPBASE_MAP + 82
    global.MPIP_MAP_XVALIDATE_CALLBACK_PTR          = MPI_PROPBASE_MAP + 83
    global.MPIP_MAP_DATA_SIZE                       = MPI_PROPBASE_MAP + 84
    global.MPIP_MAP_USES_MEMORY_LINK                = MPI_PROPBASE_MAP + 85
    global.MPIP_MAP_LPIS_PTR                        = MPI_PROPBASE_MAP + 86
    global.MPIP_MAP_CODEPAGE_FALLBACK               = MPI_PROPBASE_MAP + 87
    	
    /* Card properties */
    global.MPIP_CARD_NAME                           = MPI_PROPBASE_CARD
    global.MPIP_CARD_NUMBER                         = MPI_PROPBASE_CARD + 1
    global.MPIP_CARD_DIRECTION                      = MPI_PROPBASE_CARD + 2
    global.MPIP_CARD_OBJECT_COUNT                   = MPI_PROPBASE_CARD + 3
    global.MPIP_CARD_BACKUP                         = MPI_PROPBASE_CARD + 4
    global.MPIP_CARD_BACKUP_WHEN                    = MPI_PROPBASE_CARD + 5
    global.MPIP_CARD_BACKUP_DIRECTORY               = MPI_PROPBASE_CARD + 6
    global.MPIP_CARD_BACKUP_DIRECTORY_CUSTOM_VALUE  = MPI_PROPBASE_CARD + 7
    global.MPIP_CARD_BACKUP_FILENAME                = MPI_PROPBASE_CARD + 8
    global.MPIP_CARD_BACKUP_FILENAME_CUSTOM_VALUE   = MPI_PROPBASE_CARD + 9
    global.MPIP_CARD_BACKUP_ACTION                  = MPI_PROPBASE_CARD + 10
    global.MPIP_CARD_BACKUP_FILEPATH                = MPI_PROPBASE_CARD + 11
    global.MPIP_CARD_MODE                           = MPI_PROPBASE_CARD + 12
    global.MPIP_CARD_REUSE_WORK_AREA                = MPI_PROPBASE_CARD + 13
    global.MPIP_CARD_DOCUMENT_VERIFICATION          = MPI_PROPBASE_CARD + 14
    global.MPIP_CARD_ERROR_CONTEXT                  = MPI_PROPBASE_CARD + 15
    global.MPIP_CARD_METADATA_LOCATION              = MPI_PROPBASE_CARD + 16
    global.MPIP_CARD_ROOT_TYPE_NAME                 = MPI_PROPBASE_CARD + 17
    global.MPIP_CARD_XML_NAMESPACE                  = MPI_PROPBASE_CARD + 18
    global.MPIP_CARD_IS_XDS_ENABLED                 = MPI_PROPBASE_CARD + 19
    global.MPIP_CARD_IS_SYNTAX	                    = MPI_PROPBASE_CARD + 20
	
    /* General */
    global.MPI_FALSE                    = 0
    global.MPI_TRUE                     = 1
    global.MPI_SWITCH_OFF               = 0
    global.MPI_SWITCH_ON                = 1
	
    /* Location */
    global.MPI_LOCATION_FILE            = 0
    global.MPI_LOCATION_MEMORY	        = 1
	
    /* Prefix */
    global.MPI_FILE_PREFIX_MAP	        = 0
    global.MPI_FILE_PREFIX_UNIQUE       = 1
	
    /* Directory */
    global.MPI_DIRECTORY_MAP            = 1
    global.MPI_DIRECTORY_CUSTOM         = 0
	
    /* File name */
    global.MPI_FILENAME_UNIQUE	        = 2
    global.MPI_FILENAME_DEFAULT         = 1
    global.MPI_FILENAME_CUSTOM	        = 0
	
    /* File actions */
    global.MPI_FILE_CREATE	            = 0
    global.MPI_FILE_DELETE	            = 1
    global.MPI_FILE_APPEND	            = 2
	
    /* Trace */
    global.MPI_TRACE_OFF                = 0
    global.MPI_TRACE_ALL                = 1
    global.MPI_TRACE_CARD               = 2
    global.MPI_TRACE_RANGE              = 3
	
    /* MPIP_MAP_STATE */
    global.MPI_STATE_IDLE               = 5
    global.MPI_STAE_RUNNING             = 6
    global.MPI_STATE_PAUSED             = 7
    global.MPI_STATE_ABORTED            = 8
    global.MPI_STATE_FINISHED           = 9
	
    /* MPIP_CARD_BACK_WHEN */
    global.MPI_WHEN_ALWAYS	            = 10
    global.MPI_WHEN_ONERROR             = 11
	
    /* MPIP_CARD_MODE */
    global.MPI_MODE_INTEGRAL            = 1
    global.MPI_MODE_BURST               = 0
	
    /* MPIP_ADAPTER_CONTEXT */
    global.MPI_CONTEXT_SOURCE           = 14
    global.MPI_CONTEXT_SOURCE_EVENT     = 15
    global.MPI_CONTEXT_TARGET           = 16
    global.MPI_CONTEXT_GET              = 17
    global.MPI_CONTEXT_PUT	            = 18
    global.MPI_CONTEXT_DBLOOKUP         = 19
    global.MPI_CONTEXT_DBQUERY          = 20
	
    /* ADAPTER TYPES */
    global.MPI_ADAPT_TYPE_DB            = 21
    global.MPI_ADAPT_TYPE_FILE          = 22
    global.MPI_ADAPT_TYPE_MSG           = 23
    global.MPI_ADAPT_TYPE_APP           = 24
	
    /* TRANSACTION MODES */
    global.MPI_TRANSACTIONS_SINGLE	    = 25
    global.MPI_TRANSACTIONS_NONE        = 26
    global.MPI_TRANSACTIONS_MULTIPLE    = 27
	
    /* UNIT-OF-WORK */
    global.MPI_UNITOFWORK_MESSAGE       = 28
    global.MPI_UNITOFWORK_LOGICAL       = 29
	
    /* MPIP_MAP_EVENT */
    global.MPI_EVENT_START_INPUT        = 0x0001
    global.MPI_EVENT_INPUT_COMPLETE     = 0x0002
    global.MPI_EVENT_START_OUTPUT       = 0x0004
    global.MPI_EVENT_OUTPUT_COMPLETE    = 0x0008
    global.MPI_EVENT_START_BURST        = 0x0010
    global.MPI_EVENT_BURST_COMPLETE     = 0x0020
    global.MPI_EVENT_START_MAP          = 0x0040
    global.MPI_EVENT_MAP_COMPLETE       = 0x0080
	
    global.MPI_EVENT_ALL                = 0x00ff
    global.MPI_EVENT_MAP_EVENTS         = global.MPI_EVENT_START_MAP | global.MPI_EVENT_MAP_COMPLETE
    global.MPI_EVENT_BURST_EVENTS       = global.MPI_EVENT_START_BURST | global.MPI_EVENT_BURST_COMPLETE
    global.MPI_EVENT_CARD_EVENTS        = 0x000f
	
    /* Actions for custom validation */
    global.MPI_ACTION_CONTINUE	        = 0x0000
    global.MPI_ACTION_STOP	            = 0x0001
    global.MPI_ACTION_IGNORE            = 0x0000
    global.MPI_ACTION_VALIDATE	        = 0x0001
    global.MPI_ACTION_IGNORE_NO_WARNINGS = 0x0002
    global.MPI_ACTION_WARN	            = 0x0010
    global.MPI_ACTION_FAIL	            = 0x0020
	
    /* Actions for targets */
    global.MPI_ACTION_CREATE            = 0x0001
    global.MPI_ACTION_DONT_CREATE       = 0x0002
    global.MPI_ACTION_CREATEONCONTENT   = 0x0004
    global.MPI_ACTION_APPEND            = 0x0008
    global.MPI_ACTION_UPDATE            = 0x0010
	
    /* Actions for sources */
    global.MPI_ACTION_KEEP	            = 0x0001
    global.MPI_ACTION_DELETE            = 0x0002
    global.MPI_ACTION_KEEPONCONTENT     = 0x0004
	
    /* OnFailure actions */
    global.MPI_ACTION_ROLLBACK	        = 0x0001
    global.MPI_ACTION_COMMIT            = 0x0002
	
    /* MPIP_ADAPTER_SCOPE */
    global.MPI_SCOPE_MAP                = 0x0001
    global.MPI_SCOPE_BURST	            = 0x0002
    global.MPI_SCOPE_CARD               = 0x0004
	
    /* MPIP_CARD_DIRECTION */
    global.MPI_CARD_INPUT               = 0x1
    global.MPI_CARD_OUTPUT              = 0x0
	
    /* MPIP_CARD_REUSE_WORK_AREA */
    global.MPI_WORK_AREA_REUSE	        = 0x2
    global.MPI_WORK_AREA_DONTREUSE	    = 0x0
	
    /* MPIP_ADAPTER_FETCH_UNIT/MPIP_ADAPTER_QUANTITY */
    global.MPI_NUMBER_SOME              = 0x0
	
    /* MPIP_ADAPTER_LISTEN_TIME */
    global.MPI_INFINITE                 = -1
	
    /* Global Transaction managers */
    global.MPI_TM_MQS                   = 1
    global.MPI_TM_MSDTC                 = 2
	
    /* MPIP_CONNECTION_STATE */
    MPIP_CONNECTION_STATE_DOWN          = 0
    MPIP_CONNECTION_STATE_UP            = 1
	
    /* MPIP_CARD_DOCUMENT_VERIFICATION */
    global.MPI_VERIFY_NEVER             = 0
    global.MPI_VERIFY_ALWAYS            = 1
    global.MPI_VERIFY_ONFAILURE         = 2
    global.MPI_VERIFY_ONSUCCESS         = 3
    global.MPI_VERIFY_WELLFORMED        = 4
	
    /* MPIP_MAP_AUDIT_SETTINGS_MAP, MPIP_MAP_AUDIT_SETTINGS_DATA */
    global.MPI_SWITCH_NEVER             = 0
    global.MPI_SWITCH_ALWAYS            = 1
    global.MPI_SWITCH_ONERROR           = 2
    global.MPI_SWITCH_ONWARNING_ERROR   = 3
	
    /* BurstAudit Data, BurstAudti Execution */
    global.MPI_AUDIT_NEVER	            = 0
    global.MPI_AUDIT_ALWAYS             = 1
    global.MPI_AUDIT_ONERROR            = 2
    global.MPI_AUDIT_ONWARNING_ERROR    = 3
	
    /* Audit size validation */
    global.MPI_DATAAUDIT_WRONGSIZE      = 0
    global.MPI_DATAAUDIT_MINMAXERR	    = 1
	
    /* Common trace switch */
    global.MPI_TRACE_SWITCH_DEFAULT     = 1
    global.MPI_TRACE_SWITCH_OFF         = 2
    global.MPI_TRACE_SWITCH_ON	        = 3
	
    /* Common trace action */
    global.MPI_TRACE_ACTION_CREATE      = 1
    global.MPI_TRACE_ACTION_APPEND      = 2
	
    /* Bases for error codes */
    MPIRC_TYPE_SUCCESS                  = 0
    MPIRC_TYPE_ERROR                    = -1
    MPIRC_TYPE_WARNING                  = 1
    MPIRC_RC_USER_BASE                  = 1000
	
    /* Common success codes  */
    MPIRC_SUCCESS                       = 0
	
    /* Common warning codes (info) */
    MPIRC_W_NO_DATA                     = 1
    MPIRC_W_END_OF_DATA                 = 2
    MPIRC_W_DATA_TRUNCATED              = 3
	
    /* Common Error Codes */
    MPIRC_E_UNKNOWN                     = -1
    MPIRC_E_EXCEPTION                   = -2
    MPIRC_E_FAILED                      = -3
    MPIRC_E_INVALID_PROPERTY            = -4
    MPIRC_E_TYPE_MISMATCH               = -5
    MPIRC_E_PROPERTY_NOTSET             = -6
    MPIRC_E_INVALID_INDEX               = -7
    MPIRC_E_NULL_ARGUMENT               = -8
    MPIRC_E_INVALID_ARGUMENT            = -9
    MPIRC_E_ALLOC_FAILED                = -10
    MPIRC_E_NO_PROPERTIES               = -11
    MPIRC_E_INVALID_TYPE                = -12
    MPIRC_E_BAD_CONNECTION              = -13
    MPIRC_E_FILEOPEN_FAILED             = -14
    MPIRC_E_FILEWRITE_FAILED            = -15
    MPIRC_E_FILEREAD_FAILED             = -16
    MPIRC_E_FILEPOS_FAILED              = -17
    MPIRC_E_INVALID_OBJECT              = -18
    MPIRC_E_NULL_OBJECT                 = -19
    MPIRC_E_ILLEGAL_CALL                = -20
    MPIRC_E_EOF                         = -21
    MPIRC_E_ROOT_ELEM                   = -22
    MPIRC_E_NOT_ROOT_ELEM               = -23
    MPIRC_E_3RD_PARTY_FAILED            = -24
    MPIRC_E_NON_RESIZABLE               = -25
    MPIRC_E_RUNMAP_FAILED               = -26
    MPIRC_E_LOADMAP_FAILED              = -27
    MPIRC_E_NONEXISTING                 = -28
    MPIRC_E_LOADLIBRARY_FAILED          = -29
    MPIRC_E_INVALIDSEEK                 = -30
    MPIRC_E_DATA_TRUNCATED              = -31
    MPIRC_E_NO_PARENT                   = -32
    MPIRC_E_NOT_SUPPORTED               = -33
    MPIRC_XERCES_FAILED                 = -34
    MPIRC_E_INVALID_CARDNUM             = -35
    MPIRC_E_INVALID_CARDDIR             = -36
    MPIRC_E_PROPXML_MISMATCH            = -37
    MPIRC_E_INVALID_PROPID              = -38
    MPIRC_E_INVALID_PROPTYPE            = -39
	
    /* Notification IDs */
    MPIN_ADAPTER_GETSTART               = 1
    MPIN_ADAPTER_GETSTOP                = 2
    MPIN_ADAPTER_PUTSTART               = 3
    MPIN_ADAPTER_PUTSTOP                = 4
    MPIN_ADAPTER_LISTENSTART            = 5
    MPIN_ADAPTER_LISTENSTOP             = 6
    MPIN_ADAPTER_LISTENABORT            = 7
    MPIN_ADAPTER_MAPABORT               = 8
	
    /* Compare type */
    global.MPI_CMP_LESS                 = -1
    global.MPI_CMP_EQUAL                = 0
    global.MPI_CMP_GREATER	            = 1
    global.MPI_CMP_DIFFER               = -2

    global.MPI_COMMIT                   = 0

    /* MPIP_MAP_CODEPAGE_FALLBACK */
    global.MPI_CODE_PAGE_FALLBACK_SKIP          = 0
    global.MPI_CODE_PAGE_FALLBACK_SUBSTITUTE    = 1

