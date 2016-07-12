var app = angular.module('bandsApp', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/generalGroups.html', 
			controller: 'GroupsViewController'
		})
		.when('/:name', {
			templateUrl: 'views/singleGroup.html',
			controller: 'GroupsViewController'
		})
		.otherwise({
			redirectTo: '/'
		})
}]);

/*app.controller('HomeViewController', ['$scope', function($scope){
	
}]);*/

app.controller('GroupsViewController', ['$scope','$http','$routeParams', function($scope,$http,$routeParams){
	$scope.name = $routeParams.name;
	$scope.decade= $routeParams.decade;
	$http.get('js/Bands_Json.json').success(function(data){
		$scope.bands = data;
	})
}])

app.directive('zcHeader', function(){
	return {
		restrict:'E',
		templateUrl: 'views/header.html'
	}
});

app.directive('zcFooter', function(){
	return {
		restrict:'E',
		templateUrl: 'views/footer.html'
	}
});

app.directive('zcSinglecard', function(){
	return {
		restrict:'E',
		templateUrl: 'views/singleCard.html'
	}
});