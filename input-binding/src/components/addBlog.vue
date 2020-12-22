<template>
  <div id="add-blog">
      <h2>Add a new blog</h2>
      <form v-if="!submitted">
        <label>Blog title:</label>
        <input type="text" v-model.lazy="blog.title" required>
        <label>Blog Content:</label>
        <textarea v-model.lazy="blog.content"></textarea>
        <div id="checkboxes">
            <label>Ninja</label>
            <input type="checkbox" name="" value="ninjas" v-model="blog.categories">
            <label>Wizard</label>
            <input type="checkbox" name="" value="wizards" v-model="blog.categories">
            <label>Cat</label>
            <input type="checkbox" name="" value="cat" v-model="blog.categories">
            <label>Hero</label>
            <input type="checkbox" name="" value="Hero" v-model="blog.categories">
        </div>
        <label>Author: </label>
        <select v-model="blog.author">
            <option v-for="author in authors">{{ author }}</option>
        </select>

        <button v-on:click.prevent="post">Add Blog</button>
      </form>
      <div v-if="submitted">
        <h3>Thanks for adding your post</h3>
      </div>

      <div id="preview">
          <h3>Preview Blog</h3>
          <p>Blog Title: {{ blog.title }}</p>
          <p>Blog Content: {{ blog.content }}</p>
          <p>Blog Categories: </p>
            <ul>
              <li v-for="category in blog.categories"> {{ category }}</li>
            </ul>
          <p>Author: {{ blog.author }}</p>
      </div>
  </div>
</template>

<script>

export default {
 
  data () {
    return {
      blog: {
          title: '',
          content: '',
          categories: [],
          author: ""
        },
        authors: ['Brze', 'Vue', 'React'],
        submitted: false,
    }
  },
  methods: {
    post: function() {
      this.$http.post('https://vue-blog-c8dd3-default-rtdb.firebaseio.com/posts.json', this.blog).then(function(data){
          console.log(data);
          this.submitted = true;
      });
    }
  }
}
</script>

<style>
  #add-blog * {
    box-sizing: border-box;
  }

  #add-blog {
    margin: 20px auto;
    max-width: 500px;
  }

  label {
    display: block;
    margin: 20px 0 10px;
  }

  input[type="text"].textarea {
    display: block;
    width: 100px;
    padding: 8px;
  }

  #preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }

  h3 {
    margin-top: 10px;
  }

  #checkboxes input{
    display: inline-block;
    margin-right: 10px;
  }

  #checkboxes label {
    display: inline-block;
  }
</style>
