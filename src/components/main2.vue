<template>
<div class="main2">
  <h1>2 column layout example</h1>
  <div class="main1">
    <div class="div-1">
      <h2>First column</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>
    </div>
    <div class="div-1">
      <h2>Second column</h2>
      <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut.</p>
    </div>
    <div class="div-1">
      <h2>THREE column</h2>
      <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut.</p>
    </div>
  </div>
  <div class="div-4">
    <ol v-for="blog in blogs">
      <li>{{ blog.id }}</li>
    </ol>
  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      blogs: [{
          id: 1,
          content: '123'
        },
        {
          id: 2,
          content: '321'
        }
      ]
    }
  }
}
</script>

<style scoped>
p {
  font-family: sans-serif;
}

li {
  list-style: none;
  color: white;
  background-color: red;
  font-size: 20px
}


div h2 {
  text-align: center;
}

div {
  broder: 4px solid #7c7;
  height: auto;
  width: auto;
  /* flex-direction: column */
  /* font: Microsoft YaHei */
}

div .main2 {

  display: flex;
}

h1 {
  /* background-color: gray; */
  color: red;
  border: 4px solid #7c7;
}


p {
  color: gray
}




.div-1 {
  /* broder: 4px solid #7c7; */
  /* float: right; */
  display: flex;
  flex-direction: column
}



.div-1 h2 {
  /* broder: 4px solid #7c7; */
  float: none;
  padding: 10px;
  margin: 10px;
  /* display: table; */
}

.div-2 h2 {
  /* broder: 4px solid #7c7; */
  float: none;
  padding: 20px;
  margin: 20px;
}


.div-3 h2 {
  /* broder: 4px solid #7c7; */
  float: none;
  padding: 30px;
  margin: 30px;
}
</style>
