# About
Suggestion Box
| AngularJS CodeCademy Final
| V1 Gabriella Spain 2016
| Angular v1.5 stable

# Outline

As a user:
* I want to be able to create a suggestion.
* I want to be able to upvote a suggestion.
* I want the most upvoted suggestions to rise to the top.
* I want to comment on a suggestion.

Ideas:
* A view for the whole list of suggestions
* A way to input suggestions
* A way to upvote suggestions
* A way to comment on a suggestion

Translated:
* A view is going to be an HTML file, and we can feed into it a list of suggestions from a controller
* To input suggestions, we will need to write a form that updates the model of our app. It will update it using a controller, since the controller is the middle-man between the view and the model
* To upvote a suggestion, we can add a button that changes the amount of upvotes a specific suggestion has in the model
* To comment on a suggestion, we will need to add routing to add another view. We can use similar ideas as above to build out the comments functionality

# Suggestion List

Views:
* A home.html file for the view
* A home controller for suggestion item actions

Comments:
* A posts.html file for the view, so we can see an individual post to comment on
* A posts controller for comment actions

Store Suggestions and Comments:
* A service for storing data
