import { defineConfig } from 'umi';
import routes from './config/routes.ts';

export default defineConfig({
  layout: {
    name: 'Ant Design',
    locale: false,
  },
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
});
