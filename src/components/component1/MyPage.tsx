import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

interface IProps {
}
class MyPage extends Component<IProps> {
  constructor (props: any) {
    super(props);
    this.state = {
      helloState: 'hello world'
    };
  }

  // shouldComponentUpdate (nextProps: IProps, nextState: any): boolean {
  //   console.log('子组件数据2state或者redux store更新时，父组件也会重绘，尽量使用该方法提升性能');
  //   // if(nextProps.helloState === this.props.number){
  //   //   return true
  //   // }
  //   // return false
  //   return false;
  // }

  // // react 16新增，17以后会向下兼容
  // // 接收到新的属性想去修改我们state
  // static getDerivedStateFromProps (nextProps, prevState): any {
  //   if (nextProps.currentState !== prevState.helloState) {
  //     return {
  //       helloState:
  //         nextProps.currentState > prevState.helloState,
  //     };
  //   }
  //   return null;
  // }

  render () {
    return (
      <div className='hello'>
        <h2>I'm react component, use react to find interesting things~</h2>
        <Link to='/home'>
          <Button type='primary'>Back</Button>
        </Link>
      </div>
    );
  }
}
export default MyPage;
