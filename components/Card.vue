<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card :href="URL" :color="color">     
                    <div class="album d-flex flex-no-wrap justify-space-around align-center">
                        <div class="text-center">
                            <v-card-title class="purple--text text--lighten-1">{{ title }}</v-card-title>
                            <v-divider></v-divider>
                            <v-card-subtitle class="red--text text--lighten-1">{{ singerName }}</v-card-subtitle>
                        </div>
                        <v-avatar tile size="100" class="ma-3">
                            <v-img :src="img"></v-img>
                        </v-avatar>
                    </div>  
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: ['color', 'URL', 'title', 'singerName', 'img'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    @media (max-width: 600px) {
        .album {
            flex-wrap: wrap;
            text-align: center;
        }
    }
</style>