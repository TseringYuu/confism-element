<template>
  <div id="app">
    <cf-element v-bind="el">
      aaa
    </cf-element>
  </div>
</template>

<script>
import CfElement from '../src';

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
