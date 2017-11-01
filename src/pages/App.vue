<template>
  <div class="container">
    <div class="header"></div>
    <div class="main">
      <rightMenu class="right-bar"/>
      <router-view class="content"/>
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
  .header{
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background-color: #373D41;
    z-index: 2;
  }
  .main{
    position: absolute;
    left: 0;
    margin-top: 60px;
    background-color: aquamarine;
    height: calc(100% - 60px);
    width: 100%;
  }
  .right-bar,.content{
    float: left;
    height: 100%;
    overflow-y: auto;
  }
  .content{background-color: #ccc}

</style>
