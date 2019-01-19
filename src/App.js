import React, { Component } from 'react';
import Search from './components/Search';
import Profile from './components/Profile';
import Results from './components/Results';
import base from './rebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    base.bindToState('data', {
      context: this,
      state: 'data',
      asArray: true
    });
  }
  render() {
    var data = [];
    if (typeof this.state.data[0] !== 'undefined') {
      data = this.state.data;
    }
    return (
      <Router>
        <div className='grid'>
          <Search />
          <Switch>
            <Route exact path='/' component={() => <Results data={data} />} />
            } />
            <Route
              exact
              path='/profile/:id'
              component={props => <Profile data={data} {...props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
