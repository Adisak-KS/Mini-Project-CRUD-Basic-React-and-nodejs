const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World555!')
})

app.get('/hello/:name', (req, res) => {
    res.send("Hello My Name is " + req.params.name)
})

app.post('/hello/myPost', (req, res) => {
    res.send('Hello ' + req.body.name);
})

app.put('/hello/myPut/:id', (req, res) => {
    res.send('id = ' + req.params.id + ' name = ' + req.body.name);
});

app.delete('/hello/myDelete/:id', (req, res) => {
    res.send('id = ' + req.params.id)
})

app.post('/hello/postFormJason', (req, res) => {
    res.send(req.body.name + " " + req.body.phone);
})

app.post('/login', (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        if (username == 'Admin' && password == 'Admin') {
            res.send({ message: "success" });
        }
        else{
            res.status(401).send({ message: 'unauthorized' });
        }

    } catch (e) {
        res.status(500).send({ message: e.message });
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})