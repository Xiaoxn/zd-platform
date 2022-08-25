/**
 *
 * @param {随机编码的前缀} e
 * @returns
 */
export function randomCode(e = '') {
  const crypto = window.crypto || window.msCrypto
  var array = new Uint32Array(1)
  return e + crypto.getRandomValues(array)
}
