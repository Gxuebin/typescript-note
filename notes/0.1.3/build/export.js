"use strict";
exports.__esModule = true;
var export_1 = require("../types/export");
console.log(export_1.name);
var myName = export_1.showName();
var newStar = new export_1.Star('pr');
var gender = [export_1.Gender.woman, export_1.Gender.man];
var options = {
    position: 'TOP',
    data: { name: 'pr', age: 18 }
};
console.log(export_1.declareNamespace.name);
export_1.declareNamespace.ns.showNs('ns');
