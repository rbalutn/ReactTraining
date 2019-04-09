import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header.react";
import Footer from "./Footer/Footer.react";
import DriverDashBoard from "./DriverDashBoard/DriverDashBoard.react";

class App extends Component {
  footerInfo = { designer: "Ramesh", CopyRight: "2019-2020" };
  render() {
    return (
      <div className="App">
        <header>
          <Header majorHeading={"Chennai Taxi"} />
        </header>
        <section>
          <DriverDashBoard />
        </section>
        <footer>
          <Footer test={this.footerInfo} />
        </footer>
      </div>
    );
  }
}

export default App;
