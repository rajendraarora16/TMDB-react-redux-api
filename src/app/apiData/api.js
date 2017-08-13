class api {  
   static getData() {
     return fetch('https://api.themoviedb.org/3/movie/popular?api_key=91dfe8815d36cc1f74a42b89b0bf87cb&language=en-US&page=1').then(response => {
        //console.log("resp ---> " , response.json());
        return response.json();
    }).catch(error => {
        return error;
    });
  }
}



export default api;
