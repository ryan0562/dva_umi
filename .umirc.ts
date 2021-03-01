import { defineConfig } from 'umi';
import  routes  from './config/routes.js';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
});
