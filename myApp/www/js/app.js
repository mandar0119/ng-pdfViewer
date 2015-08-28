// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'pdf-viewer', 'ngPDFViewer'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('TestCtrl', [ '$scope', 'PDFViewerService', function($scope, pdf) {
    console.log("TestCtrl");
    $scope.viewer = pdf.Instance("viewer");
    console.log($scope.viewer);

    $scope.nextPage = function() {
        $scope.viewer.nextPage();
    };

    $scope.prevPage = function() {
        $scope.viewer.prevPage();
    };

    $scope.setScale = function(v) {
        console.log(v);
        $scope.instance.setScale(v);
    };

    $scope.pageLoaded = function(curPage, totalPages) {
        $scope.currentPage = curPage;
        $scope.totalPages = totalPages;
    };

    $scope.changeZoom = function(zoomLevel) {
        $scope.viewer.changeZoom(zoomLevel);
    };
}]);