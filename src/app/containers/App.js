import React, {Component} from "react";
import {connect} from "react-redux";
import { User } from "../components/User";
import { Main } from "../components/Main";
import Data from "../components/Data";
import MovieListing from '../components/MovieListing';
import Header from '../components/Header'
import { setName, getApiData } from "../actions/userActions";
import {apiFetch} from "../actions/dataActions"
import {searchFetch} from "../actions/searchActions"
import ResultError from "../components/ResultError"

class App extends Component {    

    constructor(props){
        super(props)
        this.searchQuery = this.searchQuery.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(apiFetch())
    }

    searchQuery( query ) {
        if(query.length != 0){            
            console.log('length has text')
            this.props.dispatch(searchFetch(query))
        }else{            
            this.props.dispatch(searchFetch(''))            
            console.log('lenght is empty')
        }
    }

    render() {    
        let dataSet=this.props.data.data.results;
        let resultSet = this.props.searchData.searchData.results;
        // console.log('checking props:   ', this.props.searchData.searchData.length)
        if(resultSet){
            
            let imagePath = []
            let release_date = []
            let original_language = []
            let resultFound = false;

            resultSet.forEach(function(value, key){
                console.log('my valueee: ', value)
                if(value.backdrop_path && value){ 
                    resultFound = true                   
                    imagePath.push(<Data key={key} imagePath={value.backdrop_path} release_date={value.release_date} original_title={value.original_title} original_language={value.original_language} vote_count={value.vote_count} />)
                }else{
                    resultFound = false
                }
            })
            if(resultFound){
                return(                
                    <div className="wrapper">
                        <Header searchQuery = { this.searchQuery } />
                        <div className="movies-listing">
                            <div className="container">
                                <MovieListing imagePath={imagePath} />
                            </div>
                        </div>
                    </div>
                )
            }else{
                return(                
                    <div className="wrapper">
                        <Header searchQuery = { this.searchQuery } />
                        <div className="movies-listing">
                            <div className="container">
                                <h1>No movies found that match the search criteria.</h1>
                            </div>
                        </div>
                    </div>
                )
            }   
        }
        else if(dataSet || this.props.searchData.searchData.errors){
            let imagePath = []

            dataSet.forEach(function (value, key) {
                imagePath.push(<Data key={key} imagePath={value.backdrop_path} release_date={value.release_date} original_title={value.original_title} original_language={value.original_language} vote_count={value.vote_count} />)
            })
            return(
                <div className="wrapper">
                    <Header searchQuery = { this.searchQuery } />
                    <div className="movies-listing">
                        <div className="container">
                            <MovieListing imagePath={imagePath} />               
                        </div>
                    </div>
                </div>
            )

        }else{
            return(
                <div className="middle-loader">
                    <h1>Loading</h1>
                </div>
            )
        }
        // console.log("this.props",this.props);
    }
    
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
      math: state.math,
      data: state.data,
      searchData: state.searchData
  };
};

// const mapDispatchToProps = (dispatch) => {
//     return dispatch(apiFetch()), dispatch(searchFetch())
// };

export default connect(mapStateToProps)(App);
