##ITX API for NodeJS

This folder contains the following Nodejs wrapper modules for the WTX API:
	-general.js (General Functions)
	-properties.jd (Properties Functions)
	-dtxdefs.js (WTX C API Constants)
	-card.js (MCARD API)
	-map.js (MMAP API)
	-adapter.js (MADAPTER API)
	-stream.js (MSTREAM API)
	
The MCARD, MMAP, MADAPTER, and MSTREAM APIs are fully wrapped with all of their C
functions being included in the WTX Nodejs API.  The General and Properties functions
that are wrapped only include the functions necessary to run the example files for
the WTX C API, but can easily be extended to include all functions.

In order to run the example you must install the FFI and REF.  To do this, type:

node install node-ffi
node install ref
	
node-ffi is a Node.js addon for loading and calling dynamic libraries using pure JavaScript.
It can be used to create bindings to native libraries without writing any C++ code

ref module is inspired by the old Pointer class from node-ffi, but with the intent of using Node's 
fast Buffer instances instead of a slow C++ Pointer class. 
These two concepts were previously very similar, but now this module brings over the functionality that 
Pointers had and Buffers are missing, so now Buffers are a lot more powerful.

To run examples, simply type the following in the command prompt after installing the pre-req

	node example1.js
	
The output displayed should be:
	Map Status: Map completed successfully (0)
	


Pre-requistes : 
IBM WTX for Application Programming v 8.4.1 or above
Nodejs install

Installation : WTX Install should be added to the System PATH on Windows or LIBRARY PATH on LINUX
