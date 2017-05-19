(function () {
    angular
        .module("lightWell")
        .config(Config);

    function Config($routeProvider,$httpProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "../views/landing.html"
            })
            .when("/wellCluster", {
                templateUrl: "../views/wellClustersList.view.client.html",
                controller: "wellClusterController",
                controllerAs: "model"
            })
            .when("/wellReading", {
                templateUrl: "../views/wellsReadingList.view.client.html",
                controller: "wellsReadingListController",
                controllerAs: "model"
            })
            .when("/wellReading/new", {
                templateUrl: "../views/wellsReadingNew.view.client.html",
                controller: "wellsReadingNewController",
                controllerAs: "model"
            })


            .when("/newWell/:wcId", {
                templateUrl: "../views/wellsNew.view.client.html",
                controller: "newWellController",
                controllerAs: "model"
            })
            .when("/aboutUs", {
                templateUrl: "../views/aboutUs.view.client.html",
                controller: "aboutUsController",
                controllerAs: "model"
            })
            .when("/:wcId", {
                templateUrl: "../views/wellsInClusterList.view.client.html",
                controller: "wellClusterWellController",
                controllerAs: "model"
            })



            /*.otherwise({
                redirectTo: "/"
            });*/
    }
})();
