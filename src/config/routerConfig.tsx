
import React from 'react';
const HomePage = React.lazy(() => import('@cps/HomePage'));
const MyPage = React.lazy(() => import('@cps/component1/MyPage'));

const routes = [
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/home/mypage',
    component: MyPage
  },
];
export default routes;
