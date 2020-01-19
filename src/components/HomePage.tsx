import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

interface IProps{
}
class HomePage extends Component<IProps> {
  constructor (props: any) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className='hello'>
        <h2>Hello React</h2>
        <h3>I want to use router, so click here , let's go to mypage</h3>
        <Link to='/home/mypage'>
          <Button type='primary'>MyPage</Button>
        </Link>
      </div>
    );
  }
}
export default HomePage;
