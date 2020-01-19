import React, { Component } from 'react';
import '@css/loading.scss';

class Loading extends Component {
  render () {
    return (
      <div className='loading'>
        <div className='loader'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>
      </div>
    );
  }
}
export default Loading;
