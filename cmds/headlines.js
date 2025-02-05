// import ora from 'ora'
const ora = require("ora")
const Table = require('cli-table3');

const getHeadline = require('../utils/headlineGrapper')

const table = new Table({
  head: ['Title', 'Source'],
  colWidths: [80, 20], 
  wordWrap: true
});

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const headline = await getHeadline()

    spinner.stop()

    headline.forEach(article => {
      table.push(article);
    });

    console.log(table.toString());

  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}