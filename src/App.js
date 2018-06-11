import React, { Component } from 'react';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';
import './App.css';

const products = [
  {
    name: 'iPad',
    price: 200
  },
  {
    name: 'iPhone',
    price: 650
  }
];
localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: JSON.parse(localStorage.getItem('products')) };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEdit = this.changeEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.state = { isEdit: false, products: [] };
  }
  componentDidMount() {
    this.setState({ products: products });
  }

  onDelete(name) {
    const products = this.state.products;
    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });
    this.setState({ products: filteredProducts });
  }
  onAdd(name, price) {
    const products = this.state.products;
    products.push({ name, price });
    this.setState({ products });
  }

  changeEdit(isEdit, name, price) {
    this.setState({ name, price });
    this.setState({ isEdit: !this.state.isEdit });
  }

  onEditSubmit(name, price) {
    let products = this.state.products;
    products = products.map(product => {
      if (product.name === name) {
        product.name = name;
        product.price = price;
      }
      return product;
    });
    this.setState({ products, name: '', price: '', isEdit: false });
  }

  render() {
    return (
      <div className="App">
        <h1>Maetros de Productos</h1>
        {this.state.isEdit ? (
          <AddProduct
            onAdd={this.onEditSubmit}
            textButton="Save"
            name={this.state.name}
            price={this.state.price}
          />
        ) : (
          <AddProduct onAdd={this.onAdd} textButton="Add" />
        )}

        {this.state.products.map((product, index) => {
          return (
            <ProductItem
              key={index}
              {...product}
              onDelete={this.onDelete}
              onEdit={this.changeEdit}
              onEditSubmit={this.onEditSubmit}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
