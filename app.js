const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001
const routes = require('./routes')
var AWS = require('aws-sdk');
const uuidv1 = require('uuid/v1');

var s3 = new AWS.S3({accessKeyId: process.env.AWSID , secretAccessKey:process.env.AWSSECRET, region:'us-east-2'});


// create get route for the aws url
// then make request to route with react native to get url
// upload image to url
// send post request to server to save the image id

app.get('/aws', (req, res) => {

  var id = uuidv1();
  let params = {
    Bucket: 'golocal-capstone',
    Key: id + '.jpg',
    ContentType: 'image/jpeg'
  }

  s3.getSignedUrl('putObject', params, function (err, url) {
    res.json({url})
  });
})


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', routes)


app.listen(port, (req, res) => {
  console.log('listening', port)
})
