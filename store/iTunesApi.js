export const state = () => ({
    albums: []
})

export const mutations = {
    addAlbums(state, payload) {
        state.albums = payload
    }
}