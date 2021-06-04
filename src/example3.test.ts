import { createBuilder } from "./Builder";

type Person = {
    firstName: string
    secondName: string
    birthday: [ number, number, number ]
}

type Item = {
    id: number     // required
    name: string   // required
    owner?: Person // not required
}

const person: Person = {} as any
const item: Item = {} as any

createBuilder(person)
    .setFirstName("Type")
    .setSecondName("Script")
    .setBirthday([ 1, 1, 2020 ])
    .done();

createBuilder(item)
    .setId(1)
    .setName("Typescript Handbook")
    .setOwner(person)
    .done();

console.log(item)