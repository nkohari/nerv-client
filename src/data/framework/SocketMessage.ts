export interface SocketMessage<T> {
  sender: string;
  groupid: string;
  body: T;
}
