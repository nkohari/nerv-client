import * as React from 'react';
import { connect as reduxConnect } from 'react-redux';

interface ProviderComponentClass extends React.ComponentClass {
  readPropsFromState?: any;
  useActions?: any;
}

export function connect<T extends ProviderComponentClass>(component: T): any {
  return reduxConnect(
    component.readPropsFromState || (state => state),
    component.useActions || null
  )(component);
}
