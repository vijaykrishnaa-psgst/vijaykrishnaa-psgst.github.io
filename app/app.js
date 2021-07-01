'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/view1' });
  }])

  .controller('MainController', function ($scope) {
    $scope.NavigateExercises = true;

    function loadExercise() {
      $scope.exercises = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
      };
    }
    loadExercise();

    $scope.goToExercise = function (key) {
      loadExercise();
      $scope.NavigateExercises = false;
      $scope.exerciseView = true;
      $scope.exercises[key] = true;
      $scope.activeExercise = key;
    }

    $scope.goToNext = function (currentKey) {
      $scope.goToExercise(parseInt(currentKey) + 1);
    }

    $scope.showNext = function () {
      return $scope.activeExercise != Object.keys($scope.exercises).length;
    }

    $scope.goToPrevious = function (currentKey) {
      $scope.goToExercise(parseInt(currentKey) - 1);
    }

    $scope.showPrevious = function () {
      return $scope.activeExercise != 1;
    }

    $scope.goBack = function () {
      $scope.NavigateExercises = true;
      $scope.exerciseView = false;
      delete $scope.activeExercise;
      loadExercise();
    }
  })

  .directive('exerciseView', function () {
    return {
      restrict: 'EA',
      templateUrl: 'app/partials/exerciseView.html',
      controller: 'View1Ctrl'
    }
  })

  .directive('exerciseQuestion', function () {
    return {
      restrict: 'EA',
      templateUrl: 'app/partials/exerciseQuestion.html',
      controller: 'View1Ctrl'
    }
  })

  .directive('exerciseSolution', function () {
    return {
      restrict: 'EA',
      templateUrl: 'app/partials/exerciseSolutions.html',
      controller: 'View1Ctrl'
    }
  })

  .directive('exerciseSolutionOne', function () {
    return {
      restrict: 'EA',
      templateUrl: 'app/partials/exerciseSolutions1.html',
      controller: 'View1Ctrl'
    }
  });

