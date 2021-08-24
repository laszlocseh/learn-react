import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "date": new Date(), 
      "count": 0,
      "click": 0
    };

    this.handleClick = this.handleClick.bind(this);
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
    this.setState({
      count: this.state.count + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleClick() {
    this.setState({
      click: this.state.click + 1
    });
  }

  render () {
    return (
      <div>
        <div>The time is {this.state.date.toLocaleTimeString()}!</div>
        <div>The count is {this.state.count}!</div>
        <button onClick={this.handleClick}>Clicked {this.state.click} times!</button>
      </div>
    )
  }
}

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onItemClick(this.props.item)
  }

  render() {
    return <li onClick={this.handleClick}>{this.props.item.text}</li>
  }

}

class ToDoList extends Component {
  constructor(props) {
    super(props)
    const _lista = [
      {id: 1, text: "valami"},
      {id: 2, text: "semmi"},
      {id: 3, text: "nemtudom"}
    ]
    this.state = {
      list: _lista,
      itemName: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item){
    // console.log(item);
    const newList = this.state.list.filter((i) => i.id !== item.id);
    this.setState({list: newList});
  }

  handleChange(event) {
    this.setState({itemName: event.target.value});
  }

  handleSubmit(event) {
    const maxId = this.state.list.length ? Math.max.apply(Math, this.state.list.map(function(o) { return o.id; })) : 0;

    this.setState({
      list: [...this.state.list, ...[{id: maxId + 1, text: this.state.itemName}]]
    });

    this.setState({itemName: ''});
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.itemName} onChange={this.handleChange}></input>
          <input type="submit" value="Add"></input>
        </form>
        <ul>
          {
            this.state.list.map((i) => <ListItem key={i.id} item={i} onItemClick={this.handleClick}/>)
          }
        </ul>
      </div>
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