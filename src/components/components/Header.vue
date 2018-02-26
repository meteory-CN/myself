<template>
<div class="header">
  <mu-appbar title="统计平台">
    <mu-icon-button icon="menu" slot="left" @click="toggle()" />
    <mu-flat-button label="菜单" slot="left" />
    <mu-text-field v-if="logind" v-model="username" hintText="username" slot="right" />
    <mu-text-field v-if="logind" v-model="password" hintText="password" type="password" slot="right" />
    <mu-flat-button v-if="logind" v-on:click="login" label="登录" slot="right" />
    <mu-flat-button v-if="login" v-on:click="logout" label="登出" slot="right" />
    <mu-icon-button v-if="islogin" href="https://www.baidu.com" slot="right">
      <i class="material-icons">account_box</i>
    </mu-icon-button>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="客服模块" toggleNested>
          <mu-list-item to='/CustomerPeriod' title="包期" slot="nested" />
          <mu-list-item to='/Customer' title="VIP" slot="nested" />
          <mu-list-item title="充值" slot="nested" />
          <mu-list-item title="查询" slot="nested" />
          <mu-list-item title="手动添加送眼镜" slot="nested" />
        </mu-list-item>
        <mu-list-item title="统计分析" toggleNested>
          <mu-list-item to='/StatisticalAnalysis' title="尤果圈收入统计" slot="nested" />
          <mu-list-item to='/StatisticalAnalysis' title="尤果圈银果收入统计" slot="nested" />
          <mu-list-item to='/StatisticalAnalysis' title="游乐场收入统计" slot="nested" />
        </mu-list-item>
        <mu-list-item to='/UserSetting' title="用户配置">
          <mu-icon slot="right" value="info" />
        </mu-list-item>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close" />
      </mu-list>
    </mu-drawer>
  </mu-appbar>
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
      docked: true
    }
  },
  methods: {
    /**
     * 登录方法
     * @return {[type]} [description]
     */
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


</style>
