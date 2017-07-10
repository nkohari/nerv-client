import * as React from 'react';
import { Fragment } from 'redux-little-router';
import { HomePage, GroupPage, AgentPage, Login, Signup } from 'src/pages';
import { RestrictedFragment } from 'src/components';
import Shell from './Shell';

class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <Fragment forRoute='/login'>
          <Login />
        </Fragment>
        <Fragment forRoute='/signup'>
          <Signup />
        </Fragment>
        <RestrictedFragment forRoute='/' loginPath='/login'>
          <Shell>
            <Fragment forRoute='/:groupid/:agentid'>
              <AgentPage />
            </Fragment>
            <Fragment forRoute='/:groupid'>
              <GroupPage />
            </Fragment>
            <Fragment forRoute='/'>
              <HomePage />
            </Fragment>
          </Shell>
        </RestrictedFragment>
      </div>
    );
  }

}

export default App;
