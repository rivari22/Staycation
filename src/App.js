import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./assets/scss/style.scss"
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/DetailsPage';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/properties/:id" exact component={DetailsPage}></Route>
        <Route path="/checkout" exact component={Checkout}></Route>
        {/* <Route path="/example" component={Example}></Route> */}
      </Router>
    </div>
  );
}

export default App;
