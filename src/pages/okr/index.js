// import { connect } from 'dva';


import styles from './index.less';
import T1 from './components/T1';
import T2 from './components/T2';
import T3 from './components/T3';
import T5 from './components/T5';
import T6 from './components/T6';

import { Tabs } from 'antd';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Index = () => {
  return (
    <div className={styles.box}>
      <Tabs defaultActiveKey="5" onChange={callback}>
        <TabPane tab="元素渲染、条件渲染" key="1"><T1/></TabPane>
        <TabPane tab="组件、props" key="2"><T2/></TabPane>
        <TabPane tab="生命周期" key="3"><T3/></TabPane>
        {/* <TabPane tab="事件处理" key="4">Content of Tab Pane 1</TabPane> */}
        <TabPane tab="状态提升" key="5"><T5/></TabPane>
        <TabPane tab="组合、继承" key="6"><T6/></TabPane>
        <TabPane tab="hooks 规则" key="7">Content of Tab Pane 1</TabPane>
        <TabPane tab="hooks API" key="8">Content of Tab Pane 2</TabPane>
        <TabPane tab="state hooks" key="9">Content of Tab Pane 3</TabPane>
        <TabPane tab="effeck hooks" key="10">Content of Tab Pane 1</TabPane>
        <TabPane tab="自定义hooks" key="11">Content of Tab Pane 2</TabPane>
      </Tabs>
    </div>
  );
};

Index.title = 'react入坑指导'
// export default connect()(Index);
export default Index
