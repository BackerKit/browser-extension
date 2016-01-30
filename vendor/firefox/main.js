var data = require('sdk/self').data;
var pageMod = require('sdk/page-mod');

pageMod.PageMod({
	include: [
		"*://www.kickstarter.com/projects/*",
		"*://www.indiegogo.com/projects/*"
	],

	contentScriptOptions: {
		rootUrl: data.url("")
	},

	contentScriptFile: [
		data.url("libs/jquery-2.1.1.min.js"),
		data.url("js/browser.js"),
		data.url("js/content.js")
	],

	contentStyleFile: [
		data.url("css/content.css")
	],

	contentScriptWhen: 'start'
});
