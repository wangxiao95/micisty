<template>
  <div class="about">
    <ShopItem v-bind="shop"></ShopItem>
    <button @click="loadMore">加载更多</button>
  </div>
</template>

<script>
  import ShopItem from '../components/ShopItem'
  export default {
    data () {
      return {
        shop: {
          list: [
            {text: 'aaa'},
            {text: 'sfsd'},
            {text: 'sfsd'},
            {text: 'sfsd'},
            {text: 'sfsd'},
            {text: 'sfsd'},
            {text: 'sfsd'},
            {text: 'sfsd'},
            {text: 'sfsd'},
            {text: 'sfsd'},
          ]
        }
      }
    },
    components: {
      ShopItem
    },
    methods: {
      loadMore () {
        this.shop.list.push(this.list);
      }
    }
  }
</script>
<style>
  /*.borderClass{*/
    /*border: 1px solid #666;*/
    /*width: 2rem;*/
    /*height: 2rem;*/
  /*}*/
  /*.borderClass img{*/

  /*}*/
</style>