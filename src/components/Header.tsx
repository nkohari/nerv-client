import * as React from 'react';
import { Button } from '@blueprintjs/core';
import { Action, AuthState, SocketState } from '../data';
import SocketStatus from './SocketStatus';
import './Header.styl';

interface HeaderProps {
  auth: AuthState;
  socket: SocketState;
  userLoggedOut: Action;
}

class Header extends React.Component<HeaderProps> {

  onLogOutClicked = event => {
    this.props.userLoggedOut();
  }

  render() {
    const { socket } = this.props;
    return (
      <header className='header'>
        <nav className='pt-navbar pt-fixed-top pt-dark'>
          <div className='pt-navbar-group pt-align-left'>
            <div className='pt-navbar-heading'>
              <span className='pt-icon-large pt-icon-build' />
              <span className='navbar-heading-text'>Mineboss</span>
            </div>
          </div>
          <div className='pt-navbar-group pt-align-right'>
            <SocketStatus socket={socket} />
            <span className='pt-navbar-divider' />
            <Button iconName='cog' className='pt-minimal' />
            <Button iconName='log-out' className='pt-minimal' onClick={this.onLogOutClicked} />
          </div>
        </nav>
      </header>
    );
  }

}

export default Header;
