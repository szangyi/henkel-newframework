var API=null,SCORM_API="API",SCORM_TRUE="true",SCORM_FALSE="false",SCORM_NO_ERROR="0";function GetAPI(e){null!=e.parent&&e.parent!=e&&(API=ScanForAPI(e.parent)),null==API&&null!=e.opener&&(API=ScanForAPI(e.opener))}var bootstrapTries=0,bootstrapMaxTries=500;function ScanForAPI(e){for(;null==e[SCORM_API]&&null!=e.parent&&e.parent!=e;){if(++bootstrapTries>bootstrapMaxTries)return null;e=e.parent}return e[SCORM_API]}function remap(e){return{"cmi.completion_status":"cmi.core.lesson_status","cmi.location":"cmi.core.lesson_location","cmi.exit":"cmi.core.exit","cmi.session_time":"cmi.core.session_time","adl.nav.request":null}[e]}var SCORM={init:ScormProcessInitialize,terminate:ScormProcessTerminate,getValue:function(e,t){if(e=remap(e)){var r=ScormProcessGetValue(e);return"not attempted"==r?"unknown":r}},setValue:function(e,t){if(e=remap(e))return ScormProcessSetValue(e,t);"exitAll"==t&&setTimeout((function(){top.window.close()}),300)},time:function(e){return ConvertMilliSecondsIntoSCORMTime(e)}},terminateCalled=!1,initialized=!1;function ScormProcessInitialize(){if(GetAPI(window),null!=API)if(API.LMSInitialize("")!=SCORM_FALSE)initialized=!0;else{var e=API.LMSGetLastError(),t="Number: "+e+"\nDescription: "+API.LMSGetErrorString(e)+"\nDiagnostic: "+API.LMSGetDiagnostic(e);console.error("Error - Could not initialize communication with the LMS.\n\nYour results may not be recorded.\n\n"+t)}else console.log("ERROR - Could not establish a connection with the LMS.\n\nYour results may not be recorded.")}function ScormProcessTerminate(){var e;if(0!=initialized&&1!=terminateCalled)if(e=API.LMSFinish(""),terminateCalled=!0,e!=SCORM_FALSE);else{var t=API.LMSGetLastError(),r="Number: "+t+"\nDescription: "+API.LMSGetErrorString(t)+"\nDiagnostic: "+API.LMSGetDiagnostic(t);console.error("Error - Could not terminate communication with the LMS.\n\nYour results may not be recorded.\n\n"+r)}}function ScormProcessGetValue(e,t){var r;if(0!=initialized&&1!=terminateCalled){if(r=API.LMSGetValue(e),1==t&&""==r){var n=API.LMSGetLastError();if(n!=SCORM_NO_ERROR){var i="Number: "+n+"\nDescription: "+API.LMSGetErrorString(n)+"\nDiagnostic: "+API.LMSGetDiagnostic(n);return console.error("Error - Could not retrieve a value from the LMS.\n\n"+i),""}}return r}}function ScormProcessSetValue(e,t){if(0!=initialized&&1!=terminateCalled)if(API.LMSSetValue(e,t)!=SCORM_FALSE);else{var r=API.LMSGetLastError(),n="Number: "+r+"\nDescription: "+API.LMSGetErrorString(r)+"\nDiagnostic: "+API.LMSGetDiagnostic(r);console.error("Error - Could not store a value in the LMS.\n\nYour results may not be recorded.\n\n"+n)}}function ConvertMilliSecondsIntoSCORM2004Time(e){var t,r,n,i,o,a,l,s="",u=6e3,c=36e4,S=864e4,M=26298e4,m=315576e4;return t=Math.floor(e/10),t-=(l=Math.floor(t/m))*m,t-=(a=Math.floor(t/M))*M,t-=(o=Math.floor(t/S))*S,t-=(i=Math.floor(t/c))*c,t-=(n=Math.floor(t/u))*u,l>0&&(s+=l+"Y"),a>0&&(s+=a+"M"),o>0&&(s+=o+"D"),(t-=100*(r=Math.floor(t/100)))+r+n+i>0&&(s+="T",i>0&&(s+=i+"H"),n>0&&(s+=n+"M"),t+r>0&&(s+=r,t>0&&(s+="."+t),s+="S")),""==s&&(s="0S"),s="P"+s}function ConvertMilliSecondsIntoSCORMTime(e,t){var r,n,i,o,a;return null!=t&&null!=t||(t=!0),n=(e-(i=e%1e3))/1e3%60,intMinutes=(e-i-1e3*n)/6e4%60,1e4==(r=(e-i-1e3*n-6e4*intMinutes)/36e5)&&(r=9999,intMinutes=(e-36e5*r)/6e4,100==intMinutes&&(intMinutes=99),intMinutes=Math.floor(intMinutes),100==(n=(e-36e5*r-6e4*intMinutes)/1e3)&&(n=99),n=Math.floor(n),i=e-36e5*r-6e4*intMinutes-1e3*n),o=Math.floor(i/10),a=ZeroPad(r,4)+":"+ZeroPad(intMinutes,2)+":"+ZeroPad(n,2),t&&(a+="."+o),r>9999&&(a="9999:99:99",t&&(a+=".99")),a}function ZeroPad(e,t){var r,n,i;if((n=(r=new String(e)).length)>t)r=r.substr(0,t);else for(i=n;i<t;i++)r="0"+r;return r}