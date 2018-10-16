import React, { Component } from "react"
import { hot } from "react-hot-loader"
import styled from 'styled-components'

const Styles = styled.div`
  background: red;
  height: ${props => (props.height + 200) + "px"};
  width: 200px;
`

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      height: 0
    }
    
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    this.setState({height: this.state.height + 50})
  }

  render() {
    return (
      <Styles height={this.state.height}>
        <div>
          Hello world
        </div>
        
        <button onClick={this.handleClick}>Click me!</button>
      </Styles>
    )
  }
}

export default hot(module)(App)