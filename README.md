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

![code_node](https://i.imgur.com/zyrZLw8.png)


### Playground: 
<a href="https://www.typescriptlang.org/play?&q=131#code/C4TwDgpgBAyhzAgJwNIRAHhQPigXigAMBneAEgG8BhAQzAEtgaAbegLwg2OCXoDsA5lABkUHAF9CAbgCwAKHmhIUAGL1miJAHkwwegHs+LDABVcBCvKjWoAbRRR+UANbp9AMygmAugC4oAK58ACYQ7vwQwVAQAB6IIcRe9t5QAPxQfBAAbshQ-ibJ8uLyiuDQcAjIKkEAxnqGJmUYWgA0UACCbQBKbTj4YtFxEAkdaVAAFFY20+NZ-lq2riAeUFoiYt4AlPi4AEIB6qFIzW1T0+cubp5rogCiMTXMAaEYnWLYp3IXF0srN1D3R7PTg9d5nc7YcHbfyZHJIEpyJTQfaHZAnUYEX7Xbr9LGqdSaHT1IzMZrYcxQSxfb72Rx8S7La5QGiJCqaNCYHDeAC0qX84O+sHgmmqfDqBj4jUg6LeoJw4PE6ypguChgg-goiti8WCiQACvQas50Xj-l1cOlxts8Lg1jDssgpFAAPTO+1w2TU6zFBRydy1YlQGpICA0RAo5hHUyDHWJfQAIwAVhA6thxgnE-lNv4I1GzJSpiHgAEkPTMgB3KB6pD6GIgdNJ5mJXNosxtChQATwKDiTYI6b+sWBrvAcZMJAj-w0PggNpgGuQJCgKcztohmoQehwlcgbZUgU2eiecb0YhqPingAW43n+kXoE22yLJfpI-PV9MafHI7nC+QoDXFNNzhTZPUFA9rCPCZTzZZAbz-JddyfeAX07eBYOOMwxxoCd4F-O9-1nKB12A5BtggqAKOfUsoG-eAFSKBFB3FQxHDPfgr3ggjEP8bheEEPdwWo+kACJVUyET8DwAhb3vEBGN9ZjAxg4U4NkwjeJ4fgBEEr1iJQmikRWdTEKkggRL47TJOEURnQAPVIYBbHabkAC1vGdAA6RBuC4uS+zkH15CUiU0OAd9iEvaNtWGXUoAzFNgC-HDJ2ZVcoBM5c0qIkit2QHddOmYSJmtXA6OAJsvAUpiA1CkcMOioYRgS1NsNw4Ad3wuTOv0jc8qQAqC19aYakMbgMhoABbaAZIQ0BPOIVgN3GABmNoABZNm8-QABl9HLZBaFIK0oAAagyuaQAWpaIHGTahIM+kQsMWYWACdVst0iiujCZhEs80JwkyatuNANqR0qkw2iMab2wo6Ysjej7EaeCAWnhmxy14Jh4z+-weHe9G9MFUa+HCAQSxoXGPoJtGMesYYAmmpAqbx2ikHeije37b5ityuEGMChEkSrZBiFYixwXCJBuAAOSmj7LMEcFSFJ4J5emzT+IEcF43oJdL2CGgQH8WwMiZ+NkGhi2rfNybLaQKBvGqxEyigABJRBJv6ZVD2CGEbcd6ZXX0gBHA4Q2CcEYcVrTBBsEOQ3D-XInBfbMiQPlRZl1iQ74fQKqTiPU6F31SfGxdxb4fw9TFiXKUVFlsvkcuKsYCBJv8T2O59xvEmneSy5DMMIBbJAbzrvgAumBb4DUGXgA126RKlCAROnmxZ+AOA1aX8YRJgYN6F0dfwS33Z9eAQ3jfGM2AEY2gfqAACYAAY36djfrABtUrU9Fvh7hgOJGOC7dJpfygFvd2wRxh3wgVvPeK8yjECProKAAAJacwR4z6H0M4U+ekt5aHLBnCeOcp5n3ErdUCCIW5jX0H9TyzB9ACBPF7AK8gQ4mCQCAWi+gMoskSPwFG9AoiyUSMAfhpBoAiKNsSThzooAABF4CJUiPyOQIc4FQAAGpIygI5Wi5ZDQQAUS-bYejUYZALgYvC1jHZ3mJCwMxK0LH6MvE3LGhghBIiAA">Open Playground</a>
