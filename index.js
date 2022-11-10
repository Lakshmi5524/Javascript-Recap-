//var user = [
//  {
//    model: "redmi Note 10",
//    brand: "Redmi,",
//    mrp: 159999.0,
//    price: 12499.0,
//    image:
//      "https://static.toiimg.com/thumb/resizemode-4,msid-79272240,imgsize-200,width-1200/79272240.jpg",
//    ram: "4gb",
//    storage: "64gb",
//    camara: "48mp",
//  },

//  {
//    model: "redmi Note 10",
//    brand: "Redmi,",
//    mrp: 159999.0,
//    price: 12499.0,
//    image:
//      "https://static.toiimg.com/thumb/resizemode-4,msid-79272240,imgsize-200,width-1200/79272240.jpg",
//    ram: "4gb",
//    storage: "64gb",
//    camara: "48mp",
//  },

//  {
//    model: "redmi Note 10",
//    brand: "Redmi,",
//    mrp: 159999.0,
//    price: 12499.0,
//    image:
//      "https://static.toiimg.com/thumb/resizemode-4,msid-79272240,imgsize-200,width-1200/79272240.jpg",
//    ram: "4gb",
//    storage: "64gb",
//    camara: "48mp",
//  },
//]
//console.log(user)
//var str = JSON.stringify(user)
//console.log(str)

//console.log(window)
//window.open("https://www.google.com/")
//window.moveTo(500, 400)
//window.resizeTo(1000, 600)
//window.print("Printing some info")

//window height and width
//console.log(window.screen.width)
//console.log(window.screen.height)

//console.log(screen.width, screen.height)
//window.setInterval(() => {
//  window.document.title = "This is DOM manipulation"
//}, 5000)

//setInterval(() => {
//  //location.href = "https://www.google.com/"
//}, 4000)
//document.body.children[0].children[1].innerText = "I love javascript"

//const person = {
//  name: "lakshmi",
//  place: "Chennai",
//  greetuser() {
//    return `Hello my name is ${this.name} and i am comming from ${this.place}`
//  },
//}

//const inputname = prompt("what is your name")
//const inputplace = prompt("are you comming from")

//person.name = inputname
//person.place = inputplace

//document.body.innerHTML = person.greetuser()
//const ans = person.greetuser()
//console.log(ans)

//==============================//Software engineer ======================================
//var a = [1, 2, 3, 4, 5, 6]
//a.map(function (item, index) {
//  console.log(item)
//  console.log("======")
//  console.log(index)
//})

//var b = a.map(function (item, index) {
//  return item
//})
//console.log(b)

var even = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var num = even.filter(function (val, index) {
  if (val % 2 === 0) {
    return val
  } else if (val % 2 !== 0) {
    console.log("odd numbers", +val)
  }
})
console.log(num)

function fun() {
  for (let i = 0; i <= 20; i++) {
    if (i === 5) {
      console.log(` ${i} is My licku Number`)
    } else if (i == 20) {
      console.log(`${i} is my final Number`)
    }
  }
}
fun()

//var c = [10, 20, 30, 40, 50, 60, 70, 80, 100]

//Task 1 map and filter
var x = ["my name ", "your name"]
var final = x.map((item) => {
  return item + "is"
})
console.log(final)

var student = [68, 48, 20, 76, 99]
var mark = student.filter((value) => {
  if (value <= 30) {
    console.log(" Fail mark")
  }
})
console.log("Lesthen  30 " + mark)

//reference =============in javascript
var x1 = 10
console.log("outside " + x1)
function changevalue(value) {
  var value = 20
  console.log("inside " + value)
}
changevalue()
console.log(x1)

var x3 = 30
console.log(x3)
function checkfun(newval) {
  var newval = 88 //overide the value of newval
  console.log(newval)
}
checkfun(x3) //==88
console.log(x3) //==30

//=========================closure=====================

function outerscopefun() {
  var outervar = 30
  var innnerfunvar = function () {
    console.log(outervar + 4)
  }
  return innnerfunvar
}
console.dir(outerscopefun())

//setime and setintrevel

var setinterval = setInterval(() => {
  console.log("Hello My name is lakshmi")
}, 1000)

setTimeout(() => {
  clearInterval(setinterval)
  console.log("Hi this is lakshmi")
}, 3000)

//Filter

const items = [
  {
    name: "Biriyani",
    price: 100,
  },

  {
    name: "Dosa",
    price: 40,
  },
  {
    name: "Pongal",
    price: 55,
  },
  {
    name: "Puri",
    price: 80,
  },
  {
    name: "Biriyani",

    price: 100,
  },
  {
    name: "idili",
    price: 30,
  },
  {
    name: "pilav",
    price: 90,
  },
  {
    name: "meals",
    price: 100,
  },
]

var hotel = items.filter((item) => {
  return item.price <= 50
})
console.log(hotel)

//Map
var menuname = items.map((item, index) => {
  return item.name
})
console.log(menuname)

var findeitem = items.find((item) => {
  return item.name === "Dosa"
})
console.log(findeitem)

//foreach

//reverseString
const reverseString = (str) => {
  const fin = str.split("")
  console.log(fin)
  fin.reverse()
  console.log(fin)
  str = fin.join("")
  console.log(str)
}
reverseString("kumar")

function rever(str) {
  let reverstring = ""
  for (let charcter of str) {
    //console.log(charcter)
    console.log(reverstring)
    reverstring = charcter + reverstring
    console.log(reverstring)
  }

  console.log(reverstring)
}
rever("Arun")

//Polindrom
function poli(str) {
  const ispoli = str.split("").reverse().join("")
  console.log(`This polindrom is:  ${str === ispoli}`)
}
poli("madam")

//var stringsount = "YouAremybestfriend"
//function cuntstr() {
//  var obj = {}
//  for (var char of stringsount)
//  (!obj[char])?obj[char]=1:obj[char]=++
//  console.log(obj)
 
//}
 
//cuntstr()

const maxcchar = (str) => {
  let obj = {}
  for (let char of str) 
    (!obj[char])?obj[char]=1 : obj[char]=++
      console.log(obj)
  
}
maxcchar("heLLooss$$3p")