var myapp = angular.module('myapp',[]);
//console.log(myapp);

myapp.controller('MyCtrl',['$scope', 'AppService',
    function($scope, AppService){

        AppService.getStudents().then(function(result){

            $scope.students = result.data.map(function(item){
                item.seniority = item.age>10? "Senior" : "Junior";
                return item;
            });
        })

      //$scope.students = AppService.getStudents();

       $scope.onClick = function(students){
        $scope.selected = students;
    };
    
    
   
    }]); //Dependency Injection