'use strict';

import _ from 'lodash/lodash';
import 'angular';
import 'restangular';

console.log(_); // to see if lodas is loaded

let appModule = angular.module('app', [
	'restangular'
]);

appModule.config(['RestangularProvider', function (RestangularProvider) {
	RestangularProvider.setBaseUrl('/api/v1');
}]);


appModule.controller('MainCtrl', [
	'Restangular',
	'$scope',
	function (Restangular, $scope) {
		var resource = Restangular.all('vegetables');
		resource.getList().then(function (vegetables) {
			$scope.vegetables = vegetables;
		});
		$scope.add = function () {
			resource.post($scope.newVegetable).then(function (newResource) {
				$scope.vegetables.push(newResource);
			});
		};
	}
]);

export default appModule;