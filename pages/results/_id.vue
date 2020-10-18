<template>
    <!--  to check if data exists -->
    <div v-if=" albumExists ">
        <div class="text-center my-4">
            <h1>The Result of {{ $route.params.id }}'s Albums</h1>
            <nuxt-link to="/" class="text-decoration-none">
                <v-btn
                class="my-4"  
                outlined 
                rounded
                color="teal"
                >GO back
                </v-btn>
            </nuxt-link>
        </div>
        <v-card color="grey lighten-3" class="py-1 mx-auto" max-width="500">
            <div v-for="(album, index) in albumData" :key="index" class="ma-12">
                <Card
                :color='pickColor(index)'
                :URL="album.artistViewUrl"
                :title="album.collectionName"
                :singerName="album.artistName"
                :img="album.artworkUrl100"
                />
                <!-- {{ albumExists ?  albumData  : 'Album Not found' }} -->
            </div>
        </v-card>
    </div>
    <div v-else>
        <h1 class="text-center">Album not found</h1>
    </div>
</template>

<script>
import axios from 'axios'
import Card from '~/components/Card'

export default {
    head: {
    title: 'Album Results',
    meta:[{
      hid: 'description',
      name: 'description',
      content: 'Results of Album'
        }]
    },
    // async data(): can be used for fetching data
    asyncData({ params }) {
        return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
        .then(response => { 
            // create it's own variable(albumData) to store data in it
            return { albumData: response.data.results }
        })
    },
    components: {
        Card
    },
    // This command needs to pass through middleware to run (I guess)
    middleware: 'search',
    computed: {
        albumExists() {
            return this.albumData.length > 0
        }
    },
    methods: {
        pickColor(index) {
            return index % 2 == 0 ? 'blue lighten-4' : 'orange lighten-3'
        }
    }
}
</script>
