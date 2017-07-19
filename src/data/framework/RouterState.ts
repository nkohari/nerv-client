export interface RouterState {
  pathname: string;
  params: { [name: string]: string };
  query: { [name: string]: string };
}
