"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Driver {
    constructor(drivername, rating) {
        this.driverName = drivername;
        this.rating = rating;
    }
    print() {
        return `${this.driverName}:${this.rating}`;
    }
}
function showdriver(driver) {
    console.log(driver.print());
}
let d = new Driver("Ramesn", 4.5);
showdriver(d);
function showpayment(driver, pay) {
    console.log(driver.driverName);
    console.log(pay.amount);
    console.log(pay.mode);
}
showpayment(d, { amount: 4500, mode: "NEFT" });
