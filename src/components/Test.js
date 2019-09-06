import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    return (
      <div>
        soy Test Component <br />
        <Boton /> 
        <Boton /> 
        <Boton /> 
        <Boton /> 

      </div>
      
    )
  }
}


class Boton extends Component {
  state = { 
    likes: 0, 
    dislikes: 0, 
    meGusta: false
   }

  clickLike = () => {
    !this.state.meGusta ? 
    this.setState({ 
      likes: this.state.likes + 1,
      meGusta: true
    }) :
    this.setState({ 
      likes: this.state.likes - 1,
      meGusta: false
    })
  }

  render(){
    let style = { float: 'left', padding: 20}
    
    return <div style={style}>
    Me gusta: {this.state.likes} 
    no Me gusta: {this.state.dislikes} <br />
      <button 
        onClick={ this.clickLike }
      style={ this.state.meGusta ? {color: 'blue'} : {} }>

      me gusta 
      </button>

      <button onClick={ () => {
        this.setState({ dislikes: this.state.dislikes + 1})
      } }> 
      no me gusta 
      </button>


    </div>
  }
}