module.exports = function (app,model) {

    app.post('/api/bgw/guides', createGuides);
    app.get('/api/bgw/guides/:name', getGuides);
    app.delete('/api/bgw/guides/:id', deleteGuides);

    function getGuides(req, res) {
        var guideName = req.params.name;
        model.guideModel.findGuides(guideName)
            .then(function (guideName) {
                    if (guideName) {
                        res.send(guideName);
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

    function createGuides(req, res) {
        var guides = req.body;
        model.guideModel.createGuides(guides)
            .then(function (guides) {
                    res.send(guides);
                },
                function (error) {
                    res.sendStatus(400).send(error);

                }
            )
    }

    function deleteGuides(req, res) {
        var guideId = req.params.id;

        model.guideModel.deleteGuides(guideId)
            .then(function (success) {
                    if (success) {
                        res.send(success);
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



