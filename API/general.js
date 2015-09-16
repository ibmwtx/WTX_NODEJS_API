
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
	
	
	var general = ffi.Library('dtxpi', {
	"mpiInitAPI" : [ global.MPIRC, [ "string" ] ],
	"mpiTermAPI" : [ 'int', [ ] ],
	"mpiErrorGetText" : [ "string", [ global.MPIRC ]]
	}	);
	
	module.exports = {
		
	mpiInitAPI : function (mapname) {
		return general.mpiInitAPI(mapname);
	},
	
	mpiErrorGetText : function (rc) {
		return general.mpiErrorGetText(rc);
	},
	
	mpiTermAPI : function () {
		return general.mpiTermAPI();
	}
}
	
	