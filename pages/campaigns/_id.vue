<template>
  <div class="container">
    <h1>Hello world</h1>
    <h2>{{ id }}</h2>
    <h2>{{ chani }}</h2>

    <button @click="test">Click me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      chani: 'ABC'
    }
  },
  methods: {
    test: () => {
      console.log('testing')
      console.log(this.chani)

    }
  }
}
</script>