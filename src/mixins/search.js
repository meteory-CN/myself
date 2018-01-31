export default {
  computed: {
    filterblog: function () {
      return  this.blogs.filter(
      (blog) => {
          return blog.content.match(this.searchword)
        }
    )
  }
}}
