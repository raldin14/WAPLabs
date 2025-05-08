

export const reducer = (state, action) => {
    const {type, payload} = action;
    
    switch(type){
        case 'TOGGLE' :
            return !state;
        default:
            return payload;
    }
}