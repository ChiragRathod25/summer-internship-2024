"use strict";
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
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    TakePhoto.prototype.getReelCount = function () {
        console.log(5);
    };
    return TakePhoto;
}());
var instagram = /** @class */ (function (_super) {
    __extends(instagram, _super);
    function instagram(cameraMode, filter, burst) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    //abstract method defination
    instagram.prototype.getSepia = function () {
        console.log("sepia");
    };
    instagram.prototype.getReelCount = function () {
        console.log(100);
    };
    return instagram;
}(TakePhoto));
//not possible
// const chirag = new TakePhoto("chirag@google.com",'filter1')
//using instagram because TakePhoto is abstract , we can't create object from it , we just extends other classes from it
var chirag = new instagram("chirag@google.com", 'filter1', 5);
chirag.getReelCount();
