import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 

import './App.css';
import './Custom.css';

import Dashboard from './dashboard/dashboard'
import PokemonStats from './pokemon/pokemonStats'
import Header from './template/header'

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Header />
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/pokemonstats' component={PokemonStats} />
          </div>
      </Router>
    );
  }
}

export default App;
