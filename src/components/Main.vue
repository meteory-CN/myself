<template>
<div class="main-left">
  <aside>
    <!-- <slot name="title1"></slot> -->
    <el-menu class="el-menu-vertical-demo" :router="true">
      <router-link  :to="{ name: 'table'} " exact>
        <el-menu-item index= "" :class="{'isActive': !this.active}">table</el-menu-item>
      </router-link>
      <router-link to='/' exact>
        <el-menu-item index= "" :class="{'isActive': !this.active}">注册统计</el-menu-item>
      </router-link>
      <router-link  :to="{ name: 'main1', params: { id: '3333' }}">
        <el-menu-item index= "" :class="{'isActive' : !this.active}">main1</el-menu-item>
      </router-link>
      <router-link  :to=" {name:'main2'}">
        <el-menu-item index= "" :class="{'isActive' : !this.active}">main2</el-menu-item>
      </router-link>
      <router-link  :to=" {name:'mainright'}">
        <el-menu-item index= "" :class="{'isActive' : !this.active}">mainright</el-menu-item>
      </router-link>
    </el-menu>
    <!-- <slot id="slot" name="body"></slot> -->
  </aside>
</div>
</template>


<script>
export default {
  data: function() {
    return {
      active: false,
      lists: ['/', '/table', '/home', 'main1', 'main2']
    }
  },
  methods: {
    // active: function() {
    //   let app = this
    //   app.active = !app.active
    // }

  }
}
</script>


<style scoped >
aside {
  padding: inherit;
  margin: auto;
}

el-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
