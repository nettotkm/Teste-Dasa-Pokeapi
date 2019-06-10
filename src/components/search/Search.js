import React, { Component, Fragment } from "react";
import PokeSearch from '../pokeSearch/PokeSearch';
import './style.css' ;
class Search extends Component {
 constructor(props) {
   super(props);
   this.state = {
     name: ''
   }
   this.searchInput = this.searchInput.bind(this);
 }

 searchInput (e) {
   this.setState({
     name: e.target.value
   });
   this.props.getSearchList(e.target.value);
}

 render () {
    return (
        <Fragment className="search">
        <input className='input' type="text" placeholder="Search a pokemon" name="name" value={this.state.name} onChange={(e) => this.searchInput(e)} />
        <PokeSearch nameList={this.state.name} pokeList={this.props.pokelist}/>
        </Fragment>
      );
    }
}

export default Search;