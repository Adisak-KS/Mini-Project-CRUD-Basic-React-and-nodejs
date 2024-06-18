const express = require('express');
const controller = require('./controller');
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => controller.getHello(req, res));
app.get('/hello/:name', (req, res) => controller.getHelloName(req, res));
app.post('/hello/myPost', (req, res) => controller.myPost(req, res));
app.put('/hello/myPut/:id', (req, res) => controller.myPut(req, res));
app.delete('/hello/myDelete/:id', (req, res) => controller.myDelete(req, res));
app.post('/hello/postFormJason', (req, res) => controller.postFormJason(req, res));
app.post('/login', (req, res) => controller.login(req, res));

app.get('/myObject', (req, res) =>{
    const user = {
        name: 'Adisak',
        age: 22,
        status: true,
        salary: 9000.85
    }

    res.send({result:user})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})