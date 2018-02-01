<template>
<div id="app">
  <!-- {{ namelist }} -->
  <el-row class="header">
    <Header  v-bind:namelist="namelist"></Header>
  </el-row>
  <el-row>
    <el-col :span="4">
      <keep-alive>
        <Main class="main">
          <h1 slot="title1">this is a  H1 tag</h1>
          <h2 slot="body">this is a  H2 tag</h2>
        </Main>
      </keep-alive>
    </el-col>
    <el-col :span="20">
      <router-view></router-view>
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
/*
.header {
  display: inline;
  position: fixed;
  width: 100%
} */
</style>
