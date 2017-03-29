module.exports = function (app,model) {

    app.post('/api/bgw/wellCluster', createWellCluster);
    app.get('/api/bgw/wellCluster', getAllCluster);
    app.delete('/api/bgw/wellCluster', removeAllClusters)

    function createWellCluster(req, res) {
        var wellClusters = req.body.clusters;
        //var wellId = req.params.wellId;
        model.wellClusterModel.createCluster(wellClusters)
            .then(function (wellClusters) {
                    res.send(wellClusters);
                },
                function (error) {
                    res.sendStatus(400).send(error);

                }
            )
    }

    function getAllCluster(req, res) {
        model.wellClusterModel.getAllWellClusters()
            .then(function (wellClusters) {
                    if (wellClusters) {
                        res.send(wellClusters);
                    }
                    else {
                        res.send('0');
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);

                }
            )
    }

    function removeAllClusters(req, res) {
        //var wellClusters = req.body.clusters;
        //var wellId = req.params.wellId;
        model.wellClusterModel.removeAllClusters()
            .then(function (results) {
                    res.send(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);

                }
            )
    }



};