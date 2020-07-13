// import Vue from "vue"
// import Vuex from "vuex"
// import module_socket from "./socket.js"

// Vue.use(Vuex)
// const store = new Vuex.Store({
  // namespaced: true,
export const state = () => ({
      newTournois: null,
      newPlayerList: [],
      poulesData: {},
    });

    export const mutations= {
      saveNewTournoisDatas(state, data){
        state.newTournois = data
      },
      savePlayerList(state, data){
        state.newPlayerList = data
      },
      savePoulesData(state, data){
        state.poulesData = data
      },
    }
    export const actions={
      saveStepProgress({state, commit, dispatch}, {step, data}) {
        console.log("data in store action : step ", step , " / ", data)
        if (step === 1){
          commit("saveNewTournoisDatas", data)
        }
        else if (step === 2){
          commit("savePlayerList", data)
        }
        else if (step === 3){
          commit("savePoulesData", data)
        }
      }
    }
    // modules: {
    //   _socket: module_socket
    // }
  // })

  // export default store;