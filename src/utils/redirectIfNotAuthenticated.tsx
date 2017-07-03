import * as React from 'react';
import { replace, LocationAction } from 'react-router-redux';
import { AuthState, connect } from '../data';

interface RedirectWrapperProps {
  auth: AuthState;
  location: object;
  replace: LocationAction;
}

export default function redirectIfNotAuthenticated(InnerComponent) { // tslint:disable-line:variable-name
  class RedirectWrapper extends React.Component<RedirectWrapperProps> {

    static actionsToProps = {
      replace
    };

    static stateToProps = state => ({
      auth: state.auth
    })

    componentWillMount() {
      this.redirectIfNotAuthenticated(this.props);
    }

    componentWillReceiveProps(newProps) {
      this.redirectIfNotAuthenticated(newProps);
    }

    redirectIfNotAuthenticated(props) {
      const { auth, location } = props;
      if (!this.isAuthenticated(auth)) {
        this.props.replace(`/login?r=${location.pathname}`);
      }
    }

    isAuthenticated(auth) {
      return auth && auth.token && auth.user;
    }

    render() {
      const { auth } = this.props;

      if (this.isAuthenticated(auth)) {
        return <InnerComponent {...this.props} />;
      }

      return <div />;
    }
  }

  return connect(RedirectWrapper);
}
