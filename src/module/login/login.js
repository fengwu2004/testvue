/**
 * Created by yan on 05/07/2017.
 */
import Vue from 'vue'
import login from './login.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#login',
  components: { login },
  data:{
    myvalue:{value:'OkKSKSI'}
  }
})
