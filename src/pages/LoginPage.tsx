import * as React from 'react';
import * as qs from 'querystring';
import Toaster from '../Toaster';
import { Button, InputGroup, Intent } from '@blueprintjs/core';
import { replace, LocationAction } from 'react-router-redux';
import { Action, AuthState, connect, userLoggedIn } from '../data';
import { login } from '../api';
import './Modal.styl';

interface LoginPageProps {
  auth: AuthState;
  replace: LocationAction;
  userLoggedIn: Action;
}

interface LoginPageState {
  username: string;
  password: string;
}

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {

  static actionsToProps = {
    replace,
    userLoggedIn
  };

  static stateToProps = (state) => ({
    auth: state.auth
  })

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  componentWillMount() {
    this.redirectIfAlreadyAuthenticated(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.redirectIfAlreadyAuthenticated(newProps);
  }

  redirectIfAlreadyAuthenticated(props) {
    const { auth } = props;
    if (auth && auth.token && auth.user) {
      this.props.replace(this.getRedirectLocation());
    }
  }

  getRedirectLocation(): string {
    const { search } = document.location;
    if (search && search.length > 0) {
      const params = qs.parse(search.substr(1));
      if (params.r) return params.r;
    }
    return '/';
  }

  onFormSubmit = event => {
    const { username, password } = this.state;

    login(username, password)
    .then(result => {
      this.props.userLoggedIn({ token: result.token, user: result.user });
      this.props.replace(this.getRedirectLocation());
    })
    .catch(err => {
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
    const { username, password } = this.state;
    return (
      <div className='login modal page'>
        <main className='pt-card pt-dark pt-elevation-3'>
          <form onSubmit={this.onFormSubmit}>
            <label className='pt-label'>
              Username
              <InputGroup
                type='input'
                leftIconName='user'
                value={username}
                onChange={this.onChange('username')}
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
            <Button type='submit' intent={Intent.SUCCESS} rightIconName='arrow-right'>
              Log In
            </Button>
          </form>
        </main>
      </div>
    );
  }

}

export default connect(LoginPage);
