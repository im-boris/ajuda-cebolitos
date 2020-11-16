var app = angular.module("chamados.app", []);

var controller = function($http) {

    var vm = this;

    vm.listaChamados = obterListaChamados();

    function obterListaChamados() {

        $http.get("http://localhost:1234"+"/obterListaChamados").then((resp) => {
            vm.listaChamados = resp.data.listaChamados;
        });

    }
    
};

controller.$inject = ["$http"];

app.controller("chamados.controller", controller)