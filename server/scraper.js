const cheerio = require('cheerio');
const axios = require('axios');

const scrape = () => {

  url = 'https://www.sports-reference.com/cbb/seasons/2018-ratings.html';
  

  axios.get(url)
    .then(res => {
      let $ = cheerio.load(res.data);
      var data = {};
      $('#ratings tbody').children('tr').not('.over_header thread').not('.thead').each((i, row) => {
        const teamObj = {};
        teamObj.wins = parseInt(row.childNodes[4].children[0].data);
        teamObj.losses = parseInt(row.childNodes[5].children[0].data);
        teamObj.conference = row.childNodes[2].childNodes[0].children[0].data;
        data[row.childNodes[1].childNodes[0].children[0].data] = teamObj;
      })
      return data;
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log('there has been an error: ', err)
    });

}

module.exports.scrape = scrape;