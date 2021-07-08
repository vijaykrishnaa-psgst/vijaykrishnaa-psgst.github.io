'use strict';

var myApp = angular.module('myApp.view1', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

myApp.controller('View1Ctrl', function ($scope) {

  // Exercise 3 
  function getCurrentWeekNumber(currentYear) {
    return Math.ceil(((new Date() - new Date(currentYear, 0, 1) + 86400000) / 86400000) / 7);
  }

  function returnWeekCount(year, isLifeExpectancy) {
    var currentYear = new Date().getFullYear();
    var weekCount = (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) ? 366 / 7 : 365 / 7;
    if (year == currentYear && !isLifeExpectancy) return getCurrentWeekNumber(currentYear);
    if (year == currentYear && isLifeExpectancy) return weekCount - getCurrentWeekNumber(currentYear);
    return weekCount;
  }

  function weeksCompletedSoFar(age) {
    var totalWeekCount = 0;
    var currentYear = new Date().getFullYear();
    var birthYear = currentYear - age;
    for (var year = birthYear; year <= currentYear; year++) {
      totalWeekCount += returnWeekCount(year);
    }
    return totalWeekCount;
  }

  function lifeExpectancy(age) {
    var totalWeekCount = 0;
    var currentYear = new Date().getFullYear();
    var expectedYear = currentYear + (69.42 - age);
    if (currentYear == expectedYear) return totalWeekCount;
    for (var year = currentYear; year <= expectedYear; year++) {
      totalWeekCount += returnWeekCount(year, true);
    }
    return totalWeekCount;
  }

  $scope.calculateWeeks = function (age) {
    $scope.weeksCompleted = weeksCompletedSoFar(age);
    $scope.weeksLeft = lifeExpectancy(age);
    $scope.percentageCompleted = (age / 69.42) * 100;
  }

  // Exercise 4
  $scope.avatarUrl = "https://miro.medium.com/max/1176/1*15CYVZdpsxir8KLdxEZytg.png";

  // Exercise 5
  $scope.profileName1 = "Sachin Tendulkar";
  $scope.profileUrl1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg/260px-Sachin_Tendulkar_at_MRF_Promotion_Event.jpg";
  $scope.description1 = `Sachin Ramesh Tendulkar is an Indian former international cricketer who served as captain of the Indian national team.
                           He is widely regarded as one of the greatest batsmen in the history of cricket. He is the highest run scorer of all time in international cricket, and 
                           the only player to have scored one hundred international centuries.`;

  // Exercise 6
  $scope.profileName2 = "Sachin Tendulkar";
  $scope.profileUrl2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg/260px-Sachin_Tendulkar_at_MRF_Promotion_Event.jpg";
  $scope.description2 = `Sachin Ramesh Tendulkar is an Indian former international cricketer who served as captain of the Indian national team.
                           He is widely regarded as one of the greatest batsmen in the history of cricket. He is the highest run scorer of all time in international cricket, and 
                           the only player to have scored one hundred international centuries.`;

})

myApp.controller('profileController', function ($scope) {
  // Exercise 7
  $scope.profileName2 = "Sachin Tendulkar";
  $scope.profileUrl2 = "https://i.guim.co.uk/img/media/e48964955c4ae13e460e56a0a550097208637bbd/0_286_4365_2619/master/4365.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=782322cd3e077855b0a5cf874a79afdb";
  $scope.description2 = `Sachin Ramesh Tendulkar is an Indian former international cricketer who served as captain of the Indian national team.
                           He is widely regarded as one of the greatest batsmen in the history of cricket. He is the highest run scorer of all time in international cricket, and 
                           the only player to have scored one hundred international centuries.`;
})

myApp.controller('calculatorController', function ($scope) {
  // Exercise 8
  $scope.setNumbers = function () {
    $scope.number1 = 0;
    $scope.number2 = 0;
  }
})

myApp.controller('profileController1', function ($scope) {
  // Exercise 9
  $scope.profileName2 = "Sachin Tendulkar";
  $scope.profileUrl2 = "https://i.guim.co.uk/img/media/e48964955c4ae13e460e56a0a550097208637bbd/0_286_4365_2619/master/4365.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=782322cd3e077855b0a5cf874a79afdb";
  $scope.description2 = `Sachin Ramesh Tendulkar is an Indian former international cricketer who served as captain of the Indian national team.
                           He is widely regarded as one of the greatest batsmen in the history of cricket. He is the highest run scorer of all time in international cricket, and 
                           the only player to have scored one hundred international centuries.`;
})

myApp.controller('profileController2', function ($scope) {
  // Exercise 9
  $scope.profileName2 = "AngularJs";
  $scope.profileUrl2 = "https://miro.medium.com/max/1176/1*15CYVZdpsxir8KLdxEZytg.png";
  $scope.description2 = `AngularJS is a very powerful JavaScript Framework. It is used in Single Page Application (SPA) projects. 
                           It extends HTML DOM with additional attributes and makes it more responsive to user actions. 
                           AngularJS is open source, completely free, and used by thousands of developers around the world. 
                           It is licensed under the Apache license version 2.0.`;
})

myApp.controller('profileController3', function ($scope) {
  // Exercise 9
  $scope.profileName2 = "";
  $scope.profileUrl2 = "";
  $scope.description2 = "";
})

myApp.controller('profileController4', function ($scope) {
  // Exercise 10
  $scope.profile = {
    name: "Sachin Tendulkar",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg/260px-Sachin_Tendulkar_at_MRF_Promotion_Event.jpg",
    description: `Sachin Ramesh Tendulkar is an Indian former international cricketer who served as captain of the Indian national team.
      He is widely regarded as one of the greatest batsmen in the history of cricket. He is the highest run scorer of all time in international cricket, and 
      the only player to have scored one hundred international centuries.`
  };
})

myApp.controller('profileController5', function ($scope) {
  // Exercise 10
  $scope.profile = {
    name: "Sachin Tendulkar",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg/260px-Sachin_Tendulkar_at_MRF_Promotion_Event.jpg",
    description: `Sachin Ramesh Tendulkar is an Indian former international cricketer who served as captain of the Indian national team.
      He is widely regarded as one of the greatest batsmen in the history of cricket. He is the highest run scorer of all time in international cricket, and 
      the only player to have scored one hundred international centuries.`
  };
})

myApp.controller('dataStoreController', function ($scope) {
  // Exercise 11
  var vm = $scope.vm = this;
  vm.profile = {
    name: "AngularJs",
    url: "https://miro.medium.com/max/1176/1*15CYVZdpsxir8KLdxEZytg.png",
    description: `AngularJS is a very powerful JavaScript Framework. It is used in Single Page Application (SPA) projects. 
      It extends HTML DOM with additional attributes and makes it more responsive to user actions. 
      AngularJS is open source, completely free, and used by thousands of developers around the world. 
      It is licensed under the Apache license version 2.0.`,
  };
})

myApp.controller('watchController', function ($scope) {
  // Exercise 12
  $scope.person = {
    name: "Guido van Rossum",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Guido-portrait-2014-drc.jpg/220px-Guido-portrait-2014-drc.jpg",
    description: `Guido van Rossum is a Dutch programmer best known as the creator of the Python programming language, 
                    for which he was the "benevolent dictator for life" (BDFL) until he stepped down from the position in July 2018.`,
    addEmail: true,
    email: "guido@python.org",
    addContact: true,
    contact: 1234567890,
  };

  $scope.$watch("person.name", function (newVal, oldVal) {
    $scope.errors = newVal ? false : { name: "should not be blank." };
  });
})

myApp.controller('ngDialogController', function ($scope, ngDialog) {
  // Exercise 13
  $scope.openDialog = function () {
    ngDialog.open({
      template: '<p class="h2 m-5">Plain Theme Dialog Box Opened</p>',
      className: 'ngdialog-theme-plain',
      plain: true,
      scope: $scope
    });
  }
})

myApp.controller('ngDialogController1', ngDialogController1)
ngDialogController1.$inject = ["$scope", "ngDialog"]
function ngDialogController1($scope, ngDialog) {
  // Exercise 14

  $scope.openDialog = function () {
    ngDialog.open({
      template: '<p class="h2 m-5">Plain Theme Dialog Box Opened</p>',
      className: 'ngdialog-theme-plain',
      plain: true,
      scope: $scope
    });
  }

  $scope.openDefaultDialog = function () {
    ngDialog.open({
      template: '<p class="h2 m-5">Default Theme Dialog Box Opened</p>',
      className: 'ngdialog-theme-default',
      plain: true,
      scope: $scope
    });
  }
}

myApp.controller('henchmenController', henchmenController)
henchmenController.$inject = ["$scope"]
function henchmenController($scope) {
  // Exercise 15, 16, 17
  $scope.henchmens = [
    { id: 1, name: "Luca Brasi", from: "The Godfather", year: 1972, skill: "Dismembering" },
    { id: 2, name: "Bellatrix Lestrange", from: "Harry Potter", year: 2007, skill: "Cruciatus Curse" },
    { id: 3, name: "Gogo Yubari", from: "Kill Bill", year: 2003, skill: "Swordmanship" },
    { id: 4, name: "Oddjob", from: "Goldfinger", year: 1964, skill: "Archery" },
    { id: 5, name: "Xenia Onatopp", from: "Goldeneye", year: 1995, skill: "Judo" },
    { id: 6, name: "Count Tyrone Rugen", from: "Princess Bride", year: 1987, skill: "Swordmanship" },
    { id: 7, name: "Byron Hadley", from: "The Shawshank Redemption", year: 1994, skill: "Expertise in combat" },
    { id: 8, name: "Major Arnold Toht", from: "Raiders Of The Lost Ark", year: 1981, skill: "Interrogation" },
    { id: 9, name: "Bob The Goon", from: "Batman", year: 1989, skill: "Marksmanship" },
    { id: 10, name: "Fritz", from: "Frankenstein", year: 1931, skill: "Torturing" },
  ]

  // Exercise 17
  $scope.ascending = true;
  $scope.descending = false;
  $scope.order = "id";
  var currentOrder = 1;

  $scope.sortBy = function (value) {
    $scope.order = $scope.descending ? "-" + value : value;
  }
  $scope.orderBy = function (value) {
    $scope.ascending = (value == 1) ? true : false;
    $scope.descending = (value == -1) ? true : false;
    if ($scope.ascending) $scope.sortBy((currentOrder == value) ? $scope.order : $scope.order.slice(1))
    if ($scope.descending) $scope.sortBy((currentOrder == value) ? $scope.order.slice(1) : $scope.order)
    currentOrder = value;
  }
  $scope.isSelected = function (value) {
    return $scope.order.includes(value);
  }
}
