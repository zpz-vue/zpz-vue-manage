<template>
  <div class="header-wrapper">
    <div class="logo">
      <span><img src="../../assets/logo.png" width="97" height="40"/></span>
      <span>{{ $t('console') }}</span>
    </div>
    <div class="menu">

      <!--产品服务-->
    </div>
    <div class="user">
     <span>
        <el-dropdown class="navbar-dropdown" trigger="click">
          <div class="el-dropdown-link" style="height: auto;line-height: inherit">
            <el-badge :value="msgCount" class="item">
            <i class="fa fa-envelope-o"></i>
            </el-badge>
          </div>
          <el-dropdown-menu>
            <ul class="message-list">
            <li v-for="(item,index) in list"><!-- start message -->
            <router-link :to="{path:'/sys/message',query:{id:item.id}}">
            <p>{{index + 1}}. {{item.title}}</p>
            </router-link>
            </li>
            </ul>
          </el-dropdown-menu>
        </el-dropdown>

     </span>
      <span>{{userName}}</span>
      <span><span @click="doEn">English</span> / <span @click="doZh">中文</span></span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import * as constant from '@/utils/constant'
  import {getCookie} from '@/utils/cookie'
  export default {
    name: 'header',
    data () {
      return {
        userName: getCookie(constant.COOKIE_USER_KEY).userName,
        msgCount: 50,
        list: [
          {id: 1, title: '123456789'},
          {id: 1, title: '123456789'},
          {id: 1, title: '123456789'},
          {id: 1, title: '123456789'},
          {id: 1, title: '123456789'},
          {id: 1, title: '123456789'},
          {id: 1, title: '123456789'},
          {id: 1, title: '123456789'},
          {id: 1, title: '123456789'},
          {id: 1, title: '123456789'}
        ]
      }
    },
    components: {},
    computed: {},
    created: function () {
    },
    methods: {
      doZh () {
        Vue.config.lang = 'zh'
        this.$store.dispatch('common/setLanguage', {language: 'zh'})
      },
      doEn () {
        Vue.config.lang = 'en'
        this.$store.dispatch('common/setLanguage', {language: 'en'})
      }
    }
  }
</script>
<style>
  .header-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    background-color: #373D41;
    z-index: 2;
    color: #ffffff;
    font-weight: 800;
    font-size: 14px;
  }

  .header-wrapper > div {
    float: left;
    height: 48px;
  }

  .logo {
    line-height: 50px;
    text-align: right;
  }

  .logo > span {
    vertical-align: middle;
  }

  .logo > span:nth-child(1) {
    margin-top: 5px;
  }

  .logo > span:nth-child(2) {
    border-right: 2px solid #2A2F32;
    border-left: 2px solid #2A2F32;
    text-align: center;
    width: 92px;
    margin-top: -15px;
  }

  .logo {
    width: 200px;
  }

  .menu {
    width: 150px;
  }

  .user {
    width: calc(100% - 350px);
    line-height: 48px;
    text-align: right;
  }

  .user > span {
    border-left: 2px solid #2A2F32;
    text-align: center;
    cursor: pointer;
  }

  .user > span:nth-child(1) {
    width: 100px;
    margin-right: -10px;
  }

  .user > span:nth-child(2) {
    padding-left: 15px;
    padding-right: 15px;
    margin-right: -10px;
  }

  .user > span:nth-child(3) {
    width: 150px;
  }

  .user > span i {
    color: #ffffff;
  }

  .user > span:hover {
    background-color: #2A2F32;
  }

  /* .logo{
     width: 200px;
   }
   .header-wrapper span,.header-wrapper img{
     vertical-align: middle;
   }
   .logo>span{
     height: 50px;
     line-height: 50px;
     width: 94px;
     text-align: center;
     font-weight: 900;
   }
  .logo>span,.logo>img{
    border-right: 2px solid #2A2F32;
  }
   .menu{
     width: 150px;
   }
   .user{
     width: calc(100% - 350px);
     text-align: right;
   }
   .user>span{
     border-left: 2px solid #2A2F32;
     text-align: center;
     cursor: pointer;
     height:50px;
   }
   .user>span:nth-child(1){
     width: 100px;
     margin-right: -10px;
   }
  .user>span:nth-child(2){
    padding-left:15px;
    padding-right: 15px;
    margin-right: -10px;
  }
  .user>span:nth-child(3){
    width: 150px;
  }
  .user>span i{
    color: #ffffff;
  }
  .user>span:hover{
    background-color: #2A2F32;
  }*/
</style>
