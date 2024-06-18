module.exports = {
    getHello: (req, res) => {
        res.send('Hello World!')
    },
    getHelloName: (req, res) => {
        res.send("Hello My Name is " + req.params.name)
    },
    myPost: (req, res) => {
        res.send('Hello ' + req.body.name);
    },
    myPut: (req, res) => {
        res.send('id = ' + req.params.id + ' name = ' + req.body.name);
    },
    myDelete: (req, res) => {
        res.send('id = ' + req.params.id);
    },
    postFormJason: (req, res) => {
        res.send(req.body.name + " " + req.body.phone);
    },
    login: (req, res) => {
        try {
            const username = req.body.username;
            const password = req.body.password;

            if (username == 'Admin' && password == 'Admin') {
                res.send({ message: "success" });
            }
            else {
                res.status(401).send({ message: 'unauthorized' });
            }

        } catch (e) {
            res.status(500).send({ message: e.message });
        }
    }
}