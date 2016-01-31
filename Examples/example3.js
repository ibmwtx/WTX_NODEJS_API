
/* 
 * Copyright (C) 2006 - 2014 IBM Corporation.  All rights reserved.
 *
 * This software is the property of IBM Corporation and its
 * licensors and contains their confidential trade secrets.  Use, examination,
 * copying, transfer and disclosure to others, in whole or in part, are
 * prohibited except with the express prior written consent of
 * IBM Corporation.
 *
 */
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

rc = map.mpiMapLoadFile(hMap, "test3.mmc");

check_err(rc)


var dbHandle = hMap.deref();

rc = prop.mpiPropertySetInteger(dbHandle, global.MPIP_MAP_AUDIT_SWITCH, 0, global.MPI_SWITCH_ON)
check_err(rc)

rc = prop.mpiPropertySetInteger(dbHandle, global.MPIP_MAP_AUDIT_BURST_EXECUTION, 0, global.MPI_SWITCH_ON)
check_err(rc)

rc = prop.mpiPropertySetInteger(dbHandle, global.MPIP_MAP_AUDIT_SUMMARY_EXECUTION, 0, global.MPI_SWITCH_ON)
check_err(rc)

/* Get the card object handle */
var hCard = ref.alloc(global.HMPICARD);

rc = map.mpiMapGetInputCardObject(mapHandle, 1, hCard)
check_err(rc)


var inputCardHandle = hCard.deref();

// Override the adapter in input card #1 to be a stream
rc = card.mpiCardOverrideAdapter(inputCardHandle, 'GZIP', 0)
check_err(rc)

/* Get the adapter object handle */
var hAdapter = ref.alloc(global.HMPIADAPTER);
rc = card.mpiCardGetAdapterObject(inputCardHandle, hAdapter)
check_err(rc)

var inputAdapterHandle = hAdapter.deref();
var zero = ref.alloc('int');
var szCommandLine =  ref.alloc('string');

/* Build the full path using the user defined working directory */
rc = prop.mpiPropertyGetText(inputAdapterHandle, global.MPIP_ADAPTER_COMMANDLINE, 0, "", zero)

/*Set a command line for the adapter */
rc = prop.mpiPropertySetText(inputAdapterHandle, global.MPIP_ADAPTER_COMMANDLINE, 0, "-FILE input.gz", 0)
check_err(rc)

rc = map.mpiMapRun(dbHandle);

check_err(rc)

var szMsg = ref.alloc('string');

rc = prop.mpiPropertyGetText(dbHandle, global.MPIP_OBJECT_ERROR_MSG, 0, szMsg, zero);


var iRC = ref.alloc('int');
rc = prop.mpiPropertyGetInteger(dbHandle, global.MPIP_OBJECT_ERROR_CODE, 0, iRC);

console.log("Map status: " + " " + szMsg.deref() + " (" + iRC.deref() + ")");

rc = map.mpiMapUnload(dbHandle)
check_err(rc);

rc = general.mpiTermAPI()

