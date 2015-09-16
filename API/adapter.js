

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

  var adapter = ffi.Library('dtxpi', {
	"mpiAdaptGetCardObject" : [global.MPIRC, [global.HMPIADAPT	, global.HMPICARD] ],	
	"mpiAdaptGetInputStreamObject" : [ global.MPIRC, [global.HMPIADAPT, global.HMPISTREAM] ],
	"mpiAdaptGetOutputStreamObject" : [ global.MPIRC, [ global.HMPIADAPT, global.HMPISTREAM ] ] 	
	}	);
	
module.exports = {
		
	mpiAdaptGetCardObject : function (hAdapter, hCard) {
		return adapter.mpiAdaptGetCardObject(hAdapter, hCard);
	},
	
	mpiAdaptGetInputStreamObject : function (hAdapter, hStream) {
		return adapter.mpiCardGetMapObject(hAdapter, hStream);
	},
	
	mpiAdaptGetOutputStreamObject : function (hAdapter, hStream) {
		return adapter.mpiCardGetAdapterType(hAdapter, hStream);
	}	
}