import api from '../searchApi/api'

export function getSearchData(data){
    return {
        type: 'SEARCH_DATA',
        payload: data
    }
}


export function searchFetch(query){
    return function(dispatch){
        api.getSearch(query).then(data => {
            dispatch(getSearchData(data));
        }).catch((err) => console.log(err));
    }
}


