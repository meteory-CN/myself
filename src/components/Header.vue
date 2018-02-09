<template>
<div class="header">
  <mu-appbar title="统计平台">
    <!-- <mu-raised-button icon="menu" label="undocked drawer" @click="toggle(true)"/> -->
    <mu-icon-button label="菜单" icon="menu" slot="left" @click="toggle()"/>
    <mu-flat-button  label="菜单" slot="left"/>
    <mu-text-field  class="loginform" v-if="logind" v-model="username" hintText="username" slot="right"/>
    <mu-text-field class="loginfrom" v-if="logind" v-model="password" hintText="password" type="password" slot="right"/>
    <mu-flat-button v-if="logind" v-on:click="login" label="登录" slot="right"/>
    <mu-flat-button v-if="islogin" v-on:click="logout" label="登出" slot="right"/>
    <mu-icon-button v-if="islogin" href="https://www.baidu.com"  slot="right">
    <i class="material-icons">account_box</i>
    </mu-icon-button>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item  to='/table' title="Menu Item 333"/>
        <mu-list-item to='/mainright' title="Menu Item 2"/>
        <mu-list-item to='/main2' title="Menu Item 3"/>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
      </mu-list>
    </mu-drawer>
  </mu-appbar>
  <!-- <el-menu default-active="5" class="el-menu-demo" mode="horizontal" @select="">
    <div class="item">
      <el-menu-item index="1">统计平台</el-menu-item>
      <el-menu-item index="2">图标1</el-menu-item>
      <el-menu-item index="3">用户管理</el-menu-item>
      <el-menu-item index="4">系统设置</el-menu-item>
    </div>
    <div class="inputusername">
      <el-menu-item v-if="logind" index="5">
        <el-input v-model="username" placeholder="用户名" /></el-menu-item>
      <el-menu-item v-if="logind" index="6">
        <el-input v-model="password" type="password" placeholder="密码" /></el-menu-item>
      <el-menu-item v-if="logind" index="7">
        <el-button type="submit" v-on:click="login">login</el-button>
      </el-menu-item>
      <el-menu-item v-else="logind" index="8">
        <el-button type="submit" v-on:click="logout">logout</el-button>
      </el-menu-item>
      <el-menu-item v-if="islogin" index="9"><a>WElCOME USER : {{ iUserid }}</a></el-menu-item>
    </div>
  </el-menu> -->
</div>
</template>
<script>
export default {
  props: {
    namelist: {
      type: Array,
      required: true
    }
  },
  created: function() {
    const app = this;
    const session = window.sessionStorage;
    let token = session.getItem('token');
    this.$http({
        method: 'post',
        url: '/api/user/logintoken',
        data: {
          // 发送用户登录令牌
          token: session.getItem('token')
        }
      })
      .then(
        function(response) {
          let token = session.getItem('token');
          let iUserid = response.data[0].iUserid;
          let status = response.data[0].status;
          if (status == 1) {
            app.islogin = true
            app.logind = false
            app.iUserid = iUserid
          }
        }
      )
  },
  data: function() {
    return {
      logind: true,
      username: '',
      password: '',
      res: [],
      iUserid: '',
      islogin: false,
      open: false,
      docked: false
    }
  },
  methods: {
    login: function() {
      let app = this
      let session = window.sessionStorage;
      this.$http({
          method: 'post',
          url: '/api/user/login',
          data: {
            username: this.username,
            password: this.password,
            token: ''
          }
        })
        .then(function(response) {
          let session = window.sessionStorage
          app.res = response.data
          if (app.res[0].iUserid == 0) {
            alert(app.res[0].message)
          } else {
            app.islogin = true
            app.logind = false
            app.iUserid = app.res[0].iUserid
            console.log('LOGIN')
            console.log(app.res[0].token)
            session.setItem('token', app.res[0].token)
            console.log(window.sessionStorage.getItem('token'))
          };
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    logout: function() {
      let session = window.sessionStorage
      this.islogin = false
      this.logind = true
      session.removeItem('token')
      console.log('LOGOUT')
    },
    toggle: function(flag) {
      this.open = !this.open
      this.docked = !flag
    }
  }
}
</script>
<style scoped>
.header {
  opacity: 1.0;
}

mu-text-field.loginform {
  position: relative;
  top: -20px
}

</style>
