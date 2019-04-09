import React from "react";

//import "./Footer.css";

const Footer = props => {
  return (
    <footer>
      <p>Designed and Copyright</p>
      <span>{props.test.designer}</span>
      <br />
      <span>{props.test.CopyRight}</span>
    </footer>
  );
};

export default Footer;
