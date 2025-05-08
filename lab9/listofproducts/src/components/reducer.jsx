

export const reducer = (state, action) => {
    const {type, payload} = action;
    
    switch(type){
        case true :
            return false;
        default:
            return true;
    }

}