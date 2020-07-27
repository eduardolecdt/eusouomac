(function () {

  // Internal Variables

  const useragent = navigator.userAgent || navigator.vendor || window.opera
  const browserDetect = {
    messenger: /\bFB[\w_]+\/(Messenger|MESSENGER)/,
    facebook: /\bFB[\w_]+\//,
    twitter: /\bTwitter/i,
    instagram: /\bInstagram/i,
    firefox: /fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/,
    safari: /Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari/
  }

  function _isMobile () {
    return new window.RegExp(/(iPad|iPhone|Android|Mobile)/i).test(useragent)
  }

  function _isIos () {
    return new window.RegExp(/(iPad|iPhone)/i).test(useragent)
  }

  function _isAndroid () {
    return new window.RegExp(/Android/i).test(useragent)
  }

  function _isInAppBrowser () {
    if (browserDetect.messenger.test(useragent)) return true
    if (browserDetect.facebook.test(useragent)) return true
    if (browserDetect.instagram.test(useragent)) return true
    if (browserDetect.twitter.test(useragent)) return true
    return false
  }

  function redirectAndroidInAppBrowsers () {
    if (!_isMobile()) return
    if (!_isAndroid()) return
    if (!_isInAppBrowser()) return

    window.location = 'intent://eusouomac.com/ferramenta/postagem#Intent;scheme=https;package=com.android.chrome;end'
  }

  redirectAndroidInAppBrowsers()
}())


