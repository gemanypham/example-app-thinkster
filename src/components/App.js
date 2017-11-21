import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import Header from './Header';

const mapStateToProps = state => ({
    appName: state.appName
});

class App extends React.Component {
    /*
    constructor() {
      super();
      this.state = {};
    }
  
    componentWillMount() {
      store.subscribe(() => this.setState(store.getState()));
    }
    */

    render() {
      return (
        <div>
          <Header appName={this.props.appName} />
          <Home />
        </div>
      );
    }
  }

export default connect(mapStateToProps, () => ({}) )(App);