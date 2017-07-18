import * as React from 'react';
import { Header, SocketManager } from 'src/components';
import { Action, loadExchangeRates } from 'src/actions';
import { connect } from 'src/data';
import './Shell.styl';

interface ShellProps {
  loadExchangeRates: Action;
}

class Shell extends React.Component<ShellProps> {

  static connectedActions = {
    loadExchangeRates
  };

  componentDidMount() {
    this.props.loadExchangeRates();
  }

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

export default connect(Shell);
