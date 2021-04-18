import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";

import {Button} from './Button';

class Index extends React.Component {

  // to changeColor of application
  constructor(props) {
    super(props)
  
    this.state = {
       COLOR:'red'
    }

    this.changeColor=this.changeColor.bind(this);

  }

  changeColor(){
    const colorArr = ['red','green','blue','silver','purple','aqua'];
    const randomNum = Math.floor(Math.random()*colorArr.length);

    this.setState({
      COLOR:colorArr[randomNum]
    })

    document.querySelector('#root').style.backgroundColor=this.state.COLOR;

  }

  render() {
    return (
      <div className='mainApp'>
        <Button onClick={this.changeColor} />
      </div>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

