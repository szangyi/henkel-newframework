


var API = null;

var SCORM_API      = 'API';     // 1.1 + 1.2 => API,  2004x =>  API_1484_11
var SCORM_TRUE     = 'true';
var SCORM_FALSE    = 'false';
var SCORM_NO_ERROR = '0'; 




//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//
//	API Bootstrap
//
//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
function GetAPI(win) {
	if ((win.parent != null) && (win.parent != win)) API = ScanForAPI(win.parent);
   	if ((API == null) && (win.opener != null)) API = ScanForAPI(win.opener); 
}


var bootstrapTries    = 0;
var bootstrapMaxTries = 500;
function ScanForAPI(win) {
   while ((win[SCORM_API] == null) && (win.parent != null) && (win.parent != win)) {
      bootstrapTries++;
      if (bootstrapTries > bootstrapMaxTries) return null;
      win = win.parent;
   }
   return win[SCORM_API];
} 




//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//
//	SCORM
//
//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

//	Scorm 2004 => 1.2 remap
function remap(element){
	return {
		'cmi.completion_status' : 'cmi.core.lesson_status',		
		'cmi.location' 			: 'cmi.core.lesson_location',
		'cmi.exit'              : 'cmi.core.exit',
		'cmi.session_time'      : 'cmi.core.session_time',
		'adl.nav.request'		: null
	}[element];
}



var SCORM = {
	init: ScormProcessInitialize,
	terminate: ScormProcessTerminate,
	getValue: function(element, checkError){ 

		//	remap to scorm 1.2
		element = remap(element);

		//	ignore unmapable adl requests
		if(element) {
			//	get only takes one param	
			//	return ScormProcessGetValue(element, checkError) 
			var response = ScormProcessGetValue(element);

			//	remap completion_status response
			return response == 'not attempted' ? 'unknown' : response;
		}
	},
	setValue: function(element, value){ 

		//	remap to scorm 1.2		
		element = remap(element);

		//	ignore unmapable adl requests
		if(element){
			return ScormProcessSetValue(element, value) 
		} 
		
		//	the adl request was used to take away content from the user
		//	in scorm 1.2 we try to colse the window instead
		if(value == 'exitAll'){
			setTimeout(function(){
				top.window.close();
			},300);
		}
	},
	time: function(ms){ 
		// return ConvertMilliSecondsIntoSCORM2004Time(ms) 
		return ConvertMilliSecondsIntoSCORMTime(ms) 
	}
}




//Since the Unload handler will be called twice, from both the onunload
//and onbeforeunload events, ensure that we only call Terminate once.
var terminateCalled = false;
//Track whether or not we successfully initialized.
var initialized = false;




function ScormProcessInitialize() {
    var result;
    GetAPI(window);
    
    if (API == null){
        console.log("ERROR - Could not establish a connection with the LMS.\n\nYour results may not be recorded.");
        return;
    }
    
    result = API.LMSInitialize("");
    
    if (result == SCORM_FALSE){
        var errorNumber = API.LMSGetLastError();
        var errorString = API.LMSGetErrorString(errorNumber);
        var diagnostic = API.LMSGetDiagnostic(errorNumber);
        
        var errorDescription = "Number: " + errorNumber + "\nDescription: " + errorString + "\nDiagnostic: " + diagnostic;
        
        console.error("Error - Could not initialize communication with the LMS.\n\nYour results may not be recorded.\n\n" + errorDescription);
        return;
    }
    
    initialized = true;
}


function ScormProcessTerminate(){
    
    var result;
    
    //Don't terminate if we haven't initialized or if we've already terminated
    if (initialized == false || terminateCalled == true){return;}
    
    result = API.LMSFinish("");
    
    terminateCalled = true;
    
    if (result == SCORM_FALSE){
        var errorNumber = API.LMSGetLastError();
        var errorString = API.LMSGetErrorString(errorNumber);
        var diagnostic  = API.LMSGetDiagnostic(errorNumber);
        
        var errorDescription = "Number: " + errorNumber + "\nDescription: " + errorString + "\nDiagnostic: " + diagnostic;
        
        console.error("Error - Could not terminate communication with the LMS.\n\nYour results may not be recorded.\n\n" + errorDescription);
        return;
	}
}


/*
The onload and onunload event handlers are assigned in launchpage.html because more processing needs to 
occur at these times in this example.
*/
//window.onload = ScormProcessInitialize;
//window.onunload = ScormProcessTerminate;
//window.onbeforeunload = ScormProcessTerminate;

//There are situations where a GetValue call is expected to have an error
//and should not alert the user.
function ScormProcessGetValue(element, checkError){
    
    var result;
    
    if (initialized == false || terminateCalled == true){return;}
    
    result = API.LMSGetValue(element);
    
    if (checkError == true && result == ""){
    
        var errorNumber = API.LMSGetLastError();
        
        if (errorNumber != SCORM_NO_ERROR){
            var errorString = API.LMSGetErrorString(errorNumber);
            var diagnostic = API.LMSGetDiagnostic(errorNumber);
            
            var errorDescription = "Number: " + errorNumber + "\nDescription: " + errorString + "\nDiagnostic: " + diagnostic;
            
            console.error("Error - Could not retrieve a value from the LMS.\n\n" + errorDescription);
            return "";
        }
    }
    
    return result;
}

function ScormProcessSetValue(element, value){
   
    var result;
    
    if (initialized == false || terminateCalled == true){return;}
    
    result = API.LMSSetValue(element, value);
    
    if (result == SCORM_FALSE){
        var errorNumber = API.LMSGetLastError();
        var errorString = API.LMSGetErrorString(errorNumber);
        var diagnostic = API.LMSGetDiagnostic(errorNumber);
        
        var errorDescription = "Number: " + errorNumber + "\nDescription: " + errorString + "\nDiagnostic: " + diagnostic;
        
        console.error("Error - Could not store a value in the LMS.\n\nYour results may not be recorded.\n\n" + errorDescription);
        return;
    }
    
}



    function ConvertMilliSecondsIntoSCORM2004Time(intTotalMilliseconds){
	
	    var ScormTime = "";
    	
	    var HundredthsOfASecond;	//decrementing counter - work at the hundreths of a second level because that is all the precision that is required
    	
	    var Seconds;	// 100 hundreths of a seconds
	    var Minutes;	// 60 seconds
	    var Hours;		// 60 minutes
	    var Days;		// 24 hours
	    var Months;		// assumed to be an "average" month (figures a leap year every 4 years) = ((365*4) + 1) / 48 days - 30.4375 days per month
	    var Years;		// assumed to be 12 "average" months
    	
	    var HUNDREDTHS_PER_SECOND = 100;
	    var HUNDREDTHS_PER_MINUTE = HUNDREDTHS_PER_SECOND * 60;
	    var HUNDREDTHS_PER_HOUR   = HUNDREDTHS_PER_MINUTE * 60;
	    var HUNDREDTHS_PER_DAY    = HUNDREDTHS_PER_HOUR * 24;
	    var HUNDREDTHS_PER_MONTH  = HUNDREDTHS_PER_DAY * (((365 * 4) + 1) / 48);
	    var HUNDREDTHS_PER_YEAR   = HUNDREDTHS_PER_MONTH * 12;
    	
	    HundredthsOfASecond = Math.floor(intTotalMilliseconds / 10);
    	
	    Years = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_YEAR);
	    HundredthsOfASecond -= (Years * HUNDREDTHS_PER_YEAR);
    	
	    Months = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_MONTH);
	    HundredthsOfASecond -= (Months * HUNDREDTHS_PER_MONTH);
    	
	    Days = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_DAY);
	    HundredthsOfASecond -= (Days * HUNDREDTHS_PER_DAY);
    	
	    Hours = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_HOUR);
	    HundredthsOfASecond -= (Hours * HUNDREDTHS_PER_HOUR);
    	
	    Minutes = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_MINUTE);
	    HundredthsOfASecond -= (Minutes * HUNDREDTHS_PER_MINUTE);
    	
	    Seconds = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_SECOND);
	    HundredthsOfASecond -= (Seconds * HUNDREDTHS_PER_SECOND);
    	
	    if (Years > 0) {
		    ScormTime += Years + "Y";
	    }
	    if (Months > 0){
		    ScormTime += Months + "M";
	    }
	    if (Days > 0){
		    ScormTime += Days + "D";
	    }
    	
	    //check to see if we have any time before adding the "T"
	    if ((HundredthsOfASecond + Seconds + Minutes + Hours) > 0 ){
    		
		    ScormTime += "T";
    		
		    if (Hours > 0){
			    ScormTime += Hours + "H";
		    }
    		
		    if (Minutes > 0){
			    ScormTime += Minutes + "M";
		    }
    		
		    if ((HundredthsOfASecond + Seconds) > 0){
			    ScormTime += Seconds;
    			
			    if (HundredthsOfASecond > 0){
				    ScormTime += "." + HundredthsOfASecond;
			    }
    			
			    ScormTime += "S";
		    }
    		
	    }
    	
	    if (ScormTime == ""){
		    ScormTime = "0S";
	    }
    	
	    ScormTime = "P" + ScormTime;
    	
	    return ScormTime;
    }

	//SCORM requires time to be formatted in a specific way
    function ConvertMilliSecondsIntoSCORMTime(intTotalMilliseconds, blnIncludeFraction){
	
	    var intHours;
	    var intintMinutes;
	    var intSeconds;
	    var intMilliseconds;
	    var intHundredths;
	    var strCMITimeSpan;
    	
	    if (blnIncludeFraction == null || blnIncludeFraction == undefined){
		    blnIncludeFraction = true;
	    }
    	
	    //extract time parts
	    intMilliseconds = intTotalMilliseconds % 1000;

	    intSeconds = ((intTotalMilliseconds - intMilliseconds) / 1000) % 60;

	    intMinutes = ((intTotalMilliseconds - intMilliseconds - (intSeconds * 1000)) / 60000) % 60;

	    intHours = (intTotalMilliseconds - intMilliseconds - (intSeconds * 1000) - (intMinutes * 60000)) / 3600000;

	    /*
	    deal with exceptional case when content used a huge amount of time and interpreted CMITimstamp 
	    to allow a number of intMinutes and seconds greater than 60 i.e. 9999:99:99.99 instead of 9999:60:60:99
	    note - this case is permissable under SCORM, but will be exceptionally rare
	    */

	    if (intHours == 10000) 
	    {	
		    intHours = 9999;

		    intMinutes = (intTotalMilliseconds - (intHours * 3600000)) / 60000;
		    if (intMinutes == 100) 
		    {
			    intMinutes = 99;
		    }
		    intMinutes = Math.floor(intMinutes);
    		
		    intSeconds = (intTotalMilliseconds - (intHours * 3600000) - (intMinutes * 60000)) / 1000;
		    if (intSeconds == 100) 
		    {
			    intSeconds = 99;
		    }
		    intSeconds = Math.floor(intSeconds);
    		
		    intMilliseconds = (intTotalMilliseconds - (intHours * 3600000) - (intMinutes * 60000) - (intSeconds * 1000));
	    }

	    //drop the extra precision from the milliseconds
	    intHundredths = Math.floor(intMilliseconds / 10);

	    //put in padding 0's and concatinate to get the proper format
	    strCMITimeSpan = ZeroPad(intHours, 4) + ":" + ZeroPad(intMinutes, 2) + ":" + ZeroPad(intSeconds, 2);
    	
	    if (blnIncludeFraction){
		    strCMITimeSpan += "." + intHundredths;
	    }

	    //check for case where total milliseconds is greater than max supported by strCMITimeSpan
	    if (intHours > 9999) 
	    {
		    strCMITimeSpan = "9999:99:99";
    		
		    if (blnIncludeFraction){
			    strCMITimeSpan += ".99";
		    }
	    }

	    return strCMITimeSpan;
    	
    }

    function ZeroPad(intNum, intNumDigits){
 
	    var strTemp;
	    var intLen;
	    var i;
    	
	    strTemp = new String(intNum);
	    intLen = strTemp.length;
    	
	    if (intLen > intNumDigits){
		    strTemp = strTemp.substr(0,intNumDigits);
	    }
	    else{
		    for (i=intLen; i<intNumDigits; i++){
			    strTemp = "0" + strTemp;
		    }
	    }
    	
	    return strTemp;
    }	




