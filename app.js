"use strict";
const { Person } = require("./Person");

const person = new Person({ street: "Rua Teixeira de Melo", number: "127" });

let sub = person.fallsIll.subscribe((sender, fallsIllArgs) => {
  console.log(
    `A doctor has been called at ${fallsIllArgs.address.street},${fallsIllArgs.address.number}`
  );
});

person.catchCold();
person.catchCold();
person.fallsIll.unsubscribe(sub);
person.catchCold();
