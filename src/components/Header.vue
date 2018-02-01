<template>
<div class="header">
  <el-row>
    <el-col :span="24">
      <el-menu default-active="5" class="el-menu-demo" mode="horizontal" @select="">
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
      </el-menu>
    </el-col>
  </el-row>
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
    let app = this;
    let session = window.sessionStorage;
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
      islogin: false
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
    }
  }
}
</script>
<style scoped>
div .header {
  float: inherit;
  text-align: left;
  display: inline;
}

div .inputusername {
  text-align: right;
  float: right
}

</style>
