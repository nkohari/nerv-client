import * as React from 'react';
import { connect as reduxConnect } from 'react-redux';
import { ReduxState } from '../ReduxState';

interface ReduxConnector<TDeclaredProps, TConnectedProps, TConnectedActions> {
  actions?: TConnectedActions;
  readPropsFromRedux?: (state: ReduxState, props: TDeclaredProps) => TConnectedProps;
}

export function connect<TDeclaredProps, TConnectedProps = {}, TConnectedActions = {}>(
  component: React.ComponentClass<TDeclaredProps & TConnectedProps & TConnectedActions>,
  connector: ReduxConnector<TDeclaredProps, TConnectedProps, TConnectedActions>
): React.ComponentClass<TDeclaredProps> {
  return reduxConnect(
    connector.readPropsFromRedux || ((state: ReduxState, props: TDeclaredProps) => ({})),
    connector.actions || null
  )(component);
}
