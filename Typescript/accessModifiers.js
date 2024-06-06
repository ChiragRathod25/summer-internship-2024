"use strict";
//another Production way to declare this
// class User{
//     constructor(
//         public email:string,
//         public  name:string,
//         public city:string="anand"
//     ){
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name, city) {
        if (city === void 0) { city = "anand"; }
        this.city = "Anand";
        this._courseCount = 1;
        this.semesterCount = 1;
        this.email = email;
        this.name = name;
        this.city = city;
    }
    User.prototype.deleteTOken = function () {
        console.log("TOken Deleted");
    };
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNumber) {
            //no return type for it, not even void or never
            if (courseNumber <= 1) {
                throw new Error("course count is less than one");
            }
            this._courseCount = courseNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getEmail", {
        get: function () {
            return "Email".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    subUser.prototype.changeCourseCount = function () {
        this.semesterCount = 5;
    };
    Object.defineProperty(subUser.prototype, "getsemesterCount", {
        get: function () {
            return this.semesterCount;
        },
        enumerable: false,
        configurable: true
    });
    return subUser;
}(User));
var chirag = new User("chirag@google.com", "Chirag Rathod");
console.log(chirag);
var chirag2 = new subUser("chirag@google.com", "Rathod Chirag", "Vallabh Vidyanagar");
console.log(chirag2);
console.log(chirag2.getsemesterCount);
chirag2.changeCourseCount();
console.log(chirag2.getsemesterCount);
