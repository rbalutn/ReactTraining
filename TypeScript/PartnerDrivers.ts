import { Payments } from "./Payments";

class Driver {
  public driverName: string;
  public rating: number;

  constructor(drivername: string, rating: number) {
    this.driverName = drivername;
    this.rating = rating;
  }

  print(): string {
    return `${this.driverName}:${this.rating}`;
  }
}

function showdriver(driver: Driver): void {
  console.log(driver.print());
}

let d = new Driver("Ramesn", 4.5);
showdriver(d);

function showpayment(driver: Driver, pay: Payments) {
  console.log(driver.driverName);
  console.log(pay.amount);
  console.log(pay.mode);
}

showpayment(d, { amount: 4500, mode: "NEFT" });
