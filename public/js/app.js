var app=angular.module('myapp',[]);
app.run(function($rootScope,base_url){
    $rootScope.base_url=base_url;
});
