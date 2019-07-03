function info2<S extends N, N>(name: S, age: N): [S, N] {
    return [name, age];
}

console.log(info2('pr', 18));
console.log(info2(30, 18));
