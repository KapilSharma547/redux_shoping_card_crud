import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { util } from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";

const Products = ({ products, cartItems, fetchProducts, addToCart }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const productItems = products?.map((product) => {
    // console.log("product===<", product);
    return (
      <div className="col-md-4 mb-4" key={product.id}>
        <div className="bg-light text-center">
          <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
          <p>{product.title}</p>
          <b>{util.formatCurrency(product.price)}</b>
          <button
            onClick={(e) => addToCart(cartItems, product)}
            className="btn btn-primary"
            style={{ cursor: "pointer" }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  });

  return <div className="row">{productItems}</div>;
};

const mapStateToProps = (state) => {
  // console.log("state in Product==<>", state);
  return {
    products: state.products.filteredItems,
    cartItems: state.cart.items,
  };
};

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
