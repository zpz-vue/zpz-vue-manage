<template>
  <div class="container">
    登录
    <a @click="doLogin">去工作台</a>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    doLogin () {
      this.$store.dispatch('login', {
        isLogin: true
      })
      this.$router.push({path: '/workbench'})
    }
  }
}
</script>

<style>
</style>
