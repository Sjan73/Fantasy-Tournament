'use strict';

angular.module('FanTeam.version.service', [])
	.factory('tournaments', function($http) {
		return $http.get('https://ws.fanteam.com/match_collections?sport=football&tab=admin_created&statuses[]=waiting&page=0&per_page=30&bearer[white_label]=fanteam') 
		.success(function(response) { 
			return response.data; 
		}) 
		.error(function(err) { 
			return err; 
		}); 
  });
