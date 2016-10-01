'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version','slide','ngMaterial','ngAnimate','ngRoute','ngMessages'
])
.controller('placeController',['$scope','$window',function($scope,$window) {
		function init(){
			$scope.currentStep = -1;
		}
		init();
		$scope.fromIndex = function(){
			$scope.currentStep = $scope.currentStep + 1;
			$window.location.href = './index.html#page2';

		}
		$scope.transitRight = function(currentPage,currentSlide){
			$scope.currentStep = $scope.currentStep+1;
			$scope.fromIndex = false;
		}
		$scope.transitLeft = function(currentPage,currentSlide){
			$scope.currentStep = $scope.currentStep-1;	
			if($scope.currentStep === 0){
				$scope.fromIndex = true;		
			}
		}
		$scope.key = function($event,currentPage,currentSlide){
		    
		    if ($event.keyCode == 38)
		        console.log("up arrow");
		    else if ($event.keyCode == 39)
		        $scope.transitRight(currentPage,currentSlide);
		    else if ($event.keyCode == 40)
		        console.log("down arrow");
		    else if ($event.keyCode == 37)
		        $scope.transitLeft(currentPage,currentSlide);
		}
}]);
