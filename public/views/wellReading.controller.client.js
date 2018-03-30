(function () {
    angular
        .module("lightWell")
        .controller("wellsReadingListController", wellsReadingListController)
        .controller("wellsReadingNewController", wellsReadingNewController);


    function wellsReadingListController(wellReadingService,$route) {
        var vm = this;

        function init() {
            wellReadingService.getAllWells()
                .success(function (wells) {
                    vm.wells = wells;
                })
                .error(function (data) {
                    console.log(data);
                });
        }

        init();

        vm.fillWellData = function(well){
            vm.currentWell = well;
        };

        vm.deleteWellReading = function(){
            wellReadingService.deleteWell(vm.currentWell._id)
                .success(function (status) {
                    $route.reload();
                })
                .error(function (data) {
                    console.log(data);
                });
        };

        vm.updateWellReading = function(){
            wellReadingService.updateWell(vm.currentWell._id,vm.currentWell)
                .success(function (status) {
                    $route.reload();
                })
                .error(function (data) {
                    console.log(data);
                });
        }

    }


    function wellsReadingNewController(wellReadingService,$location) {
        var vm = this;
        vm.addWell = function () {
            wellReadingService.createWell(vm.currentWell)
                .success(function (status) {
                    $location.url("/wellReading");
                })
                .error(function (error) {
                    console.log(error);
                });
        }
    }

})();