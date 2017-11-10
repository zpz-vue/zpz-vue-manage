<template>
  <aside class="right-menu-wrapper l-r-transform animated"
         :style="{width:  this.$store.state.common.isCollapse ? '64px' : '200px'}">
    <div @click="switchCollapse" class="right-collapse">
      <i :class="this.$store.state.common.isCollapse ? 'fa fa-indent':'fa fa-outdent'"></i>
    </div>
    <el-scrollbar tag="div" wrapClass="vue-scrollbar" v-if="!this.$store.state.common.isCollapse">
      <el-menu class="right-menu" @open="handleOpen" @close="handleClose" :unique-opened="true"
               :default-active="onRoutes" :default-openeds="onRouteKeys" theme="dark" router
               :collapse="this.$store.state.common.isCollapse">
        <template v-for="item in this.$store.state.common.menuData">
          <sub-menu :param="item"></sub-menu>
        </template>
      </el-menu>
    </el-scrollbar>
    <div class="collapse-bar" v-else>
      <el-menu theme="dark" :default-active="onRoutes" router :collapse="this.$store.state.common.isCollapse">
        <template v-for="item in this.$store.state.common.menuData">
          <sub-menu :param="item"></sub-menu>
        </template>
      </el-menu>
    </div>
  </aside>
</template>

<script>
  import subMenu from '@/components/rightMenu/subMenu'
  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      subMenu
    },
    computed: {
      onRoutes () {
        return this.$route.path
      },
      onRouteKeys () {
        const getParentArray = (path, ms, kas = []) => {
          if (ms && ms.length > 0) {
            for (let k = 0, length = ms.length; k < length; k++) {
              if (path === ms[k].url) {
                kas.push(ms[k].url)
                break
              }
              let i = kas.length
              if (ms[k].children && ms[k].children.length > 0) {
                getParentArray(path, ms[k].children, kas)
              }
              if (i < kas.length) {
                kas.push(ms[k].url)
              }
            }
          }
          return kas.reverse()
        }
        return getParentArray(this.$route.path, this.$store.state.common.menuData)
      }
    },
    created: function () {
      this.$store.dispatch('common/loadMenuData')
      console.log(this.$store.state.common.menuData)
    },
    methods: {
      switchCollapse () {
        this.$store.dispatch('common/setIsCollapse')
      },
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
<style>
  .right-collapse {
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    color: #BFCBD9;
    font-size: 14px;
    background-color: #4A5064;
  }

  .vue-scrollbar {
    height: calc(100vh - 80px)
  }

  .collapse-bar {
    width: 100%;
    background-color: #324157;
  }

  .right-menu {
    border-radius: 0;
  }

  .right-menu:not(.el-menu--collapse) {
    width: 200px;
  }

  .right-menu-wrapper {
    background-color: #333744;
    position: fixed;
    top: 50px;
    z-index: 2;
    height: calc(100vh - 50px);
    left: 0px;
  }

  /*重写 element-ui css*/
  .el-menu-item-group__title {
    display: none;
  }

  .el-submenu__title > span, .el-menu-item > span {
    color: #ffffff;
  }

  .el-submenu__title > i, .el-menu-item > i {
    color: #fbfbfb;
  }

  .right-menu:not(.el-menu--collapse) {
    width: 200px;
  }

  .is-opened .is-active, .is-opened .is-active:hover, .el-menu-item.el-menu-each.is-active:hover, .el-menu-item.el-menu-each.is-active {
    background-color: #20a0ff !important;
  }
</style>
