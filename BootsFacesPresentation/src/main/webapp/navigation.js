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
	}).when('/gridSystem', {
		templateUrl : '2_layout/gridSystem.jsf',
		controller : 'EmptyController'
	}).otherwise({
	  templateUrl : '99_miscellaneous/other.jsf',
	});
} ]);
