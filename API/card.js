
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


  var card = ffi.Library('dtxpi', {
	"mpiCardGetAdapterObject" : [global.MPIRC, [global.HMPICARD	, global.HMPIADAPT] ],	
	"mpiCardGetMapObject" : [ global.MPIRC, [global.HMPICARD, global.HMPIMAP] ],
	"mpiCardGetAdapterType" : [ global.MPIRC, [ global.HMPICARD, global.intptr ] ] ,
	"mpiCardOverrideAdapter" : [ global.MPIRC, [ global.HMPICARD, "string", "int"] ]
	}	);
	
	
module.exports = {
		
	mpiCardGetAdapterObject : function (hCard, hAdapter) {
		return card.mpiCardGetAdapterObject(hCard, hAdapter);
	},
	
	mpiCardGetMapObject : function (hCard, hMap) {
		return card.mpiCardGetMapObject(hCard, hMap);
	},
	
	mpiCardGetAdapterType : function (hCard, card) {
		return card.mpiCardGetAdapterType(hCard, card);
	},
	
	mpiCardOverrideAdapter : function (hCard,  pszAlias, iType) {
		return card.mpiCardOverrideAdapter(hCard, pszAlias, iType);
	}	
}