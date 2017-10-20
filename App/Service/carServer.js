app.factory('carServer',['baseServer',function(baseServer){
    return{
        getData:function(){
            return baseServer.ajax('get','./Data/car.json');
        }
    }
}]);