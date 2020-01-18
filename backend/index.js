const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.get("/", (req, res) => {
    res.send('Hello');
})

app.get("/score", (req, res) => {
    let data1 = req.query.data;
    console.log(data1);
    res.sendStatus(200);
});

let prevdata = undefined;
app.get("/ratio", async (req, res) => {
    try {
        let data1 = await req.query.data;
        if(prevdata) console.log(prevdata - data1);
        prevdata = data1;
        res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
    }
});


app.listen(3000);