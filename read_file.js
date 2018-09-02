var fs = require('fs');

var readme = fs.readFileSync('test_async.txt', 'utf8');
fs.writeFileSync('test_async2.txt', readme);