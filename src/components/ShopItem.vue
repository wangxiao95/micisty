<template>
  <div class="box">
    <div class="waterFallItem" v-for="item in list">{{item.text}}</div>
  </div>
</template>

<script>
  import jq from '../assets/js/jq'
  import { init, load } from '../assets/js/waterFall'
  export default {
    name: "ShopItem",
    // data () {
    //   return {
    //
    //   }
    // },
    props: {
      list: {
        type: Array,
        default: function () {
          return [{text: 'dsfsd'}];
        }
      }
    },
    mounted () {
      init('.waterFallItem', 5);
    }
  }
</script>

<style scoped>
  @import "../assets/css/reset.less";
  .box {
    position: relative;
    padding-right: 5px;
  }
  .waterFallItem {
    position: absolute;
    width: 1.8rem;
    height: 100px;
    margin: 5px 0  0 5px;
    border-radius: 2px;
    border: 1px solid #999;
  }
  .waterFallItem:nth-child(odd) {
    height: 120px;
  }
</style>