import { useReducer } from "react";
import { reducer } from "./reducer";

const ProductReducer = (props) =>{
    const {name, price, inStock} = props;
    const [state, dispatch] = useReducer(reducer,inStock);

    return (
        <>        
            <td style={{color: state ? 'green' : 'red'}}>{name}</td><td>{price}</td><td>{state ? "In Stock" : "Out of Stock"}</td><td><button onClick={() => dispatch({type: 'TOGGLE', payload: state})}>Stock Status</button></td>
        </>
)
}

export default  ProductReducer;