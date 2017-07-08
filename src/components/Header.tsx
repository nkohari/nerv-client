import * as React from 'react';
import { Button } from '@blueprintjs/core';
import { Breadcrumbs, SocketIndicator } from 'components';
import { Action, userLoggedOut } from 'actions';
import { AuthContext, SocketState, connect } from 'data';
import './Header.styl';

interface HeaderProps {
  auth: AuthContext;
  socket: SocketState;
  userLoggedOut: Action;
}

class Header extends React.Component<HeaderProps> {

  static actionsFromProps = {
    userLoggedOut
  };

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
            <span className='pt-navbar-divider' />
            <Breadcrumbs />
          </div>
          <div className='pt-navbar-group pt-align-right'>
            <SocketIndicator socket={socket} />
            <span className='pt-navbar-divider' />
            <Button iconName='cog' className='pt-minimal' />
            <Button iconName='log-out' className='pt-minimal' onClick={this.props.userLoggedOut} />
          </div>
        </nav>
      </header>
    );
  }

}

export default connect(Header);
