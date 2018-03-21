{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
Vue.config.productionTip = false

{{#axios}}
import axios from 'axios'
// axios.defaults.baseURL = '/api';
// axios.defaults.headers.common['Authorization'] = `Bearer ${credentials}`;
/*
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
*/
axios.interceptors.response.use(function (response) {
  if (typeof(response.data) === 'object') {
    response.data = Object.freeze(response.data)
  }

  return response
})
Vue.prototype.$http = axios

{{/axios}}
{{#if_eq uiLibrary "iview"}}
import 'iview/dist/styles/iview.css'
import iView from 'iview'
Vue.use(iView)

{{/if_eq}}
{{#if_eq uiLibrary "muse-ui"}}
import 'muse-ui/dist/muse-ui.css'
import MuseUI from 'muse-ui'
Vue.use(MuseUI)

{{/if_eq}}
import Plugins from './plugins'
Vue.use(Plugins)

import App from './App'
{{#router}}
import router from './router'
App.router = router
{{/router}}

/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
*/

new Vue(App).$mount('#app')
