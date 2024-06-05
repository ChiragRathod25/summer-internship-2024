"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(myuser) {
    console.log(myuser);
    return myuser;
}
createUser({ name: "Chirag", Age: 10, email: "hci@ca.com", isActive: false });
//bad behaviour
var me = { name: "Chirag", Age: 10, email: "hci@ca.com", isActive: false, fname: "" };
createUser(me); //not give error
