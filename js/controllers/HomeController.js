app.controller('HomeController', [
	'$scope',
	'suggestions',

	function($scope, suggestions) {
		$scope.date = new Date();
		
		suggestions.success(function(data) {
			$scope.suggestions = data;
			JSON.parse(data);
		});

		$scope.addSuggestion = function() {
			//if input empty, don't submit
			if(!$scope.title || $scope.title === "") {
				return;
			}
			 
			//push suggestion posts in suggestions.json
			$scope.suggestions.push({
				title: $scope.title,
				date: $scope.date,
				upvotes: 0,
				downvotes: 0,
				comments: []
			});
			 
			//after submit, clear input
			$scope.title = '';
		};

		$scope.upVote = function(index) {
			$scope.suggestions[index].upvotes += 1;
		};

		$scope.downVote = function(index) {
			$scope.suggestions[index].downvotes += 1;
		};
	}
]);