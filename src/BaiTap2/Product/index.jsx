import React, { Component } from "react";
import ProductList from "../ProductList";

class Product extends Component {
  render() {
    return (
      <div>
        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <ProductList />
        </section>
      </div>
    );
  }
}

export default Product;
