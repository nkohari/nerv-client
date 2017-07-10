import * as React from 'react';
import { Header, SocketManager } from 'src/components';
import './Shell.styl';

class Shell extends React.Component {

  render() {
    const { children } = this.props;
    return (
      <div className='shell'>
        <Header />
        {children}
        <SocketManager />
      </div>
    );
  }

}

export default Shell;
