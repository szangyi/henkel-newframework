const fs = require('fs');


exports.fileCreate = function(arg){
    console.log('fileCreate', arg)
}
exports.fileRead = function(arg){
    console.log('fileRead', arg)
}
exports.fileUpdate = function(arg){
    console.log('fileUpdate', arg)
}
exports.fileDelete = function(arg){
    console.log('fileDelete', arg)
}
exports.fileExists = function(arg){
    console.log('fileExists', arg)
}


exports.folderCreate = function(arg){
    console.log('folderCreate', arg)
}
exports.folderRead = function(arg){
    console.log('folderRead', arg)
}
exports.folderUpdate = function(arg){
    console.log('folderUpdate', arg)
}
exports.folderDelete = function(arg){
    console.log('folderDelete', arg)
}
exports.folderExists = function(arg){
    console.log('folderExists', arg)
}