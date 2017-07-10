import * as React from 'react';
import { replace, LocationAction } from 'react-router-redux';
import { AuthContext, connect } from 'src/data';

interface RedirectWrapperProps {
  auth: AuthContext;
  location: object;
  replace: LocationAction;
}

export default function redirectIfNotAuthenticated(InnerComponent) { // tslint:disable-line:variable-name
  class RedirectWrapper extends React.Component<RedirectWrapperProps> {

    static connectedActions = {
      replace
    };

    static readPropsFromRedux = state => ({
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
