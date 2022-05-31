import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { Component } from 'react';
import '@aws-amplify/ui-react/styles.css';

import { Welcome, Clock, Staple } from './components.js';

import awsExports from './aws-exports';
Amplify.configure(awsExports);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }

  render() {
    return (
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <button onClick={signOut}>Sign out</button>
            <Welcome name={user.username} />
            <Clock />
            <Staple count={this.state.count} />
          </main>
        )}
      </Authenticator>
    );
  }
}

export default App;
