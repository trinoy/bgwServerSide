(function () {
    angular
        .module("lightWell")
        .factory("wellReadingService", wellReadingService);


    function wellReadingService($http) {

        var api = {
            "getAllWells": getAllWells,
            "updateWell" : updateWell,
            "deleteWell" : deleteWell,
            "createWell" : createWell
        };

        return api;

        function createWell(well) {
            var url = "/api/bgw/well";
            return $http.post(url,well);
        }

        function getAllWells() {
            var url = "/api/bgw/well";
            return $http.get(url);
        }

        function deleteWell(wellId) {
            var url = "/api/bgw/well/" + wellId;
            return $http.delete(url);
        }


        function updateWell(wellId,well) {
            var url = "/api/bgw/wellMain/" + wellId;
            return $http.put(url,well);
        }
    }
})();




/*

 Blogger is a blog-publishing service that allows multi-user blogs with time-stamped entries. It was developed by Pyra Labs which was brough by google in 2003. Generally, the blogs are hosted by Google at the subdomain blogspot.com. Blogs can also be hosted in the registered custom domain of the user (like www.example.com). A user can have upto 100 blogs per account. He can use multiple accounts to host further
 */