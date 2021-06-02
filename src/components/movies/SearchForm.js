import React, { Component } from "react";
import "./SearchForm.css"

class SearchForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             searchTerm: "batman"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            searchTerm: event.target.value
        });
    }

    render() {
        return(
            <div> 
            <h2 className="title">Search Movies</h2>
            <form className="form" onSubmit={this.props.onSubmit}>
                <input className="input" value={this.state.searchTerm} onChange={this.handleChange}/>
                <button className="button" type="submit">Search</button>
            </form>
            </div>
        );
    }
    
}

export default SearchForm;