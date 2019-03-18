<template>
  <div>
    <v-header></v-header>

    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>

  import header from './components/header/header';


  const ERR_OK = 0;

  export default {
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.seller = response.data;
          console.log(this.seller);
        }
      });
    },
    components: {
      "v-header": header
    }
  };
</script>

<style scoped lang="stylus">

  @import "common/stylus/mixin.styl"

  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    //border-bottom 1px solid rgba(7,17,27,0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex 1
      text-align center
      font-size 20px
      color #778593
      .active
        color #f01414

</style>
