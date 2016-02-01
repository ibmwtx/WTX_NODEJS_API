
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
	
	