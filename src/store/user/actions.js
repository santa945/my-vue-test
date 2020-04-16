import types from "./mutation-types"

export default {
    setTitle:({commit},isWrite)=>{
        commit(types.SET_TITLE,isWrite)
    }
}