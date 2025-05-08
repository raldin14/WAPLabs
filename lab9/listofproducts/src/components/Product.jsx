import { useState, useReducer } from "react";
import { reducer } from "./reducer";

const Product = (props) =>{
    const {id, name, price, inStock} = props;
    // const [stock, setInStock] = useState(inStock);
    const [state, dispatch] = useReducer(reducer,inStock);
    const stockHandler = (event) =>{
        setInStock(!event);
    }
    return (
        <>        
            {/* <li  style={{color: stock ? 'green' : 'red'}} >{`Product Name: ${name} Price $ ${price} Stock Status ${stock ? 'Yes' : 'NO'}  `}<button onClick={() => stockHandler(stock)}>Stock Status</button></li> */}
            <li  style={{color: state ? 'green' : 'red'}} >{`Product Name: ${name} Price $ ${price} Stock Status ${state ? 'Yes' : 'NO'}  `}
            <button onClick={() => dispatch({type: state, payload: state})}>Stock Status</button></li>
        </>
)
}

export default  Product;