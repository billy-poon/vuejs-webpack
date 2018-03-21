<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <h2>3rd Libraries</h2>
    <ul>
      <li>
        <a
          href="https://github.com/axios/axios"
          target="_blank"
        >
          axios
        </a>
      </li>
      <li>
        <a
          {{#if_eq uiLibrary "iview"}}
          class="ivu-btn"
          {{/if_eq}}
          href="https://iviewui.com/"
          target="_blank"
        >
          {{#if_eq uiLibrary "iview"}}
          <Icon type="social-github" />
          {{/if_eq}}
          iView
        </a>
      </li>
      <li>
        {{#if_eq uiLibrary "muse-ui"}}
        <mu-raised-button label="Muse UI" href="https://museui.github.io/" target="_blank"/>
        {{else}}
        <a
          href="https://museui.github.io/"
          target="_blank"
        >
          Muse UI
        </a>
        {{/if_eq}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
