<template>
  <header>
    <div class="item" @click="$store.state.backEvent">
      <slot name="left"><span :class="$store.state.backBtn"></span></slot>
    </div>
    <div class="item title">
      <slot name="title">{{$store.state.title}}</slot>
    </div>
    <div class="item" @click="$store.state.rightEvent">
      <slot name="right">{{$store.state.rightText}}</slot>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data () {
        return {

        }
    },
    methods: {

    }
  }
</script>

<style scoped>
  @import "../assets/css/reset.less";
  header {
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    /*左右居中*/
    justify-content: center;
    /*上下居中*/
    align-items: center;
    font-size: 0.16rem;
    height: 0.5rem;
  }
  .item:nth-child(1) {
    flex-grow: 1;
  }
  .item:nth-child(2) {
    flex-grow: 4;
  }
  .item:nth-child(3) {
    flex-grow: 1;
  }
  .title {
    font-size: .2rem;
    font-weight: 600;
  }

</style>