//  --------------------------------------------------------------
//  Translation Stamp
// 
//  This script will replace the placeholder labels of 
//  a crawled course module with the translated text 
//
//  --------------------------------------------------------------
//  IMPORTANT!!!!!!!!
//  This is only an attempt to automate translations 
// 
//  YOU NEED TO MANUALLY CHECK THE RESULT
//  Be sure the CSV is well formatted 
//  Numbers often adds unwanted newlines in export 
// 
//  --------------------------------------------------------------
//  
//  command: node stamp 
//
//  Steps to follow: 
//  1. export the excel data as CSV (Numbers: File > Export To > CSV)
//
//  2. rename the CSV file to translate-[ISO].csv 
//     the ISO being the name of the destination course language 
//     e.g.  ex-MX should be named  translate-ex-MX.csv
//
//  3. copy/move the CSV file to the location of the matching 
//     course module in the translate folder (the one holding 
//     the original translate.csv)
//   
//     IMPORTANT! - Be sure the CSV is well formatted 
//     Numbers often adds unwanted newlines in export  
//
//  4. when all CSV files are in place define the paths to 
//     the courses that should be stamped - e.g.   
//     ./translation/en/course-4.1-bonding/module-001-intro-to-bonding
//
//  5. if the translation course folder contains multiple translations
//     you can specify the ISO(s) in the use array - if empty all 
//     found translations will be stamped   
//     
//  6. specify the location of the first data cells (see below)
// 
//  7. run "node stamp" from the terminal 
// 
//  Note! 
//  To avoid existing course modules to be overwritten the 
//  script will only perform the stamp if the destination 
//  folder does not exist 
// 
//  --------------------------------------------------------------


//  --------------------------------------------------------------
//  Output folder
//  The default output folder is "courses" 
//  You can select a different folder if you e.g. want to 
//  review translations before moving them to courses.
//  --------------------------------------------------------------
const outputFolder = 'translation-test'





//  --------------------------------------------------------------
//  Translation paths (step 4)
//  --------------------------------------------------------------
const paths = [
    "./translation/en/course-6.1-introduction-to-collision-repair/module-001-collision-repair-from-a-to-z",
    "./translation/en/course-6.1-introduction-to-collision-repair/module-002-top-10-damages",
    "./translation/en/course-6.1-introduction-to-collision-repair/module-003-find-the-right-product"
    // "./translation/en/course-4.1-bonding/module-001-intro-to-bonding",
    // "./translation/en/course-4.1-bonding/module-002-the-substrate-challenge",
    // "./translation/en/course-4.1-bonding/module-003-benefits-of-bonding",
    // "./translation/en/course-4.1-bonding/module-004-non-adhesive-technologies",
    // "./translation/en/course-4.1-bonding/module-005-prepare-to-be-amazed",
    // "./translation/en/course-4.1-bonding/module-006-how-to-bond-properly",
];


//  --------------------------------------------------------------
//  Only stamp translations that matches the following ISO
//  if empty all found will be used (step 5)
//  --------------------------------------------------------------
const use = [
    'test'
    // 'pt-BR', 
    // 'es', 
    // 'fr',
    // 'it'
    
]


//  --------------------------------------------------------------
//  Cell Location (step 6)
//  Column/row location based on excel sheet cells
//  
//  The returned translation document often does not match 
//  the original - why we need to define the location of 
//  the first entry (page, label, translation)
//
//  --------------------------------------------------------------
//  Example:
//  let page        = 'A2'  // first page001 cell 
//  let label       = 'B2'  // first LABEL_1 cell
//  let translation = 'D2'  // first translation cell
//  --------------------------------------------------------------
const page        = 'A2' 
const label       = 'B2' 
const master      = 'C2' 
const translation = 'D2' 










//  --------------------------------------------------------------
//  Eriksen: 
//  No need to edit anything below... unless it fails   
//  Feel free to add niceness - but KISS and don't add 
//  dependencies :-)
//  --------------------------------------------------------------
const fs = require('fs');
const folder = require('./source/node/folder.js');


const warn = {
    empty: [],
    missing: [],
    skipped: [],
    config: [],
    translations: []
}

// --------------------------------------------------------------
// convert cell locations to index
// --------------------------------------------------------------
const pageArr = findCell(page)
const labelArr = findCell(label)
const masterArr = findCell(master)
const translationArr = findCell(translation)

// array to hold missing config entries 
const configArr = []

// row mismatch error
if(pageArr[1] != labelArr[1] || pageArr[1] != translationArr[1]) {
    throw new Error('Data locations does not share the same row!\n')
}



// --------------------------------------------------------------
// find translation CSV files
// --------------------------------------------------------------
const csvFileList = paths.map(path => {
    if(fs.existsSync(path)) {
        return folder
            .files(path)
            .filter(file => file.includes('.csv'))
            .filter(file => file.includes('translate-'))
            .filter(file => {
                const name = getFileName(file)
                const iso = getISO(name)
                return use.map(iso => iso.toLocaleLowerCase()).includes(iso.toLocaleLowerCase()) || !use.length
            })
    } else {
        warn.missing.push(`Path does not exist: "${path}"`)
    }
}).flat().filter(exist => exist)

if(csvFileList.length == 0) {
    warn.empty.push(`Sorry! there was no matching translations"`)
}




// --------------------------------------------------------------
// Convert csv data to object arrays
// --------------------------------------------------------------
const translationData = csvFileList.map(path => {

    // read csv file
    const csv  = fs.readFileSync(path, 'utf-8')

    // convert csv to multidimensional array 
    const rowIndex = pageArr[1]
    const data = csvToArray(csv)
        .filter((row, index) => index >= rowIndex)
        .map(row => ({
            page: row[pageArr[0]],
            label: row[labelArr[0]], 
            master: row[masterArr[0]], 
            translation: (row[translationArr[0]] || '')
        }))

    // quick data format test sample  
    const test = data[0]
    if(test.page.includes('page') && test.label.includes('LABEL')) {
        const iso = getISO(getFileName(path))
        return {
            path,
            iso,
            data
        }
    } else {
        throw new Error('Cell data does not seem to match pageXYZ or LABEL_XY format\n')
    }
})




// --------------------------------------------------------------
// Stampede
// --------------------------------------------------------------
translationData.forEach(({ path, data, iso })=> {
    const fromPath = path.replace(getFileName(path),'')
    const toPath   = `./${outputFolder}/${iso}/${fromPath.split('/').splice(3).join('/')}`
    const exists   = fs.existsSync(toPath)
    
    if(!exists) {
        // copy content to destination (if it does not exist) 
        folder.copy(fromPath, toPath, '_')
    } else {
        warn.skipped.push(`Skipped: "${toPath}"`)
    }   

    // remove CSV files from course folder
    folder.files(toPath)
        .filter(file => file.includes('.csv'))
        .forEach(path => fs.unlinkSync(path ))

    
    // avoid overwrite - handle this manually  
    if(exists) return;
    

    // --------------------------------------------------------------    
    // Config 
    // --------------------------------------------------------------
    const configPath = `${toPath}config.js`
    const configWarn = { path: configPath, data: []} 
    const configText = fs.readFileSync(configPath, "utf-8")
    const { config } = require(configPath)
    
    data
        .filter(entry => entry.page.match(/config/gi) 
            || entry.page.match(/menu/gi)
            || entry.page.match(/navigation/gi)            
        ) 
        .forEach(({ label, translation }) => {
            const match = config.find(item => item.url == label)
            if(translation && match) {
                match.title = translation
            } else {
                configWarn.data.push(`${label}: ${match.title}`)
            }
        })
    if(configWarn.data.length) warn.config.push(configWarn)            

    // nice print config (dense)
    const configPrint = config.map(item => JSON.stringify(item));  
    fs.writeFileSync(
        configPath,
        configText.replace(/exports.config.*/gis,`exports.config = [\n  ${configPrint.join(",\n  ")}\n]`)
    )  
    

    // --------------------------------------------------------------    
    // Pages
    // --------------------------------------------------------------    
    const pageWarn = { path: toPath, data: []} 
    

    let pages = data
        // find pages
        .filter(entry => entry.page.match(/page/gi))  
        // geoup translations per page 
        .reduce((acc, { page, label, translation, master }) => {
            acc[page] = acc[page] || []
            acc[page].push({ label, translation, master}) 
            return acc
        }, {})
        
    Object.entries(pages)        
        .forEach(([ page, translations]) => {
            
            const htmlPath = `${toPath}${page}/index.html`
            const htmlText = fs.readFileSync(htmlPath, "utf-8")
            const bodyText = htmlText.match(/<body(.*?)>(.*?)<\/body>/gis)[0];

            let htmlTextReplace = htmlText;
            let bodyTextReplace = bodyText;

            // language 
            // note special handling of invalid us-DIST iso
            let lang = htmlText.match(/<html lang=\"(.*?)\"/gis)[0];
            lang = lang.toLowerCase() == 'us-dist' ? 'en-US' : lang
            htmlTextReplace = htmlTextReplace.replace(lang, `<html lang="${iso}"`)
            

            // body 
            translations.forEach(({ label, translation, master }) => {
                if(translation) {
                    bodyTextReplace = bodyTextReplace.replace(new RegExp(`{{${label}}}`, 'gims'), translation.trim());
                } else {
                    bodyTextReplace = bodyTextReplace.replace(new RegExp(`{{${label}}}`, 'gims'), master.trim());
                    pageWarn.data.push(`${page}: ${label}`)
                }
            })
            
            htmlTextReplace = htmlTextReplace.replace(bodyText, bodyTextReplace)
            fs.writeFileSync(htmlPath, htmlTextReplace);
        })
    
    if(pageWarn.data.length) warn.translations.push(pageWarn)               
})



// --------------------------------------------------------------
// Build Config Data
// --------------------------------------------------------------
const { config: build } = require('./config.js')
translationData.forEach(({ path, iso })=> {
    


    let configPath = path
        .split('translation/')[1]
        .split('/translate')[0]
        .split('/')
    let configISO  = configPath.shift()
    configPath = configPath.join('/')


    

    const existMatch = build.find(({ lang, source }) => {
        return source == configPath && lang == iso
    })

    if(!existMatch) {
        const configMatch = build.find(({ lang, source }) => {
            return source == configPath && lang == configISO
        })

        if(configMatch) {
            configArr.push({
                ...configMatch,
                lang: iso,
                build: false
            })
        }
    }
})






warn.empty.forEach(msg => {
    console.log('\n--------------------------------------------------------------------------------')
    console.log(msg)
    console.log('--------------------------------------------------------------------------------')
})

if(warn.missing.length){
    console.log('\n--------------------------------------------------------------------------------')
    console.log(`💥 Sorry! - we had problems finding ${warn.missing.length} translarion folders:`)
    console.log('--------------------------------------------------------------------------------')
    warn.missing.forEach(msg => {
        console.log(msg)
    })
}

if(warn.skipped.length){
    console.log('\n--------------------------------------------------------------------------------')
    console.log('The following translations were skipped because the folder allready exists.')
    console.log('To prevent content from being overwritten you must manually delete the folder(s)')
    console.log('then run this script again') 
    console.log('--------------------------------------------------------------------------------')
    warn.skipped.forEach(msg => {
        console.log(msg)
    })
}

if(warn.config.length){
    console.log('\n--------------------------------------------------------------------------------')
    console.log('Missing Config Translations')
    console.log('You need to provide translations for the following config entries:')
    console.log('--------------------------------------------------------------------------------')
    warn.config.forEach(item => {
        console.log('Path: ' + item.path)
        console.log('- ' + item.data.join('\n- '))
        console.log('\n')
    })
}

if(warn.translations.length){
    console.log('\n--------------------------------------------------------------------------------')
    console.log('Missing Page Translations')
    console.log('You need to provide translations for the following page entries:')
    console.log('--------------------------------------------------------------------------------')
    warn.translations.forEach(item => {
        console.log('Path: ' + item.path)
        console.log('- ' + item.data.join('\n- '))
        console.log('\n')
    })
}


if(configArr.length){
    console.log('\n--------------------------------------------------------------------------------')
    console.log('Build Config')
    console.log('Please add the following entries to the build ./config.js (in the root folder):')
    console.log('... and please try to follow the existing structure :-)')
    console.log('--------------------------------------------------------------------------------')
    configArr.forEach(item => {
        console.log('\n//  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––')
        console.log(`//  ${item.no}. ${item.title} - ${item.lang}`)
        console.log('//  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––')
        console.log(item,',')

    })
}



function getFileName(str){
    return str.match(/translate-(.*)/gis)[0]
}

function getISO(str){
    return str
        .replace(/translate-/gi,'')
        .replace(/.csv/gi,'')
}

function findCell(str) {
    let arr = []
    let alpha = 'ABCDEFGHIJKLMNOPOQRSTUVWXYZ'.split('')
    for(let char of str.toUpperCase()) {
        arr.push(parseInt(alpha.includes(char) ? alpha.indexOf(char) : char - 1))
    }
    return arr
}




function csvToArray(str) {
    let prev = '', 
        row = [''], 
        ret = [row],
        i = 0, 
        r = 0, 
        s = !0, 
        char
    ;
    for (char of str) {
        if ('"' === char) {
            if (s && char === prev) row[i] += char;
            s = !s;
        } 
        else if (';' === char && s)  char = row[++i] = '';
        //else if (',' === char && s)  char = row[++i] = '';
        else if ('\t' === char && s) char = row[++i] = '';
        else if ('\n' === char && s) {
            if ('\r' === prev) row[i] = row[i].slice(0, -1);
            row = ret[++r] = [char = '']; i = 0;
        } 
        else row[i] += char;
        prev = char;
    }
    return ret;
};
