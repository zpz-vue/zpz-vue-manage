<template>
  <div class="container">
    <div class="header"></div>
    <div class="wrap">
      <div class="right-bar">
        <rightMenu/>
      </div>
      <div class="main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import { rightMenu } from '../components/index'
  export default {
    name: 'page',
    data () {
      return {}
    },
    components: {
      rightMenu
    },
    computed: {},
    watch: {},
    methods: {
    }
  }
</script>

<style>
  .header {
    height: 60px;
    width: 100%;
    background-color: #373D41;
    top: 0;
  }

  .wrap {
    height: calc(100% - 60px);
    width: 100%;
    top: 60px;
  }

  .header, .wrap {
    position: fixed;
    left: 0;
  }

  .wrap > div {
    display: inline-block;
  }

  .right-bar {
    width: 180px;
  }
</style>
