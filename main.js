let readlineSync = require('readline-sync');
 let days_worked = readlineSync.question("Days worked:")
 
 days_worked = (days_worked*30);

let ps4=200;
let Samsung_phone=900;
let TV=500;
let game_skin=9.99;

  let total = (days_worked /ps4 |0  );
  let total1 = (days_worked /Samsung_phone |0);
  let total2 =(days_worked /TV |0);
  let total3 = (days_worked /game_skin |0);
  console.log(`I can by ${total} PS4 ${total1} Samsung ${total2} TV  ${total3} game skin       Τhanks for your purchase! have a nice day!  `);
