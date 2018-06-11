import React, { Component } from 'react';

class ProductItem extends Component {
	render() {
		const { name, price, onDelete, onEdit } = this.props;
		return (
			<div>
				<span>{name}</span>
				{' | '}
				<span>{price}</span>
				{' | '}
				<button onClick={() => onDelete(name)}>Delete</button>
				<button onClick={() => onEdit(true, name, price)}>Edit</button>
			</div>
		);
	}
}
export default ProductItem;
