const dataReducer = (state = {
    data: []
}, action) => {
    switch (action.type) {
        case "API_DATA":
            return Object.assign({}, state, { data: action.payload});
            break;
        
            // case "API_IS_LOADING":
            // return Object.assign({}, state, { dataListing: action.payload });
    }
    return state;
};

export default dataReducer;