

import parentStyles from '../index.less';
import React, { useState, useEffect } from 'react';

import { Slider, Switch } from 'antd';


const Index = () => {

  const [val, setval] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setval(val + 1)
    }, 1000)
  }, [val]);

  return (
    <>
      <p>页面打开的时候数值一直往上增长{val}</p>
      <Slider defaultValue={val} />
    </>
  );
};

export default Index
