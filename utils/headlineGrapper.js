const axios = require('axios')
require('dotenv').config()
module.exports = async () => {


  const results = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`)


  const {articles} = results.data;
  console.log(typeof articles)


  const headlines = articles.map((index) => {
    return [index.title, index.source.name];

  })
  



 

  return headlines
}