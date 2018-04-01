(function () {
    angular
        .module("lightWell")
        .factory("wellReadingService", wellReadingService);


    function wellReadingService($http) {

        var api = {
            "getAllWells": getAllWells,
            "updateWell" : updateWell,
            "deleteWell" : deleteWell,
            "createWell" : createWell,
            "updateWellElevation": updateWellElevation
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

        function updateWellElevation(wellId, well){
            var url = "/api/bgw/well/elevation/" +wellId;
            return $http.put(url, well);
        }
    }
})();