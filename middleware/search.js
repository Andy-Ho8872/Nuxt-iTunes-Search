import axios from 'axios'
// access vuex store through middleware

// The middleware is for Authenticating Logic
export default function({ params, store }) {
    // the i-tunes api's key value pairs need to concatenate with & mark to define multiple conditions
    return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
    .then(response => { // take response as payload
    // The Project needs to use module mode in current version, because classic mode is now deprecated by Nuxt ofiical
        store.commit('iTunesApi/addAlbums', response.data.results)
    })
}