//  --------------------------------------------------------------
//  Crawl 
// 
//  This file creates a translation copy of one or more modules 
// 
//  1. add the paths to the modules
//  2. run "node crawl" in the command line
//  3. copy and translate.csv can be found in the translate folder 
//  4. to create excelfile(s) for the translaters open the csv 
//     file using excel or numbers - then save   
//  
//  Please note! 
//  The copy is based on the module config.js why only active
//  pages are copied (also ignoring underscored files)
// 
//  The copy pages are renamed pageXYZ based on the order in 
//  config.js and a new matchinbg config.js is produced  
// 
//  To reverse the process and stamp in translations 
//  use translate.js
// 
//  --------------------------------------------------------------
//
//  Module paths to be translated:
// 
//  --------------------------------------------------------------
const paths = [
	"./courses/en/course-6.1-introduction-to-collision-repair/module-001-collision-repair-from-a-to-z",
	"./courses/en/course-6.1-introduction-to-collision-repair/module-002-top-10-damages",
	"./courses/en/course-6.1-introduction-to-collision-repair/module-003-find-the-right-product"
	// "./courses/en/course-4.1-bonding/module-001-intro-to-bonding",
	// "./courses/en/course-4.1-bonding/module-002-the-substrate-challenge",
	// "./courses/en/course-4.1-bonding/module-003-benefits-of-bonding",
	// "./courses/en/course-4.1-bonding/module-004-non-adhesive-technologies",
	// "./courses/en/course-4.1-bonding/module-005-prepare-to-be-amazed",
	// "./courses/en/course-4.1-bonding/module-006-how-to-bond-properly",
];














//  --------------------------------------------------------------
//  Eriksen: 
//  No need to edit anything below... unless it fails   
//  Feel free to add niceness - but KISS and don't add 
//  dependencies :-)
//  --------------------------------------------------------------
const fs = require("fs");
const folder = require("./source/node/folder.js");




paths.forEach((path) => {
	const sourcePath = path;
	const destPath = sourcePath.replace("courses", "translation");
	const configPath = `${sourcePath}/config.js`;



	let { config } = require(configPath);


	//	------------------------------------
	//	create/re-create build folder
	//  (delete subfolders to keep old csv)
	//	------------------------------------
	folder.subFolders(destPath)
		.forEach(folder.delete)
	folder.create(destPath);

	// copy player index.html
	fs.copyFileSync(`${sourcePath}/index.html`, `${destPath}/index.html`);




	//	------------------------------------
	//	copy shared resources
	//	------------------------------------
	folder.copy(sourcePath + "/shared", destPath + "/shared", "_");


	//	------------------------------------
	//  copy page resources
	//  we also 'trim' page names e.g: page001, page002, page004 --> page001, page002, page003
	//	------------------------------------
	config.forEach((page, index) => {
		const pageNo = index + 1;
		const pageName = "page" + ("" + (pageNo)).padStart(3, 0)
		const pagePath = `${sourcePath}/${page.url}`;
		folder.copy(pagePath, `${destPath}/${pageName}`, "_");
	});


	//	------------------------------------
	//	update and copy config
	//  we also 'trim' page names e.g: page001, page002, page004 --> page001, page002, page003
	//	------------------------------------

	// update config
	let newConfig = config.map((x, i) => ({
		...x,
		url: "page" + ("" + (i + 1)).padStart(3, 0),
	}));

	// prettify and output new config.js
	stringConfig = newConfig.map((x) => JSON.stringify(x));
	fs.writeFileSync(
		destPath + "/config.js",
`
var exports = exports || {}
exports.config = [\n\t${stringConfig.join(",\n\t")}\n]
`
	);

	const translation = {
		path,
		lang: "en",
		pages: [],
	};

	// let pageFolders = folder.subFolders(path).filter(i=>-1 != i.indexOf('page'));
	let configFolders = newConfig.map((x) => destPath + "/" + x.url);

	// Crawl pages
	configFolders.forEach(async (path) => {
		const parts = path.split("/");
		const page = parts[parts.length - 1];

		
		//  read html file
		let html;
		try {
			html = fs.readFileSync(`${path}/index.html`, "utf-8");
		} catch (err) {
			return;
			// Here you get the error when the file was not found,
			// but you also get any other error
		}

		
		// body tag 
		const body = html.match(/<body(.*?)>(.*?)<\/body>/gims)[0]



		const labelMap = []
		const stripMap = []
		let stripIndex = 0
		let labelIndex = 0
		

		//	------------------------------------
		// tags to be excluded 
		//	------------------------------------
		const stripTags = [
			...(body.match(/<!--(.*?)-->/gims) || []),
			...(body.match(/<script>(.*?)<\/script>/gims) || []),
			...(body.match(/<style>(.*?)<\/style>/gims) || [])
		];
		
		
		//	------------------------------------
		// 	replace strip tags with <strip>x</strip>
		// 	placeholders (will be re-replaced)
		// 
		//	note! we add '<' to the end to preserve 
		//  the last </body> tag when parsed using 
		//  a terminated start tag based pattern 
		//  '<TAG...> Text.... <'
		//	------------------------------------
		let bodyReplace = stripTags
			.reduce((html, tag) => {
				stripMap[stripIndex++] = tag
				return html.replace(tag, `<strip>${stripIndex}</strip>`)
			}, body + '<')
		
		

		//	------------------------------------
		//	------------------------------------
		bodyReplace = (bodyReplace	
			// split on `<TAG...> Text... <` pattern
			.match(/<(.*?)>(.*?)(?=<)/gims) || [])
			.map(string => {

				// ignore strip tags
				if(string.match(/<strip>(.*?)/gims)) { return string }
				
				// find tag and text values
				let tag  = string.match(/<(.*?)>/gims)[0]
				let text = string.replace(tag, '').trim()
				// note! the text remains unsanitized until
				// added to the csv - this is to keep match
				// for label replacement


				// avoid text replace inside start tag
				let noTagString = string.replace(tag, '');

				// ignore non translatable text 
				// or text without letters (a-zA-Z)
				if(!text || !/[a-zA-z]/gims.test(text)) { return string }

				// matching label (text) found
				let match = labelMap.find(item => item.text == text)
				
				// return existing label
				if(match) {
					return tag + noTagString.replace(text, `{{${match.label}}}`)				
				}
				
				// create new label 
				let label = `LABEL_${++labelIndex}` 
				labelMap.push({ label, text })
				return tag + noTagString.replace(text, `{{${label}}}`)
		
			}).join('')
	

		//	------------------------------------
		// 	re-replace strip tags	
		//	------------------------------------
		bodyReplace = (bodyReplace
			.match(/<strip>(.*?)<\/strip>/gims) || [])
			.reduce((html, stripTag) => {
				const index = parseInt(stripTag.match(/(?<=>)(.*?)(?=<\/)/))
				return html.replace(stripTag, stripMap[index - 1])
			}, bodyReplace)		



		//	------------------------------------
		// 	replace body and write new html to file
		//	------------------------------------
		html = html.replace(body, bodyReplace);
		fs.writeFileSync(`${path}/index.html`, html);




		//	------------------------------------
		// 	update translations
		//	------------------------------------
		labelMap.forEach(({ label, text }) => {
			
			// sanitize translation text 
			text = text
				.replace(/(\r\n)+|\r+|\n+|\t+/gims, ' ')
				.replace(/\ {2,}/gis, ' ')
				.replace(/\t/gis, '')

				

			// update translation data
			translation.pages.push({
				page,
				label,
				text,
				translation: ''
			});
		})

	});



	//	------------------------------------
	//	Create CSV file with page translations
	//  base and config (thumb) translations base
	//	------------------------------------

	// Page translation bases
	let text = translation.pages.reduce((acc, { page, label, text }) => {
		// wrap in quotes to prevent csv delimeters e.g ; from breaking column
		// position - to keep text quotes we replace those with ""
		acc += `${page}\t${label}\t"${text.replace(/"/g,'""')}"\t\n`;
		
		return acc;
	}, `\t\t${path.replace(/\./,'https://henkel.franklyone.com')}\nPage\tLabel\tEnglish\tTranslation\n`);


	// Config/thumb translation bases
	text = newConfig.reduce((acc, { url, title }) => {
		acc += `menu\t${url}\t"${title.replace(/"/g,'""')}"\t\n`;
		return acc;
	}, text);


	// Write CSV
	fs.writeFileSync(`${destPath}/translate.csv`, text);
});










