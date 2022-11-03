const fs = require('fs');
fs.readFile('pages/about.html', 'utf8', function (err, data) {
  // Display the file content
  console.log(data);
});

console.log('readFile called');