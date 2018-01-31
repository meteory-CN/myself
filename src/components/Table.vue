<template>
<div id='apptable' v-on:mousemove="move">
  <a v-on:click.once="linkbaidu" href="http://www.baidu.com">baidu</a>
  <p id='table'>
    {{x}},{{y}}
  </p>
</div>
</template>
<script>
export default {
  // name: abc123,
  data: function() {
    return {
      x: 0,
      y: 0
    }
  },
  methods: {
    move: function() {
      // let abc123 = this;
      console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    linkbaidu: function() {
      alert("link to baidu yes or no !!")
    }
  }
}
</script>
<style scoped>
div {
  /* float: right; */
  background-color: gray;
  broder:solid #7c7;
  height: auto;
  width: auto;
}
a {
  float: right
}

p {
  float: center
}
</style>
