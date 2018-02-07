<template>
<div class="main2">
  <h1>2 column layout example</h1>
  <a href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <div class="main1">
    <div class="div-1">
      <h2>First column</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>
    </div>
    <div class="div-1">
      <h2>Second column</h2>
      <p>
        Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut.
        Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut.
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut.
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut.
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut.
      </p>
    </div>
    <div class="div-1">
      <h2>THREE column</h2>
      <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut.
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut.
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut.
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut.
Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut.
</p>
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


a {
  margin: auto;
  border: 2px solid gray;
  padding: 2px;
}


.div-1 {
  margin: auto;
  border: 2px solid yellow;
  padding: 20px;
  display: inline-block;
  width: 400px;
  height: auto;


}

.div-4 {
  margin: auto;
  border: 2px solid blue;
  padding: auto;
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

h1 {
  /* background-color: gray; */
  color: red;
  /* font-weight: normal; */
  text-transform: none;
  background-color: gray;
  color: blue;
  border: 4px solid #7c7;
}


p {
  color: gray;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 1px;
  /* line-height: 40px; */
}


div a {
  background: white;
  text-decoration: none;
  color: blue;
  font-weight: bolder;
  letter-spacing: 2px;
}

div a:hover {
  background: yellow;
  text-decoration: underline;
  color: black;
  font-weight: lighter;
  letter-spacing: 2px
}



</style>
