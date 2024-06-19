const express = require('express');
const controller = require('./controller');
const app = express()
const port = 3002
const pool = require("./connect")
const cors = require("cors");

const db = pool.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/db/list", async (req, res) => {
    //const db = await pool.connect();
    const result = await pool.query("SELECT * FROM tb_book");
    //db.release();

    res.send(result.rows);
});

app.post("/db/insert", async (req, res) => {
    const result = await pool.query(
        "INSERT INTO tb_book(isbn, name, price) VALUES($1, $2, $3)",
        [req.body.isbn, req.body.name, req.body.price]);

    res.send({ result: result });
});

app.put('/db/update/:id', async (req, res) => {
    const result = await pool.query(
        "UPDATE tb_book SET isbn = $1, name = $2, price = $3 WHERE id = $4", [
        req.body.isbn,
        req.body.name,
        req.body.price,
        req.params.id
    ])
    res.send({ result: result });
})

app.delete('/db/delete/:id', async (req, res) => {
    const result = await pool.query(
        "DELETE FROM tb_book WHERE id = $1", [
        req.params.id
    ]);
    res.send({ result: result });
})


app.get('/', (req, res) => controller.getHello(req, res));
app.get('/hello/:name', (req, res) => controller.getHelloName(req, res));
app.post('/hello/myPost', (req, res) => controller.myPost(req, res));
app.put('/hello/myPut/:id', (req, res) => controller.myPut(req, res));
app.delete('/hello/myDelete/:id', (req, res) => controller.myDelete(req, res));
app.post('/hello/postFormJason', (req, res) => controller.postFormJason(req, res));
app.post('/login', (req, res) => controller.login(req, res));

app.get('/myObject', (req, res) => {
    const user = {
        name: 'Adisak',
        age: 22,
        status: true,
        salary: 9000.85
    }

    res.send({ result: user })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})