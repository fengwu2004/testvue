import Vue from 'vue'
import unlock from './unlock.vue'

Vue.config.productionTip = false

let vm = new Vue({
  el: '#app',
  components: { unlock },
  data:{
    val:{
      user:{wxHeadimgurl:'http://wx.indoorun.com/indoorun/indoorun/unlock/dist/static/avatar.png'},
      doorStatus:0
    },
  }
})

$.get('/tc/getUserInfo', {}, function(res) {
  
  if (res !== null && res.code === "success") {
    
    vm.$data.val.user = res.data
    
    vm.$data.val.doorStatus = 4
  }
})
