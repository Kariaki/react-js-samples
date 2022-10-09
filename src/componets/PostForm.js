import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userid: '',
         title: '',
         body: ''
      }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
      try{
        e.preventDefault()
        console.log(this.state)
      }
        catch(error){
          return <h1>"Error"</h1>
        }
    }
  render() {
    const{userid, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <input type='text' name='userid' value={userid} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type='text' name='title' value={title} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type='text' name='body' value={body} onChange={this.changeHandler}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm
