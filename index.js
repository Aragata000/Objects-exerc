// const myCar = {
//   make: "Ford",
//   model: "Mustang",
//   year: 1991,
// };
// console.log(myCar.model);

// const myBike = new Object();
// myBike.make = "Plimpiong";
// myBike.model = "Forever";
// myBike.age = 1996;
// console.log(myBike["make"]);

// const objectKeys = Object.keys(myBike).join(", ");
// console.log(objectKeys);

// function objectKeys(object) {
//   const keysOutput = Object.keys(object).join(", ");
//   return keysOutput;
// }

// const objectKeys = (object) => Object.keys(object).join(", ");

// class Car {
//   constructor(make, model, year, owner) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.owner = owner;
//   }
// }
// class Person {
//   constructor(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//   }
// }
// const mike = new Person("Mike B.", 23, "male");

// const myCar1 = new Car("Toyota", "Yari", 2002, mike);
// console.log(myCar1.owner.name);
// for (const element in myCar1) {
//   console.log(myCar1[element]);
// }

// const Animals = {
//   type: "Invertebrates",
//   displatType() {
//     console.log(this.type);
//   },
// };

// const animal1 = Object.create(Animals);
// animal1.displatType();

// const fish = Object.create(Animals);
// fish.type = "Fishes";
// fish.displatType();
// console.log(fish);

//Ejercicios
const character = {
  name: "Jon",
  family: "Snow",
  id: 1,
};

// 1- Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)

// console.log(something, somethingMore, somethingMoreAndMore);
// // output: name, class, id
const objectKeys = (object) => Object.keys(object).join(", ");
console.log(objectKeys(character));

// 2- Ahora, crea una función que liste solo los valores de las propiedades.

// console.log(somethingThatShowsThings); // output: Jon, 01
const objectValues = (object) => Object.values(object).join(", ");

// 3- Cambia el valor de la propiedad family por "Lannister" y asegurate de que los cambios se han efectuado.

// console.log(property.ThisProperty); //output: family = Lannister
character.family = "Lannister";
console.log(`family = ${character.family}`);

// 4- Ahora, elimina la propiedad ID y asegura los cambios.

// console.log(property.ThisProperty); //output: Not exist :(
delete character.id;
console.log(character.id);

// 5- Añade una nueva propiedad, por ejemplo age y dale un valor.
character.age = 28;
// 5.1- Asegura los cambios solo imprimiendo esa nueva propiedad.

// console.log(age); // output: Age => 25
console.log(`Age => ${character.age}`);

// 6- Lista el numero de propiedades que contiene el objeto.

// console.log(); // output: There are 4 info fields
function numbOfProperty(object) {
  let count = 0;
  for (let prop in object) {
    count += 1;
  }
  return count;
}

const countProperties = (object) => Object.keys(object).length;

// 7- Cambia la propiedad name por fullName.

// character.fullName = character.name;
// delete character.name;

character.fullName = `${character.name} ${character.family}`;
//  7.1- Asegura los cambios.

// console.log(fullName); //output: Jon Snow
console.log(character.fullName);

// 8- Lista todas las propiedades del objeto a través de un console.log()
console.log(objectKeys(character));

// console.log(...) //output: "Hi there, I'm Jon Snow..."
// 9- Añade más propiedades al objeto, como... location, job...

// 9.1- Asegura los cambios volviendo a listar los valores del objeto

// console.log(location); //output: Tower of Joy
