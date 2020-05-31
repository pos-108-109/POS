const Lib = {}

Lib.dateToString = function (date) {
  return date.getFullYear() + '/' + (date.getMonth() + 1).toString().padStart(2, '0') + '/' + date.getDate().toString().padStart(2, '0')
}

Lib.timeToString = function (date) {
  return date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0') + ':' + date.getSeconds().toString().padStart(2, '0')
}

Lib.dayRange = function (date) {
  const from = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  const to = new Date(from)
  to.setDate(from.getDate() + 1)
  return { from: from, to: to }
}

Lib.monthRange = function (date) {
  const from = new Date(date.getFullYear(), date.getMonth(),date.getDate())
  const to = new Date(from)
  to.setDate(from.getMonth() + 1)
  return { from: from, to: to }
}

Lib.uuid = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0 // 使用 | 會轉成整數
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
