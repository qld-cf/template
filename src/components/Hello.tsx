import React, { Component } from 'react';
import Hello1 from '@cps/component1/Hello1';
class Hello extends Component {
  constructor (props: any) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className='hello'>
        <h2>Hello React</h2>
        <Hello1 />
      </div>
    );
  }
}
export default Hello;
