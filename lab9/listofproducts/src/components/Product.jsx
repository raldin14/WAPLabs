import { useState } from "react";

const Product = (props) =>{
    
    const {name, price, inStock} = props;
    const [stock, setInStock] = useState(inStock);
    
    const stockHandler = (event) =>{
        setInStock(!event);
    }
    return (
        <> 
            <td style={{color: stock ? 'green' : 'red'}}>{name}</td><td>{price}</td><td>{stock ? "In Stock" : "Out of Stock"}</td><td><button onClick={() => stockHandler(stock)}>Stock Status</button></td>
        </>
)
}

export default  Product;