/**
 * Script to compress images before commiting file
 */

const sharp = require('sharp');

const minifyFile = filename => {
  new Promise((resolve, reject) => {
    fs.readFile(filename, function(err, sourceData) {
      if (err) throw err;
      sharp(sourceData).toFile(filename, (err, info) => {
        err ? reject(err) : resolve();
      });
    });
  });
};

Promise.resolve(process.argv)
  .then(x => x.slice(2))
  .then(x => x.map(minifyFile))
  .then(x => Promise.all(x))
  .catch(e => {
    process.exit(1);
  });