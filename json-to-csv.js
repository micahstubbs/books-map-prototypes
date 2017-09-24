const fs = require('fs');
const csvWriter = require('csv-write-stream');

const inputFile = 'data/vis-books.json';
const outputFile = 'data/vis-books.csv';

const data = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
const outputData = data;

// write a csv file
const writer = csvWriter();
writer.pipe(fs.createWriteStream(outputFile));
outputData.forEach(d => {
  writer.write(d);
})
writer.end();