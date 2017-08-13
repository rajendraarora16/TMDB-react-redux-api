class api {  
   static getSearch(query) {
     return fetch('https://api.themoviedb.org/3/search/movie?api_key=91dfe8815d36cc1f74a42b89b0bf87cb&query='+query).then(response => {
        //console.log("resp ---> " , response.json());
        return response.json();
    }).catch(error => {
        return error;
    });
  }
}

export default api;
