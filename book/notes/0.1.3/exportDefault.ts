import showName from '../types/exportDefault/function';
import Star from '../types/exportDefault/class';
import Options from '../types/exportDefault/interface';
import Gender from '../types/exportDefault/enum';
import declareNamespace from '../types/exportDefault/namespace';

let myName = showName();
let newStar = new Star('pr');
let options: Options = {
    position: 'TOP',
    data: { name: 'pr', age: 18 }
}
let gender = [Gender.woman, Gender.man];
console.log(declareNamespace.name);
declareNamespace.ns.showNs('ns');
