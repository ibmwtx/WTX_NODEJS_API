
 
 	var ref = require('ref');
	var ffi = require('ffi');
  var general = require('./general.js');
  var map = require('./map.js');
  var gl = require('./dtxdefs.js');
  var prop = require('./properties.js');
  var adapt = require('./adapter.js');
  var stream = require('./stream.js');
  var card = require('./card.js');
   

function check_err(rc) {
	
	if ((rc) <= -1) 
	{
		console.log("Last error is: " +  general.mpiErrorGetText(rc))
		process.exit(0);
	}
}


rc = general.mpiInitAPI(null);

check_err(rc)

var hMap = ref.alloc(global.HMPIMAP);

check_err(rc)

rc = map.mpiMapLoadFile(hMap, "test1.mmc");

check_err(rc)


var dbHandle = hMap.deref();

rc = map.mpiMapRun(dbHandle);

check_err(rc)

var szMsg = ref.alloc('string');
var zero = ref.alloc('int');


rc = prop.mpiPropertyGetText(dbHandle, global.MPIP_OBJECT_ERROR_MSG, 0, szMsg, zero);


var iRC = ref.alloc('int');
rc = prop.mpiPropertyGetInteger(dbHandle, global.MPIP_OBJECT_ERROR_CODE, 0, iRC);

console.log("Map status: " + " " + szMsg.deref() + " (" + iRC.deref() + ")");

rc = map.mpiMapUnload(dbHandle)
check_err(rc);

rc = general.mpiTermAPI()

