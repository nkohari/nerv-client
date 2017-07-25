import * as React from 'react';
import Toaster from '../../services/Toaster';
import { InputGroup } from '@blueprintjs/core';
import { Link, push, replace } from 'redux-little-router';
import { SubmitButton } from 'src/components';
import { userLoggedIn } from 'src/actions';
import { createApiClient, Credentials, connect } from 'src/data';

interface LoginProps {
  auth: Credentials;
  redirectUrl: string;
  push: typeof push;
  replace: typeof replace;
  userLoggedIn: typeof userLoggedIn;
}

interface LoginState {
  username: string;
  password: string;
  submitting: boolean;
}

class Login extends React.Component<LoginProps, LoginState> {

  usernameElement: HTMLInputElement;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      submitting: false
    };
  }

  componentDidMount() {
    const { auth, redirectUrl } = this.props;
    if (auth.token && auth.user) {
      this.props.replace(redirectUrl);
    } else {
      this.usernameElement.focus();
    }
  }

  onFormSubmit = event => {
    const { username, password } = this.state;

    this.setState({ submitting: true });

    createApiClient().auth.login({ username, password })
    .then(result => {
      this.setState({ submitting: false });
      this.props.userLoggedIn({ token: result.token, user: result.user });
      this.props.push(this.props.redirectUrl);
    })
    .catch(err => {
      this.setState({ submitting: false });
      Toaster.error('Error during log in. Please check your username and password and try again.');
    });

    event.preventDefault();
    return false;
  }

  onChange = property => (
    event => {
      const state = {
        ...this.state,
        [property]: event.target.value
      };
      this.setState(state);
    }
  )

  render() {
    const { username, password, submitting } = this.state;
    return (
      <div className='login modal page'>
        <div className='modal-content pt-card pt-dark pt-elevation-3'>
          <form onSubmit={this.onFormSubmit}>
            <label className='pt-label'>
              Username
              <InputGroup
                type='input'
                leftIconName='user'
                value={username}
                onChange={this.onChange('username')}
                inputRef={el => this.usernameElement = el}
                required
              />
            </label>
            <label className='pt-label'>
              Password
              <InputGroup
                type='password'
                leftIconName='lock'
                value={password}
                onChange={this.onChange('password')}
                required
              />
            </label>
            <SubmitButton iconName='log-in' submitting={submitting}>
              Log In
            </SubmitButton>
          </form>
          <div className='modal-footer'>
            Don't have an account? <Link href='/signup' persistQuery>Sign up for free →</Link>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(Login, {
  actions: {
    push,
    replace,
    userLoggedIn
  },
  readPropsFromRedux: state => ({
    auth: state.auth,
    redirectUrl: state.router.query.r || '/'
  })
});
