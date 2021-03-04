
import parentStyles from '../index.less';
import React, { useState } from 'react';

import { Button } from 'antd';


const Index = () => {

  const [type, setType] = useState(1);
  
  function changeBtn(n) {
    return (
      <div>点击按钮{n}显示</div>
    )
  }
  return (
    <div className={parentStyles.T1Box}>
      <p>条件渲染与事件处理</p>
      <Button type="primary" onClick={() => setType(1)}>按钮1</Button>
      <Button type="primary" onClick={() => setType(2)}>按钮2</Button>
      {changeBtn(type)}
    </div>

  );
};

export default Index
