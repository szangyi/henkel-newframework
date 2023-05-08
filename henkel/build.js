//  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//	Dependencies
//  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const fs  = require('fs');
const { config, playerTranslations } = require('./config.js');
const folder = require('./source/node/folder.js');
const manifest = require('./source/node/manifest.js');
const player = require('./source/node/player.js');
let zipTasks = [];




config
	.filter(build => build.build)
    .forEach(build => {
		const scormPath  = build.scorm == '1.2' ? './source/scorm/1.2' :  './source/scorm/2004.3';

        const buildPath = `./build/${build.lang}/${build.course}/${build.module}`;
		const resourcePath = `${buildPath}/resources`;

		const sourcePath = `./courses/${build.lang}/${build.source}`;
		const sharedPath = `${sourcePath}/shared`;
		const configPath = `${sourcePath}/config.js`;

        const { config } = require(configPath);

		
		//	------------------------------------
		//	create/re-create build folder
		//	------------------------------------
		folder.delete(buildPath);
		folder.create(buildPath);
        

		//	------------------------------------
		//	copy shared resources
		//	------------------------------------
		folder.copy(sharedPath, `${resourcePath}/shared`, '_')


		//	------------------------------------
		//	copy page resources
		//	------------------------------------
		config.forEach((page, index) => {
			const pageNo = index + 1;
			const pageName = 'page' + ('000' + pageNo).substr((pageNo + '').length);
			const pagePath = `${sourcePath}/${page.url}`;
			folder.copy(pagePath, `${resourcePath}/${pageName}`, '_')


			//
			//	HTML  
			//	
            let html = fs.readFileSync(`${resourcePath}/${pageName}/index.html`, 'utf-8');
			let htmlMatch = html.match(/<html(.*?)>/gis)[0];
			html = html.replace(new RegExp(htmlMatch), `<html lang="${build.lang}" class="${build.brand}" data-version="${build.css || ''}">`)
			fs.writeFileSync(`${resourcePath}/${pageName}/index.html`, html);            

		});


		
		
		//	------------------------------------
		//	add properties to build
		//	------------------------------------
		build.pages = config;
		build.path = buildPath;
		build.resources = folder.files(resourcePath).map(path => path.substr(buildPath.length + 1));

				
		build.playerTranslations = playerTranslations[build.lang || 'en'];

		

		//	------------------------------------
		//	create build scorm player
		//	------------------------------------
		player.write(build)

		//	------------------------------------		
		//	copy scorm files
		//	------------------------------------
		folder.copy(scormPath, buildPath);


		//	------------------------------------
		//	copy build source scorm driver to shared resources (replace)
		//	note! if set to scorm 1.2 the scormdriver performs a remap
		// 	to scorm 2004 cmi values - allowing a unified player.js
		//	------------------------------------
		const oldDriverPath = `${buildPath}/scormdriver.js`;
		const newDriverPath = `${resourcePath}/shared/scormdriver.js`;

		fs.rename(oldDriverPath, newDriverPath, function(err) { if (err) throw err; })



		//	------------------------------------
		//	write manifest
		//	------------------------------------
		manifest.write(build)        


		console.log(`Build Copy Complete: SCORM ${build.scorm} - ${buildPath}`);


		//	------------------------------------
		//	add to zip queue
		//	------------------------------------
		zipTasks.push(buildPath);
	
    });




	//	------------------------------------
	//	zip scorm packages
	//	
	//	to avoid corrupted zip files zipping
	//	is handled one file at a time 
	//	------------------------------------
	//	run zip-folder dependency from a global install
	//
	//  terminal commands to detect and remove junk from zip
	//  list zip content:       unzip -vl archive.zip
	//  remove from zip :       zip -d archive.zip "*/*.DS_Store"	
	let zip;
	try { zip =  require('/usr/local/lib/node_modules/zip-folder'); }
	catch(err) {
		console.log(`\n⚠️  zip-folder wasn't found\n   Run this command to install and retry...`)
		console.log(`   sudo npm i -g zip-folder; \n\n;`)
	}
	if(zip) {
		function zipTask(){
			let zipPath = 	zipTasks.shift();
			try { fs.unlinkSync(`${zipPath}.zip`) } catch(err ) {}				
			zip(zipPath, `${zipPath}.zip`, err => {
				console.log(`Build Zip Complete: ${zipPath}`);
				if(!err && zipTasks.length) { zipTask(); } 
				else if(!err){ console.log(`Build Complete`); }
			})
		}
		zipTask();
	}