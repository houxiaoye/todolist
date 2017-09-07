(function (angular) {
	'use strict';
var myApp=angular.module('MyTodoMvc',[]);
myApp.controller('MainController', ['$scope', function($scope){

	$scope.text='';
	$scope.todos=[
		{id:0.33,text:'学习',completed:false},
		{id:0.15,text:'睡觉',completed:false},
		{id:0.64,text:'打豆豆',completed:false}
	];
	$scope.add=function(){
		if(!$scope.text){
			return;
		}
		$scope.todos.push({
		id:Math.random(),
		text:$scope.text, 
		completed:false
		});
		$scope.text=''; 
	};
	$scope.remove=function(id){
		// $scope.todes
		for(var i=0;i<$scope.todos.length;i++){
			if($scope.todos[i].id===id){
				$scope.todos.splice(i,1);
				break;
			}
		}
	}
	$scope.clear=function(){
		var result=[];
		for(var i=0;i<$scope.todos.length;i++){
			if(!$scope.todos[i].completed){
				result.push($scope.todos[i]);
			}
		}
		$scope.todos=result;
	}

	$scope.existCompleted=function(){
		for(var i=0;i<$scope.todos.length;i++){
			if($scope.todos[i].completed){
				return true;
			}
		}
		return false;
	}

	$scope.currentEditingId=-1;
	$scope.editing=function(id){
		$scope.currentEditingId=id;
	}
	$scope.save=function(){
		$scope.currentEditingId=-1;
	}
	// $scope.checkall=false;
	// $scope.$watch('checkall',function(now,old){
	// 	for(var i=0;i<$scope.todos.length;i++){
	// 		$scope.todos[i].completed=now;
	// 	}
	// })
	var now=true;
	$scope.toggleAll=function(){
		for(var i=0;i<$scope.todos.length;i++){
			$scope.todos[i].completed=now;
		}
		now=!now;
	}
}]);	

})(angular);
 