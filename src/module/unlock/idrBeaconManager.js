/**
 * Created by yan on 20/02/2017.
 */
/**
 * Created by Sorrow.X on 2016/9/20.
 * beacons.js  蓝牙功能模块
 */

var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

function base64encode(str) {
  var out, i, len;
  var c1, c2, c3;
  len = str.length;
  i = 0;
  out = "";
  while (i < len) {
    c1 = str.charCodeAt(i++) & 0xff;
    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt((c1 & 0x3) << 4);
      out += "==";
      break;
    }
    c2 = str.charCodeAt(i++);
    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
      out += base64EncodeChars.charAt((c2 & 0xF) << 2);
      out += "=";
      break;
    }
    c3 = str.charCodeAt(i++);
    out += base64EncodeChars.charAt(c1 >> 2);
    out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
    out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
    out += base64EncodeChars.charAt(c3 & 0x3F);
  }
  return out;
}

function idrBeaconMgr() {
  
  var _appId = ''
  
  var _timestamp = ''
  
  var _nonceStr = ''
  
  var _signature = ''
  
  var _deviceId = ''
  
  var _paySuccess = false
  
  function connect(deviceId, successFn, failedFn) {
    
    _deviceId = deviceId
    
    var url = 'http://wx.indoorun.com/wxauth/getAuthParas?reqUrl=' + window.location.href;
    
    jsLib.ajax({
      
      type: "get",
      
      dataType: 'jsonp',
      
      url: url, //添加自己的接口链接
      
      timeOut: 10000,
      
      before: function () {
        
        // console.log("before");
      },
      success: function (str) {
        
        var data = str;
        
        if (data != null) {
          
          if (data.code == "success") {
            
            _appId = data.appId;
            
            _timestamp = data.timestamp;
            
            _nonceStr = data.nonceStr;
            
            _signature = data.signature;
            
            config(successFn, failedFn);
          }
        }
      },
      error: function (str) {
        
        alert('getInfo()数据获取失败!');
      }
    });
  }
  
  function config(success, failed) {
    
    wx.config({
      beta: true,
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: _appId, // 必填，公众号的唯一标识
      timestamp: _timestamp, // 必填，生成签名的时间戳
      nonceStr: _nonceStr, // 必填，生成签名的随机串
      signature: _signature, // 必填，签名，见附录1
      jsApiList: [    // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        'openWXDeviceLib',
        'closeWXDeviceLib',
        'getWXDeviceInfos',
        'sendDataToWXDevice',
        'startScanWXDevice',
        'getWXDeviceTicket',
        'connectWXDevice',
        'disconnectWXDevice',
        'checkJsApi',
        'onWXDeviceBindStateChange',
        'onWXDeviceStateChange',
        'getNetworkType',
        'getLocation',
        'getNetworkType',
        'getBrandWCPayRequest',
        'onScanWXDeviceResult',
        'stopScanWXDevice'
      ]
    });
    
    wx.ready(function () {
  
      wx.invoke("closeWXDeviceLib", {}, function (res) {
  
        connectBleDevice(success, failed)
      });
      
      wx.on('onScanWXDeviceResult', function(res) {
    
        alert(JSON.stringify(res))
      })
      
      wx.error(function (res) {
    
        alert(JSON.stringify(res))
      })
    })
  }
  
  function bindBleDevice() {
  
    wx.invoke('getWXDeviceTicket', {deviceId:'gh_03cc8a28a4e1_dc5', type:1}, function(res) {
  
      if (res['err_msg'] === 'getWXDeviceTicket:ok') {
        
        alert('绑定设备成功' + JSON.stringify(res))
      }
      else {
  
        alert('绑定设备失败' + _deviceId)
      }
    })
  }
  
  function scan() {
  
    wx.invoke('startScanWXDevice', {'btVersion':'ble'}, function(res) {
    
      if (res['err_msg'] === 'startScanWXDevice:ok') {
      
        // getDeviceInfos()
      }
      else {
      
        alert('扫描失败')
      }
    })
  }
  
  function getDeviceInfos() {
  
    wx.invoke('getWXDeviceInfos', {}, function(res) {
    
      if (res['err_msg'] === 'getWXDeviceInfos:ok') {
      
        alert(JSON.stringify(res))
      }
    })
  }
  
  function connectDevice(success, failed) {
  
    wx.invoke('connectWXDevice', {'deviceId':_deviceId}, function(res) {
    
      if (res['err_msg'] === 'connectWXDevice:ok') {
      
        success && success(res)
      }
      else {
      
        failed && failed(res)
      }
    })
  }
  
  function connectBleDevice(success, failed) {
    
    wx.invoke('openWXDeviceLib', {'brandUserName':'gh_' + _appId, 'connType':'blue'}, function(res) {
      
      if (res['err_msg'] === 'openWXDeviceLib:ok') {
  
        bindBleDevice()
      }
    })
  }
  
  function sendDataToWXDevice(dataStr, success) {
  
    wx.invoke('sendDataToWXDevice', {'deviceId':_deviceId, 'base64Data':base64encode(dataStr)}, function(res) {
    
      alert(JSON.stringify(res));
  
      success && success(res)
    })
  }
  
  function pay(paySuccessFn) {
    
    var deviceid = '10001002'
  
    $.get('/WxPay/createOpGatePayOrder',{'gateId':deviceid}, function(data){
      
      if (data != null && data.code == "success")  {
  
        var appId = data.appId;
        var timeStamp = data.timeStamp;
        var nonceStr = data.nonceStr;
        var _package = data.package;
        var signType = data.signType;
        var paySign = data.paySign;
      
        wx.invoke('getBrandWCPayRequest', {
          "appId":appId,     //公众号名称，由商户传入
          "timeStamp":timeStamp,         //时间戳，自1970年以来的秒数
          "nonceStr":nonceStr, //随机串
          "package":_package,
          "signType":signType,         //微信签名方式：
          "paySign":paySign //微信签名
          }, function(res) {
  
            _paySuccess = true
  
            paySuccessFn && paySuccessFn(res)
          }
        )
      }
    })
  }
  
  function getPaySuccess() {
    
    return _paySuccess
  }
  
  this.getPaySuccess = getPaySuccess
  
  this.connect = connect
  
  this.pay = pay
}

let beaconMgr = new idrBeaconMgr()

export { beaconMgr }
