

import parentStyles from '../index.less';
import React, { useState, useEffect } from 'react';

import { Input } from 'antd';


const Index = () => {

  function inputVal(v){
    setval(v.currentTarget.value)
  }
  const [val, setval] = useState('');
  return (
    <>
      <p>我们的状态值在最上层,所以输入后都可以触发这个值</p>
      <Input placeholder="我们输入会同时更新两个文本框" value={val} onInput={inputVal}/>
      <Input placeholder="我们输入会同时更新两个文本框" value={val} onInput={inputVal}/>
    </>
  );
};

export default Index
