import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Menu extends Component {

  constructor(){
    super(props);
    this.redirAboutMe = this.redirAboutMe.bind(this);
    this.state = {};
  }

  redirAboutMe() {

  }


  render(){
    return(
        <div>
          <button onClick={this.redirAboutMe}>About Me</button>
        </div>
      );
    }
}



export default Menu;
