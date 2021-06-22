import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layoutControll: [],
    layoutDisplay: [],
    optionGrid: {},
    displaySize: {},
    positionAddGridItem: {
      x: 0,
      y: 0
    },
    launcher: false
  },
  getters: {
    layoutControll: (state) => state.layoutControll,
    layoutDisplay: (state) => state.layoutDisplay,
    optionGrid: (state) => state.optionGrid,
    displaySize: (state) => state.displaySize,
    positionAddGridItem: (state) => state.positionAddGridItem,

    launcher: (state) => state.launcher,
  },
  mutations: {
    SET_LAYOUTCONTROLL(state, payload) {
      state.layoutControll = payload;
    },
    SET_OPTIONGRID(state, payload) {
      state.optionGrid = payload;
    },
    SET_DISPLAYSIZE(state, payload) {
      state.displaySize = payload;
    },
    SET_POSITIONADDGRIDITEM(state, payload) {
      state.positionAddGridItem = payload;
    },
    UPDATE_MOVED_LAYOUT(state, payload) {
      const item = state.layoutControll.find(item => item.i == payload.i)
      let newItem = { ...item }
      newItem.x = payload.x
      newItem.y = payload.y
      Object.assign(item, newItem)
    },
    UPDATE_RESIZED_LAYOUT(state, payload) {
      const item = state.layoutControll.find(item => item.i == payload.i)
      let newItem = { ...item }
      newItem.w = payload.w
      newItem.h = payload.h
      Object.assign(item, newItem)
    },
    SET_LAUNCHER(state, payload) {
      state.launcher = payload;
    },
  },
  actions: {
    ActionSetLayoutControll({ commit }, payload) {
      commit("SET_LAYOUTCONTROLL", payload);
    },
    ActionUpdateMovedLayout({ commit }, payload) {
      commit("UPDATE_MOVED_LAYOUT", payload);
    },
    ActionUpdateResizedLayout({ commit }, payload) {
      commit("UPDATE_RESIZED_LAYOUT", payload);
    },
    ActionSetOptionGrid({ commit }, payload) {
      commit("SET_OPTIONGRID", payload);
    },
    ActionSetDisplaySize({ commit }, payload) {
      commit("SET_DISPLAYSIZE", payload);
    },
    ActionSetPositionAddGridItem({ commit }, payload) {
      commit("SET_POSITIONADDGRIDITEM", payload);
    },
    ActionSetLauncher({ commit }, payload) {
      commit("SET_LAUNCHER", payload);
    },
  },
  modules: {
  }
})
