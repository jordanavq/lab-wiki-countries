import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import countries from '../src/countries.json';
import CountriesList from '../src/components/CountriesList';
import CountryDetails from '../src/components/CountryDetails';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries}></CountriesList>
          <Switch>
            <Route
              path="/:cca3"
              render={(props) => (
                <CountryDetails {...props} countries={countries} />
              )}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
