<template>
  <component 
    :is="component" 
    v-bind="props" 
    v-on="events"
  >

    <slot />

    <template v-if="innerText">
      {{ innerText }}
    </template>

    <template v-if="innerHTML">
      <div v-html="innerHTML" />
    </template>

    <cf-element
      v-for="(child, idx) in children"  
      :key="child[childKeyField] || idx"
      v-bind="child"
    />

  </component>
</template>

<script>
export default {
  name: 'CfElement',
  props: {
    component: String,
    props: Object,
    events: Object,
    children: Array,
    childKeyField: String,
    innerText: String,
    innerHTML: String,
  },
}
</script>