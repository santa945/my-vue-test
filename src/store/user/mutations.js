import types from "./mutation-types"

export default {
    [types.SET_TITLE](state,isWrite){
        state.writeTitle = isWrite
    }
}