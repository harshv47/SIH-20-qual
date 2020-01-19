const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const spawn = require('child_process').spawn

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

let MostVisitedSites = ''
app.get("/MostVisitedSites", (req, res) => {
    let data = req.query.data;
    MostVisitedSites = data
    // console.log(MostVisitedSites);
    res.status(200)
});

app.get("/sites", (req, res) => {
    // console.log(MostVisitedSites);
    return res.status(200).send({success: true, msg: MostVisitedSites});
})

let prevdata = undefined;
// let dataValueB = 0
app.get("/SessionRatio", async (req, res) => {
    try {
        let data1 = await req.query.data;
        if(prevdata){
            let confidenceScore = 1000/(data1 - prevdata);
            // console.log(confidenceScore);
            return res.status(200).send({success: true, msg: confidenceScore.toString()});
        }
        prevdata = data1;
    }
    catch (err) {
        console.log(err);
        res.sendStatus(404);
    }
});

 
app.post("/MouseMovementPrediction", async (req, res) => {
    let data = await req.body
    data = JSON.stringify(data)
    py = spawn('python3', ['mouseModel.py', data])
    // py.stdin.write(JSON.stringify(data));
    // py.stdin.end();
    py.stdout.on('data', function(data){
        data = data.toString();
        data = data - '\n'
        console.log(data)
        return res.status(200).send({success: true, msg: `${data}`});
    });
});

app.listen(3000, () => console.log('Started at port 3000'));