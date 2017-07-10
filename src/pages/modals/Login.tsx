import * as React from 'react';
import Toaster from '../../services/Toaster';
import { InputGroup } from '@blueprintjs/core';
import { Link } from 'react-router';
import { replace, LocationAction } from 'react-router-redux';
import { SubmitButton } from 'src/components';
import { Action, userLoggedIn } from 'src/actions';
import { API, AuthContext, connect } from 'src/data';
import { getRedirectUrl } from 'src/utils';

interface LoginModalProps {
  auth: AuthContext;
  replace: LocationAction;
  userLoggedIn: Action;
}

interface LoginModalState {
  username: string;
  password: string;
  submitting: boolean;
}

class LoginModal extends React.Component<LoginModalProps, LoginModalState> {

  static connectedActions = {
    replace,
    userLoggedIn
  };

  static readPropsFromRedux = (state) => ({
    auth: state.auth
  })

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
    this.usernameElement.focus();
  }

  onFormSubmit = event => {
    const { username, password } = this.state;

    this.setState({ submitting: true });

    API.auth.login({ username, password })
    .then(result => {
      this.setState({ submitting: false });
      this.props.userLoggedIn({ token: result.token, user: result.user });
      this.props.replace(getRedirectUrl());
    })
    .catch(err => {
      this.setState({ submitting: false });
      Toaster.error('Error during log in. Please check your username and password and try again.');
    });

    event.preventDefault();
    return false;
  }

  onSignUpClicked = event => {
    this.props.replace('/signup');
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
            Don't have an account? <Link to='/signup'>Sign up for free →</Link>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(LoginModal);
