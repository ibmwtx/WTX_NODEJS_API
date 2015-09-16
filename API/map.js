
/* 
 * Copyright (C) 2006 - 2015 IBM Corporation.  All rights reserved.
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
	var gl = require('./dtxdefs.js');


  var map = ffi.Library('dtxpi', {
	"mpiMapLoadFile" : [global.MPIRC, [global.HMPIMAP	, "string"] ],	
	"mpiMapUnload" : [ global.MPIRC, [global.HMPIMAP] ],
	"mpiMapRun" : [ global.MPIRC, [ global.HMPIMAP ] ] ,
	"mpiMapLoadMemory" : [ global.MPIRC, [ global.HMPIMAP, "string", "string", "pointer", "int" ] ],
	"mpiMapSetCardCharset" : [ global.MPIRC, [global.HMPICARD,  "int", "char" ] ] , 
	"mpiMapUnload" :  [ global.MPIRC, [global.HMPIMAP ] ] , 
	"mpiMapRefresh" :  [ global.MPIRC, [global.HMPIMAP ] ] , 
	"mpiMapReloadFile" :  [ global.MPIRC, ["string" ] ] , 
	"mpiMapReloadMemory" :  [ global.MPIRC, ["string", "string", "string", "int" ] ] , 
	"mpiMapPause" : [ global.MPIRC, [ global.HMPIMAP ] ] ,
	"mpiMapContinue" : [ global.MPIRC, [ global.HMPIMAP ] ] ,
	"mpiMapAbort" : [ global.MPIRC, [ global.HMPIMAP ] ] ,
	"mpiMapGetInputCardObject" : [ global.MPIRC, [ global.HMPIMAP, "int", global.HMPICARD  ] ] ,
	"mpiMapGetOutputCardObject" : [ global.MPIRC, [ global.HMPIMAP, "int", global.HMPICARD  ] ] ,	
	"mpiMapGetInputCardCount" : [ global.MPIRC, [ global.HMPIMAP, global.intptr  ] ] ,
	"mpiMapGetOutputCardCount" : [ global.MPIRC, [ global.HMPIMAP, global.intptr  ] ] 
	}	);
	
	
module.exports = {
		
	mpiMapLoadFile : function (hMap, mapname) {
		return map.mpiMapLoadFile(hMap, mapname);
	},
	
	mpiMapUnload : function (hMap) {
		return map.mpiMapUnload(hMap);
	},
	
	mpiMapRun : function (hMap) {
		return map.mpiMapRun(hMap);
	},
	
	mpiMapGetInputCardObject : function (hMap, card, hCard) {
		return map.mpiMapGetInputCardObject(hMap, card, hCard);
	},
	
	mpiMapGetOutputCardObject : function (hMap, card, hCard) {
		return map.mpiMapGetOutputCardObject(hMap, card, hCard);
	}
}

/*			
	attach_function :mpiMapRegisterStatusMethod, [:HMPIMAPL, :MPICTRLMTD, :int], :MPIRC
	attach_function :mpiMapRegisterAuditLineMethod, [:HMPIMAPL, :MPIAUDITLINEMTD], :MPIRC
	attach_function :mpiMapGetAuditLineMethod, [:HMPIMAPL, :pointer], :MPIRC
	attach_function :mpiMapRegisterRunMapLoadMethod, [:HMPIMAPL, :MPIRUNMAPLOADMTD], :MPIRC
	attach_function :mpiMapGetRunMapLoadMethod, [:HMPIMAPL, :pointer], :MPIRC
	attach_function :mpiMapReportStatus, [:HMPIMAPL, :string, :pointer], :MPIRC
	attach_function :mpiMapGetAuditData, [:HMPIMAPL, :pointer], :MPIRC
	attach_function :mpiMapGetAuditDataLen, [:HMPIMAPL, :pointer], :MPIRC
	attach_function :mpiMapGetEntityResolver, [:HMPIMAPL, :pointer], :MPIRC
	attach_function :mpiMapSetEntityResolver, [:HMPIMAPL, :pointer], :MPIRC
	
	*/