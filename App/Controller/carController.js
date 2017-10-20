app.controller('carController',['$scope','carServer',function($scope,carServer){

    carServer.getData().then(function(res){
        $scope.num = 4;
        $scope.data = res.slice(0,$scope.num);
        $scope.change = function(){
            $scope.num += 4;
            $scope.data = res.slice(0,$scope.num);
        }
    });

}]);