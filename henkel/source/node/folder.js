const fs = require('fs');
const junk = require('./junk.js');






//  create new folder
exports.create = path => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
};


//  delete folder and content
exports.delete = path => {
	if (fs.existsSync(path)) {
		fs.readdirSync(path).forEach(item => {
			let curPath = `${path}/${item}`;
			fs.lstatSync(curPath).isDirectory() ? this.delete(curPath) :
			fs.unlinkSync(curPath);
		});
		fs.rmdirSync(path);
	}
};

//  copy the content of one folder into another
exports.copy = (from, to, ignorePrefix = '') => {
    if (fs.existsSync(from)) {
        if(fs.lstatSync(from).isDirectory()){
            this.create(to);
            fs.readdirSync(from).forEach(item => {
                this.copy(`${from}/${item}`, `${to}/${item}`, ignorePrefix)
            })
        }
        else {
            //  sanitize
            const parts = from.split('/');
            const file = parts[parts.length - 1];
            const ignore = file.substr(0,1) == ignorePrefix || -1 !== junk.list.indexOf(file);

            if(!ignore) fs.copyFileSync(from, to);
        }
    }
}

exports.files = (path, array = []) => {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(item => {
            let curPath = `${path}/${item}`;
            fs.lstatSync(curPath).isDirectory() ? this.files(curPath, array) :
            array.push(curPath);
        });
    }
    return array;
}

exports.subFolders = (path, array = []) => {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(item => {
            let curPath = `${path}/${item}`;
            if(fs.lstatSync(curPath).isDirectory()) {
                this.subFolders(curPath, array);
                array.push(curPath);

            }
        });
    }
    return array;
}