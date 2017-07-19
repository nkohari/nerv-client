import * as React from 'react';
import Toaster from '../../services/Toaster';
import { InputGroup } from '@blueprintjs/core';
import { Link, push, replace } from 'redux-little-router';
import { SubmitButton } from 'src/components';
import { userLoggedIn } from 'src/actions';
import { API, AuthContext, connect } from 'src/data';

interface SignupProps {
  auth: AuthContext;
  push: typeof push;
  replace: typeof replace;
  userLoggedIn: typeof userLoggedIn;
}

interface SignupState {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  passwordsMatch: boolean;
  submitting: boolean;
}

class Signup extends React.Component<SignupProps, SignupState> {

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
    const { auth } = this.props;
    if (auth.token && auth.user) {
      this.props.replace('/');
    } else {
      this.usernameElement.focus();
    }
  }

  onFormSubmit = event => {
    const { username, password, email } = this.state;

    this.setState({ submitting: true });

    API.auth.createUser({ username, password, email, agentid: null }) // TODO: Allow agent claim during signup
    .then(result => {
      this.setState({ submitting: false });
      this.props.userLoggedIn({ token: result.token, user: result.user });
      this.props.push('/');
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
            Already registered? <Link href='/login' persistQuery>Log in instead →</Link>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(Signup, {
  actions: {
    push,
    replace,
    userLoggedIn
  },
  readPropsFromRedux: state => ({
    auth: state.auth
  })
});
