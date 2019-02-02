import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

const baseUrl = "http://localhost:3333";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get(`${baseUrl}/smurfs`)
      .then(res => {
        console.log(res.data);
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  postNewSmurf = smurf => {
    axios
      .post(`${baseUrl}/smurfs`, smurf)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to="/">
            Village Home
          </NavLink>
          <NavLink exact to="/smurf-form">
            Add New Smurf
          </NavLink>
        </nav>
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          exact
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} postNewSmurf={this.postNewSmurf} />
          )}
        />
      </div>
    );
  }
}

export default App;
