import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    blog: [{
      blogid: 1,
      blogcontent: 'shijun',
      time: '2018-13-13'
      },
    {
      blogid: 2,
      blogcontent: 'shijie',
      time: '2018-13-16'
    },
    {
      blogid: 3,
      blogcontent: 'ssssss',
      time: '2018-13-17'
    }
    ]
  },
  getters: {
    halfblog: (state) => {
      return state.blog.map((blog) => {
        return {
          blogid : blog.blogid*3,
          blogcontent : blog.blogcontent,
          time : blog.time
        }
      })
    }
  },
  mutations: {
    addid: (state) => {
       state.blog.forEach(
        (blog) => {
          blog.blogid += 1
        }
      )
    },
    subid: (state) =>{
      state.blog.forEach(
        (blog) => {
          blog.blogid -= 1
        }
      )
    }
  },


})
export default store
