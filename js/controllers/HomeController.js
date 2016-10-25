app.controller('HomeController', [
	'$scope',
	'suggestions',
	'localStorageService',

	function($scope, suggestions, localStorageService) {
		$scope.getSuggestionList = function() {
            $scope.suggestions = localStorageService.get('suggestions');

            //if there are no suggestions, get last suggestion list state
            if($scope.suggestions == null) {
                suggestions.success(function(data) {
                    $scope.suggestions = data;
                }); 
            }

            localStorageService.set('suggestions', $scope.suggestions);
		};

		$scope.addSuggestion = function() {
			if(!$scope.title || $scope.title === "") {
				return; //if input empty, don't submit
			}

			$scope.suggestions.push({
				"title": $scope.title,
				"date": new Date(), //get date and time suggestion was posted
				"upvotes": 0,
				"downvotes": 0,
				"comments": []
			});

            $scope.title = ''; //after submit, clear input
			localStorageService.set("suggestions", $scope.suggestions);
		};

		$scope.upVote = function(index) {
			$scope.suggestions[index].upvotes += 1;
			localStorageService.set("suggestions", $scope.suggestions);
		};

		$scope.downVote = function(index) {
			$scope.suggestions[index].downvotes += 1;
			localStorageService.set("suggestions", $scope.suggestions);
		};

        $scope.resetSuggestionList = function() {
            localStorageService.clearAll();
        };

        //$scope.resetSuggestionList();
		$scope.getSuggestionList();
	}
]);