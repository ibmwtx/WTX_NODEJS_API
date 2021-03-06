

	var ref = require('ref');
	var ffi = require('ffi');
	var gl = require('./dtxdefs.js');


  var properties = ffi.Library('dtxpi64', {
	"mpiPropertySetInteger" : [global.MPIRC, [global.HMPIOBJ	, global.MPIPROP, "int", "int"] ],	
	"mpiPropertySetText" : [ global.MPIRC, [global.HMPIOBJ, global.MPIPROP, "int", "string", "int"] ],
	"mpiPropertyGetInteger" : [ global.MPIRC, [ global.HMPIOBJ, global.MPIPROP, "int", global.intptr ] ],
	"mpiPropertyGetText" : 	 [ global.MPIRC, [ global.HMPIOBJ, global.MPIPROP, "int", global.stringptr, global.intptr ] ],	
	"mpiPropertySetPropertiesXML" : 	 [ global.MPIRC, [ global.HMPIOBJ, "string"] ],
	"mpiPropertyGetAllPropertiesXML" : [ global.MPIRC, [ global.HMPIOBJ, global.stringptr, global.intptr, "int"] ],
	"mpiPropertyGetObject" : [ global.MPIRC, [ global.HMPIOBJ, global.MPIPROP,  "int", global.HMPIOBJ] ]
	
	}	);
	
module.exports = {
		
	mpiPropertySetInteger : function (hObject, iProperty, iIndex, iValue) {
		return properties.mpiPropertySetInteger(hObject, iProperty, iIndex, iValue);
	},
	
	mpiPropertySetText : function (hObject, iProperty , iIndex, pText, nLen) {
		return properties.mpiPropertySetText(hObject, iProperty, iIndex, pText, nLen);
	},
	
	mpiPropertyGetInteger : function (hObject, iProperty , iIndex, piValue) {
		return properties.mpiPropertyGetInteger(hObject, iProperty, iIndex, piValue);
	},
	
	mpiPropertyGetText : function (hObject, iProperty , iIndex, ppText, pnLen) {
		return properties.mpiPropertyGetText(hObject, iProperty, iIndex, ppText, pnLen);
	},
	
	mpiPropertySetPropertiesXML : function (hObject, pszInXML) {
		return properties.mpiPropertySetPropertiesXML(hObject, pszInXML);
	},
	
	mpiPropertyGetAllPropertiesXML : function (hObject, pszOutXML, pnLen, bRecurse) {
		return properties.mpiPropertyGetAllPropertiesXML(hObject, pszInXML, pnLen, bRecurse);
	},
	
	mpiPropertyGetObject : function (hObject, iProperty, iIndex, phValue) {
		return properties.mpiPropertyGetObject(hObject, iProperty, iIndex, phValue);
	}
}
