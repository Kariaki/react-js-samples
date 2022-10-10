import React, { Component } from 'react'
import './color.css'
class Color extends Component {
    constructor(props) {
      super(props)
      this.inputrep = React.createRef()
      this.state = {
         color: ''
      }
    }
    handleChange = () =>{
        this.setState({
            color: this.inputrep.current.value
        })
    }
  render() {
    return (
      <div className='container'>
        <div>
            <div className='border' style={{backgroundColor: this.state.color}}>
            </div>
            <input ref={this.inputrep} value={this.state.color} onChange={this.handleChange} type='text' placeholder='Enter any color'/>
        </div>
      </div>
    )
  }
}

export default Color
