<template>
  <div class="container">
    <headerBar/>
    <rightMenu/>
    <div class="content-wrapper l-r-transform"
         :style="{marginLeft: this.$store.state.common.isCollapse ? '64px' :  '200px' }">
      <el-scrollbar tag="div" wrapClass="content-scrollbar">
        <router-view/>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
  import {rightMenu, headerBar} from '../components/index'
  export default {
    name: 'page',
    data () {
      return {}
    },
    components: {
      rightMenu,
      headerBar
    },
    computed: {},
    watch: {},
    methods: {}
  }
</script>

<style>
  .content-scrollbar {
    height: calc(100vh - 50px);
  }

  .content-wrapper {
    margin-left: 200px;
    padding-top: 50px;
  }

</style>
