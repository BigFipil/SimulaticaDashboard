import Vue from "vue";
import Vuex from "vuex";
import { Settings, emptySettings, Particle } from "@/types";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    settings: emptySettings(),
    particles: <Particle[]>[],
  },
  mutations: {
    updateSettings(state, newSettings: Settings) {
      state.settings = newSettings;
    },

    updateParticles(state, newParticles: Particle[]) {
      state.particles = newParticles;
    },
  },
});
