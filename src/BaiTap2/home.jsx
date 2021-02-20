import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Product from "./Product";
import ProductLap from "./ProductLap";
import Slider from "./Slider";

class Home extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Header />
        <Slider />
        <Product />
        <ProductLap />
        <Footer />
      </div>
    );
  }
}

export default Home;
