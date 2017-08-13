import api from '../apiData/api'

export function getApiData(data) {
    return {
        type: "API_DATA",
        payload: data
    };
}

// export function disableData(bool) {
//     return {
//         type: 'DISABLE_DATA',
//         isLoading: bool
//     };
// }

export function apiFetch(){
  return function(dispatch){

    // dispatch(apiIsLoading(true));

    api.getData().then(data => {
       dispatch(getApiData(data));
    //    dispatch(apiIsLoading(false));
    }).catch((err) => console.log(err));
  }
}