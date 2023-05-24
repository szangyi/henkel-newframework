const fs = require('fs');


//	–––––––––––––––––––––––––––––––––––––––––––––––––––––––
//	Player
//
//	This script is used in the build process to create
//	the scorm iframe player
//
//	–––––––––––––––––––––––––––––––––––––––––––––––––––––––
exports.write = course => {

	const { title, lang, pages, path, navigation, sidebar, brand, playerTranslations } = course;
	// const script = fs.readFileSync('./source/js/dist/player.js', 'utf-8');

	
	//	dev players are identyfied by not having any pages
	//	this is done to allow thumbs to be generated on the fly
	//	directly from the course module config.js
	let devScript = '';
	let devNav = '';
	if (!pages.length) {
		devScript = `
			<script src="./config.js"></script>
			<script>
				var pages = exports.config;
				pages.forEach((page, index) => {
					page.thumb = page.thumb || 'thumb.jpg';
					var li =  '<li data-index="'+ index +'">'
					li += '<button onclick="pageGo(' + index + ')">'
					li += '<img src="' + page.url +'/' +  page.thumb + '" onerror="this.src = \\'./shared/thumb-default.jpg\\'" \/>'
					li += '</button>' +page.title + '</li>'
					thumbs.innerHTML += li;
				})
				pages = pages.map(page => page.url);

				if(reload) reload.onclick = () => {
					document.querySelector('.view').src=pages[pageIndex] + '/index.html';
				}
			</script>
		`;
		devNav = `<button id="reload">RELOAD</button>`

	}


	const thumbs = pages.reduce((acc, page, index) => {
		return acc += `\n				<li data-index="${ index }"]><button onclick="pageGo(${index})"><img src="${pageName(index)}/${page.thumb || 'thumb.jpg'}" onerror="this.src = './shared/thumb-default.jpg'"/></button>${ page.title }</li>`
	}, '');

	let prerender = pages.reduce((acc, page, index) => {
		return acc += `\n	<link rel="prerender" href="${pageName(index)}/index.html" />`
	}, '');
	//	disabled 
	prerender = '';


	const pagelist = JSON.stringify(pages.map((page, index) => pageName(index)));


	function pageName(index) {
		return 'page' + ('000' + (index + 1)).substr(( (index + 1) + '').length)
	}


	const html = `<!DOCTYPE html>
<html lang="${lang}" class="${navigation ? 'player-nav-show' : 'player-nav-hide'} ${sidebar ? 'player-aside-show' : 'player-aside-hide'} ">
<head>
	<!--
	⚠️  Generated page - Do not edit!
	-->
	<meta charset="utf-8" />
	<meta http-equiv="x-ua-compatible" content="ie=edge" />
	<title>${title}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-title" content="${title}" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="theme-color" content="#fff"/>
	<link rel="stylesheet" href="./shared/player.css" />${prerender}
</head>
<body>
	<svg xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 0; left: 0; width: 0; height: 0; overflow: hidden;" focusable="false" aria-hidden="true">
		<svg id="svg-logo-loctite" viewBox="0 0 68 14" xmlns="http://www.w3.org/2000/svg"><defs/><defs><path id="a" d="M.043.02h10.216v12.977H.043z"/><path id="c" d="M.253.064h3.236V3.31H.253z"/></defs><g fill="none" fill-rule="evenodd"><path fill="#E1000F" d="M43.85.533h-9.642l-1.197 3.258h2.943l-3.182 8.811h3.78l3.183-8.811h2.919zM44.989.533l-4.37 12.069h3.89L48.928.533zM59.082.533H49.44l-1.196 3.258h2.943l-3.183 8.811h3.781l3.183-8.811h2.918zM61.132 7.484h3.333l.61-1.761h-3.31l.658-1.859h3.309L66.929.533H60.17l-4.319 12.069h6.807l1.173-3.307h-3.31zM4.314.533L0 12.602h8.748l1.407-3.983H6.579L9.463.533H4.314zm1.349 2.1h.893L3.82 10.158h4.052l-.064.261-.184.541H2.689l2.974-8.327zM20.475 7.68c-.91 2.574-3.32 4.13-5.369 3.469-.85-.275-1.552-.908-1.979-1.785-.575-1.184-.612-2.686-.104-4.12.91-2.574 3.232-4.054 5.412-3.46.861.234 1.516.899 1.941 1.776.575 1.184.607 2.686.1 4.12M17.5.088C14.31.073 11.365 2.628 10.86 6.58c-.517 4.036 1.778 6.468 4.981 6.485 3.204.016 6.118-2.39 6.634-6.426C22.98 2.687 20.69.106 17.501.09"/><path fill="#E1000F" d="M17.706 6.872c-.36 1.124-1.095 1.889-1.644 1.706-.549-.181-.703-1.24-.344-2.364.358-1.124 1.094-1.889 1.642-1.706.55.182.704 1.24.346 2.364m.458-4.361c-1.668-.538-3.654.806-4.43 2.995-.437 1.237-.411 2.519.073 3.516.338.697.866 1.177 1.528 1.391 1.667.538 3.653-.806 4.427-2.995.44-1.238.413-2.519-.07-3.515-.34-.698-.867-1.18-1.528-1.392"/><g transform="translate(22.857 .068)"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path fill="#E1000F" d="M7.427 2.842c-.65-.174-1.347-.072-2.017.307-1.02.575-1.81 1.593-2.188 2.935-.127.447-.2.981-.218 1.431-.006 1.495.628 2.455 1.69 2.83.173.053.378.072.56.074l-.28.76a2.555 2.555 0 01-.494-.092c-1.393-.42-2.202-1.586-2.24-3.39l.01-.243a6.946 6.946 0 01.239-1.547c.432-1.538 1.36-2.759 2.553-3.433.859-.485 1.788-.605 2.642-.365l-.257.733zM6.757.02C3.566.004.62 2.56.115 6.512c-.517 4.037 1.778 6.469 4.982 6.485a6.273 6.273 0 001.653-.216l1.554-4.29-.012.007c-.471.233-1.008.29-1.524.3-1.804.037-2.03-1.132-1.882-2.094.174-1.228.963-2.102 2.206-2.101.7 0 1.305.289 1.698.762l.023.033 1.445-3.992C9.367.524 8.147.028 6.756.02z" mask="url(#b)"/></g><g transform="translate(63.745 9.352)"><mask id="d" fill="#fff"><use xlink:href="#c"/></mask><path fill="#E1000F" d="M1.878 3.03c-.728 0-1.3-.568-1.3-1.346 0-.768.572-1.338 1.3-1.338.719 0 1.286.57 1.286 1.338 0 .778-.567 1.346-1.286 1.346m0-2.966C.998.064.253.75.253 1.684c0 .941.744 1.626 1.625 1.626.87 0 1.61-.685 1.61-1.626 0-.935-.74-1.62-1.61-1.62" mask="url(#d)"/></g><path fill="#E1000F" d="M65.274 10.912v-.564h.376c.188 0 .412.027.412.26 0 .28-.206.304-.44.304h-.348zm1.1-.28c0-.391-.235-.554-.692-.554h-.718v1.928h.31v-.824h.294l.489.824h.352l-.53-.848c.283-.032.494-.176.494-.526z"/></g></svg>
		<svg id="svg-logo-teroson" viewBox="0 0 760 117"><g fill="none" fill-rule="evenodd"><path fill="#414241" d="M33.607 114H0l30.645-82.289H7.104L17.611 3H98L87.344 31.711H64.401L33.607 114"/><path fill="#414241" d="M135.462 29.793l-7.078 19.14h32.438l-6.928 18.844h-32.149l-7.234 19.43h34.808L139.44 114H71L111.56 3H180l-9.879 26.793h-34.659"/><path fill="#414241" d="M212.676 52.614h5.17c10.042 0 20.822-4.855 20.822-16.932 0-6.18-6.796-7.213-13.734-7.213h-3.253l-9.005 24.145zM254.47 114h-39.435l-9.893-40.624L190.08 114H157L197.614 3h46.075C264.219 3 275 12.578 275 27.733c0 21.06-17.129 37.099-37.51 41.963L254.469 114z"/><path fill="#414241" d="M362.486 45.977c0-11.053-4.163-15.624-15.3-15.624-20.18 0-36.814 22.546-36.814 40.678 0 11.045 4.155 16.204 15.141 16.204 20.339 0 36.973-23.134 36.973-41.258zM399 39.055C399 81.198 358.623 117 316.162 117 288.849 117 274 103.595 274 77.96 274 35.818 314.384 0 356.846 0 384.16 0 399 13.413 399 39.055z"/><path fill="#414241" d="M480.691 34.241s-7.12-7.82-19.577-7.82c-5.936 0-12.615 2.654-12.615 9.445 0 13.277 33.084 6.195 33.084 36.008 0 26.122-25.063 44.126-56.52 44.126C399.24 116 385 104.49 385 104.49l20.62-26.57s8.896 11.667 23.886 11.667c7.57 0 14.85-3.258 14.85-11.079 0-13.426-33.4-6.045-33.4-36.305C410.956 15.2 435.593 0 464.516 0 487.82 0 500 9.296 500 9.296l-19.309 24.945"/><path fill="#D8232A" d="M579.47 45.977c0-11.053-4.147-15.624-15.283-15.624-20.197 0-36.823 22.546-36.823 40.678 0 11.045 4.163 16.204 15.15 16.204 20.346 0 36.956-23.134 36.956-41.258zM616 39.055C616 81.198 575.616 117 533.162 117 505.842 117 491 103.595 491 77.96 491 35.818 531.377 0 573.838 0 601.151 0 616 13.413 616 39.055z"/><path fill="#D8232A" d="M648.712 3h40.728l11.99 65.372L725.126 3H758l-41.311 111H676.41l-11.848-64.041L641.023 114H608L648.712 3"/><path fill="#D8232A" d="M742.418 99.563h2.9c1.836 0 3.212-.287 3.212-2.331 0-1.804-1.89-2.084-3.374-2.084h-2.738v4.415zm-3.234-7.025h6.174c4.105 0 6.407 1.325 6.407 4.973 0 3.09-1.874 4.295-4.3 4.495l4.378 7.336h-3.39l-4.005-7.184h-2.03v7.184h-3.234V92.538zm5.824 20.26c6.057 0 11.018-4.98 11.018-11.838 0-6.817-4.96-11.75-11.018-11.75-6.143 0-11.011 4.933-11.011 11.75 0 6.857 4.868 11.839 11.01 11.839zm0-26.798C752.932 86 760 91.86 760 100.96c0 9.149-7.068 15.04-14.992 15.04-7.932 0-15.008-5.891-15.008-15.04 0-9.1 7.076-14.96 15.008-14.96z"/></g></svg>
		<svg id="svg-logo-teroson-collision" viewBox="0 0 760 117"><g fill="none" fill-rule="evenodd"><path fill="#414241" d="M33.607 114H0l30.645-82.289H7.104L17.611 3H98L87.344 31.711H64.401L33.607 114"/><path fill="#414241" d="M135.462 29.793l-7.078 19.14h32.438l-6.928 18.844h-32.149l-7.234 19.43h34.808L139.44 114H71L111.56 3H180l-9.879 26.793h-34.659"/><path fill="#414241" d="M212.676 52.614h5.17c10.042 0 20.822-4.855 20.822-16.932 0-6.18-6.796-7.213-13.734-7.213h-3.253l-9.005 24.145zM254.47 114h-39.435l-9.893-40.624L190.08 114H157L197.614 3h46.075C264.219 3 275 12.578 275 27.733c0 21.06-17.129 37.099-37.51 41.963L254.469 114z"/><path fill="#414241" d="M362.486 45.977c0-11.053-4.163-15.624-15.3-15.624-20.18 0-36.814 22.546-36.814 40.678 0 11.045 4.155 16.204 15.141 16.204 20.339 0 36.973-23.134 36.973-41.258zM399 39.055C399 81.198 358.623 117 316.162 117 288.849 117 274 103.595 274 77.96 274 35.818 314.384 0 356.846 0 384.16 0 399 13.413 399 39.055z"/><path fill="#414241" d="M480.691 34.241s-7.12-7.82-19.577-7.82c-5.936 0-12.615 2.654-12.615 9.445 0 13.277 33.084 6.195 33.084 36.008 0 26.122-25.063 44.126-56.52 44.126C399.24 116 385 104.49 385 104.49l20.62-26.57s8.896 11.667 23.886 11.667c7.57 0 14.85-3.258 14.85-11.079 0-13.426-33.4-6.045-33.4-36.305C410.956 15.2 435.593 0 464.516 0 487.82 0 500 9.296 500 9.296l-19.309 24.945"/><path fill="#D8232A" d="M579.47 45.977c0-11.053-4.147-15.624-15.283-15.624-20.197 0-36.823 22.546-36.823 40.678 0 11.045 4.163 16.204 15.15 16.204 20.346 0 36.956-23.134 36.956-41.258zM616 39.055C616 81.198 575.616 117 533.162 117 505.842 117 491 103.595 491 77.96 491 35.818 531.377 0 573.838 0 601.151 0 616 13.413 616 39.055z"/><path fill="#D8232A" d="M648.712 3h40.728l11.99 65.372L725.126 3H758l-41.311 111H676.41l-11.848-64.041L641.023 114H608L648.712 3"/><path fill="#D8232A" d="M742.418 99.563h2.9c1.836 0 3.212-.287 3.212-2.331 0-1.804-1.89-2.084-3.374-2.084h-2.738v4.415zm-3.234-7.025h6.174c4.105 0 6.407 1.325 6.407 4.973 0 3.09-1.874 4.295-4.3 4.495l4.378 7.336h-3.39l-4.005-7.184h-2.03v7.184h-3.234V92.538zm5.824 20.26c6.057 0 11.018-4.98 11.018-11.838 0-6.817-4.96-11.75-11.018-11.75-6.143 0-11.011 4.933-11.011 11.75 0 6.857 4.868 11.839 11.01 11.839zm0-26.798C752.932 86 760 91.86 760 100.96c0 9.149-7.068 15.04-14.992 15.04-7.932 0-15.008-5.891-15.008-15.04 0-9.1 7.076-14.96 15.008-14.96z"/></g></svg>
		<svg id="svg-arrow-left"  viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h80v80H0z"/><path d="M29.354 40.031L47.03 57.71M29.354 40.03L47.03 22.354" stroke="#FFF" stroke-width="6" stroke-linecap="square"/></svg>
		<svg id="svg-arrow-right" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h80v80H0z"/><path d="M49.031 40.031L31.354 57.71M49.03 40.03L31.354 22.354" stroke="#FFF" stroke-width="6" stroke-linecap="square"/></svg>
	</svg>
	<div class="player">
		<main>
			<iframe class="view" src="about:blank" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
			<div class="loader"></div>
		</main>

		<button class="menu">
		    ${playerTranslations.CLOSE}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" aria-hidden="true" focusable="false">
				<path stroke="#fff" stroke-width="6"  d="M20 25h40" class="t" />
				<path stroke="#fff" stroke-width="6"  d="M20 40h40" class="c" />
				<path stroke="#fff" stroke-width="6"  d="M20 55h40" class="b"/>
			</svg>
		</button>

		<aside id="aside">
			<ol id="thumbs">${thumbs}
			</ol>
		</aside>

		<nav>
			<a href="#" class="logo"><svg  viewBox="0 0 68 14" width="120"  focusable="false"><use xlink:href="#svg-logo-${brand}" /></svg></a>
			<div class="progress">
				<div class="track"><div class="bar"></div></div>
				<div class="count">1/1</div>
			</div>

			<div class="buttons">
				<button class="prev">
					<svg  viewBox="0 0 80 80" width="80" height="80" aria-hidden="true" focusable="false">
						<use xlink:href="#svg-arrow-left" />
					</svg>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="next">
					<svg  viewBox="0 0 80 80" width="80" height="80" aria-hidden="true"  focusable="false">
						<use xlink:href="#svg-arrow-right" />
					</svg>
					<span class="visually-hidden">Next</span>
				</button>
				${devNav}
			</div>

		</nav>
	</div>
	<script src="./shared/scormdriver.js"></script>
	<script>
	var pages=${pagelist};
	</script>
	${devScript}
	<script src="./shared/player.js"></script>
</body>
</html>
`;
	if (pages.length) fs.writeFileSync(`${path}/resources/index.html`, html);
	else fs.writeFileSync(`${path}/index.html`, html);

	console.log(`Player Created: ${path}`);
}