import { defineConfig } from 'umi';
// import  routes  from './config/routes.js';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes, 这里使用约定式路由
  fastRefresh: {},
});
