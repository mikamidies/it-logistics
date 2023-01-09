export const state = () => ({
    lang: '',
});

export const mutations = {
    langRu(state, payload) {
        state.lang = payload;
    },
};

export const actions = {
actionLangRu({ commit }, payload) {
    commit("langRu", payload);
},}

export const getters = {
    language(state) {
        return state.lang;
    },
};