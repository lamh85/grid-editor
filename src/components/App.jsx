import React, { Component } from "react"
import { hot } from "react-hot-loader"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        height: "200px",
        width: "200px",
        background: "red"
      },
      maxValues: {
        height: 500,
        width: 500
      },
      dropdownValue: "background"
    }

  }

  render() {

    return (
      <div>
        Hello world
      </div>
    )
  }
}

export default hot(module)(App)