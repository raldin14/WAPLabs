import React, { useState } from "react";
import Product from './Product';
import ProductReducer from './ProductReducer';
const data = [
    { id: 1, name: 'Apple', price: 1, inStock: true },
    { id: 2, name: 'Banana', price: 1, inStock: false },
    { id: 3, name: 'Cherry', price: 2, inStock: true}
]

const ProductList = () =>{
    
    return (<>
            <h1>Product List Using usestate</h1>
            <ul>
                {data.map( p => <Product key={p.id} id={p.id} name={p.name} price={p.price} inStock={p.inStock}/>)}
            </ul>
            <h1>Product List Using useReduce</h1>
            <ul>
                {data.map( p => <ProductReducer key={p.id} id={p.id} name={p.name} price={p.price} inStock={p.inStock}/>)}
            </ul>
        </>
    );
}

export default ProductList;