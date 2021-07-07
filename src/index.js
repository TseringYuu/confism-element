import CfElement from './tree-node.vue';

CfElement.install = (Vue) => {
  Vue.component(CfElement.name, CfElement);
};

export default CfElement;
