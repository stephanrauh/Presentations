'use strict';

var navigationApp = angular.module('navigationApp', [ 'ngRoute',
		'navigationControllers' ]);

navigationApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/hidingColumns', {
		templateUrl : '2_layout/hidingColumns.jsf',
		controller : 'EmptyController'
	}).when('/', {
		templateUrl : '1_intro/start.jsf',
		controller : 'EmptyController'
	}).when('/start', {
		templateUrl : '1_intro/start.jsf',
		controller : 'EmptyController'
	}).when('/dogFood', {
		templateUrl : '1_intro/dogFood.jsf',
	}).when('/behindTheScenes', {
		templateUrl : '1_intro/behindTheScenes.jsf',
	}).when('/funFacts', {
		templateUrl : '1_intro/funFacts.jsf',
	}).when('/keyFeaturesBF', {
		templateUrl : '1_intro/keyFeaturesBF.jsf',
	}).when('/keyFeaturesAF', {
		templateUrl : '1_intro/keyFeaturesAF.jsf',
	}).when('/gridSystem', {
		templateUrl : '2_layout/gridSystem.jsf',
		controller : 'EmptyController'
	}).when('/simplification', {
		templateUrl : '2_layout/simplification.jsf',
		controller : 'EmptyController'
	}).when('/simplification2', {
		templateUrl : '2_layout/simplification2.jsf',
		controller : 'EmptyController'
	}).when('/gridSystemSourcecode', {
		templateUrl : '2_layout/gridSystemSourcecode.jsf',
		controller : 'EmptyController'
	}).when('/gridSystemStack', {
		templateUrl : '2_layout/gridSystemStack.jsf',
		controller : 'EmptyController'
	}).when('/gridSystemStackSourcecode', {
		templateUrl : '2_layout/gridSystemStackSourcecode.jsf',
		controller : 'EmptyController'
	}).when('/searchExpressions', {
		templateUrl : '3_searchExpressions/searchExpressions.jsf',
	}).when('/searchExpressions2', {
		templateUrl : '3_searchExpressions/searchExpressions2.jsf',
	}).when('/searchExpressions3', {
		templateUrl : '3_searchExpressions/searchExpressions3.jsf',
	}).when('/ajaxBF', {
		templateUrl : '4_ajax/ajaxBF.jsf',
	}).when('/components', {
		templateUrl : '5_components/components.jsf',
	}).when('/showcaseBF', {
		templateUrl : '5_components/showcaseBF.jsf',
	}).when('/angularJS', {
		templateUrl : '10_angularJS/angularJS.jsf',
	}).when('/ngComponents', {
		templateUrl : '10_angularJS/ngComponents.jsf',
	}).when('/ngTable', {
		templateUrl : '10_angularJS/ngTable.jsf',
	}).when('/ajaxAF', {
		templateUrl : '11_angularFaces/ajaxAF.jsf',
	}).when('/clientSideValidation', {
		templateUrl : '11_angularFaces/clientSideValidation.jsf',
	}).when('/i18n', {
		templateUrl : '11_angularFaces/i18n.jsf',
	}).when('/rapidPrototyping', {
		templateUrl : '11_angularFaces/rapidPrototyping.jsf',
	}).when('/relaxedMarkup', {
		templateUrl : '11_angularFaces/relaxedMarkup.jsf',
	}).when('/integration', {
		templateUrl : '20_integration/integration.jsf',
	}).when('/roadmapBF', {
		templateUrl : '30_roadmap/roadmapBF.jsf',
	}).when('/roadmapAF', {
		templateUrl : '30_roadmap/roadmapAF.jsf',
	}).when('/questions', {
		templateUrl : '90_questions/questions.jsf',
	}).when('/contribution', {
		templateUrl : '90_questions/contribution.jsf',
	}).otherwise({
		templateUrl : '99_miscellaneous/other.jsf',
	});
} ]);

navigationApp.directive('navigator', function() {
	return {
		restrict : 'E',
		scope : {},
		template : function($scope, $element) {

			var msg = '<aside class="controls">';
			msg += '<div id="navigate-left" class="navigate-left';
			var left = $element['left'];
			if (left) {
				if (left.substring(0,1)!="#")
					left = "#" + left;
				msg += ' enabled" onclick="window.location.href=\''
						+ left + '\'";';
			} else
				msg += '"';
			msg += '></div>';
			msg += '<div id="navigate-right" class="navigate-right';
			var right = $element['right'];
			if (right) {
				if (right.substring(0,1)!="#")
					right = "#" + right;
				msg += ' enabled" onclick="window.location.href=\''
						+ right + '\'";';
			} else
				msg += '"';
			msg += '></div>';
			msg += '<div id="navigate-up" class="navigate-up';
			var up = $element['up'];
			if (up) {
				if (up.substring(0,1)!="#")
					up = "#" + up;
				msg += ' enabled" onclick="window.location.href=\''
						+ up + '\'";';
			} else
				msg += '"';
			msg += '></div>';
			msg += '<div id="navigate-down" class="navigate-down';
			var down = $element['down'];
			if (down) {
				if (down.substring(0,1)!="#")
					down = "#" + down;
				msg += ' enabled" onclick="window.location.href=\''
						+ down + '\'";';
			} else
				msg += '"';
			msg += '></div>';
			msg += '</aside>';


			return msg;
		},
		controller : function($scope) {
			// $scope.currentMessage="";
		},

	};
});

navigationApp.directive('header', function() {
	return {
		restrict : 'E',
		scope : {},
		template : function($scope, $element) {

			var msg = '<div id="headerBar" class="navbar navbar-default navbar-fixed-top" role="navigation"><div class="container">';
			msg +='<div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#headerBar_inner"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span>';
			msg +='<span class="icon-bar"></span></button></div><div id="headerBar_inner" class="collapse navbar-collapse navbar-ex1-collapse">';
			msg +='<div class="row"><div class="col-md-12 hidden-xs hidden-sm"><center>';
			msg +='<h1>'+$element['title']+'</h1>';
			msg +='</center></div></div></div></div></div>';
			return msg;
		},
		controller : function($scope) {
			// $scope.currentMessage="";
		},

	};
});


function navigateOnCursorKey(e) {
    var event = window.event ? window.event : e;
    if (event.keyCode == '38') {
        // up arrow
    	document.getElementById("navigate-up").click();
    }
    else if (event.keyCode == '40') {
        // down arrow
    	document.getElementById("navigate-down").click();
    }
    else if (event.keyCode == '37') {
       // left arrow
    	document.getElementById("navigate-left").click();
    }
    else if (event.keyCode == '39') {
       // right arrow
    	document.getElementById("navigate-right").click();
    }

}

document.onkeydown = navigateOnCursorKey;
