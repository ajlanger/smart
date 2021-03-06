import logo from './logo.svg';
import './App.css';

import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'

function App( { signOut, user} ) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Heading level={1}>Hello {user.userDataKey} </Heading>
        <Button onClick={signOut}>Sign out</Button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
