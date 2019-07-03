function info<S, N>(name: S, age: N): [S, N] {
    return [name, age];
}

console.log(info('pr', 18)); // [ 'pr', 18 ]
