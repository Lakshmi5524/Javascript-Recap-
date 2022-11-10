// const number=[1,2,3,4,5,6,7,8,9,10]

// const result= number.filter(isoddeven)

// function isoddeven(number){
//     if(number%2===0){
//         console.log("is Even Number" + number )
//     }
//     else if(number %2!==0 ) {
//         console.log(" is an add number" +number)
//     }

// }
// console.log(result )

// const people =[
//     {
//     FirstName:"Lakshmi",
//     LastName:"Saravanan"
// },
// {
//     FirstName:"Keeri",
//     LastName:"Devaraj"
// }
// ]

// const names=people.map(person=>`FullName:${person.FirstName},${person.LastName}`)

// console.log(names)

//  program that shows the delay in execution

// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName('John');

// Callback Function Example
function greet(name, myFunction) {
  console.log("Hello world")

  // callback function
  // executed only after the greet() is executed
  myFunction(name)
}

// callback function
function sayName(name) {
  console.log("Hello" + " " + name)
}

// calling the function after 2 seconds
//setTimeout(greet, 2000, "John", sayName)

let stocks = {
  fruits: ["straberry", "graps", "Banana", "apple"],
  liquid: ["waer", "ice"],
  holder: ["cone", "cup", "stick"],
  oppings: ["choclates", "peanuts"],
}
console.log(stocks.fruits)
