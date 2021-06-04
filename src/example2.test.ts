import { createBuilder } from "./Builder";

class SomeClass {
    version: [number, number, number];
    type?: string;
}
const b = createBuilder(new SomeClass)
    .setType("builder")
    .setVersion([0, 1, 0])
    .done();

console.log(b);
