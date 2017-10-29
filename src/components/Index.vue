<template>
  <el-container name="main-wrap">
    <el-header name="main-header">header</el-header>
    <el-container name="main-content">
      <el-aside name="main-menu">aside</el-aside>
      <el-main name="content-wrap">main</el-main>
    </el-container>
  </el-container>

  <!-- <div class="wrapper">
     <a @click="doZh">Zh</a>/<a @click="doEn">En</a>
     {{ $t('cancel') }}
   </div>-->
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'app',
    data () {
      return {}
    },
    computed: {},
    watch: {},
    methods: {
      doZh () {
        Vue.config.lang = 'zh'
      },
      doEn () {
        Vue.config.lang = 'en'
      }
    }
  }
</script>
