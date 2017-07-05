import * as React from 'react';
import { Action, AuthState, SocketState, connect, userLoggedOut } from './data';
import { Header, SocketManager } from './components';
import './Shell.styl';

interface ShellProps {
  auth: AuthState;
  socket: SocketState;
  userLoggedOut: Action;
}

class Shell extends React.Component<ShellProps> {

  static actionsToProps = {
    userLoggedOut
  };

  static stateToProps = (state) => ({
    auth: state.auth,
    socket: state.socket
  })

  render() {
    const { children, auth, socket, userLoggedOut } = this.props;

    let content;
    if (children) {
      content = React.cloneElement(React.Children.only(children), { auth });
    }

    return (
      <div className='shell'>
        <Header auth={auth} socket={socket} userLoggedOut={userLoggedOut} />
        {content}
        <SocketManager auth={auth} socket={socket} />
      </div>
    );
  }

}

export default connect(Shell);
