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
//  SCORM Driver
//
//  https://scorm.com/scorm-explained/technical-scorm/run-time/run-time-reference/
//
//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

/*

Initialize( “” )    : bool – Begins a communication session with the LMS.
Terminate( “” )     : bool – Ends a communication session with the LMS.
GetValue( element   : CMIElement ) : string – Retrieves a value from the LMS.
SetValue( element   : CMIElement, value : string) : string – Saves a value to the LMS.
Commit( “” )        : bool – Indicates to the LMS that all data should be persisted (not required).

GetLastError()      : CMIErrorCode – Returns the error code that resulted from the last API call.
GetErrorString( errorCode : CMIErrorCode )  : string – Returns a short string describing the specified error code.
GetDiagnostic( errorCode : CMIErrorCode )   : string – Returns detailed information about the last error that occurred.

*/

//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//
//	API variables/constants
//
//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var API = null;
var SCORM_API = 'API_1484_11';
var SCORM_TRUE = 'true';
var SCORM_FALSE = 'false';
var SCORM_NO_ERROR = '0';

//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//
//	API Bootstrap
//
//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
function GetAPI(win) {
	if (win.parent != null && win.parent != win) API = ScanForAPI(win.parent);
	if (API == null && win.opener != null) API = ScanForAPI(win.opener);
}

var bootstrapTries = 0;
var bootstrapMaxTries = 500;
function ScanForAPI(win) {
	while (win[SCORM_API] == null && win.parent != null && win.parent != win) {
		bootstrapTries++;
		if (bootstrapTries > bootstrapMaxTries) return null;
		win = win.parent;
	}
	return win[SCORM_API];
}

//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//
//	SCORM
//  Custom object used internally by course players and content
//
//	––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var SCORM = {
	init: ScormProcessInitialize,
	terminate: ScormProcessTerminate,
	getValue: function(element, checkError) {
		return ScormProcessGetValue(element, checkError);
	},
	setValue: function(element, value) {
		return ScormProcessSetValue(element, value);
	},
	time: function(ms) {
		return ConvertMilliSecondsIntoSCORM2004Time(ms);
    },
    onError: function(callback){
        SCORM.addEventListener('SCORM.error', function(event) { callback(event.detail) })
	},

	dispatchEvent: function(event){ dispatchEvent(event) }
};

//  Since the Unload handler will be called twice, from both the onunload
//  and onbeforeunload events, ensure that we only call Terminate once.
var terminateCalled = false;

//  Track whether or not we successfully initialized.
var initialized = false;

function ScormProcessInitialize() {
    //  search for api
	GetAPI(window);

    //  api not found
	if (API == null) {
        SCORM.dispatchEvent(new CustomEvent('SCORM.error',{
            detail: {
                number: null,
                string: null,
                diagnostic: null,
                message: 'Could not establish a connection with the LMS.\n\nYour results may not be recorded'
            }
        }));
		return;
	}

    //  initialize api
    var result = API.Initialize('');
	if (result == SCORM_FALSE) {
		var errorNumber = API.GetLastError();
		var errorString = API.GetErrorString(errorNumber);
		var diagnostic = API.GetDiagnostic(errorNumber);
		var errorDescription = 'Number: ' + errorNumber + '\nDescription: ' + errorString + '\nDiagnostic: ' + diagnostic;
        SCORM.dispatchEvent(new CustomEvent('SCORM.Error',{
            detail: {
                number: errorNumber,
                string: errorString,
                diagnostic: diagnostic,
                message: 'Error - Could not initialize communication with the LMS.\n\nYour results may not be recorded.\n\n' + errorDescription
            }
        }));
		return;
	}

	initialized = true;
}

function ScormProcessTerminate() {

    //  do not terminate if we haven't initialized or if we've already terminated
	if (initialized == false || terminateCalled == true) {
		return;
	}

	var result = API.Terminate('');
	terminateCalled = true;

	if (result == SCORM_FALSE) {
		var errorNumber = API.GetLastError();
		var errorString = API.GetErrorString(errorNumber);
		var diagnostic = API.GetDiagnostic(errorNumber);
        var errorDescription = 'Number: ' + errorNumber + '\nDescription: ' + errorString + '\nDiagnostic: ' + diagnostic;
        SCORM.dispatchEvent(new CustomEvent('SCORM.Error',{
            detail: {
                number: errorNumber,
                string: errorString,
                diagnostic: diagnostic,
                message: 'Error - Could not terminate communication with the LMS.\n\nYour results may not be recorded.\n\n' + errorDescription
            }
        }));
		return;
	}
}

//  The onload and onunload event handlers are assigned in launchpage.html because more
//  processing needs to occur at these times in this example.
//
//  window.onload = ScormProcessInitialize;
//  window.onunload = ScormProcessTerminate;
//  window.onbeforeunload = ScormProcessTerminate;

//  There are situations where a GetValue call is expected to have an error
//  and should not alert the user.
function ScormProcessGetValue(element, checkError) {
	if (initialized == false || terminateCalled == true) {
		return;
	}
	var result = API.GetValue(element);

	if (checkError == true && result == '') {
		var errorNumber = API.GetLastError();
		if (errorNumber != SCORM_NO_ERROR) {
			var errorString = API.GetErrorString(errorNumber);
			var diagnostic = API.GetDiagnostic(errorNumber);
            var errorDescription ='Number: ' + errorNumber + '\nDescription: ' + errorString + '\nDiagnostic: ' + diagnostic;
            SCORM.dispatchEvent(new CustomEvent('SCORM.Error',{
                detail: {
                    number: errorNumber,
                    string: errorString,
                    diagnostic: diagnostic,
                    message: 'Error - Could not retrieve a value from the LMS.\n\n' + errorDescription
                }
            }));
			return '';
		}
	}

	return result;
}

function ScormProcessSetValue(element, value) {

	if (initialized == false || terminateCalled == true) {
		return;
	}

	var result = API.SetValue(element, value);

	if (result == SCORM_FALSE) {
		var errorNumber = API.GetLastError();
		var errorString = API.GetErrorString(errorNumber);
		var diagnostic = API.GetDiagnostic(errorNumber);
        var errorDescription ='Number: ' + errorNumber + '\nDescription: ' + errorString + '\nDiagnostic: ' + diagnostic;
        SCORM.dispatchEvent(new CustomEvent('SCORM.Error',{
            detail: {
                number: errorNumber,
                string: errorString,
                diagnostic: diagnostic,
                message: 'Error - Could not store a value in the LMS.\n\nYour results may not be recorded.\n\n' + errorDescription
            }
        }));
		return;
	}
}


//  SCORM uses a special timestamp format to keep track of
//  launch, progress etc.  –  P50Y2M29DT23H35M43.9S
function ConvertMilliSecondsIntoSCORM2004Time(intTotalMilliseconds) {
	var ScormTime = '';

	var HundredthsOfASecond; //decrementing counter - work at the hundreths of a second level because that is all the precision that is required

	var Seconds; // 100 hundreths of a seconds
	var Minutes; // 60 seconds
	var Hours; // 60 minutes
	var Days; // 24 hours
	var Months; // assumed to be an "average" month (figures a leap year every 4 years) = ((365*4) + 1) / 48 days - 30.4375 days per month
	var Years; // assumed to be 12 "average" months

	var HUNDREDTHS_PER_SECOND = 100;
	var HUNDREDTHS_PER_MINUTE = HUNDREDTHS_PER_SECOND * 60;
	var HUNDREDTHS_PER_HOUR = HUNDREDTHS_PER_MINUTE * 60;
	var HUNDREDTHS_PER_DAY = HUNDREDTHS_PER_HOUR * 24;
	var HUNDREDTHS_PER_MONTH = HUNDREDTHS_PER_DAY * ((365 * 4 + 1) / 48);
	var HUNDREDTHS_PER_YEAR = HUNDREDTHS_PER_MONTH * 12;

	HundredthsOfASecond = Math.floor(intTotalMilliseconds / 10);

	Years = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_YEAR);
	HundredthsOfASecond -= Years * HUNDREDTHS_PER_YEAR;

	Months = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_MONTH);
	HundredthsOfASecond -= Months * HUNDREDTHS_PER_MONTH;

	Days = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_DAY);
	HundredthsOfASecond -= Days * HUNDREDTHS_PER_DAY;

	Hours = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_HOUR);
	HundredthsOfASecond -= Hours * HUNDREDTHS_PER_HOUR;

	Minutes = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_MINUTE);
	HundredthsOfASecond -= Minutes * HUNDREDTHS_PER_MINUTE;

	Seconds = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_SECOND);
	HundredthsOfASecond -= Seconds * HUNDREDTHS_PER_SECOND;

	if (Years > 0) { ScormTime += Years + 'Y'; }
	if (Months > 0) { ScormTime += Months + 'M'; }
	if (Days > 0) { ScormTime += Days + 'D'; }

	//check to see if we have any time before adding the "T"
	if (HundredthsOfASecond + Seconds + Minutes + Hours > 0) {
		ScormTime += 'T';

		if (Hours > 0) { ScormTime += Hours + 'H'; }
		if (Minutes > 0) { ScormTime += Minutes + 'M'; }
		if (HundredthsOfASecond + Seconds > 0) {
			ScormTime += Seconds;
			if (HundredthsOfASecond > 0) {
				ScormTime += '.' + HundredthsOfASecond;
			}
			ScormTime += 'S';
		}
	}

	if (ScormTime == '') { ScormTime = '0S'; }

	ScormTime = 'P' + ScormTime;

	return ScormTime;
}


//  CustomEvent polyfill for IE9+
(function() {
	if (typeof window.CustomEvent === 'function') return false;
	function CustomEvent(event, params) {
		params = params || { bubbles: false, cancelable: false, detail: null };
		var evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(
			event,
			params.bubbles,
			params.cancelable,
			params.detail
		);
		return evt;
	}
	window.CustomEvent = CustomEvent;
})();