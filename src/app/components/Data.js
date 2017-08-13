import React from "react";

class Data extends React.Component {
    render() {  
        
        var monthNames = {"01":"Jan", "02":"Feb", "03":"Mar", "04":"Apr", "05":"May", "06":"Jun", "07":"Jul", "08":"Aug", "09":"Sept", "10":"Oct", "11":"Nov", "12":"Dec"};
        var date = this.props.release_date;
        var arrDate = date.split('-');
        var monthName = [arrDate[1]]
        var language = this.props.original_language;
        if(this.props.result == "false"){
            
        }

        return (
            <div className="col-xs-4">                
                <div className="darker"></div>
                <img className="movies-list" src={"http://image.tmdb.org/t/p/w342"+this.props.imagePath} />                
                <p className="absolute-text">{arrDate[2]+" "+monthNames[monthName]+" "+arrDate[0]}</p>
                <p className="absolute-heart"><i className="fa fa-heart" aria-hidden="true"></i></p>
                <p className="absolute-comment"><i className="fa fa-comments-o" aria-hidden="true"></i></p>
                <p className="absolute-star"><i className="fa fa-star" aria-hidden="true"></i> {this.props.vote_count}</p>
                <p className="movieNameLanguage">{this.props.original_language.toUpperCase()}</p>
                <p className="movieNameText">{this.props.original_title}</p>
            </div>
        )
    }  
}
export default Data;