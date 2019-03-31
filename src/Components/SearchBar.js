import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component{
   
   constructor(){
       super();
       this.state={text: ''}
   };

     onInputChange = (event) => {
       this.setState({text: event.target.value});
   };

   onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.text)
   };
    
   render(){
        return(
            <div className="bar-wrapper">
                <form onSubmit={this.onFormSubmit}>
                    <div className="text-field">
                        <input type="search" 
                        placeholder="Search YouTube videos" 
                        value={this.state.text}
                        onChange={this.onInputChange}></input>
                        <button>search</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;