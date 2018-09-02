var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data) {
  fs.writeFile('writeMe.txt', data)
});

//err = in case it doesn't run, you get an error


// fs.writeFileSync('writeMe.txt', readMe);