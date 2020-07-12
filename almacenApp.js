var appAlmacen = angular.module("almacenApp", ["ngRoute"]);

appAlmacen.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl: "home.html"
    })
    .when("/productos",{
        templateUrl : "productos.html"
    })
    .when("/empleados",{
        templateUrl: "empleados.html"
    })
    .when("/carrito",{
        templateUrl: "carrito.hmtl"
    });
});

appAlmacen.controller("controllerAlmacen", function($scope, $http){

    
        $http.get("https://jsonfy.com/items").then(function(response){
            console.log(response.data);
            $scope.producto = response.data;
        });
    
});

