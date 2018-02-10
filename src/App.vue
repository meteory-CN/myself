<template>
<div id="app">
  <mu-flexbox>
    <mu-flexbox-item>
      <Header class="header" v-bind:namelist="namelist"></Header>
    </mu-flexbox-item>
  </mu-flexbox>
  <!-- <mu-flexbox class="emptybox">
  </mu-flexbox>
  <mu-flexbox class="main"> -->
    <mu-flexbox-item class="maincontent" :span="24">
      <router-view class="main-right"></router-view>
    </mu-flexbox-item>
  </mu-flexbox>
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';
import Header from '@/components/components/Header';

export default {
  name: 'app',
  components: {
    Header
    // Customer,
    // UserSetting,
    // StatisticalAnalysis
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
  z-index: 99
}
.main-right {
  position: relative;
}

.maincontent {
  height: 1200px;
  position: relative;
  top: 64px;
  text-align: center;
}

.emptybox {
  height: 100px;
  width: 100%;
}

</style>
