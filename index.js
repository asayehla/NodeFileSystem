let fs = require('fs');

fs.readFile('firstName.txt', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("First name is " + data);
    fs.writeFile('fullName.txt', data, (err) => {
      if (err) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
  }
});
var options = {
  encoding: 'utf8',
  flag: 'a+'
};

fs.readFile('lastName.txt', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Last name is " + data);
    fs.appendFile('fullName.txt', data, options, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('filen är sparad');
      }
    });
  }
});
