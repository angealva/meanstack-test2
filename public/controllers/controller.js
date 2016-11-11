var validacion = angular.module('validacion',[]);
validacion.controller('validacionControler', ['$scope', '$http', function($scope, $http){

 var refresh = function() {
  $http.get('/app/user').success(function(response) {
   $scope.user = response;
  });
 };

 refresh();

 

 $scope.logout = function() {
  $scope.logout = "/";
  $http.get('/app/logout').success(function(response) {
   $scope.user = "";
  });
 }


 $scope.Listar = function(){

     $http.get('/app/Courses').success(function(response){
        $scope.Courses = response;   
     });
   };


  $scope.accion=function(){

  };

}]);