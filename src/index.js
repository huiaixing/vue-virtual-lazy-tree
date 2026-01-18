import VueVirtualLazyTree from "./VueVirtualLazyTree/tree.vue";
export { VueVirtualLazyTree };
export default {
  install: (app) => {
    app.component("VueVirtualLazyTree", VueVirtualLazyTree);
  },
};
