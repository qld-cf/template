import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import '@css/index.scss';
import '../src/common/config'; // 全局配置
import rootReducer from '@redux/rootReducer';
import App from './App';
import { getEnv, getPlatform } from '@utils/utils';
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';
const Home = React.lazy(() => import('@cps/index'));

const { isDebug, isPrd } = getEnv();
const { isComputerBrower } = getPlatform();
// 非生产环境开启vconcole或debug模式强制开启vconcole（仅用于手机端H5的调试）
if ((!isPrd && !isComputerBrower) || isDebug) {
  const VConsole = require('vconsole');
  new VConsole();
}
// redux store配置
const store = isPrd ? (
  createStore(rootReducer, applyMiddleware(thunk))
) : (
  window.__REDUX_DEVTOOLS_EXTENSION__ ? ( // 使用redux-devtools-extension进行开发调试
    createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())) // compose: 多函数组装成型函数 把复杂的多函数嵌套调用，组合成纯粹的函数调用，实现fn1(fn2(fn3(fn3(...args))))-->compose(fn1,fn2,fn3,fn4)(...args)这样单纯可读的函数调用方式
  ) : (
    createStore(rootReducer, applyMiddleware(thunk))
  )
);

ReactDOM.render(
  <Suspense fallback={null}>
    <Provider store={store}>
      {/*  如果不使用路由 : <App /> */}
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route path='/home' render={(props) => <Home {...props} />} />
        </Switch>
      </Router>
    </Provider>
  </Suspense>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
