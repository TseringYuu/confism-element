# confism-element
> write HTML with javascript in vue

### U can register confism-element component in main.js

```javascript
// main.js
import Vue from 'vue';
import CfElement from 'confism-element';
import App from './App.vue';

Vue.use(CfElement);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### Or u can register confism-element component in a local component

```vue
<template>
  <div id="app">
    <cf-element v-bind="el">
      aaa
    </cf-element>
  </div>
</template>

<script>
import CfElement from 'confism-element';

export default {
  name: 'App',
  components: {
    CfElement,
  },
  data () {
    return {
      el: {
        component: 'el-button', 
        props: {
          type: 'danger',
          size: 'small',
        },
        events: {
          click () {
            console.log('hello');
          },
        },
        children: [
          {
            component: 'i',
            innerText: 'bbb',
          },
        ],
      },
    };
  },
  mounted () {
    setInterval(() => {
      this.el.props.type = this.el.props.type === 'danger' ? 'primary' : 'danger';
    }, 1000);
  },
}
</script>
```

### Props
* component: string (component/tag name)
* props?: object (props what your component needs)
* events?: object (events what your component needs)
* children?: Props[]
* childrenKeyField: string (just like key for "v-for")
* innerText: string (text in tag)
* innerHTML: string (rich text just like v-html)
