'use strict';

angular.module('FanTeam.view1', ['ngRoute',
  'FanTeam.version.service'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'tournaments', function($scope, tournaments) {
	tournaments.success(function(response) { 
		$scope.leagues = response.leagues;
		$scope.tournaments = response.tournaments;
		$scope.matchCollections = response.matchCollections;
		$scope.activeRow = $scope.tournaments[0];
		$scope.activeTournament = $scope.tournaments[0];
		$scope.activeMatchCollection = $scope.matchCollections[0];
  	}); 

	$scope.tournamentsSortOrder = 'all';
    $scope.setActive = (tournament) => {    	
        $scope.activeRow = tournament;
        $scope.activeTournament = tournament;
        $scope.activeMatchCollection = $scope.matchCollections.find(match => match.id === $scope.activeTournament.matchCollectionId);
    }
    $scope.isActive = (tournament) => {
        return $scope.activeRow === tournament; 
    }
    $scope.onChanged = () => {
		var onChangedTournaments = [];
		angular.forEach($scope.tournaments, function(value, key) {
			if(value.status === $scope.tournamentsSortOrder) {
				this.push(value);
			}
		}, onChangedTournaments);
		if($scope.tournamentsSortOrder !== 'all') {
	    	$scope.activeRow = onChangedTournaments[0];
	    	$scope.activeTournament = onChangedTournaments[0];	    	
		} else {
			$scope.activeRow = $scope.tournaments[0];
			$scope.activeTournament = $scope.tournaments[0];
			$scope.activeMatchCollection = $scope.matchCollections[0];	
		}
    }
}]);