import { useState } from "react";
const Product = (props) =>{
    const {id, name, price, inStock} = props;
    const [stock, setInStock] = useState(inStock);
    const stockHandler = (event) =>{
        setInStock(!event);
    }
    return (
        <>        
            <li  style={{color: stock ? 'green' : 'red'}} >{`Product Name: ${name} Price $ ${price} Stock Status ${stock ? 'Yes' : 'NO'}  `}<button onClick={() => stockHandler(stock)}>Stock Status</button></li>
        </>
)
}

export default  Product;