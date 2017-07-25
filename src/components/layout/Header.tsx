import * as React from 'react';
import { push } from 'redux-little-router';
import { Button } from '@blueprintjs/core';
import { Breadcrumbs, DebugDialog, SocketIndicator } from 'src/components';
import { userLoggedOut } from 'src/actions';
import { Credentials, SocketState, connect } from 'src/data';
import './Header.styl';

interface HeaderProps {
  auth: Credentials;
  socket: SocketState;
  push: typeof push;
  userLoggedOut: typeof userLoggedOut;
}

interface HeaderState {
  isDebugDialogOpen: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {

  constructor(props) {
    super(props);
    this.state = { isDebugDialogOpen: false };
  }

  onLogOutClicked = event => {
    this.props.userLoggedOut();
    this.props.push('/login');
  }

  toggleDebugDialog = event => {
    this.setState({ isDebugDialogOpen: !this.state.isDebugDialogOpen });
  }

  render() {
    const { auth, socket } = this.props;
    const { isDebugDialogOpen } = this.state;

    return (
      <header className='header'>
        <nav className='pt-navbar pt-fixed-top pt-dark'>
          <div className='pt-navbar-group pt-align-left'>
            <Breadcrumbs />
          </div>
          <div className='pt-navbar-group pt-align-right'>
            <SocketIndicator socket={socket} />
            <span className='pt-navbar-divider' />
            <Button iconName='wrench' className='pt-minimal' onClick={this.toggleDebugDialog} />
            <Button iconName='log-out' className='pt-minimal' onClick={this.onLogOutClicked} />
          </div>
        </nav>
        <DebugDialog isOpen={isDebugDialogOpen} auth={auth} onDialogClosed={this.toggleDebugDialog} />
      </header>
    );
  }

}

export default connect(Header, {
  actions: {
    push,
    userLoggedOut
  },
  readPropsFromRedux: (state, props) => ({
    auth: state.auth,
    socket: state.socket
  })
});
