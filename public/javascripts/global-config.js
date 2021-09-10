'use strict'
;+(function(global, undefined) {
  var configSymbol = '_dsw-config'
  var globalConfig = global[configSymbol]

  globalConfig = globalConfig || {}

  // 20210609 launch Loading
  setTimeout(function() {
    var appDom = document.querySelector('body > #app') || document.querySelector('body > .app')
    var appLoadingWrapper = document.querySelector('body > #appLoadingWrapper.app-loading-wrapper')

    if (appDom && !appLoadingWrapper) {
      var appParentDom = appDom.parentElement
      appLoadingWrapper = document.createElement('div')

      appLoadingWrapper.id = 'appLoadingWrapper'
      appLoadingWrapper.className = 'app-loading-wrapper'
      appLoadingWrapper.innerHTML = '<div class="app-loading-circle"></div><div class="app-loading-section app-loading-section-left"></div><div class="app-loading-section app-loading-section-right"></div><div class="app-loading-text">威链加载中，请耐心等待……</div>'

      appParentDom.insertBefore(appLoadingWrapper, appDom.nextSibling || appDom)
    }
  }, 0)

  /* 自定义配置 start */

  // globalConfig.BASE_URL = 'http://10.74.127.128:9999'

  /* 自定义配置 end */

  global[configSymbol] = globalConfig
})(window || this)
