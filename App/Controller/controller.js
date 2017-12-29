app.controller('formController', function ($scope) {
    $scope.log = true;
    $scope.reg = false;
    var data = window.localStorage.getItem('data');
    var loguser = document.querySelector('.loguser');
    var logpwd = document.querySelector('.logpwd');
    console.log(loguser, logpwd);
    if (data){
        loguser.value = JSON.parse(data).user;
        logpwd.value = JSON.parse(data).pwd;
    }
    $scope.logClick = function(flag) {
        $scope.log = true;
        $scope.reg = false;
        
    }
    $scope.reClick = function(flag) {
        $scope.log = false;
        $scope.reg = true;
    }
});