export let Env = window.$env = {
  // VUE: void(0),
  VERSION: process.env.VERSION,
  DEVELOPMENT: process.env.NODE_ENV === 'development',
}

var props = [
  "env", "app"
]

export let _Vue;
function install(Vue) {
  if (install.installed) return;
  install.installed = true

  Env.VUE = _Vue = Vue
  function defineProp(name) {
    Object.defineProperty(Vue.prototype, name, {
      get() { return window[name] }
    })
  }

  props.forEach(x => {
    var name = `$${x}`
    defineProp(name)
  })
}

export default {
  install
}
