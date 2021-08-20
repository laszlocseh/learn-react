import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "date": new Date(), 
      "count": 1,
      "click": 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.timerID = setInterval(
      () => this.calculate(),
      1000
    );
  }

  tick() {
    this.setState({date: new Date()})
  }

  calculate () {
    this.setState((state) => ({
      count: state.count + this.props.increment
    }));
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleClick() {
    this.setState((state) => ({
      click: state.click + 1
    }));
  }

  render () {
    // var date = new Date();
    return (
      <div>
        <div>The time is {this.state.date.toLocaleTimeString()}!</div>
        <div>The count is {this.state.count}!</div>
        <button onClick={() => this.handleClick()}>Clicked {this.state.click} times!</button>
      </div>
    )
  }
}

class List extends Component {
  render() {
    return <li>{this.props.item}</li>
  }
}

class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {list: ['valami', 'semmi', 'nemtudom']}
  }

  render() {
    const myList = this.state.list.map((i) => <List item={i}/>)
    
    return (
      <ul>{myList}</ul>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock increment={3}/>
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
