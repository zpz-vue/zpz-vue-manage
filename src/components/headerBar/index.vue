<template>
 <div class="header-wrapper">
   <div class="logo">
     <img src="../../assets/logo.png" width="97" height="40"/>
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
     <span>张三@18311109710</span>
     <span><span @click="doEn">English</span> / <span @click="doZh">中文</span></span>
   </div>
 </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'header',
    data () {
      return {
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
    components: {
    },
    computed: {
    },
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
 .header-wrapper{
   position: fixed;
   top: 0;
   left: 0;
   line-height: 50px;
   width: 100%;
   background-color: #373D41;
   z-index: 2;
   color: #ffffff;
 }
  .header-wrapper>div{
    display: inline-block;
  }
  .logo{
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
    width: calc(100% - 360px);
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
 }
</style>
