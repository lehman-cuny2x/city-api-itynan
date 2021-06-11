import React, { Component } from "react";

class LocResults extends Component {
  render() {
    return this.props.results.map((result) => {
        return (
          <div
           
          >
            {result}
          </div>
        );
      })
     
  }
}

export default LocResults;