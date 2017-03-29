module.exports = function (app,model) {

    app.post('/api/bgw/aboutUs', createAboutUs);
    app.get('/api/bgw/aboutUs/:aboutUsName', getAboutUs);
    app.delete('/api/bgw/aboutUs/:aboutUsId', deleteAboutUs);

    function getAboutUs(req, res) {
        var aboutUsName = req.params.aboutUsName;
        model.aboutUsModel.findAboutUs(aboutUsName)
            .then(function (aboutUsName) {
                    if (aboutUsName) {
                        res.send(aboutUsName);
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

    function createAboutUs(req, res) {
        var aboutUs = req.body;
        model.aboutUsModel.createAboutUs(aboutUs)
            .then(function (aboutUs) {
                    res.send(aboutUs);
                },
                function (error) {
                    res.sendStatus(400).send(error);

                }
            )
    }

    function deleteAboutUs(req, res) {
        var aboutUsId = req.params.aboutUsId;

        model.aboutUsModel.deleteAboutUs(aboutUsId)
            .then(function (aboutUs) {
                    if (aboutUs) {
                        res.send(aboutUs);
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



