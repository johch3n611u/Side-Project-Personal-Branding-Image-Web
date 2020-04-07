export class CookieUtil {

  // Expire 到期
  // setCookie 組字串設定 cookie 。
  setCookie(cookieName, cookieValue, cookieExpire) {
    let sCookie = '';
    sCookie += cookieName + '=' + cookieValue + ';';
    sCookie += 'expires=' + cookieExpire + ';';
    sCookie += '';
    document.cookie = sCookie;
  }

  // decoded 已解碼
  // const 常量不可被改變
  // decodeURIComponent 解碼 <https://www.runoob.com/jsref/jsref-decodeuricomponent.html>
  // substring 提取指定內容之間的字符串 <https://www.runoob.com/jsref/jsref-substring.html>
  // getCookie 根據給定 cname 回傳 cookie 內容。
  getCookie(cname: string): string {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

}
