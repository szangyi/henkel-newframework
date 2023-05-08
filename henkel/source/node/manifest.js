const fs = require('fs');
const folder = require('./folder.js');


//  Reads
//  https://blog.commlabindia.com/elearning-development/create-manifest-file-for-scorm
//
exports.write = function(package) {


    const NAME_SPACE = 'com.henkel';
    /*

        package = {
            course:  'course name',
            module:  'module name'
            version: '1.0.0',
            resources: [],
            path:    './build/course name/module name/'
        }


    */


	//  Identifier
	//  this is used to make sure that your course does not get mixed up with the
    //  other courses if they have similar names.
    const identifier = `${NAME_SPACE}.${dottify(package.course)}.${dottify(package.module)}.v${package.version || '1.0.0'}`

    function dottify(string) {
        return string.toLowerCase().replace(/\.|\ |\_/g, '.')
    }

	//  Organizations
	//  here you will just need to make organizations as the default point
	//  as we generally have single ones.
	const organization = `${NAME_SPACE}`;

	//  Title
	//  name of the eLearning course
    const title = `${package.course} - ${ package.module}`;

	//  Static
    const completionSetByContent = true;
    const objectiveSetByContent = false;
    const index = 'resources/index.html';

    //  Resources
    const resources = package.resources
        .filter(path => path != index)           //  ignore index
        .map(file => `<file href="${file}" />`) //  remove course path
        .join('\n            ')                 //  join to remove comma



//	------------------------------------
//  2004 Manifest 
//	------------------------------------       
if(package.scorm != '1.2'){ 
    //  Write XML
    //  (no whitespace or line breaks before declaration)
    fs.writeFileSync(`${package.path}/imsmanifest.xml`,`<?xml version="1.0" standalone="no" ?>
<manifest identifier="${identifier}"
    version="1" xmlns="http://www.imsglobal.org/xsd/imscp_v1p1"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_v1p3"
    xmlns:adlseq="http://www.adlnet.org/xsd/adlseq_v1p3"
    xmlns:adlnav="http://www.adlnet.org/xsd/adlnav_v1p3"
    xmlns:imsss="http://www.imsglobal.org/xsd/imsss"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imscp_v1p1 imscp_v1p1.xsd
        http://www.adlnet.org/xsd/adlcp_v1p3 adlcp_v1p3.xsd
        http://www.adlnet.org/xsd/adlseq_v1p3 adlseq_v1p3.xsd
        http://www.adlnet.org/xsd/adlnav_v1p3 adlnav_v1p3.xsd
        http://www.imsglobal.org/xsd/imsss imsss_v1p0.xsd
">

    <metadata>
        <schema>ADL SCORM</schema>
        <schemaversion>2004 3rd Edition</schemaversion>
    </metadata>

    <organizations default="${organization}">
        <organization identifier="${organization}" adlseq:objectivesGlobalToSystem="false">
            <title>${package.course}</title>
            <item identifier="item.01" identifierref="resource.01">
                <title>${package.module}</title>
                <imsss:sequencing>
                    <imsss:deliveryControls completionSetByContent="${completionSetByContent}" objectiveSetByContent="${objectiveSetByContent}" />
                </imsss:sequencing>
            </item>
            <imsss:sequencing>
                <imsss:controlMode choice="true" flow="true" />
            </imsss:sequencing>
        </organization>
    </organizations>

    <resources>
        <resource identifier="resource.01" type="webcontent" adlcp:scormType="sco" href="${index}">
            ${resources}
        </resource>
    </resources>
</manifest>
`);
}
//	------------------------------------
//  1.2 Manifest 
//	------------------------------------       
else {
    fs.writeFileSync(`${package.path}/imsmanifest.xml`,`<?xml version="1.0" standalone="no" ?>
<manifest identifier="${identifier}" version="1" 
    xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
    xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd
                        http://www.imsglobal.org/xsd/imsmd_rootv1p2p1 imsmd_rootv1p2p1.xsd
                        http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd">
    <metadata>
        <schema>ADL SCORM</schema>
        <schemaversion>1.2</schemaversion>
    </metadata>
    <organizations default="${organization}">
        <organization identifier="${organization}">
            <title>${package.course}</title>
            <item identifier="item.01" identifierref="resource.01">
                <title>${package.module}</title>
            </item>
        </organization>
    </organizations>
    <resources>
        <resource identifier="resource.01" type="webcontent" adlcp:scormType="sco" href="${index}">
            ${resources}
        </resource>
    </resources>
</manifest>    
    `);
}







};
