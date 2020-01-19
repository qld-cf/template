import React, { Component, Suspense } from 'react';
import { Route, RouteComponentProps, Redirect, Switch } from 'react-router-dom';
import MyPage from '@cps/component1/MyPage';
import Loading from '@common/Loading';
import routes from '@config/routerConfig';

interface IProps {
}

class Home extends Component<IProps & RouteComponentProps> {
  constructor (props: any) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          {
            routes.map((route, i) => {
              return (
                <Route
                  key={i}
                  exact
                  path={route.path}
                  render={props => (
                    <route.component {...props} />
                  )}
                />
              );
            })
          }
        </Switch>
      </Suspense>
    );
  }
}
export default Home;
