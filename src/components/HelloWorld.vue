<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{name}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {

    }
  },
  computed: {
    name: async () => {
      let test = 2
      Promise.resolve(() => {
        console.log(11122);
      })
      console.log(111);
      return test
    }
  },
  beforeRouteEnter(to,from,next) {
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
