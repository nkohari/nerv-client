import * as React from 'react';
import { IndicatorLight } from 'src/components';
import { SocketState, SocketStatus } from 'src/data';
import './SocketIndicator.styl';

interface SocketIndicatorProps {
  socket: SocketState;
}

class SocketIndicator extends React.Component<SocketIndicatorProps> {

  render() {
    const { socket } = this.props;

    let text;
    let status;

    switch (socket.status) {
      case SocketStatus.Connected:
        text = 'Connected';
        status = 'good';
        break;
      case SocketStatus.Disconnected:
        text = 'Disconnected';
        status = 'warning';
        break;
      case SocketStatus.Error:
        text = 'Error';
        status = 'bad';
        break;
      default:
        throw new Error(`Unknown socket status ${socket.status}`);
    }

    return (
      <div className='socket-indicator'>
        <IndicatorLight status={status} />
        {text}
      </div>
    );
  }

}

export default SocketIndicator;
