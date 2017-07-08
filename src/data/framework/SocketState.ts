import { SocketStatus } from 'data';

export interface SocketState {
  status: SocketStatus;
  error: Error;
}
