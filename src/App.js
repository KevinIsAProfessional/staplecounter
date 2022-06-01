import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { useState } from 'react';
import '@aws-amplify/ui-react/styles.css';


import { Welcome, Clock, Staple } from './components.js';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  const [count] = useState(0);

  return (
      <Authenticator>
        {({ signOut, user,  }) => (
          <main>
            <button onClick={signOut}>Sign out</button>
            <Welcome name={user.username} />
            <Clock />
            <Staple count={count} />
          </main>
        )}
      </Authenticator>
  );
}

export default App;
