<template>
<div id="app">
  <mu-flexbox>
    <mu-flexbox-item>
      <Header class="header" v-bind:namelist="namelist"></Header>
    </mu-flexbox-item>
  </mu-flexbox>
  <mu-flexbox class="emptybox">
  </mu-flexbox>
  <mu-flexbox class="main">
    <mu-flexbox-item :span="4">
      <keep-alive>
        <Main class="main-left">
          <h1 slot="title1">this is a  H1 tag</h1>
          <h2 slot="body">this is a  H2 tag</h2>
        </Main>
      </keep-alive>
    </mu-flexbox-item>
    <mu-flexbox-item :span="20">
      <router-view class="main-right"></router-view>
    </mu-flexbox-item>
  </mu-flexbox>
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';
import Header from '@/components/Header';
import Main from '@/components/Main';
import MainRight from '@/components/MainRight';
import Main1 from '@/components/main1.vue';
import Main2 from '@/components/main2.vue';


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
.header {
  width: 100%;
  position: fixed;
  z-index: 3
}


.main-right {
  position: relative;
  /* top: 50px; */
}

.emptybox {
  height: 100px;
  width: 100%;
}
</style>
