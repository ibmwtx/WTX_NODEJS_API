
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