import * as React from 'react';
import { replace, Fragment } from 'redux-little-router';
import { Action } from 'src/actions';
import { AuthContext, connect } from 'src/data';

interface RestrictedFragment {
  auth: AuthContext;
  loginPath: string;
  redirectUrl: string;
  replace: Action;
}

class RestrictedFragment extends React.Component<RestrictedFragment> {

  static connectedActions = {
    replace
  };

  static readPropsFromRedux = (state, props) => ({
    auth: state.auth,
    redirectUrl: (state.router.pathname !== props.loginPath) ? state.router.pathname : '/'
  })

  componentDidMount() {
    const { auth, loginPath, redirectUrl } = this.props;
    if (!this.isAuthenticated(auth)) {
      this.props.replace({ pathname: loginPath, query: { r: redirectUrl } });
    }
  }

  isAuthenticated(auth) {
    return auth.token && auth.user;
  }

  render() {
    const { auth, children } = this.props;

    if (!this.isAuthenticated(auth)) {
      return null;
    }

    return (
      <Fragment {...this.props}>
        {children}
      </Fragment>
    );
  }
}

export default connect(RestrictedFragment);
