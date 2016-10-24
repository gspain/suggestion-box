app.controller('SuggestionController', [
	'$scope', 
	'$routeParams', 
	'suggestions',

	function($scope, $routeParams, suggestions) {
		suggestions.success(function(data) {
			$scope.suggestion = data[$routeParams.id];
			$scope.comments = $scope.suggestion.comments;
		})

		$scope.addComment = function() {
			if(!$scope.text || $scope.text === "") {
				return;
			}

			$scope.comments.push({
				text: $scope.text,
				upvotes: 0,
				downvotes: 0
			});

			$scope.text = '';
		};

		$scope.upVoteComment = function(index) {
			$scope.comments[index].upvotes += 1;
		};

		$scope.downVoteComment = function(index) {
			$scope.comments[index].downvotes += 1;
		};
	}
]);