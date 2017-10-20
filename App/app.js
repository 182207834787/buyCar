var app = angular.module("myApp", ["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.
        state('car',{
            url:"/car",
            scope:{
                data:"=data"
            },
            templateUrl:"App/View/car.html",
            controller:"carController"
        }).
        state('cars',{
            url:"/cars",
            templateUrl:"App/View/cars.html"
        })
    $urlRouterProvider.otherwise('/car');
});