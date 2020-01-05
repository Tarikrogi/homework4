//1
var d = {
    name: 'Kris',
    surname: 'Bird'
}
var json1 = JSON.stringify(d)


var a = { name: 'Ihor', surname: 'Tarasov', fathername: 'Serhiyovych' }
var b = { name: 'John', surname: 'Smith' }
var c = { name: 'Ammy', surname: 'Black' }

var persons = [{ name: 'Petya', surname: 'Kurochkin' }]
persons.push(a, b, c, JSON.parse(json1))

for (el in persons) {
    console.log(persons[el])
}

for (el of persons) {
    console.log(el.name, el.surname, el.fathername)
}

var json = JSON.stringify(persons)
alert(json)

var persons = "<table border='1'>"
for (var i = 0; i < 1; i++) {
    str += `<tr><td>${i}</td><td></td></tr>`
}
str += "</table>"

console.log(persons)
document.write(persons)

//2

var a = {
    name: undefined,
    surname: undefined
}
var b = {
    name: undefined,
    surname: undefined
}
var c = {
    name: undefined,
    surname: undefined
}

a.age = 18
b.fathername = 'Serhiyovich'
c.sex = 'male'
console.log(a)

alert('age' in a)
alert('fathername' in b)
alert('sex' in c)


//3



var bag = {
    firstPocket: 'drugs',
    secondPocket: 'lipstick',
    thirdPocket: 'sunglasses'
}
delete bag.firstPocket
bag.fourtPocket = ('USB')
console.log(bag)