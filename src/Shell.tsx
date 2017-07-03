import * as React from 'react';
import { AuthState, connect } from './data';
import './Shell.styl';

interface ShellProps {
  auth: AuthState;
}

class Shell extends React.Component<ShellProps> {

  static stateToProps = (state) => ({
    auth: state.auth
  })

  render() {
    const { children, auth } = this.props;

    let content;
    if (children) {
      content = React.cloneElement(React.Children.only(children), { auth });
    }

    return (
      <div className='shell'>
        {content}
      </div>
    );
  }

}

export default connect(Shell);
