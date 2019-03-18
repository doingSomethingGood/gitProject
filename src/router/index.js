import Vue from 'vue';
import Router from 'vue-router';
import vueResource from 'vue-resource';
import "../common/stylus/index.styl";
import goods from '../components/goods/goods';
import seller from '../components/seller/seller';
import ratings from '../components/ratings/ratings';

Vue.use(Router);
Vue.use(vueResource);

export default new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
    {
      name: 'goods',
      path: '/goods',
      component: goods
    },
    {
      name: 'seller',
      path: '/seller',
      component: seller
    },
    {
      name: 'ratings',
      path: '/ratings',
      component: ratings
    }
  ]
})
