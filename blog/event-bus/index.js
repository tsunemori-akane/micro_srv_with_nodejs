const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors());

const events = [];
app.post('/events', (req, res) => {
    console.log('haha-4005')
    
    const event = req.body;

    events.push(event);
    console.log("************************************************")
    console.log(events)
    console.log("************************************************")
    axios.post('http://posts-clusterip-srv:4000/events', event);
    axios.post('http://comments-srv:4001/events', event);
    axios.post('http://query-srv:4002/events', event);
    axios.post('http://moderation-srv:4003/events', event);// moderation service

    res.send({
        status:'ok'
    })
})

app.get('/events', (req, res) => {
    res.send(events);
})

app.listen(4005, ()=> {
    console.log('Listening on 4005')
})