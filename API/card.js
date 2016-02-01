
 

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