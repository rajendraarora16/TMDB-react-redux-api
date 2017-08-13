import React from 'react'

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        let query = event.target.value
        this.props.searchQuery( query )
    }
    render(){
        return(
            <div className="header">
                <div className="header-logo">
                    <img src="../assets/logo.png" />
                </div>
                <div className="right-header-container">
                    <div className="row-header">
                        {/* <div className="column-header">
                        <p>POPULAR</p>
                        </div>
                        <div className="column-header">
                            <p>FAVORITES</p>
                        </div> */}
                        <div className="column-header">
                            <input onChange={this.handleChange} className="input_search" type="text" name="search" placeholder="Search movies" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
