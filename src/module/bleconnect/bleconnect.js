import Vue from 'vue'
import bleconnect from './bleconnect.vue'

Vue.config.productionTip = false

let connecting = 0

var data = {
  status:connecting
}

var vm = new Vue({
  el: '#app',
  components: { bleconnect },
  data: data,
})

function run() {
  
  vm.$data.status = 1
  
  window.location.pathname = '/module/unlock.html'
}

setTimeout(run, 10000)
