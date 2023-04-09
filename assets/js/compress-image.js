/**
  A precommit script to compress image before commiting file
  Q: Why Sharp package used?
  A: https://sharp.pixelplumbing.com/performance
 */

const fs = require("fs");
const sharp = require("sharp");// https://sharp.pixelplumbing.com/

/* 
Function: Update existing file to new compress file
*/
const minifyFile = filename => {
  new Promise((resolve, reject) => {
    /*Read upcomimg file*/
    fs.readFile(filename, function(err, sourceData) {
      if (err) throw err;
      /*If file buffer data is present convert it into new compressed file*/
      sharp(sourceData).toFile(filename, (err, info) => {
        err ? reject(err) : resolve();
      });
    });
  });
};

/*
Fetch images maps from args and compress all.
Compressing is asynchronuous process.
So wait for all image to compress and return.
*/
Promise.resolve(process.argv)
  .then(x => x.slice(2))
  .then(x => x.map(minifyFile))
  .then(x => Promise.all(x))
  .catch(e => {
    process.exit(1);
  });