<template> 
  <v-container class="d-flex justify-center align-center">
    <v-form @submit.prevent="submit">
      <v-text-field
      prepend-icon="mdi-book-search large" 
      placeholder="Enter Signer Name"
      v-model="search"
      solo
      >
      </v-text-field>
    </v-form>
  </v-container>
</template>

<script>
export default {
  head: {
    title: 'Welcome to',
    meta:[{
      hid: 'description',
      name: 'description',
      content: 'Homepage of iTuneSearch'
    }]
  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    submit(event) {
      // submit to change the route
      this.$router.push(`results/${this.search}`)
    }
  }
}
</script>

<style scoped>
  input {
    text-align: center !important; 
  }
</style>

