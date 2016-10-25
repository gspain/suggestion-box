app.controller('SuggestionController', [
	'$scope', 
	'$routeParams', 
	'suggestions',
	'localStorageService',

	function($scope, $routeParams, suggestions, localStorageService) {

		$scope.getSuggestion = function() {
			$scope.suggestions = localStorageService.get('suggestions');
			$scope.suggestion = $scope.suggestions[$routeParams.id];
			$scope.comments = $scope.suggestion.comments;

            if($scope.comments == null) {
                $scope.comments = [];
            }

            localStorageService.set('suggestions', $scope.suggestions);
		};

		$scope.addComment = function() {
			if(!$scope.text || $scope.text === "") {
				return; //if input empty, don't submit
			}

			$scope.comments.push({
				text: $scope.text,
				upvotes: 0,
				downvotes: 0
			});

			$scope.text = ''; //after submit, clear input
			localStorageService.set("suggestions", $scope.suggestions);
		};

		$scope.upVoteComment = function(index) {
			$scope.comments[index].upvotes += 1;
			localStorageService.set("suggestions", $scope.suggestions);
		};

		$scope.downVoteComment = function(index) {
			$scope.comments[index].downvotes += 1;
			localStorageService.set("suggestions", $scope.suggestions);
		};

		$scope.getSuggestion();
	}
]);