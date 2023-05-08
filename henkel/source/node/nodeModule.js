const fs = require('fs');
const junk = require('./junk.js');






//  create new folder
exports.require = (module) => {
    // If nvm is not installed, try console.log(process) and 
    // see if we can find another way to locate the global path

    // console.log(process)

    let path = process.env.NVM_BIN 
        ? process.env.NVM_BIN.replace('/bin', '/lib/node_modules/' + module)
        : '/' + module
        
    let nodeModule;

	try {
        nodeModule =  require(path); 
        
    } catch(err) {
		console.log(`\n⚠️ ${module} wasn't found\n   Run this command to install and retry...`)
		console.log(`   sudo npm i -g ${module}; \n\n;`)
	}
    
    return nodeModule;
};

