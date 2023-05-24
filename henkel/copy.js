
//  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//	Build Config
//
//	The build config will read the module config.js at the root
//	of each course module (source) then produce a course module
//	in the build folder.
//
//	Build folders will be deleted before re-created
//	SCORM and player files will be created automatically
//
//
//	Options:
//	{
//		build:  true/false 		is set to false build will be ignored
//		version string          course module version for the manifest
//		course: string 			course name
//		module: string          module name
//		source: string 			path to source folder
//	}
//
//
//	To execute type  'node run'  in the command line (at root)
//
//
//  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const { config, playerTranslations } = require('./config.js');



//  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//	Dependencies
//  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const folder = require('./source/node/folder.js');

// if (course.brand.includes('v3')) {
// 	const player = require('./source/node/v3-player.js');
// } else {
// 	const player = require('./source/node/player.js');
// }




config.forEach(course => {
	// if(!course.build) return;

	let player;

	if (course.brand.includes('v3')) {
		player = require('./source/node/v3-player.js');
	} else {
		player = require('./source/node/player.js');
	}

	const sourcePath = `./courses/${course.lang.toLocaleLowerCase()}/${course.source}`;
	const sharedPath = `${sourcePath}/shared`;

	if (!course.brand.includes('v3')) {
		//	copy shared base files 
		folder.copy(`./source/shared/base`, `${sharedPath}`, '_');
	}

	//	copy shared 
	//	changed (15.05.2023)
	//	all new brands (v3-loctite, v3-teroson) 
	//	should share same styling - folder v3
	if (course.brand.includes('v3')) {
		folder.copy(`./source/shared/v3`, `${sharedPath}`, '_');
	} else {
		folder.copy(`./source/shared/${course.brand}`, `${sharedPath}`, '_');
	}


	//
	//	add properties to build
	//
	//	create source scorm player
	let country = course.lang.split('-')[1];

	course.lang = country ? course.lang.split('-')[0] + '-' + course.lang.split('-')[1].toUpperCase() : course.lang;
	course.title = course.title || `${course.course} - ${course.module}`;
	course.pages = []	// course players uses the config to create sidebar navigation
	course.playerTranslations = playerTranslations[course.lang || 'en'];
	course.path = sourcePath;

	//	write player
	player.write(course)
	console.log(`Copy complete: ${sourcePath}`)

})

