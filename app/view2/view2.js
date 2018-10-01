'use strict';

angular.module('FanTeam.view2', ['ngRoute',
  'FanTeam.version.service'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:id', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'tournaments', '$routeParams', function($scope, tournaments, $routeParams) {
	tournaments.success(function(response) {
		$scope.tournaments = response.tournaments;
		$scope.matchCollections = response.matchCollections;
		$scope.activeTournament = $scope.tournaments.find(tournament => tournament.id === Number($routeParams.id));
		$scope.activeMatchCollection = $scope.matchCollections.find(match => match.id === $scope.activeTournament.matchCollectionId);
  	}); 	
}]);