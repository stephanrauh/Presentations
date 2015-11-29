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
	}).when('/keyFeaturesBF', {
		templateUrl : '1_intro/keyFeaturesBF.jsf',
	}).when('/keyFeaturesAF', {
		templateUrl : '1_intro/keyFeaturesAF.jsf',
	}).when('/gridSystem', {
		templateUrl : '2_layout/gridSystem.jsf',
		controller : 'EmptyController'
	}).when('/angularJS', {
		templateUrl : '10_angularJS/angularJS.jsf',
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
			if ($element['left']) {
				msg += ' enabled" onclick="window.location.href=\''
						+ $element['left'] + '\'";';
			} else
				msg += '"';
			msg += '></div>';
			msg += '<div id="navigate-right" class="navigate-right';
			if ($element['right']) {
				msg += ' enabled" onclick="window.location.href=\''
						+ $element['right'] + '\'";';
			} else
				msg += '"';
			msg += '></div>';
			msg += '<div id="navigate-up" class="navigate-up';
			if ($element['up']) {
				msg += ' enabled" onclick="window.location.href=\''
						+ $element['up'] + '\'";';
			} else
				msg += '"';
			msg += '></div>';
			msg += '<div id="navigate-down" class="navigate-down';
			if ($element['down']) {
				msg += ' enabled" onclick="window.location.href=\''
						+ $element['down'] + '\'";';
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
