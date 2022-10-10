import React, { Component } from 'react'
import {ContextConsumer} from './Usercontext' 
class WithCounter extends Component {
  render() {
    return (
      <ContextConsumer>
        {
          (user) => <div>{user}</div>
        }
      </ContextConsumer>
    )
  }
}

export default WithCounter
