const fs = require('fs');
const folder = require('./source/node/folder.js');



const filelist = folder
    .files('./build')
    .filter(path => -1 != path.indexOf('resources'))
    .map(path => {
        return {
            path, 
            size: Math.round(getFilesize(path))
        }
    })
    .filter(item => item.size > 400)
    .sort((a,b)=> a.size - b.size)
    fs.writeFileSync('log.txt',JSON.stringify(filelist))

console.log(filelist)


function getFilesize(filename) {
    var stats = fs.statSync(filename)
    var fileSizeInBytes = stats["size"]
    return fileSizeInBytes / 1024
}