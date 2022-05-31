import { Component } from 'react';



export class Welcome extends Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}


export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export class Staple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    }
  } 

  incrementStaple = async () => {
    this.setState((state) => ({
      count: state.count + 1
    }));
  }

  doubleStaple = async () => {
    this.setState((state) => ({
      count: state.count * 2
    }));
  }
  
  decrementStaple = async () => {
    this.setState((state) => ({
      count: state.count - 1
    }));
  }

  halveStaple = async () => {
    this.setState((state) => ({
      count: state.count / 2
    }));
  }
    
  render() {
    return (
      <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.incrementStaple}>Add 1</button>
          <button onClick={this.decrementStaple}>Subtract 1</button>
          <button onClick={this.doubleStaple}>x2</button>   
          <button onClick={this.halveStaple}>/2</button>
      </div>
    );
  }

}
