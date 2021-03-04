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
        <TabPane tab="元素渲染、条件渲染" key="1">
          <T1 />
        </TabPane>
        <TabPane tab="组件、props" key="2">
          <T2 />
        </TabPane>
        <TabPane tab="生命周期" key="3">
          <T3 />
        </TabPane>
        {/* <TabPane tab="事件处理" key="4">Content of Tab Pane 1</TabPane> */}
        <TabPane tab="状态提升" key="5">
          <T5 />
        </TabPane>
        <TabPane tab="组合、继承" key="6">
          <T6 />
        </TabPane>
        <TabPane tab="hooks 规则" key="7">
          <p>只在最顶层使用 Hook</p>
          <p>
            不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React
            函数的最顶层以及任何 return 之前调用他们。遵守这条规则，你就能确保
            Hook 在每一次渲染中都按照同样的顺序被调用。这让 React 能够在多次的
            useState 和 useEffect 调用之间保持 hook
            状态的正确。(如果你对此感到好奇，我们在下面会有更深入的解释。)
          </p>
          <p>只在 React 函数中调用 Hook</p>
          <p>不要在普通的 JavaScript 函数中调用 Hook。你可以：</p>
          <p>✅ 在 React 的函数组件中调用 Hook</p>
          <p>
            ✅ 在自定义 Hook 中调用其他 Hook (我们将会在下一页 中学习这个。)
          </p>
          <p>遵循此规则，确保组件的状态逻辑在代码中清晰可见。</p>
        </TabPane>
        <TabPane tab="hooks API" key="8">
          <ul>
            <li>
              <p>
                <a
                  target="_blank"
                  href="https://zh-hans.reactjs.org/docs/hooks-reference.html#basic-hooks"
                  one-link-mark="yes"
                >
                  基础 Hook
                </a>
              </p>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate"
                    one-link-mark="yes"
                  >
                    <code class="gatsby-code-text">useState</code>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect"
                    one-link-mark="yes"
                  >
                    <code class="gatsby-code-text">useEffect</code>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext"
                    one-link-mark="yes"
                  >
                    <code class="gatsby-code-text">useContext</code>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <a
                  target="_blank"
                  href="https://zh-hans.reactjs.org/docs/hooks-reference.html#additional-hooks"
                  one-link-mark="yes"
                >
                  额外的 Hook
                </a>
              </p>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer"
                    one-link-mark="yes"
                  >
                    <code class="gatsby-code-text">useReducer</code>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback"
                    one-link-mark="yes"
                  >
                    <code class="gatsby-code-text">useCallback</code>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo"
                    one-link-mark="yes"
                  >
                    <code class="gatsby-code-text">useMemo</code>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://zh-hans.reactjs.org/docs/hooks-reference.html#useref"
                    one-link-mark="yes"
                  >
                    <code class="gatsby-code-text">useRef</code>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://zh-hans.reactjs.org/docs/hooks-reference.html#useimperativehandle"
                    one-link-mark="yes"
                  >
                    <code class="gatsby-code-text">useImperativeHandle</code>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://zh-hans.reactjs.org/docs/hooks-reference.html#uselayouteffect"
                    one-link-mark="yes"
                  >
                    <code class="gatsby-code-text">useLayoutEffect</code>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://zh-hans.reactjs.org/docs/hooks-reference.html#usedebugvalue"
                    one-link-mark="yes"
                  >
                    <code class="gatsby-code-text">useDebugValue</code>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </TabPane>
        <TabPane tab="state hooks" key="9">
          <p>const [state, setState] = useState(initialState);</p>
          <p>返回一个 state，以及更新 state 的函数。</p>
          <p>
            在初始渲染期间，返回的状态 (state) 与传入的第一个参数 (initialState)
            值相同。
          </p>
          <p>
            setState 函数用于更新 state。它接收一个新的 state
            值并将组件的一次重新渲染加入队列。
          </p>
          <p>setState(newState);</p>
          <p>
            在后续的重新渲染中，useState 返回的第一个值将始终是更新后最新的
            state。
          </p>
        </TabPane>
        <TabPane tab="effeck hooks" key="10">
          <p>useEffect的官方文档太扯淡,我这里总结一下</p>
          <p>
            useEffect类似于componentDidMount\componentDidUpdate\componentWillUnmount三者的语法糖
          </p>
          <p>
            useEffect有两个参数(fun,arr),参数1是执行函数,当组件渲染或者更新时触发,可以return一个函数,return的函数在组件销毁时执行,参数2是触发器,当数组内的值更新后也会触发执行函数
          </p>
          <p>useCallback只有在参数2内的值变化时才会触发执行函数</p>
          <p>
            useMemo执行函数会在渲染期间执行一次,后续只会在参数2内的值变化时才会触发执行函数
          </p>
        </TabPane>
        <TabPane tab="自定义hooks" key="11">
          <p>
            自定义 Hook 必须以 “use”
            开头吗？必须如此。这个约定非常重要。不遵循的话，由于无法判断某个函数是否包含对其内部
            Hook 的调用，React 将无法自动检查你的 Hook 是否违反了 Hook 的规则。
          </p>
          <p>
            在两个组件中使用相同的 Hook 会共享 state 吗？不会。自定义 Hook
            是一种重用状态逻辑的机制(例如设置为订阅并存储当前值)，所以每次使用自定义
            Hook 时，其中的所有 state 和副作用都是完全隔离的。
          </p>
          <p>
            自定义 Hook 如何获取独立的 state？每次调用 Hook，它都会获取独立的
            state。由于我们直接调用了 useFriendStatus，从 React
            的角度来看，我们的组件只是调用了 useState 和 useEffect。
            正如我们在之前章节中了解到的一样，我们可以在一个组件中多次调用
            useState 和 useEffect，它们是完全独立的。
          </p>
        </TabPane>
      </Tabs>
    </div>
  );
};

Index.title = 'react入坑指导';
// export default connect()(Index);
export default Index;
