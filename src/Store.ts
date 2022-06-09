import Vue from "vue";
import Vuex from "vuex";
import { Settings, emptySettings } from "@/types";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    settings: emptySettings(),
  },
  mutations: {
    updateSettings(state, newSettings: Settings) {
      state.settings = newSettings;
    },
  },
});
