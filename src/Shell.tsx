import * as React from 'react';
import { Action, AuthState, connect, userLoggedOut } from './data';
import { Header } from './components';
import './Shell.styl';

interface ShellProps {
  auth: AuthState;
  userLoggedOut: Action;
}

class Shell extends React.Component<ShellProps> {

  static actionsToProps = {
    userLoggedOut
  };

  static stateToProps = (state) => ({
    auth: state.auth
  })

  render() {
    const { children, auth, userLoggedOut } = this.props;

    let content;
    if (children) {
      content = React.cloneElement(React.Children.only(children), { auth });
    }

    return (
      <div className='shell'>
        <Header auth={auth} userLoggedOut={userLoggedOut} />
        {content}
      </div>
    );
  }

}

export default connect(Shell);
