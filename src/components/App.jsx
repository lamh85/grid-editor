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
  
  .child {
    border: 1px solid black;
    height: 100px;
    width: 100px
  }
`

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      height: 0,
      columnCount: 1,
      rowCount: 1
    }
    
    this.handleGridChange = this.handleGridChange.bind(this)
  }

  handleGridChange(event) {
    const {increment, axis} = event.target.dataset
    
    let stateName = "columnCount"
    if (axis == "horizontal") {
      stateName = "rowCount"
    }

    const stateValue = this.state[stateName] + Number(increment)
    
    if (stateValue > 0) {
      this.setState({[stateName]: stateValue})
    }
  }

  render() {
    const buttons = [
      {content: "More rows!", increment: 1, axis: "horizontal"},
      {content: "Fewer rows!", increment: -1, axis: "horizontal"},
      {content: "More columns!", increment: 1, axis: "vertical"},
      {content: "Fewer columns!", increment: -1, axis: "vertical"}
    ]
    
    const {columnCount, rowCount} = this.state
    
    return (
      <StylesOuter>
        {
          buttons.map((item, index) => {
            return <button  data-increment={item.increment}
                            data-axis={item.axis}
                            key={index}
                            onClick={this.handleGridChange} >
              {item.content}
            </button>
          })
        }
        
        <StylesSandbox columnCount={columnCount} rowCount={rowCount}>
          {
            Array(columnCount * rowCount).fill().map((item, index) => {
              return <div key={index} className="child"></div>
            })
          }
        </StylesSandbox>
      </StylesOuter>
    )
  }
}

export default hot(module)(App)