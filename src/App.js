import React, { Component } from 'react';
import {Provider} from "react-redux";
import store from './store';

import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import MoviesContainer from './components/home/MoviesContainer';


class App extends Component {
  render() {
    return (
          <Provider store={store}>
            <div>
              {/* <Navbar /> */}
              <Landing />
              <MoviesContainer />
              {/* <Footer /> */}
            </div>
          </Provider>
    );
  }
}

export default App;
