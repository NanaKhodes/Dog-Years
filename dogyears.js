//create a variable named myAge
let myAge = 22 ;
console.log(myAge);

//create a variable named earlyYears
let earlyYears = 2;
earlyYears *= 10.5;
console.log(earlyYears);

//subtract 2 from myage and set the result to laterYears variable
let laterYears = myAge - 2;
/* Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.*/
laterYears *= 4 
/*earlyYears and LaterYears are stored in a new varble named myAgeInDogYears*/
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);
var myName = 'Nancy'.toLowerCase();
//embed string interpolation to display value in a sentence
console.log(`My name is ${myName}. I am ${myAge}years old in human years which is ${myAgeInDogYears}in human years which is ${myAgeInDogYears} 
