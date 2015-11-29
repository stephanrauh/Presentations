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
	}).when('/start2', {
		templateUrl : '1_intro/start2.jsf',
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
			msg += '<div class="navigate-left';
			if ($element['left']) {
				msg += ' enabled" onclick="window.location.href=\''
						+ $element['left'] + '\'";';
			} else
				msg += '"';
			msg += '></div>';
			msg += '<div class="navigate-right';
			if ($element['right']) {
				msg += ' enabled" onclick="window.location.href=\''
						+ $element['right'] + '\'";';
			} else
				msg += '"';
			msg += '></div>';
			msg += '<div class="navigate-up';
			if ($element['up']) {
				msg += ' enabled" onclick="window.location.href=\''
						+ $element['up'] + '\'";';
			} else
				msg += '"';
			msg += '></div>';
			msg += '<div class="navigate-down';
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
