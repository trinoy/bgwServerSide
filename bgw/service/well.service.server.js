module.exports = function (app,model) {

    app.post('/api/bgw/well', createWell);
    app.post('/api/bgw/wellBatch', createWellBatch);
    app.get('/api/bgw/well', getAllWells);
    app.delete('/api/bgw/well', deleteAllWells);
    app.get('/api/bgw/well/:wellName', findWellByName);
    app.get('/api/bgw/well/lastReading/:wellName', findLastWellReadingByName);
    app.put('/api/bgw/well/:wellId', updateWellReading);
    app.put('/api/bgw/well/byId/:wellName', updateWellReadingById);
    app.delete('/api/bgw/well/:wellId', deleteWell);
    app.put('/api/bgw/wellMain/:wellId', updateWell);
    app.put('/api/bgw/well/elevation/:wellId', updateWellElevation);

    function createWell(req, res) {
        var well = req.body;
        //var wellId = req.params.wellId;
        model.wellModel.createWell(well)
            .then(function (well) {
                    res.send(well);
                },
                function (error) {
                    res.sendStatus(400).send(error);

                }
            )
    }

    function getAllWells(req, res) {
        model.wellModel.findAllWells()
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


    function createWellBatch(req, res) {
        var wells = req.body;
        //var wellId = req.params.wellId;
        model.wellModel.createWellBatch(wells)
            .then(function (result) {
                    res.send(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);

                }
            )
    }

    function findWellByName(req, res) {
        var wellName = req.params.wellName;
        model.wellModel.findWellByName(wellName)
            .then(function (well) {
                    if (well) {
                        res.send(well);
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

    function findLastWellReadingByName(req, res) {
        var wellName = req.params.wellName;
        model.wellModel.findLastWellReadingByName(wellName)
            .then(function (well) {
                    if (well) {
                        res.send(well);
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


    // ignore this. this is only written for testing purpose.
    // client will call updateWellReadingById below
    function updateWellReading(req, res) {
        var wellReading = req.body;
        var wellId = req.params.wellId;
        model.wellModel.updateWellReading(wellId, wellReading)
            .then(function (well) {
                    if (well) {
                        res.send(well);
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

    function updateWellReadingById(req, res) {
        var wellReading = req.body;
        var wellName = req.params.wellName;

        model.wellModel.findWellByName(wellName)
            .then(function (well) {
                if (well) {
                    model.wellModel.updateWellReading(well._id, wellReading)
                        .then(function (well) {
                                if (well) {
                                    res.send(well);
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
                else {
                    res.send('0');
                }
            },
            function (error) {
                res.sendStatus(400).send(error);

            }
        )

    }

    function deleteWell(req, res) {
        var wellId = req.params.wellId;

        model.wellModel.deleteWell(wellId)
            .then(function (well) {
                    if (well) {
                        res.send(well);
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

    function updateWell(req, res) {
        var wellId = req.params.wellId;
        var well = req.body;
        model.wellModel.updateWell(wellId,well)
            .then(function (status) {
                    if (status) {
                        res.send(status);
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

    function updateWellElevation(req, res) {
        var wellId = req.params.wellId;
        var elevation = req.body.elevation;
        model.wellModel.updateWellElevation(wellId,elevation)
            .then(function (status) {
                    if (status) {
                        res.send(status);
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

    function deleteAllWells(req, res) {
        model.wellModel.deleteAllWells()
            .then(function (well) {
                    if (well) {
                        res.send(well);
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
};