"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: 123,
    name: "chirag",
    email: "chirag.com",
    isActive: false,
};
myUser.name = "srishti";
var cardDetail = {
    cardnumber: 133465789465,
    cardDate: "12/05/1670",
    cvv: 465,
};
function getcardDetails(cardDetail) {
    console.log(cardDetail);
}
getcardDetails(cardDetail);
