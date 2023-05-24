// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//    ESLint
/*
    eslint-disable
    no-unused-vars,
    no-undef,
    no-empty,
    no-inner-declarations,
    no-console
*/



//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//	Page
//	This file contains javascript shared by all course pages
//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
addEventListener('load', () => {
    scrollTo(0, 0);
})


var ua = navigator.userAgent.toLowerCase()
var isSafari = -1 != ua.indexOf('safari') && -1 == ua.indexOf('chrome')
if (isSafari) document.documentElement.classList.add('safari');


//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//	Load datajs files 
//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
if (document.querySelector("[data-js]")) {
    var jsfile = document.querySelector("[data-js]").getAttribute('data-js')
    var jsfilesArray = jsfile.split(' '); // Split the attribute value by space
    jsfilesArray.forEach(function (file) {
        import(`./datajs-components/${file}.js`);
    });
}


//  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//
// Splitting.js
// Used to split and animate text 
// https://splitting.js.org/
// 


//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//	video LPM fix
//  JE - what was this supposed to do?
//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// [...document.querySelectorAll('.wallpaper')].forEach(wp => {
//     const vid = wp.querySelector('video');
//     if(!vid) return;
//     const img = new Image;
//     img.src = vid.poster;
//     img.addEventListener('load', () => { 
//         wp.append(img); 
//     })
//     vid.addEventListener('loadeddata', () => {
//         const can = document.createElement('canvas');
//         const ctx = can.getContext('2d');
//         can.width = vid.videoWidth;
//         can.height = vid.videoHeight;
//         can.style.cssText = `position: fixed; top: 0; left: 0;`;	
//         ctx.drawImage(vid, 0, 0, can.width, can.height);
//         wp.append(can);
//         vid.addEventListener('playing', () => { 
//             wp.removeChild(can);
//             wp.removeChild(img);				
//         })
//     })
// });




