import React, { Component } from "react";
import "./App.css";
import LocResults from "./LocResults.js";
const axios = require("axios");



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  //handle city search
  handleSearch = (e) => {
    // Handling input
    let input = e.target.value;
    //handle uppercase issue
    let cityName = input;
 
      axios
        .get(`http://ctp-zip-api.herokuapp.com/city/${cityName}`)
        .then((response) => 
        {  
          const results = response.data;
          console.log(results);
          // Sets data in state
          this.setState({
            results,
          });
        })
         // Handles error
        .catch((error) => {
          console.log(error);
        });

  };

  render() {
    return (
      <div>
          <h1>City Searchbar</h1>
          <div>
            <form action="">
              <input
                type="text"
                onChange={this.handleSearch}
              />
            </form>
      </div>

          <LocResults results={this.state.results} />
       
      </div>
    );
  }

}
export default App;