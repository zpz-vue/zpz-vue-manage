<template>
    <el-menu theme="dark" class="right-menu" default-active="12"  @open="handleOpen" @close="handleClose"
             :collapse="isCollapse">
      <div @click="switchCollapse" class="right-collapse">
        <i :class="isCollapse ? 'fa fa-indent':'fa fa-outdent'"></i>
      </div>
      <el-menu-item index="12">
        <i class="el-icon-menu"></i>
        <span slot="title">工作台</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">用户管理</el-menu-item>
          <el-menu-item index="1-2">角色管理</el-menu-item>
          <el-menu-item index="1-2">权限管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">用户管理</el-menu-item>
          <el-menu-item index="4-2">角色管理</el-menu-item>
          <el-menu-item index="4-2">权限管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="4-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="4-4">
          <span slot="title">选项4</span>
          <el-menu-item index="4-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
</template>

<script>
  /* :unique-opened="true" */
  export default {
    name: 'app',
    data () {
      return {
        isCollapse: false
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      switchCollapse () {
        if (this.isCollapse) {
          this.isCollapse = false
        } else {
          this.isCollapse = true
        }
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
  }

  .right-menu:not(.el-menu--collapse) {
    width: 200px;
  }

  .right-menu {
    height: 100%;
  }


  /*重写 element-ui css*/
  .el-menu-item-group__title {
    display: none;
  }
</style>
