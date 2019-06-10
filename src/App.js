import React, { Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import service from './Api/service';
import Search from './components/search/Search';
import Navbar from './components/navbar/Navbar'



class App extends Component{
  constructor(){
      super();
      this.state = {
          pokemonList: [],
          searchList: ''
      }
      this.getSearchList = this.getSearchList.bind(this);
  }
  componentDidMount(){
      service.getPokemons()
      .then((result) => {
          this.setState({
              pokemonList: result.results,
          })
      })
      .catch((erro) => {
          throw new Error(erro);
      });
  }

  getSearchList = (pokemon) => {
    this.setState({
      searchList: pokemon
    })
  }

  render(){
    if(this.state.searchList){
      return (
          <Fragment>
            <Navbar />
            <div className="contain">
                <Search getSearchList={this.getSearchList} pokelist={this.state.pokemonList} />
            </div>
          </Fragment>
      );
    } else {
      return (
          <Fragment>
            <Navbar />
            <div className="container">
                <Search getSearchList={this.getSearchList} pokelist={this.state.pokemonList} newPokeList={this.newPokeList}/>
                <div className="">
                  {this.state.pokemonList.map((e,i) => (
                    <div key={i}>
                    </div>
                  ))}
                </div>
            </div>
          </Fragment>
      );
    }
  }
}

export default App;