(function () {
    angular
        .module("lightWell")
        .controller("wellClusterController", wellClusterController)
        .controller("wellClusterWellController", wellClusterWellController)
        .controller("newWellController", newWellController)
        .controller("aboutUsController", aboutUsController);


    function wellClusterController(wellClusterService,$route) {
        var vm = this;

        function init() {
            wellClusterService.getAllClusters()
                .success(function (clusters) {
                    vm.clusters = clusters;
                })
                .error(function (data) {
                    console.log(data);
                });
        }

        init();
        vm.fillClusterData = function (cluster) {
            vm.currentCluster = cluster;
        };


        vm.updateCluster = function () {
            wellClusterService.updateCluster(vm.currentCluster._id, vm.currentCluster)
                .success(function (status) {
                    $route.reload();

                })
                .error(function (error) {
                    console.log(error);
                });
        };


        vm.deleteCluster = function () {
            wellClusterService.deleteCluster(vm.currentCluster._id)
                .success(function (status) {
                    $route.reload();

                })
                .error(function (error) {
                    console.log(error);
                });
        }


    }

    function wellClusterWellController($routeParams, wellClusterService, $route) {
        var vm = this;
        vm.clusterId = $routeParams["wcId"];
        function init() {
            wellClusterService.getWellsForCluster(vm.clusterId)
                .success(function (cluster) {
                    vm.cluster = cluster;
                })
                .error(function (data) {
                    console.log(data);
                });
        }

        init();

        vm.fillWellData = function (well) {
            vm.currentWell = well;
        };

        vm.removeWell = function () {
            wellClusterService.deleteWellInCluster(vm.clusterId, vm.currentWell._id)
                .success(function (status) {
                    $route.reload();

                })
                .error(function (error) {
                    console.log(error);
                });
        };

        vm.updateWell = function () {
            wellClusterService.updateWellInCluster(vm.clusterId, vm.currentWell._id, vm.currentWell)
                .success(function (status) {
                    $route.reload();

                })
                .error(function (error) {
                    console.log(error);
                });
        }

    }

    function newWellController($routeParams, wellClusterService, $location) {
        var vm = this;
        vm.clusterId = $routeParams["wcId"];
        vm.currentWell = {};
        function init() {
            wellClusterService.getWellsForCluster(vm.clusterId)
                .success(function (cluster) {
                    vm.cluster = cluster;
                })
                .error(function (data) {
                    console.log(data);
                });
        }

        init();

        vm.addWell = function () {
            wellClusterService.addWellInCluster(vm.clusterId, vm.currentWell)
                .success(function (status) {
                    $location.url("/" + vm.clusterId);
                })
                .error(function (error) {
                    console.log(error);
                });
        }
    }

    function aboutUsController(aboutUsService,$route) {
        var vm = this;

        function init() {
            aboutUsService.getAboutUs()
                .success(function (aboutUsInfo) {
                    vm.aboutUs = aboutUsInfo;
                })
                .error(function (data) {
                    console.log(data);
                });
        }

        init();

        vm.updateAboutUs = function () {
            aboutUsService.updateAboutUs(vm.aboutUs._id, vm.aboutUs)
                .success(function (status) {
                    $route.reload();
                })
                .error(function (data) {
                    console.log(data);
                });
        }
    }

})();