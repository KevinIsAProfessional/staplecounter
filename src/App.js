import { Component } from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createStaple, updateStaple } from './graphql/mutations';
import { getStaple } from './graphql/queries';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


import awsExports from './aws-exports';
Amplify.configure(awsExports);


class Welcome extends Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

class Clock extends Component {
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

class Staple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
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


class App extends Component {

  render() {
    return (
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <button onClick={signOut}>Sign out</button>
            <Welcome name={user.username } />
            <Clock />
            <Staple  />
          </main>
        )}
      </Authenticator>
    );
  }
}

export default App;
