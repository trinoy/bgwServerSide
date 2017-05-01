module.exports = function (app,model) {

    app.post('/api/bgw/wellCluster', createWellCluster);
    app.get('/api/bgw/wellCluster', getAllCluster);
    app.delete('/api/bgw/wellCluster', removeAllClusters);
    app.get('/api/bgw/wellCluster/:wcId', getWellsForCluster);
    app.put('/api/bgw/wellCluster/:wcId',updateCluster);
    app.delete('/api/bgw/wellCluster/:wcId',deleteCluster);
    app.post('/api/bgw/wellCluster/:wcId/well', addWellInCluster);
    app.delete('/api/bgw/wellCluster/:wcId/well/:wId', deleteWellInCluster);
    app.put('/api/bgw/wellCluster/:wcId/well/:wId', updateWellInCluster);

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


    function addWellInCluster(req, res) {
        var well = req.body;
        var clusterId = req.params.wcId;
        model.wellClusterModel.addWellInCluster(clusterId,well)
            .then(function (well) {
                    res.send(well);
                },
                function (error) {
                    res.sendStatus(400).send(error);

                }
            )
    }


    function updateCluster(req, res) {
        var clusterId = req.params.wcId;
        var cluster = req.body;
        model.wellClusterModel.updateCluster(clusterId,cluster)
            .then(function (status) {
                    res.send(status);
                },
                function (error) {
                    res.sendStatus(400).send(error);

                }
            )
    }

    function deleteCluster(req, res) {
        var clusterId = req.params.wcId;
        model.wellClusterModel.deleteCluster(clusterId)
            .then(function (status) {
                    res.send(status);
                },
                function (error) {
                    res.sendStatus(400).send(error);

                }
            )
    }


    function deleteWellInCluster(req, res) {
        var clusterId = req.params.wcId;
        var wellId = req.params.wId;
        model.wellClusterModel.deleteWellInCluster(clusterId,wellId)
            .then(function (well) {
                    res.send(well);
                },
                function (error) {
                    res.sendStatus(400).send(error);

                }
            )
    }

    function updateWellInCluster(req, res) {
        var clusterId = req.params.wcId;
        var wellId = req.params.wId;
        var well = req.body;
        model.wellClusterModel.updateWellInCluster(clusterId,wellId,well)
            .then(function (well) {
                    res.send(well);
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

    function getWellsForCluster(req, res) {
        var wellCluster = req.params.wcId;
        model.wellClusterModel.getWellsForCluster(wellCluster)
            .then(function (wells) {
                    if (wells) {
                        res.send(wells);
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