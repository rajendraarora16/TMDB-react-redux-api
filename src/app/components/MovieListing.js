import React from 'react'

class MovieListing extends React.Component{

    render(){
        return(
            <div className="row">
                {this.props.imagePath}
            </div>                        
        )
    }
}

export default MovieListing;
