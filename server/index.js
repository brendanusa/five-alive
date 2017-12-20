const express = require('express');
const axios = require('axios');
// const bodyParser = require('body-parser');
// const users = require('../database-mongo');
const scraper = require('./scraper');

const app = express();

app.get('/scrape', (req, res) => {
  return scraper.scrape();
})

const test = () => {
  scraper.scrape();
}

app.use(express.static(__dirname + '/../public'));

app.listen(3000, function() {
  console.log('listening on port 3000!');
  test();
});