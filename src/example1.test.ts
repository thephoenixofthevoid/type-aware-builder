import { createBuilder } from "./index";
import { SomeClass } from "./example2.test";

const A = createBuilder(new SomeClass)
    .setType("111")
    .done();
    // Fails because version is required

const B = createBuilder(new SomeClass)
    .setType("111")
    .setType("111")
    // Fails because type is aleady specified
    .setVersion([ 0, 1, 0 ])
    .done();

const C = createBuilder(new SomeClass)
    // Ok because type is optional
    .setVersion([ 0, 1, 0 ])
    .done();
  

const D = createBuilder(new SomeClass)
    .setVersion("[ 0, 1, 0 ]")
    // Fails because type is [ number, number, number ] not string
    .done();  

const E = createBuilder(new SomeClass)
    .setVersion([ 0, 1, 0 ])
    .setVersion2([ 0, 1, 0 ])
    // Fails because version2 not defined fields
    .done();  

