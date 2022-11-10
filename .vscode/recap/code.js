var n1 = 10
var n2 = "hello"
var n3 = n1 + n2
document.write(n3)
document.write(typeof n3)

//explisit type convertion
document.write("---------------------")
var n5 = Number("10")
document.write(n5)

document.write(typeof n5)

document.write("----------String-----------")

var n6 = String(10)
document.write(n6)
document.write(typeof n6)

document.write("----------<br/>-----------")
var n7 = "Zoho"
document.write(typeof parseInt(n7))
document.write(n7)

document.write("----------<br/> Fucntiom-----------")
var val = function (a, b) {
  return a + b
}
console.log(val(10, 20))

setTimeout(function () {
  console.log("This is Anonymous Function")
}, 2000)

var v = 500
if (v != 500) {
  console.log("true")
} else {
  console.log("Fals")
}

document.write("----------<br/> For in-----------")

var p = ["p1", "p2"]
var age
var r = new Array()
console.log(r)
for (var i = 0; i < p.length; i++) {
  age = parseInt(prompt("enetr Age Value", +p[i]))
  r[i] = age
  console.log(r[i])
  for (v in r) {
    console.log(r[v])
  }
}
