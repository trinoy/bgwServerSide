(function () {
    angular
        .module("lightWell")
        .factory("wellClusterService", wellClusterService);


    function wellClusterService($http) {

        var api = {
            "getAllClusters": getAllClusters,
            "getWellsForCluster" : getWellsForCluster,
            "addWellInCluster" : addWellInCluster,
            "deleteWellInCluster" : deleteWellInCluster,
            "updateWellInCluster" :updateWellInCluster,
            "updateCluster" : updateCluster,
            "deleteCluster" : deleteCluster

        };

        return api;

        function getAllClusters() {
            var url = "/api/bgw/wellCluster";
            return $http.get(url);
        }

        function getWellsForCluster(wcId) {
            var url = "/api/bgw/wellCluster/" + wcId;
            return $http.get(url);
        }

        function updateCluster(wcId,cluster) {
            var url = "/api/bgw/wellCluster/" + wcId;
            return $http.put(url,cluster);
        }

        function deleteCluster(wcId) {
            var url = "/api/bgw/wellCluster/" + wcId;
            return $http.delete(url);
        }

        function addWellInCluster(wcId,well){
            var url = "/api/bgw/wellCluster/" + wcId +"/well";
            return $http.post(url,well);
        }

        function deleteWellInCluster(wcId,wellId){
            var url = "/api/bgw/wellCluster/" + wcId +"/well/" + wellId ;
            return $http.delete(url);
        }

        function updateWellInCluster(wcId,wellId,well){
            var url = "/api/bgw/wellCluster/" + wcId +"/well/" + wellId;
            return $http.put(url,well);
        }
    }
})();




