import * as React from 'react';
import { AuthState } from '../data';

interface DashboardPageProps {
  auth: AuthState;
}

class DashboardPage extends React.Component<DashboardPageProps> {

  render() {
    const { auth } = this.props;

    return (
      <div className='dashboard page'>
        Welcome {auth.user.username}!
      </div>
    );
  }

}

export default DashboardPage;
