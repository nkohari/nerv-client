import * as React from 'react';
import * as classNames from 'classnames';
import { SocketState, SocketStatus } from '../data';
import './SocketIndicator.styl';

interface SocketIndicatorProps {
  socket: SocketState;
}

class SocketIndicator extends React.Component<SocketIndicatorProps> {

  getContentForStatus() {
    const { status } = this.props.socket;
    switch (status) {
      case SocketStatus.Connected:
        return { text: 'Connected', intent: 'pt-intent-success' };
      case SocketStatus.Disconnected:
        return { text: 'Disconnected', intent: 'pt-intent-disconnected' };
      case SocketStatus.Error:
        return { text: 'Error', intent: 'pt-intent-error' };
      default:
        throw new Error(`Unknown socket status ${status}`);
    }
  }

  render() {
    const { text, intent } = this.getContentForStatus();
    const classes = classNames('pt-icon-standard', 'pt-icon-full-circle', intent);
    return (
      <div className='socket-indicator'>
        <span className={classes} />
        {text}
      </div>
    );
  }

}

export default SocketIndicator;
