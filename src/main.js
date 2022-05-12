/*
 * @Descripttion:
 * @Author: 李增辉
 * @Date: 2022-04-25 09:10:02
 * @LastEditors: 李增辉
 * @LastEditTime: 2022-04-26 14:24:05
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "@/assets/styles/index.scss"; // global css
import "@/assets/styles/normalize.css";
import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import "@/assets/element/index.css";
import "@/assets/iconfont/iconfont.css";
import "@/assets/styles/common.scss"; //公共样式
import "./utils/flexible.js"; //引入flexible.js文件
import "./permission.js";
import * as echarts from "echarts";
import dateFormat from "@/utils/dateFormat.js";
import "@/components/commonComponents/globals.js"; //自动全局挂载组件

Vue.config.productionTip = false;

Vue.prototype.$echarts = echarts;
Vue.prototype.$dateFormat = dateFormat;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
