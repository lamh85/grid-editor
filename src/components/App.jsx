import React, { Component } from "react"
import { hot } from "react-hot-loader"
import styled from 'styled-components'

const StylesOuter = styled.div`
  height: 100vh;
  width: 100vw;
  background: yellow;
`

const gridCssValue = length => {
  const percentage = 100 / length + "%"
  return (percentage + " ").repeat(length)
}

const StylesSandbox = styled.div`
  display: grid;
  grid-template-columns: ${props => gridCssValue(props.columnCount)};
  grid-template-rows: ${props => gridCssValue(props.rowCount)};
`

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      height: 0,
      columnCount: 1,
      rowCount: 1
    }
    
    this.handleClick = this.handleClick.bind(this)
  }

  addChildElement() {

  }
  
  handleClick() {
    this.setState({height: this.state.height + 50})
  }

  render() {
    return (
      <StylesOuter>        
        <button onClick={this.handleClick}>Increase</button>
      </StylesOuter>
    )
  }
}

export default hot(module)(App)