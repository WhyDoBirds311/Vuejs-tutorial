<template>
  <div>
    <form-helper>
       <!-- <h2 slot="title">{{ title }}</h2>
        <p slot="text">paragraph</p> -->
        <div slot="form-header">
            <h3>This is the  form</h3>
            <p>Information</p>
        </div>
        <div slot="form-fields">
            <input type="text" name="" placeholder="name" required>
            <input type="password" name="" placeholder="password" required>
        </div>
        <div slot="form-controls">
          <button v-on:click="handleSubmit">Submit</button>
        </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'

export default {
  components: {
    'form-helper': formHelper
  },
  data () {
    return {
      title: 'Dynamice Title'
    }
  }
}
</script>

<style>



</style>

