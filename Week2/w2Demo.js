//TASK 1 DECLARING VARIABLES ############################




//TASK 2 UPDATING VARIABLES ############################





















// if(temp > 23)
//     console.log("It's Warm");
// else if (temp < 23)
// {
//     console.log("It's Cold");
// }
// else
//     console.log("Temp is perfect");

// temp = 26;
// //text = (temp > 23) ? "Its Warm" : "Its Cold";
// text = (temp > 23) ? "Its Warm" : (temp < 23) ? "Its Cold" : "Its perfect";
// console.log(text);



let day = "friday"

switch (day) {
    case 'Monday':
        console.log("Have a great week");
    case 'Friday' :
        console.log("Have a great weekend");
    default:
        console.log("Have a great day!");
}

















//CLASS EXERCISES 2 ###################################

// let number = 7;
 
// if (number % 2 === 0) {
//     console.log("Even number");
// } else {
//     console.log("Odd number");
// }
//CLASS EXERCISES 3 ###################################


// let age = 16;
 
// if (age < 13) {
//     console.log("Child");
// } else if (age < 18) {
//     console.log("Teenager");
// } else {
//     console.log("Adult");
// }

//CLASS EXERCISES 4 ###################################

 
// let age = 25;
// let status = (age >= 18) ? "Adult" : "Minor";
// console.log(status);  // Output: "Adult"

//CLASS EXERCISES 5 ###################################


// let day = 3;
 
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }











// temp = 23

// if(temp > 23)
//     console.log("It's warm!");
// else if (temp < 23)
//     console.log("It's Cold!")
// else
// console.log("Temp is perfect");


// // text = (temp > 23) ? "It's warm!" : "It's Cold";
// text = (temp > 23) ? "It's warm!" : (temp < 23) ?  "It's Cold" : "It's Perfect";


// console.log(text);




// Variables
// var studentName = "Alex"; // declaring student's name
// studentName = "Jordan" //updating the student's name;
// var studentName = "Taylor"; // Re-declaring with var is possible

// let studentProgram = "CPAN"; // declaring the student's program
// studentProgram = "CP"; // Updating the student's program
// // let studentProgram = "Web Design"; // Test and see what happens?

// const studentID = "N123456789"; // declaring the  student ID
// // studentID = "N987654321"; // Test and see what happens?


// console.log(studentName); 
// console.log(studentProgram ); 
// console.log(studentID ); 



//########################################################
// var message = "Hello, World!"; // Scope is global here

// //We will learn more about functions
// function showMessage() {
//   var message = "Hello from a function!"; // Scope is limited to the function
//   console.log(message);
// }
// var message = "Hello, World Again!";
// showMessage();
// console.log(message); 


//########################################################
// let message = "Hello, World!"; 

// let message = "Hello Again!"; 

// console.log(message); 

//########################################################
// const message = "Hello, World!"; 
// message = "Some other value";

// console.log(message);

//String Interpolation in JavaScript########################################################
// String interpolation allows you to embed expressions inside string literals, using template literals. 
// This makes it easy to create strings that include dynamic content. 
// Template literals are enclosed by backticks (` `) and allow embedded expressions wrapped in ${}.

// let name = "Alice";
// let age = 30;

// // Using template literals for string interpolation
// let message = `Hello, my name is ${name} and I am ${age} years old.`;

// console.log(message); // Output: Hello, my name is Alice and I am 30 years old.


//DATA TYPES ########################################################


// // Undefined and Null values

// // Lets declare two variables one which is undefined and another one that is null. Run the following code in the programming environment of your choice:

// var myValue1;
// var myValue2 = null;
// console.log(myValue1); // Output will be : undefined
// console.log(myValue2); // Output will be : null


// For precise representation of very large integers beyond the Number.MAX_SAFE_INTEGER, ECMAScript introduces the BigInt type.
// Number
// let distance = 150.5; // a floating-point number

// // BigInt 
// let largeNumber = 9007199254740991n; // a large integer beyond the safe limit for Number

// console.log(distance);
// console.log(largeNumber );