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

    $http.get('/app/user').success(function(response) {
     $scope.user = response;
var username =  response.login;
      $http.get('/app/Courses/' +username).success(function(response){
      $scope.Courses = response; 

     });

    });
 

   };



   var Ocultaraccion=function(){

    for (var i = $scope.Courses.length - 1; i >= 0; i--) {
      $('#'+$scope.Courses[i]._id).attr('style','display:none');
    }

  };
  $scope.accion=function(id){
    Ocultaraccion();
    $('#'+id).removeAttr("style");

  };

}]);