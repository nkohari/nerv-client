import * as React from 'react';
import { IndexLink } from 'react-router';

class Breadcrumbs extends React.Component {

  render() {
    return (
      <ul className='pt-breadcrumbs'>
        <li>
          <IndexLink to='/' className='pt-breadcrumb'>
            <span className='pt-icon-standard pt-icon-home' /> Groups
          </IndexLink>
        </li>
      </ul>
    );
  }

}

export default Breadcrumbs;
