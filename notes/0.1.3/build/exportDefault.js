"use strict";
exports.__esModule = true;
var function_1 = require("../types/exportDefault/function");
var class_1 = require("../types/exportDefault/class");
var enum_1 = require("../types/exportDefault/enum");
var namespace_1 = require("../types/exportDefault/namespace");
var myName = function_1["default"]();
var newStar = new class_1["default"]('pr');
var options = {
    position: 'TOP',
    data: { name: 'pr', age: 18 }
};
var gender = [enum_1["default"].woman, enum_1["default"].man];
console.log(namespace_1["default"].name);
namespace_1["default"].ns.showNs('ns');
