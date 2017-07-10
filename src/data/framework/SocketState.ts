import { SocketStatus } from 'src/data';

export interface SocketState {
  status: SocketStatus;
  error: Error;
}
