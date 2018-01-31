<template>
<div id="div-main1">
  <label>Your name is :{{ youname }}</label>
  <input type="text" v-model.lazy="youname" Placeholder="adasd" />
  <label>search</label>
  <input type="search" v-model="searchword" />
  <div>
    <P>
      {{ id }}
    </P>
    <section v-for="blog in filterblog">
      {{blog}}
      <P>
        {{ blog.title}}
      </P>
      <P>
        {{ blog.contnet}}
      </P>
      <P>
        {{ blog.time }}
      </P>
    </section>
    <section v-for=" aaa in  vuexlist3">
      <P>
        {{ aaa.blogcontent }}
      </P>
      <P>
        {{ aaa.blogid }} {{ aaa.time }}
      </P>
    </section>
    <button type="button" v-on:click="addid">ADDID</button>
      <button type="button" v-on:click="subid">SUBID</button>
    <section v-for=" aaa in  vuexlist2">
      <P>
        {{ aaa.blogcontent }}
      </P>
      <P>
        {{ aaa.blogid }} {{ aaa.time }}
      </P>
    </section>
  </div>
</div>
</template>
<script>
import Search from '../mixins/search'
export default {
  beforeCreate: function() {
    // console.log(this.$router.app._route.params.id);
    // console.log(this.$store.state.blog)
    // console.log(this.$store.getters.halfblog)
  },
  data: function() {
    return {
      id: '',
      youname: '',
      searchword: '',
      blogs: [{
          title: "this is a ONE",
          content: "Hello this a ONEPIACE",
          time: "2018-01-11"
        },
        {
          title: "this is a TWO",
          content: "Hello this a TWOPIACE",
          time: "2018-01-12"
        },
        {
          title: "this is a THREE",
          content: "Hello this a THREEPIACE",
          time: "2018-01-13"
        }
      ]
    }
  },
  computed: {
    vuexlist: function() {
      return this.$store.state.blog
    },
    vuexlist1: function() {
      let vuexlist1 = this.$store.state.blog.map(aaa => {
        return {
          blogcontent: '**' + aaa.blogcontent + '**',
          time: aaa.time,
          blogid: aaa.blogid
        }
      })
      console.log(vuexlist1)
      return vuexlist1
    },
    vuexlist2: function () {
      let app = this
      // console.log(app.$store.state.blog)
      return this.$store.state.blog.filter(
         (app1) => {
          return app1.blogcontent.match(this.searchword)
        }
      )
  },
  vuexlist3: function () {
    let app = this
    // console.log(app.$store.state.blog)
    return this.$store.getters.halfblog
}
},
methods: {
  addid: function () {
    this.$store.commit('addid')
    console.log(this.$route.params.id)
  },
  subid: function () {
    this.$store.commit('subid')
  }
},
  mixins: [Search]
}
</script>
<style scoped>

</style>
