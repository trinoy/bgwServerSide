(function () {
    angular
        .module("lightWell")
        .factory("aboutUsService", aboutUsService);


    function aboutUsService($http) {

        var api = {
            "getAboutUs": getAboutUs,
            "updateAboutUs":updateAboutUs
        };

        return api;

        function getAboutUs() {
            var url = "/api/bgw/aboutUs/bgw";
            return $http.get(url);
        }

        function updateAboutUs(aboutUsId,aboutUs) {
            var url = "/api/bgw/aboutUs/" + aboutUsId;
            return $http.put(url,aboutUs);
        }
    }
})();


