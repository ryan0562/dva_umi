

import parentStyles from '../index.less';
import React, { useState, useEffect } from 'react';

import { Button, Drawer } from 'antd';


function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      {props.children}
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

const Index = () => {
  return (
    <>
      <p>组合跟继承 讲组件通过props传入,还有直接的props.chidren等同于vue的slot</p>
      <SplitPane
      left={
        <div>我是left插槽</div>
      }
      right={
        <div>我是right插槽</div>
      }>
        <p>我是chidren默认插槽</p>
      </SplitPane>
    </>
  );
};

export default Index
