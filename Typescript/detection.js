"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detectType(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val + 12;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide Id");
        return;
    }
    id.toLocaleLowerCase();
}
console.log(typeof provideId); //function type
function printAll(str) {
    if (str) {
        if (typeof str === "object") {
            for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
                var stars = str_1[_i];
                console.log(stars);
            }
        }
        else if (typeof str === "string") {
            console.log(str);
        }
    }
}
//instance of - checks for object intiated from classes
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toLocaleDateString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
