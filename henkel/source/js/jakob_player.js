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

		

		//  –––––––––––––––––––––––––––––––––––––––––––––
		//	Pages (generated inline)
        //  –––––––––––––––––––––––––––––––––––––––––––––
		var pages = pages || [];


		//	Stop and Go
		var stop = false;
		var stopId = null;
		var stopPages = [];


		//  –––––––––––––––––––––––––––––––––––––––––––––
        //	DOM elements
		//  –––––––––––––––––––––––––––––––––––––––––––––
		var docEl = document.documentElement;
		var view  = document.querySelector('.view');
		var logo  = document.querySelector('.logo');
		var prev  = document.querySelector('.prev');
		var next  = document.querySelector('.next');
		var menu  = document.querySelector('.menu');
		var thumbs  = document.querySelector('#thumbs');

		var bar   = document.querySelector('.bar');
		var count = document.querySelector('.count');



        //  –––––––––––––––––––––––––––––––––––––––––––––
        //	States
        //  –––––––––––––––––––––––––––––––––––––––––––––
		var pageIndex = 0;
		var pageRange = [];


	    var startTimeStamp = null;
	    var processedUnload = false;
	    var reachedEnd = false;


        //  –––––––––––––––––––––––––––––––––––––––––––––
        //  Listeners
        //  –––––––––––––––––––––––––––––––––––––––––––––
		addEventListener('load', pageEnter);
		addEventListener('unload', pageTerminate);
		addEventListener('beforeunload', pageTerminate);

		addEventListener('message', pageMessageRecieve, false)


		logo.addEventListener('click', () => pageGo(0));
		prev.addEventListener('click', pagePrev);
		next.addEventListener('click', pageNext);
		menu.addEventListener('click', asideToggle);

		// view.addEventListener('click', asideClose, true);
		view.addEventListener('load', viewLoad);



       	//  –––––––––––––––––––––––––––––––––––––––––––––
		//	Disable click interactions and hide content
       	//  –––––––––––––––––––––––––––––––––––––––––––––		   		
		docEl.style.pointerEvents = 'none';
		docEl.style.opacity = 0;


       	//  –––––––––––––––––––––––––––––––––––––––––––––
        //  Methods:
        //  - pageEnter
        //  - pageExit
        //  - pageTerminate
        //  - pageGo
        //  - pagePrev
		//  - pageNext
		//	- asideToggle
		//	- viewLoad
		//	- pageMessageRecieve
		//  - stopAndGoCheck
        //  –––––––––––––––––––––––––––––––––––––––––––––



		//  –––––––––––––––––––––––––––––––––––––––––––––
		//	Page Enter
		//  –––––––––––––––––––––––––––––––––––––––––––––
		function pageEnter() {

			startTimeStamp = new Date();	//	move to init
			SCORM.init()

            //	it's a best practice to set the completion status to incomplete when first launching the course
            //  (if the course is not already completed)
	        const completionStatus = SCORM.getValue("cmi.completion_status", true);


	        
	        if (completionStatus == "unknown") SCORM.setValue("cmi.completion_status", "incomplete");

            //	see if the user stored a bookmark previously
            //  (don't check for errors because cmi.location may not be initialized
	        let bookmark = SCORM.getValue("cmi.location", false);


	        //	if there isn't a stored bookmark, start the user at the first page
	        if (!bookmark) pageIndex = 0;
	        else{
	            //	if there is a stored bookmark, prompt the user to resume from the previous location
	            if (confirm("Would you like to resume from where you previously left off?")){ pageIndex = parseInt(bookmark, 10); }
	            else { pageIndex = 0; }
	        }
			pageGo(pageIndex);

		}


		//  –––––––––––––––––––––––––––––––––––––––––––––
		//	Page Exit
		//  –––––––––––––––––––––––––––––––––––––––––––––
        function pageExit(){

	        //	note use of short-circuit AND. If the user reached the end, don't prompt.
	        //	just exit normally and submit the results.
	        if (reachedEnd == false && confirm("Would you like to save your progress to resume later?")){
	            //set exit to suspend
	            SCORM.setValue("cmi.exit", "suspend");

	            //	issue a suspendAll navigation request
	            SCORM.setValue("adl.nav.request", "suspendAll");
	        }
	        else{
	            //	set exit to normal
	            SCORM.setValue("cmi.exit", "");

	            //issue an exitAll navigation request
	            SCORM.setValue("adl.nav.request", "exitAll");
	        }

	        //	process the unload handler to close out the session.
	        //	the presense of an adl.nav.request will cause the LMS to
	        //	take the content away from the user.
	        pageTerminate(true);
	    }


		//  –––––––––––––––––––––––––––––––––––––––––––––
		//	Page Terminate
		//  –––––––––––––––––––––––––––––––––––––––––––––
		function pageTerminate(pressedExit){
	        //	don't call this function twice
	        if (processedUnload == true) return;
	       	processedUnload = true;

	  		//	record the session time
	       	const endTimeStamp = new Date();
			const totalMilliseconds = (endTimeStamp.getTime() - startTimeStamp.getTime());
	        const scormTime = SCORM.time(totalMilliseconds);

	        SCORM.setValue("cmi.session_time", scormTime);

	        //	if the user just closes the browser, we will default to saving
	        //	their progress data. If the user presses exit, he is prompted.
	        //	if the user reached the end, the exit normall to submit results.
	        if (pressedExit == false && reachedEnd == false){
	            SCORM.setValue("cmi.exit", "suspend");
	        }

	        SCORM.terminate();
		}



		//  –––––––––––––––––––––––––––––––––––––––––––––
		//	Page Navigation
		//  –––––––––––––––––––––––––––––––––––––––––––––
		function pageGo(index) {
			//	total pages
			const total = pages.length - 1;

			// 	cap index
			pageIndex = Math.min(Math.max(index, 0), total);



			//	Stop and Go 
			stopAndGoCheck()


			//disable the prev/next buttons on first/last page
			prev.disabled = (pageIndex === 0)
			next.disabled = (pageIndex === total || stop) 


			//	set progress bar
			bar.style.transform = `scaleX(${ pageIndex / total })`;

			//	page count
			count.innerText = (pageIndex+1) + '/' + (total+1);

			//	set active thumb
			const oActive = thumbs.querySelector('.active');
			if (oActive) oActive.classList.remove('active');

			const nActive = thumbs.querySelector(`[data-index="${pageIndex}"]`);
			nActive.classList.add('active')
			nActive.scrollIntoView({ behavior: 'smooth', block: 'nearest' });


			//	save the current location as the bookmark
			SCORM.setValue("cmi.location", pageIndex);

			//	the course is considered complete when the last page is reached
			if (pageIndex === total) {
				reachedEnd = true;
				SCORM.setValue("cmi.completion_status", "completed");
			}



			//	fade out iframe and change url
			//	set max fade out time to 1sec
			view.style.opacity = 0;
			docEl.classList.add('loading');
			setTimeout(() => { view.src = `${pages[pageIndex]}/index.html`; }, 200)
			// setTimeout(() => { viewLoad() }, 1000)
		}
		function pagePrev() { if(pageIndex) pageGo(--pageIndex); }
		function pageNext() { if (pageIndex < pages.length - 1) pageGo(++pageIndex) }




		//  –––––––––––––––––––––––––––––––––––––––––––––
		//	Sidebar Toggle
		//  –––––––––––––––––––––––––––––––––––––––––––––
		function asideToggle() {
			var state = document.documentElement.classList.contains('player-aside-open') ? 'remove' : 'add'
			document.documentElement.classList[state]('player-aside-open');
		}
		function asideClose() {
			document.documentElement.classList.remove('player-aside-open');
		}


		//  –––––––––––––––––––––––––––––––––––––––––––––
		//	Frame View Load
		//  –––––––––––––––––––––––––––––––––––––––––––––
		function viewLoad() {
			view.style.opacity = '';
			docEl.style.pointerEvents = '';
			docEl.style.opacity = '';
			docEl.classList.remove('loading');
			asideClose();
			stopAndGoCheck();
		}




		//  –––––––––––––––––––––––––––––––––––––––––––––
		//	Post Messaging
		//  –––––––––––––––––––––––––––––––––––––––––––––
		//	Recieve from page
		function pageMessageRecieve(e) {

			try {
				let data = JSON.parse(e.data);
				let action = data.action;
				let args = data.args;

				switch (action) {
					case 'pageRange': {
						pageRange = args;
						break;
					}

					case 'pageGo': {
						pageGo(args);
						break;
					}

					case 'pagePrev': {
						pagePrev();
						break;
					}

					case 'pageNext': {
						pageNext();
						break;
					}
				}
			} catch (err) {
				return
			}
		}


		//  –––––––––––––––––––––––––––––––––––––––––––––
		//	Stop and Go
		//  –––––––––––––––––––––––––––––––––––––––––––––
		function stopAndGoCheck(){
			const total = pages.length - 1;
			

			//	is stop and go is enabled  
			if(stopId && stopPages.length) {
				
				//	find the last unlocked page
				var unlocked = Math.max(
					pageIndex,
					Math.min(...stopPages) - 1,
					parseInt(localStorage.getItem(stopId) || 0, 10)
				);

				//	save unlocked page to local storage
				//	and update the stopPages array
				localStorage.setItem(stopId, unlocked);
				stopPages = stopPages.filter(i => i > unlocked);

				//	prevent next navigation? 
				stop = (pageIndex >= unlocked && stopPages.length);

				//	next button 
				next.disabled = (pageIndex === total || stop);			
		        next.style.cssText =  stop ? `
		                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 24 24'%3E%3Cpath d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'/%3E%3C/svg%3E");
		                background-repeat: no-repeat;
		                background-position: center;
		                background-color: rgba(0,0,0,0.75);
		                background-size: 1.5rem;
		                cursor: not-allowed;
		        ` : '';
		        next.querySelector('svg').style.zIndex = stop ? -1 : ''


		        //	thumb buttons
		        thumbs.querySelectorAll('li').forEach((item, index) => {
            		const disabled = (index > unlocked && stopPages.length)
					const button = item.querySelector('button');
            		const image = button.querySelector('img');

		            //  button
		            button.disabled = disabled;
		            button.style.cssText = disabled ? `
		                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 24 24'%3E%3Cpath d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'/%3E%3C/svg%3E");
		                background-repeat: no-repeat;
		                background-position: center;
		                background-color: rgba(0,0,0,0.75);
		                background-size: 1.5rem;
		                pointer-events: none; 
		            ` : ''
        
		            //  image
		            image.style.zIndex = disabled ? -1 : ''

		            //  text
		            item.style.cssText = disabled ? `
		                color: rgba(255,255,255,0.5);
		                cursor: not-allowed;
		            ` : ''            		
		        });	



			} else {
				next.disabled = (pageIndex === total);
				stop = false;
			}
		}





