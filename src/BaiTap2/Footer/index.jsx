import React, { Component } from "react";
import Promo from "../Promo";

class Footer extends Component {
  render() {
    return (
      <section id="promotion" className="container-fluid pt-5 pb-5">
        <h1 className="text-center text-white">PROMOTION</h1>
        <Promo />
      </section>
    );
  }
}

export default Footer;
