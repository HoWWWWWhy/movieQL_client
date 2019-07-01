import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import { HashRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route exact={true} path={"/"} component={Home} />
          <Route path={"/details/:movieId"} component={Detail} />
        </Router>

      </ApolloProvider>
    );
  }

}

export default App;
