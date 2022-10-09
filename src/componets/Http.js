import React, { Component } from 'react'
import axios from '../../my-app/node_modules/axios'
class Http extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMsg: ''
      }
    }
  
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({
                posts: response.data
            })
        }).catch(error => {
            console.log(error)
            this.setState({
              errorMsg: "Invalid url"
            })
        })
    }
  render() {
    const {posts, errorMsg} = this.state
    return (
      <div>
        <h2>List os post</h2>
        {
            posts.length?
            posts.map(post => <div key={post.id}>{post.title}</div>)
            :null
        }
        {errorMsg? <div>{errorMsg}</div>: null}
      </div>
    )
  }
}

export default Http
