<template>
<div class="main-right">
  <section id="section1">
    <router-view></router-view>
    <div id="logindiv">
      <!-- <label>username</label> -->
      <el-input type="text" ref="input" placeholder="username" />
      <!-- <label>password</label> -->
      <el-input type="text" ref="input2" placeholder="password" />
      <el-button v-on:click="submit">SUBMIT</el-button>
    </div>
    <el-table>
      <li v-for="name in localnamelist">
        {{ name.name }} {{ name.sex }}
      </li>
    </el-table>

    <el-button v-on:click="deletename">
      DeleteName
    </el-button>
    <el-button v-on:click="fatherdeletename">
      fatherdeletename
    </el-button>
    <el-form>
      <div class="form">
        <label>shijun</label>
        <input value="shijun" type="checkbox" v-model="cate" />
        <label>shijie</label>
        <input value="shijie" type="checkbox" v-model="cate" />
        <label>zhongchao</label>
        <input value="zhongchao" type="checkbox" v-model="cate" />
        <label>mama</label>
        <input value="mama" type="checkbox" v-model="cate" />
        <label>baba</label>
        <input value="baba" type="checkbox" v-model="cate" />
        <li v-for="cates in cate">
          {{ cates | capitalize }}
        </li>
        <select v-model=user>
          <option v-for="user1 in user">{{ user1 }}</option>
        </select>
      </div>
    </el-form>
  </section>
</div>
</template>
<script>
export default {
  props: {
    namelist: {
      type: Array,
      required: false
    }
  },
  data: function() {
    return {
      localnamelist: JSON.parse(JSON.stringify(this.namelist)),
      act: false,
      cate: [],
      users: ['', 'shijun', 'shijie', 'chengxiaolu', 'shibaoming', 'zhongchao'],
      user: '',
      searchword: ''

    }
  },
  methods: {
    submit: function() {
      console.log(this.$refs.input.currentValue)
      console.log(this.$refs.input2.currentValue)
    },
    deletename: function() {
      let app = this
      let listlength = app.localnamelist.length
      app.localnamelist.pop()
      if (listlength === 0) {
        alert('list is empty')
      }
    },
    fatherdeletename: function() {
      let app = this
      let listlength = this.localnamelist.length
      if (listlength === 0) {
        alert('list is empty')
      };
      app.localnamelist.pop()
      app.$emit('fatherdeletename', app.localnamelist)
    },
    changevlue: function() {
      // console.log(this.value)
      // this.value = !this.value
      // this.checked = !this.checked
      // selectvalue = this.value
    }
  },
  computed: {
    filtername: function() {
      return this.user.filter((user => {
        return user.match(searchword)
      }))
    }
  },
  filter: {
    /**
     * [自动字符首字母大写]
     * @param  {[stringify]} value [原始字符串]
     * @return {[stringify]}       [返回首字母大写原始字符串]
     */
    capitalize: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>


<style scoped>
div {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  background-color: #b0e0e6;

}

p {
  background-color: gray;
  text-align: center;
  padding: 20px
}

#main-right {
  float: inherit;
}

#logindiv {
  overflow: auto
}

.main-right {
  overflow: auto;
}

.form {
  overflow: auto;
}
</style>
