"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chirag = { dbId: 65, name: 'chirag', age: 26, googleId: "google.com", startTrial: function () {
        return 'started';
    }, getCoupen: function (name) {
        return name;
    }
};
// chirag.dbId=654; //not modify because it is read only
chirag.age = 21;
console.log(chirag);
console.log(chirag.startTrial());
// console.log(chirag.getCoupen("Chirag Rathod is here"))
console.log(chirag.getCoupen("Coupen Name"));
