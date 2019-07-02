type Name = string;
type ShowName = () => string; // Typescript 中的 =>
type NameOrShowName = Name | ShowName; // 联合类型

const getName = (name: NameOrShowName) => { // ES6 中的 =>
    if(typeof name === 'string'){
        return name;
    } else {
        return name();
    }
}

let showName = () => 'pr is a boy';

console.log(getName('pr')); // pr
console.log(getName(showName())); // pr is a boy
