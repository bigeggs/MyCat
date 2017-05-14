export function urlParse() {
  let pageUrl = window.location.search
  let obj = {}
  let reg = /[?&][^?&]+=[^?&]+/g
  let arr = pageUrl.match(reg)
  if (!arr) {
    return obj
  }
  arr.forEach(function (item, index) {
    let temArr = item.split('=')
    let key = temArr[0].substr(1)
    let val = temArr[1]
    obj[key] = val
  })
  return obj
}
