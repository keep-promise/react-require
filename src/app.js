
import React from 'react';
import Count from './Comp/count';
import AsynAPP from './AsynAPP/lazyApp';

export default function App() {
  return (<div>
    <Count></Count>
    <div>AsynAPP</div>
    <AsynAPP></AsynAPP>
  </div>);
}