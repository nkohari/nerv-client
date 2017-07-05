import * as React from 'react';
import * as classNames from 'classnames';
import { SocketState } from '../data';
import './SocketStatus.styl';

interface SocketStatusProps {
  socket: SocketState;
}

class SocketStatus extends React.Component<SocketStatusProps> {

  getContentForStatus() {
    const { status } = this.props.socket;
    switch (status) {
      case 'connected':
        return { text: 'Connected', intent: 'pt-intent-success' };
      case 'disconnected':
        return { text: 'Disconnected', intent: 'pt-intent-disconnected' }
      case 'error':
        return { text: 'Error', intent: 'pt-intent-error' };
      default:
        throw new Error(`Unknown socket status ${status}`);
    }
  }

  render() {
    const { text, intent } = this.getContentForStatus();
    const classes = classNames('pt-icon-standard', 'pt-icon-full-circle', intent);
    return (
      <div className='socket-status'>
        <span className={classes} />
        {text}
      </div>
    );
  }

}

export default SocketStatus;
