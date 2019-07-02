class Xy {
    x: number;
    y: number;
}

interface Xyz extends Xy {
    z: number;
}

let xyz: Xyz = { x: 1, y: 2, z: 3 };
