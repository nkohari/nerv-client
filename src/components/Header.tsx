import * as React from 'react';
import { IndexLink } from 'react-router';
import { Button } from '@blueprintjs/core';
import { DebugDialog, SocketIndicator } from 'components';
import { Action, userLoggedOut } from 'actions';
import { AuthContext, SocketState, connect } from 'data';
import './Header.styl';

interface HeaderProps {
  auth: AuthContext;
  socket: SocketState;
  userLoggedOut: Action;
}

interface HeaderState {
  isDebugDialogOpen: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {

  static actionsFromProps = {
    userLoggedOut
  };

  constructor(props) {
    super(props);
    this.state = { isDebugDialogOpen: false };
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
            <div className='pt-navbar-heading'>
              <IndexLink to='/' className='navbar-heading'>
                <span className='pt-icon-large pt-icon-build' />
                Mineboss
              </IndexLink>
            </div>
          </div>
          <div className='pt-navbar-group pt-align-right'>
            <SocketIndicator socket={socket} />
            <span className='pt-navbar-divider' />
            <Button iconName='wrench' className='pt-minimal' onClick={this.toggleDebugDialog} />
            <Button iconName='log-out' className='pt-minimal' onClick={this.props.userLoggedOut} />
          </div>
        </nav>
        <DebugDialog isOpen={isDebugDialogOpen} auth={auth} onDialogClosed={this.toggleDebugDialog} />
      </header>
    );
  }

}

export default connect(Header);
