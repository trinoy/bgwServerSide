module.exports = function (app,model) {

    app.post('/api/bgw/well', createWell);
    app.get('/api/bgw/well/:wellName', findWellByName);
    app.put('/api/bgw/well/:wellId', updateWellReading);
    app.put('/api/bgw/well/byId/:wellId', updateWellReadingById);
    app.delete('/api/bgw/well/:wellId', deleteWell);

    function createWell(req, res) {
        var well = req.body;
        //var wellId = req.params.wellId;
        model.wellModel.createWell(well)
            .then(function (well) {
                    res.send(well);
                },
                function (error) {
                    res.sendStatus(400).send(err);

                }
            )
    }

    function findWellByName(req, res) {
        //var userId = parseInt(req.params.uid);
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
        var wellId = req.params.wellId;

        model.wellModel.findWellByName(wellId)
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