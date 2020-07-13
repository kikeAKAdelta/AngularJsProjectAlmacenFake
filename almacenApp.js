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
    .when("/pedido",{
        templateUrl: "pedido.html"
    });
});

appAlmacen.controller("controllerAlmacen", function($scope, $http){

    //------data api img-----
        $http.get("https://jsonfy.com/items").then(function(response){
            $scope.producto = response.data;
        });

        //---- data api empleados------

        $http.get("http://dummy.restapiexample.com/api/v1/employees").then(function(response){
            
            $scope.empleado = response.data.data;
        });

    //------ compra carrito-----

        $scope.carrito = [];
        $scope.isPedido = true;
        $scope.addCarrito = function(index){
            //recorremos json
            for(let i in $scope.producto){
                
                if($scope.producto[i].id == index){
                    console.log(index);
                    console.log($scope.producto[i].id.indexOf(index));

                    if($scope.carrito.length === 0 ){

                        $scope.carrito.push($scope.producto[i]);
                        alert("Has añadido a tu carrito " + $scope.producto[i].name +
                        " ve a la pestaña de pedido");
                        $scope.isPedido = false;
                        
                    }else {
                        console.log($scope.carrito);

                        for(let j in $scope.carrito){
                            if($scope.carrito[j].id.indexOf(index) == -1){

                                console.log($scope.carrito.length);
                                $scope.carrito.push($scope.producto[i]);
                                alert("Has añadido a tu carrito " + $scope.producto[i].name +
                                " ve a la pestaña de pedido");
                                $scope.isPedido = false;
                            }else{
                                console.log("repetido");
                                $scope.total = $scope.total + parseFloat($scope.carrito[i].price);
                            }
                        }
                        

                    }
                    }
                }
            
        }

        $scope.getTotal = function(){
            $scope.total =0;
            for(let i in $scope.carrito){
                $scope.total = $scope.total + parseFloat($scope.carrito[i].price);
            }
            return $scope.total;
        }
    
});

