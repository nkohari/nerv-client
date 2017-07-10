import * as React from 'react';
import * as NesClient from 'nes/client';
import { Action, socketConnected, socketDisconnected, socketError, changeMessageReceived } from 'src/actions';
import { AuthContext, SocketState, SocketStatus, connect } from 'src/data';

interface SocketManagerProps {
  auth: AuthContext;
  socket: SocketState;
  socketConnected: Action;
  socketDisconnected: Action;
  socketError: Action<Error>;
  changeMessageReceived: Action;
}

const getAuthHeaders = token => ({
  headers: { authorization: `Bearer ${token}` }
});

class SocketManager extends React.Component<SocketManagerProps> {

  static connectedActions = {
    socketConnected,
    socketDisconnected,
    socketError,
    changeMessageReceived
  };

  static readPropsFromRedux = state => ({
    auth: state.auth,
    socket: state.socket
  })

  client: any;

  constructor(props: SocketManagerProps) {
    super(props);
    // NB: This weird typecast is a result of requiring nes/client instead of nes
    // directly, which screws with the typings.
    this.client = new (NesClient as any).Client(`ws://${process.env.API_HOST}`);
    this.client.onDisconnect = this.onSocketDisconnected;
    this.client.onError = this.onSocketError;
  }

  componentDidMount() {
    const { auth } = this.props;
    if (auth.token) {
      this.connect(auth.token);
    }
  }

  componentWillReceiveProps(newProps: SocketManagerProps) {
    const oldToken = this.props.auth.token;
    const newToken = newProps.auth.token;
    if (newToken && oldToken !== newToken) {
      if (newProps.socket.status !== SocketStatus.Connected) {
        // If we aren't already connected, connect now.
        this.connect(newToken);
      } else {
        // If we are connected, just make sure we're using the latest token.
        this.client.overrideReconnectionAuth(getAuthHeaders(newToken));
      }
    }
  }

  componentWillUnmount() {
    if (this.client) {
      this.disconnect();
    }
  }

  connect(token: string) {
    const options = {
      auth: getAuthHeaders(token),
      delay: 1000,
      timeout: 5000
    }
    this.client.connect(options, err => {
      if (err) {
        this.props.socketError(err);
        return;
      }
      this.onSocketConnected();
    });
  }

  disconnect() {
    this.client.disconnect();
  }

  onSocketConnected = () => {
    this.client.subscribe('/changes', this.onChangeMessage, err => {
      if (err) {
        this.props.socketError(err);
        return;
      }
      this.props.socketConnected();
    });
  }

  onSocketError = err => {
    this.props.socketError(err);
  }

  onSocketDisconnected = (willReconnect, log) => {
    if (log.wasClean) {
      this.props.socketDisconnected();
    } else {
      this.props.socketError(new Error(`Socket disconnected: ${log.explanation} (${log.code})`));
    }
  }

  onChangeMessage = message => {
    this.props.changeMessageReceived(message);
  }

  render() {
    return null;
  }

}

export default connect(SocketManager);
