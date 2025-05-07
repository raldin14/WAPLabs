import React, { useState } from "react";
import Product from './Product';
const data = [
    { id: 1, name: 'Apple', price: 1, inStock: true },
    { id: 2, name: 'Banana', price: 1, inStock: false },
    { id: 3, name: 'Cherry', price: 2, inStock: true}
]

const ProductList = () =>{
    
    return (<>
            <h1>Product List</h1>
            {/* <table>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
                {data.map( p => <tr key={p.id}><td>{p.name}</td><td>{p.price}</td></tr>)}
            </table> */}
            <ul>
                {data.map( p => <Product key={p.id} id={p.id} name={p.name} price={p.price} inStock={p.inStock}/>)}
            </ul>
        </>
    );
}

export default ProductList;