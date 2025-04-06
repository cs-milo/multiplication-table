//import readline module to get user input from the command line
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  //prompt user to enter a number
  readline.question("Enter a number for multiplication table: ", function(number) {
    number = parseInt(number);
    console.log(`\nMultiplication Table for ${number}:\n`);
  
    //loop to generat multiples from 1 to 10
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`); //display results
    }
  
    readline.close(); //close the interface
  });
  