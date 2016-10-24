app.factory('suggestions', ['$http', function($http){
	return $http.get('./suggestions.json')
	.success(function(data) {
		return data;
	})
	.error(function(err) {
		return err;
	});
}]);