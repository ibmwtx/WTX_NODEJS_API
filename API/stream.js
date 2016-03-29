 

	var ffi = require('ffi');
	var gl = require('./dtxdefs.js');
 
	var stream  = ffi.Library('dtxpi64', {
	"mpiStreamPageGetInfo" : [global.MPIRC, [global.HMPISTREAMPAGE	, global.stringptr, global.intptr] ],	
	"mpiStreamCreate" : [ global.MPIRC, [global.HMPISTREAM, "int", "string", "string", "int"] ],
	"mpiStreamDestroy" : [ global.MPIRC, [ global.HMPISTREAM ] ] ,
	"mpiStreamModify" : [ global.MPIRC, [ global.HMPISTREAM, "int", "string", "string",  "int" ] ],
	"mpiStreamNewPage" : [ global.MPIRC, [global.HMPISTREAM,  global.HMPISTREAMPAGE, "int" ] ] , 
	"mpiStreamNewPageCopy" :  [ global.MPIRC, [global.HMPISTREAM,  global.HMPISTREAMPAGE, global.stringptr, "int" ] ] , 
	"mpiStreamNewPageRef" :  [ global.MPIRC, [global.HMPISTREAM, global.HMPISTREAMPAGE, global.stringptr, "int"  ] ] , 
	"mpiStreamDeletePage" :  [ global.MPIRC, [global.HMPISTREAM, global.HMPISTREAMPAGE ] ] , 
	"mpiStreamWrite" :  [ global.MPIRC, [global.HMPISTREAM, "string", "int"  ] ] , 
	"mpiStreamWritePage" : [ global.MPIRC, [ global.HMPISTREAM, global.HMPISTREAMPAGE ] ] ,
	"mpiStreamWritePageEx" : [ global.MPIRC, [ global.HMPISTREAM, global.HMPISTREAMPAGE, "int" ] ] ,
	"mpiStreamSeek" : [ global.MPIRC, [ global.HMPISTREAM, "int", "int" ] ] ,
	"mpiStreamRead" : [ global.MPIRC, [ global.HMPISTREAM, global.stringptr, "int", global.intptr  ] ] ,
	"mpiStreamReadPage" : [ global.MPIRC, [ global.HMPISTREAM, global.HMPISTREAMPAGE  ] ] ,	
	"mpiStreamGetSize" : [ global.MPIRC, [ global.HMPISTREAM, global.intptr  ] ] ,
	"mpiStreamSetSize" : [ global.MPIRC, [ global.HMPISTREAM, "int"  ] ] ,
	"mpiStreamFlush" : [ global.MPIRC, [ global.HMPISTREAM  ] ] ,
	"mpiStreamIsEnd" : [ global.MPIRC, [ global.HMPISTREAM, global.intptr  ] ] ,
	"mpiStreamTell" : [ global.MPIRC, [ global.HMPISTREAM, global.intptr  ] ],
	"mpiStreamToFile" : [ global.MPIRC, [ global.HMPISTREAM, "string", "int"  ] ],
	"mpiGetHomeDir" : [ global.MPIRC, [ global.stringptr, "int"  ] ]	
	}	);

	


module.exports = {
		
	mpiStreamPageGetInfo : function (hStreamPageInfo, ppData, pnSize) {
		return stream.mpiStreamPageGetInfo(hStreamPageInfo, ppData, pnSize);
	},
	
	mpiStreamCreate : function (phStream, nMaxMem, pszDir, pszFileName, bKeepFile) {
		return stream.mpiStreamCreate(phStream, nMaxMem, pszDir, pszFileName, bKeepFile);
	},
	
	mpiStreamDestroy : function (hStream) {
		return stream.mpiStreamDestroy(hStream);
	},
	
	mpiStreamModify : function (hStream, nMaxMem, pszDir, pszFileName, bKeepFile) {
		return stream.mpiStreamModify(hStream, nMaxMem, pszDir, pszFileName, bKeepFile);
	},
	
	mpiStreamNewPage : function (hStream, phPage, nSize) {
		return stream.mpiStreamNewPage(hStream, phPage, nSize);
	},
	
	mpiStreamNewPageCopy : function (hStream, phPage, pBuff, nSize) {
		return stream.mpiStreamNewPageCopy(hStream, phPage, pBuff, nSize);
	},
	
	mpiStreamNewPageRef : function (hStream, phPage, pBuff, nSize) {
		return stream.mpiStreamNewPageRef(hStream, phPage, pBuff, nSize);
	},
	
	mpiStreamDeletePage : function (hStream, hPage) {
		return stream.mpiStreamDeletePage(hStream, hPage);
	},
	
	mpiStreamWrite : function (hStream, pData, nSize) {
		return stream.mpiStreamWrite(hStream, pData, nSize);
	},
	
	mpiStreamWritePage : function (hStream, hPage) {
		return stream.mpiStreamWritePage(hStream, hPage);
	},
	
	mpiStreamWritePageEx : function (hStream, hPage, nUsed) {
		return stream.mpiStreamWritePageEx(hStream, hPage, nUsed);
	},
	
	mpiStreamRead : function (hStream, pBuff, nSize, pnActRead) {
		return stream.mpiStreamRead(hStream, pBuff, nSize, pnActRead);
	},
	
	mpiStreamSeek : function (hStream, nOffset, origin) {
		return stream.mpiStreamSeek(hStream, nOffset, origin);
	},
	
	mpiStreamReadPage : function (hStream, phPage) {
		return stream.mpiStreamReadPage(hStream, phPage);
	},
	
	mpiStreamGetSize : function (hStream, pnSize) {
		return stream.mpiStreamGetSize(hStream, pnSize);
	},
	
	mpiStreamSetSize : function (hStream, nSize) {
		return stream.mpiStreamSetSize(hStream, nSize);
	},
	
	mpiStreamFlush : function (hStream) {
		return stream.mpiStreamFlush(hStream);
	},
	
	mpiStreamIsEnd : function (hStream, pbIsEnd) {
		return stream.mpiStreamIsEnd(hStream, pbIsEnd);
	},
	
	mpiStreamTell : function (hStream, pnPos) {
		return stream.mpiStreamTell(hStream, pnPos);
	},
	
	mpiStreamToFile : function (hStream, pszFileName, bAppend) {
		return stream.mpiStreamToFile(hStream, pszFileName, bAppend);
	},
	
	mpiGetHomeDir : function (pBuff, iMaxSize) {
		return stream.mpiGetHomeDir(pBuff, iMaxSize);
	}
}
