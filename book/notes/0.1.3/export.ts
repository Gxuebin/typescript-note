import { name, showName, Star, Gender, Options, declareNamespace } from '../types/export';

console.log(name);
let myName = showName();
let newStar = new Star('pr');
let gender = [Gender.woman, Gender.man];
let options: Options = {
    position: 'TOP',
    data: { name: 'pr', age: 18 }
}
console.log(declareNamespace.name);
declareNamespace.ns.showNs('ns');
