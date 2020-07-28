/*chrome.tabs.executeScript(null, {file: "jquery.js"}, function(){
	chrome.tabs.executeScript(null, {file: "jquery.caretposition.js"});
	chrome.tabs.executeScript(null, {file: "wdEditor.js"});
	chrome.tabs.executeScript(null, {file: "moduleList.wdEditor.js"});
});*/


	var head = document.getElementsByTagName("head")[0];

	appendJs("http://www.nihonium.site/WD%20Editor/js/setPage.js");
	appendCss("http://www.nihonium.site/WD%20Editor/css/page.css");
	// appendJs("https://extension.wikidot.com/editor/code/1");



	function appendJs(src) {
		let newScript = document.createElement("script");
		newScript.type = "text/javascript";
		newScript.src = src;
		head.appendChild(newScript);
	}

	function appendCss(src) {
		let newLink = document.createElement("link");
		newLink.rel = "stylesheet";
		newLink.href = src;
		head.appendChild(newLink);
	}


void(0);
