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


h2 {
  position: relative;
  display: inline-block;
  background-color: yellow;
  /* float: right; */
}


ol {
  display: inline-block;
  border: 2px solid black;
  list-style: none;
  clear: both;
}


.main1 {
  position: relative;
}
.div-4 {
  position: absolute;
}

.div-1 {
  display: inline-block;
  width: 200px;
  height: 500px;
  overflow: hidden;
  border: 2px solid black;
}



</style>
