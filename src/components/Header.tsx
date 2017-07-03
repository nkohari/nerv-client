import * as React from 'react';
import { Button } from '@blueprintjs/core';
import { AuthState, Action } from '../data';
import './Header.styl';

interface HeaderProps {
  auth: AuthState;
  userLoggedOut: Action;
}

class Header extends React.Component<HeaderProps> {

  onLogOutClicked = event => {
    this.props.userLoggedOut();
  }

  render() {
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
            <div className='pt-button-group'>
              <Button iconName='cog'>Settings</Button>
              <Button iconName='log-out' onClick={this.onLogOutClicked}>Log Out</Button>
            </div>
          </div>
        </nav>
      </header>
    );
  }

}

export default Header;
