import Vue from 'vue'
import unlock from './unlock.vue'

Vue.config.productionTip = false

let vm = new Vue({
  el: '#app',
  components: { unlock },
  data: function() {
    return {
      val:{
        user:{wxHeadimgurl:'http://wx.indoorun.com/indoorun/indoorun/unlock/dist/static/avatar.png'},
        doorStatus:4
      },
      bleconnectStatus:0
    }
  },
})

import { beaconMgr } from './idrBeaconManager'

function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return decodeURI(r[2]);
  }
  return null;
}

function connectSuccess() {
  
  alert('连接成功')
  
  vm.bleconnectStatus = 2
}

function connectFailed(res) {
  
  vm.bleconnectStatus = 1
  
  // wx.closeWindow()
}

function connectBleDevice() {

  var gateId = getQueryString('gateId')
  
  beaconMgr.connect(gateId, connectSuccess, connectFailed)
}

connectBleDevice()

$.get('/tc/getUserInfo', {}, function(res) {
  
  if (res !== null && res.code === "success") {
    
    vm.$data.val.user = res.data
    
    vm.$data.val.doorStatus = 4
  }
})
