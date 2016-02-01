;(function () {
	var app = window.app = window.app || {};
	var App = function (block) {

		return {
			run: function () {
					var path = location.pathname,
							url = $("*[rel='canonical']").first().attr('href'),
							prependTarget = $('.container-flex.px2');
							
							var parser = document.createElement('a');
									parser.href = url;

							if(prependTarget.length === 0){
								prependTarget = $('.i-campaign-page.ng-isolate-scope');
							}
					$('<iframe>', {src:'https://www.backerkit.com' + parser.pathname + '/iframe', frameBorder: "0", width: prependTarget.width(), height:'300px', scrolling:'no'}).prependTo(prependTarget);
			}
		};
	};
	
	new App($(this)).run();
})();
