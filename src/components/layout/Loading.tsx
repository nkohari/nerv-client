import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import './Loading.styl';

class Loading extends React.Component {

  render() {
    return (
      <div className='loading'>
        <Spinner />
      </div>
    );
  }

}

export default Loading;
