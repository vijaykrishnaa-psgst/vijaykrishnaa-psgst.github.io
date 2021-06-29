'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'app/view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', function ($scope) {
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

    $scope.showNext = function(){
      return  $scope.activeExercise != Object.keys($scope.exercises).length;
    }

    $scope.goToPrevious = function (currentKey) {
      $scope.goToExercise(parseInt(currentKey) - 1);
    }

    $scope.showPrevious = function(){
      return  $scope.activeExercise != 1;
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
      templateUrl: 'app/partials/exerciseView.html'
    }
  })

  .directive('exerciseQuestion', function () {
    return {
      restrict: 'EA',
      templateUrl: 'app/partials/exerciseQuestion.html'
    }
  })

  .directive('exerciseSolution', function () {
    return {
      restrict: 'EA',
      templateUrl: 'app/partials/exerciseSolutions.html'
    }
  });