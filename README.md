# type-aware-builder
Object-Lens © providing builder-like interface to fill object's properties with values


### Usage

The most simple pattern is to define a class or type, 
which may have optional fields as well

```typescript
import { createBuilder as o } from "./index";

class Person {
    firstName: string
    secondName: string
    birthday: [ number, number, number ]
}

class Item {
    id: number     // required
    name: string   // required
    owner?: Person // not required
}

const item = o(new Item)
    .setId(1)
    .setName("Typescript Handbook")
    .setOwner(
        o(new Person)
            .setFirstName("Type")
            .setSecondName("Script")
            .setBirthday([ 1. 1, 2020 ])
            .done()
    )
    .done()

console.log(item)
```

```
{
  id: 1,
  name: 'Typescript Handbook',
  owner: { firstName: 'Type', secondName: 'Script', birthday: [ 1, 1, 2020 ] }
}
```