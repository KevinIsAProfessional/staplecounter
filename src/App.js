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

class PrintStapleCount extends Component {
  render() {
    return (
      <div>
        <p>{this.props.staple.count}</p>
      </div>      
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0,

    }
  }

  // async componentDidMount() {
  //   this.setState(async (staple) => await API.graphql(graphqlOperation(createStaple)));
  // }

  addCount = async () => {
    this.setState((state) => ({
      count: state.count + 1
    }));
  }

  subCount = async () => {
    this.setState((state) => ({
      count: state.count -1
    }));
  }

  render() {
    return (
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <Welcome name={user.username } />
            <div>{this.state.count}</div> 
            {/* <div>{this.state.staple.count}</div> */}

            <div><button onClick={this.addCount}>Add 1</button><button onClick={this.subCount}>Subtract 1</button></div>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    );
  }
}

export default App;
