import * as React from 'react';
import { replace, LocationAction } from 'react-router-redux';
import { AuthState, connect } from '../data';
import getRedirectUrl from './getRedirectUrl';

interface RedirectWrapperProps {
  auth: AuthState;
  location: object;
  replace: LocationAction;
}

export default function redirectIfAuthenticated(InnerComponent) { // tslint:disable-line:variable-name
  class RedirectWrapper extends React.Component<RedirectWrapperProps> {

    static actionsToProps = {
      replace
    };

    static stateToProps = state => ({
      auth: state.auth
    })

    componentWillMount() {
      this.redirectIfAlreadyAuthenticated(this.props);
    }

    componentWillReceiveProps(newProps) {
      this.redirectIfAlreadyAuthenticated(newProps);
    }

    redirectIfAlreadyAuthenticated(props) {
      if (this.isAuthenticated(props.auth)) {
        this.props.replace(getRedirectUrl());
      }
    }

    isAuthenticated(auth) {
      return auth && auth.token && auth.user;
    }

    render() {
      const { auth } = this.props;

      if (!this.isAuthenticated(auth)) {
        return <InnerComponent {...this.props} />;
      }

      return <div />;
    }
  }

  return connect(RedirectWrapper);
}
