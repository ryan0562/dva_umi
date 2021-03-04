

import parentStyles from '../index.less';
import React, { useState } from 'react';

import { Slider, Switch } from 'antd';


const Index = () => {

  const [disabled, setDisabled] = useState(0);

  function changeBtn(n) {
    setDisabled(n)
  }
  return (
    <>
      <p>通过props设置组件的模式</p>
      <Slider defaultValue={30} disabled={disabled} />
      <Slider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled: <Switch size="small" checked={disabled} onChange={changeBtn} />
    </>
  );
};

export default Index
