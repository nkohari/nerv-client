import * as React from 'react';
import { replace, LocationAction } from 'react-router-redux';
import { AuthState, connect } from '../data';

interface AuthorizationWrapperProps {
  auth: AuthState;
  location: object;
  replace: LocationAction;
}

export default function authorize(InnerComponent) { // tslint:disable-line:variable-name
  class AuthorizationWrapper extends React.Component<AuthorizationWrapperProps> {

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
      if (!auth.token || !auth.user) {
        this.props.replace(`/login?r=${location.pathname}`);
      }
    }

    render() {
      const { auth } = this.props;

      if (auth && auth.token && auth.user) {
        return <InnerComponent {...this.props} />;
      }

      return <div />;
    }
  }

  return connect(AuthorizationWrapper);
}
