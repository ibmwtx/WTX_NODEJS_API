
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

rc = map.mpiMapLoadFile(hMap, "test1.mmc");

check_err(rc)

var mapHandle = hMap.deref();

var hCard = ref.alloc(global.HMPICARD);

rc = map.mpiMapGetInputCardObject(mapHandle, 1, hCard)
check_err(rc)


var inputCardHandle = hCard.deref();

// Override the adapter in input card #1 to be a stream
rc = card.mpiCardOverrideAdapter(inputCardHandle, null, global.MPI_ADAPTYPE_STREAM)
check_err(rc)



var hAdapter = ref.alloc(global.HMPIADAPT)
rc = card.mpiCardGetAdapterObject(inputCardHandle, hAdapter)
check_err(rc)

var inputadpaterhandle = hAdapter.deref();

// Get the handle to the stream object
var hStream = ref.alloc(global.HMPISTREAM);
rc = prop.mpiPropertyGetObject(inputadpaterhandle, global.MPIP_ADAPTER_DATA_FROM_ADAPT, 0, hStream)
check_err(rc)

var streamHandle = hStream.deref();


var szInputBuffer = "This is my input data , I am Successful"
rc = stream.mpiStreamWrite(streamHandle, szInputBuffer, szInputBuffer.length)
check_err(rc)


// Get the adapter object handle for output card #2
rc = map.mpiMapGetOutputCardObject(mapHandle, 1, hCard)
check_err(rc)

var outputcardhandle = hCard.deref();

// Override the adapter in output card #2 to be a stream
rc = card.mpiCardOverrideAdapter(outputcardhandle, null, global.MPI_ADAPTYPE_STREAM)
check_err(rc)


rc = map.mpiMapRun(mapHandle);

check_err(rc)

var szMsg = ref.alloc('string');
var zero = ref.alloc('int');


rc = prop.mpiPropertyGetText(mapHandle, global.MPIP_OBJECT_ERROR_MSG, 0, szMsg, zero);


var iRC = ref.alloc('int');
rc = prop.mpiPropertyGetInteger(mapHandle, global.MPIP_OBJECT_ERROR_CODE, 0, iRC);

console.log("Map status: " + " " + szMsg.deref() + " (" + iRC.deref() + ")");

// Get the adapter object handle for output card #2
rc = card.mpiCardGetAdapterObject(outputcardhandle, hAdapter)
check_err(rc)

var outputadpaterhandle = hAdapter.deref();

// Get the handle to the stream object
rc = prop.mpiPropertyGetObject(outputadpaterhandle, global.MPIP_ADAPTER_DATA_TO_ADAPT, 0, hStream)
check_err(rc)

streamHandle = hStream.deref();


//Get the data in pieces from the stream
rc = stream.mpiStreamSeek(streamHandle, 0, 0)
	
do {
  var bIsEnd = ref.alloc('int');
	rc = stream.mpiStreamIsEnd(streamHandle, bIsEnd)
	check_err(rc)
	
	 var continueValue = bIsEnd.deref()
	
	// Clean and break
	if (continueValue == 1) 
	{
		rc = stream.mpiStreamSetSize(streamHandle, 0)
		break
	}	
	
	hPage = ref.alloc(HMPISTREAMPAGE);
	rc = stream.mpiStreamReadPage(streamHandle, hPage)
	check_err(rc)
	
	var hPagePtr = hPage.deref();
	
	maxBufferLen = 1024
	pData = ref.alloc("string");
	nSizeOfData = ref.alloc('int');
	rc = stream.mpiStreamPageGetInfo(hPagePtr, pData, nSizeOfData)
	check_err(rc)
	
	nSizeOfData = nSizeOfData.deref()
	
	console.log("Page Data: " + " " + pData.deref() + " of size (" + nSizeOfData + ")");
} while (!continueValue)

rc = map.mpiMapUnload(mapHandle)
check_err(rc);

rc = general.mpiTermAPI()