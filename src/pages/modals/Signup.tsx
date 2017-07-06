import * as React from 'react';
import Toaster from '../../services/Toaster';
import { InputGroup } from '@blueprintjs/core';
import { Link } from 'react-router';
import { replace, LocationAction } from 'react-router-redux';
import { SubmitButton } from '../../components';
import { api, Action, AuthState, connect, userLoggedIn } from '../../data';
import { getRedirectUrl } from '../../utils';

interface LoginProps {
  auth: AuthState;
  replace: LocationAction;
  userLoggedIn: Action;
}

interface LoginState {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  passwordsMatch: boolean;
  submitting: boolean;
}

class Login extends React.Component<LoginProps, LoginState> {

  static actionsToProps = {
    replace,
    userLoggedIn
  };

  static stateToProps = (state) => ({
    auth: state.auth
  })

  usernameElement: HTMLInputElement;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      passwordsMatch: true,
      submitting: false
    };
  }

  componentDidMount() {
    this.usernameElement.focus();
  }

  onFormSubmit = event => {
    const { username, password, email } = this.state;

    this.setState({ submitting: true });

    api.users.create({ username, password, email, agentid: null }) // TODO: Allow agent claim during signup
    .then(result => {
      this.setState({ submitting: false });
      this.props.userLoggedIn({ token: result.token, user: result.user });
      this.props.replace(getRedirectUrl());
    })
    .catch(err => {
      this.setState({ submitting: false });
      Toaster.error('There was an error creating your account. Please try again.');
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
      state.passwordsMatch = (state.password === state.passwordConfirm);
      this.setState(state);
    }
  )

  render() {
    const { username, email, password, passwordConfirm, submitting } = this.state;
    return (
      <div className='signup modal page'>
        <main className='pt-card pt-dark pt-elevation-3'>
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
              Email <span className='pt-text-muted'> (optional)</span>
              <InputGroup
                type='email'
                leftIconName='envelope'
                value={email}
                onChange={this.onChange('email')}
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
            <label className='pt-label'>
              Password <span className='pt-text-muted'> (confirm)</span>
              <InputGroup
                type='password'
                leftIconName='lock'
                value={passwordConfirm}
                onChange={this.onChange('passwordConfirm')}
                required
              />
            </label>
            <SubmitButton iconName='tick' submitting={submitting}>
              Create my account
            </SubmitButton>
          </form>
          <div className='modal-footer'>
            Already registered? <Link to='/login'>Log in instead →</Link>
          </div>
        </main>
      </div>
    );
  }

}

export default connect(Login);
