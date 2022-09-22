/*const person = {
    age: 27,
    name: `Tatiana`,
}*/

/*
con new object
const createPerson = (name, age) => {
    const person = new Object();
    person.name = name;
    person.age = age;

    return person;
}

const user1 = createPerson('Tatiana', 26)
const user2 = createPerson('Kokito', 27)

console.log(user1, user2)
*/

const createPerson = (name, age) => {
    const person = Object.create({});
    person.name = name;
    person.age = age;

    return person;
}

const user1 = createPerson('Tatiana', 26)
const user2 = createPerson('Kokito', 27)

//console.log(user1, user2)

user1.weight = '55kg';
user1.height = '175cm';
user1.gender = 'Female';



for (const key in user1) {
    if (key === 'weight') {
        user1.weight = Number(user1.weight.replace('kg', ''))
    }
    if (key === 'height') {
        user1.height = Number(user1.height.replace('cm', ''))
    }
}

//console.log(user1)

Object.keys(user1).forEach(key => {
    if (key === 'height') {
        user1.height = user1.height / 100
    }
})

//console.log (Object.values(user1))

//user1.name = ''

Object.values(user1).forEach(value => {
    if(value === '')
    {
        console.log('Alerta, hay infomación vacía')
    }
})

const setID = (obj, str) => {
    obj[str] = Math.random();
}

setID(user1, 'id');

console.log(user1);

user1.favoriteFoods = [`tacos`, `pizza`, `Hamburguesa`];
user1.pets = {
    name: `Vanilo`,
    age: 6
}

const {favoriteFoods, pets: {name, color = `yellow` }} = user1;

console.log(favoriteFoods, color)