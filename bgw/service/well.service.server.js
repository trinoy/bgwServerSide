module.exports = function (app,model) {

    app.post('/api/bgw/well', createWell);
    app.post('/api/bgw/wellBatch', createWellBatch);
    app.get('/api/bgw/well/:wellName', findWellByName);
    app.get('/api/bgw/well/lastReading/:wellName', findLastWellReadingByName);
    app.put('/api/bgw/well/:wellId', updateWellReading);
    app.put('/api/bgw/well/byId/:wellName', updateWellReadingById);
    app.delete('/api/bgw/well/:wellId', deleteWell);

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
};