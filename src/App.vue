<template>
<div id="app">
  <!-- {{ namelist }} -->
  <Header  class="header" v-bind:namelist="namelist"></Header>
  <el-row class="main">
    <el-col :span="4">
      <keep-alive>
        <Main class="main-left">
          <h1 slot="title1">this is a  H1 tag</h1>
          <h2 slot="body">this is a  H2 tag</h2>
        </Main>
      </keep-alive>
    </el-col>
    <el-col :span="20">
      <router-view class="main-right"></router-view>
      <!-- <MainRight v-bind:namelist="namelist" v-on:fatherdeletename="Updatenamelist($event)"></MainRight> -->
    </el-col>
  </el-row>
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';
import Header from '@/components/Header';
import Main from '@/components/Main';
import MainRight from '@/components/MainRight';
import Main1 from '@/components/main1.vue';
import Main2 from  '@/components/main2.vue';


export default {
  name: 'app',
  components: {
    HelloWorld,
    Header,
    Main,
    MainRight,
    // Main1,
    // Main2
  },
  data: function() {
    return {
      component: 'Main1',
      namelist: [{
          iUserid: 1,
          name: 'shijie',
          sex: 'man'
        },
        {
          iUserid: 2,
          name: 'shijun',
          sex: 'man'
        }
      ]

    }
  },
  methods: {
    Updatenamelist: function(updatedata) {
      console.log(updatedata)
      this.namelist = updatedata
    }
  }
}
</script>

<style scoped>
body {
  font-family: STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑";
}


.header {
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 4
}


.main {
  /* top:20px; */
  display: inline-block;
  position: relative;
  width: 2000px;
  height: auto;
  overflow: auto;
  z-index: 3;
}

.main-left {
  top: 60px;
  width: 10%;
  /* border: 1px solid black; */
  height: auto;
  position: fixed;
}

.main-right {
  position: relative;
  top: 30px;
  left: 200px;
  z-index: 30
}


</style>
