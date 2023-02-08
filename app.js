const express = require ('express');
const redis = require('redis');
const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
})

//Set initial visits
client.set('visits', 0);

//defining the root endpoint
app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is: ' + visits + 1)
        client.set('visits', parseInt(visits) + 1)
    })
})

const post = require('./routes/post');
const hoganMiddleware = require('hogan-middleware');
const path = require('path');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','mustache');

app.engine('mustache', hoganMiddleware.__express);

//app.get('/', post.createPost);

app.use(post);
app.use((req,res,next)=>{
	res.status(404);
	res.send('<h1>Page not found</h1>');

});


//app.get('/home', (req, res, next) =>{

	//res.render('home',null);
//})



const port = "8888";
const host = "0.0.0.0";
app.listen( port,host);
console.log(`Node Js Server is running on the host: ${host} on the port: ${port}`);

