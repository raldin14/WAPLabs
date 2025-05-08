import { useReducer } from "react";
import { reducer } from "./reducer";

const ProductReducer = (props) =>{
    const {name, price, inStock} = props;
    const [state, dispatch] = useReducer(reducer,inStock);

    return (
        <>        
            <li  style={{color: state ? 'green' : 'red'}} >{`Product Name: ${name} Price $ ${price} Stock Status ${state ? 'Yes' : 'NO'}  `}
            <button onClick={() => dispatch({type: 'TOGGLE', payload: state})}>Stock Status</button></li>
        </>
)
}

export default  ProductReducer;