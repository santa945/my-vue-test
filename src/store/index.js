import Vuex from "vuex";
import Vue from "vue";

import index from "./index/index.js";
import user from "./user";
Vue.use(Vuex);
const stores = {
  "index": index,
  user,
};

export const storeCreator = (moduleNames) => {
  const names = Array.isArray(moduleNames) ? moduleNames : [moduleNames];
  const modules = names.reduce((all, name) => {
    if (stores[name]) {
      all[name] = stores[name];
    }
    return all;
  }, {});

  return new Vuex.Store({
    modules: {
      ...modules
    }
  });
};