import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { stat } from 'fs';
import List from './List';

//Komponen =  Properties
//Time1 component increase
class Time1 extends Component{
  constructor(props){
      super(props)
      this.state = {
          time : props.start
      }
  }
  // LifeCycle
  componentDidMount(){
  this.addInterval = setInterval(() => this.increase(), 1000);
  
  }

  componentWillUnmount(){
      clearInterval(this.addInterval)
  }

  increase(){
    //update
      this.setState((state, props)=> ({
       time: parseInt(state.time) + 1
      }))
    }
    render(){
      return (
        <div>{this.state.time} Detik</div>
      )
    }
  }
  //Time2 Component decrease
  class Time2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            time : props.start
        }
    }
    // LifeCycle
    componentDidMount(){
    this.addInterval = setInterval(() => this.decrease(), 1000);
    
    }
  
    componentWillUnmount(){
        clearInterval(this.addInterval)
    }
  
    decrease(){
      //update
        this.setState((state, props)=> ({
         time: parseInt(state.time) - 1
        }))
      }
      render(){
        return (
          <div>{this.state.time} Detik</div>
        )
      }
    }
function Biodata(props) {
  return<span>umurnya {props.age}</span>
}
function Greeting(props){
  return <h1> Halo{props.name} - <Biodata age={props.age}/></h1>
}
class App extends Component{
  //
    constructor(props){
      super(props)
      this.state = {
        todoItem: '',
        items: []
      }
    }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items : [... this.state.items, this.state.todoItem],
      todoItem : ''
    })
  }

  handleChange = (event) =>{
    this.setState({
      todoItem: event.target.value
    })
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItem} onChange={this.handleChange}/>
        </form>
        <List items={this.state.items}/>
        <Greeting name = "Yamin" age="22"/>
          <Greeting name = "Yoichi" age="22"/>
          <Time1 start ="0"/>
          <Time2 start ="100"/>
      </header>
    </div>
  );
}
}
export default App;
