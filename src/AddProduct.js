import React, { Component } from "react";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { name: "", price: "" };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.name !== prevState.name) {
      return {
        name: nextProps.name,
        price: nextProps.price
      };
    }
    return null;
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.state.name, this.state.price);
  }
  handleChange(event) {
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Add Product</h3>
        <i
          data-vi="doc"
          data-vi-primary="#0000FF"
          data-vi-accent="#FFFF00"
          data-vi-prop="#FFFFFF"
        >
          {" "}
        </i>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={this.state.name || ""}
          onChange={event => this.handleChange(event)}
        />
        <input
          name="price"
          type="text"
          placeholder="price"
          value={this.state.price || ""}
          onChange={event => this.handleChange(event)}
        />
        <button>{this.props.textButton}</button>
        <hr />
      </form>
    );
  }
}

export default AddProduct;
