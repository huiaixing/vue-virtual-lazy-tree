import VueVirtualTree from "./vueVirtualTree/tree.vue";
export { VueVirtualTree };
export default {
  install: (app) => {
    app.component("VueVirtualTree", VueVirtualTree);
  },
};
