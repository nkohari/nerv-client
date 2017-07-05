import * as React from 'react';
import * as NesClient from 'nes/client';
import { Action, AuthState, SocketState, connect, socketConnected, socketDisconnected, socketError, messageReceived } from '../data';

interface SocketManagerProps {
  auth: AuthState;
  socket: SocketState;
  socketConnected: Action;
  socketDisconnected: Action;
  socketError: Action;
  messageReceived: Action;
}

class SocketManager extends React.Component<SocketManagerProps> {

  static actionsToProps = {
    socketConnected,
    socketDisconnected,
    socketError,
    messageReceived
  };

  client: any;

  componentDidMount() {
    if (this.props.auth.user) {
      this.connectIfAuthenticated(this.props);
    }
  }

  componentWillReceiveProps(newProps: SocketManagerProps) {
    const oldUser = this.props.auth.user ? this.props.auth.user.id : null;
    const newUser = newProps.auth.user ? newProps.auth.user.id : null;
    if (newUser && oldUser !== newUser) {
      this.connectIfAuthenticated(newProps);
    }
  }

  componentWillUnmount() {
    if (this.client) {
      this.disconnect();
    }
  }

  connectIfAuthenticated(props: SocketManagerProps) {
    const { user, token } = props.auth;
    if (user && token) {
      const options = {
        auth: {
          headers: { authorization: `Bearer ${token}` }
        }
      };
      // NB: This weird typecast is a result of requiring nes/client instead of nes
      // directly, which screws with the typings.
      this.client = new (NesClient as any).Client(`ws://${process.env.API_HOST}`);
      this.client.connect(options, err => {
        if (err) {
          this.props.socketError(err);
          return;
        }
        this.client.subscribe(`/events/${user.id}`, this.onSocketMessage, err2 => {
          if (err2) {
            this.props.socketError(err2);
            return;
          }
          this.props.socketConnected();
        });
      });
    }
  }

  disconnect() {
    this.client.disconnect();
    this.props.socketDisconnected();
  }

  onSocketMessage = message => {
    this.props.messageReceived(message);
  }

  render() {
    return null;
  }

}

export default connect(SocketManager);
