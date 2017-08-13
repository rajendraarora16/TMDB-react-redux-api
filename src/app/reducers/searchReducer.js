const searchReducer = (state = {
    searchData: []
}, action) => {
        switch(action.type){
        case 'SEARCH_DATA':
            return Object.assign({}, state, { searchData: action.payload});
            break;
    }
    return state;
};

export default searchReducer;
