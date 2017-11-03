<template>
    <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
      <router-view/>
    </transition>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  .animated {
    animation-duration: .5s;
  }
</style>
