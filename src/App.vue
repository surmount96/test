<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
  /*.fade-enter-active, .fade-leave-active {*/
  /*  transition: opacity .5s;*/
  /*}*/

  /*.fade-enter, .fade-leave-to{*/
  /*  opacity: 0;*/
  /*}*/

  .slide-fade-enter-active{
    transition: all .3s ease;
  }
  .slide-fade-leave-active{
    transition: all .8s cubic-bezier(1.0,0.5,0.8,1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }
</style>
