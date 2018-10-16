import React, { Component } from "react"
import { hot } from "react-hot-loader"
import styled from 'styled-components'

const Styles = styled.div`
  background: red;
  height: 200px;
  width: 200px;
`

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Styles>
        <div>
          Hello world
        </div>
      </Styles>
    )
  }
}

export default hot(module)(App)