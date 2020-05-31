/* eslint-disable no-undef */
const Pos = {}

const Pos1 = {}

const Pos2 = {}

const Pos3 = {}

const Pos4 = {}

const Pos5 = {}

const Pos6 = {}

const Pos7 = {}

var Order = {}

var poswitch = false

Pos.html = `
<div class="shop">
  <table id="orderTable">
  <thead>
    <tr>
      <td><select id="items" onchange="Pos.calcPrice()"></select></td>
      <td><select id="addons" onchange="Pos.calcPrice()"></select></td>
      <td><input id="price" type="number" value="0"></td>
      <td>
        <input id="quantity" type="number" min="1" value="1" step="1">
        <button onclick="Pos.addItem()">新增</button>
      </td>
    </tr>
    <tr><th>商品</th><th>屬性</th><th>單價</th><th>數量</th></tr>
  </thead>
  <tbody id="orderTableBody" bgcolor="#FFFFFF">
    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
  </tbody>
  </table>
</div>
<br/>
<div class="price" style="width:500px">
  <label>總價:</label>
  <input id="totalPrice" type="number" min="1" value="0" onKeyDown="return false" disabled>
  <button id="goShop" onclick="Pos.goShop()">回主選單</button>
  <button id="newOrder" onclick="Pos.start()" disabled="disabled">新增下一筆</button>
  <button id="abort" onclick="Pos.abort()">放棄訂單</button>
  <button id="submit" onclick="Pos.submit()">送出訂單</button>
</div>
</div>
`

Pos.goShop = function () {
  if (!Order.submitted) {
    if (confirm('您的訂單尚未送出，請問是否要放棄該訂單？')) {
      fe6.go('pos')
      Order = Pos.newOrder()
      poswitch = "false"
      fe6.go('shop')
      return
    } else {
      return
    }
  }
  ShopMain.start()
}

Pos.abort = function () {
  if (confirm('確定要放棄本訂單？')) {
    fe6.go('pos')
    Order = Pos.newOrder()
    poswitch = "false"
    Pos.start()
  }
}

Pos.start = function () {
  fe6.show(Pos.html)
  fe6.one('#items').innerHTML = Pos.optionList(Shop.items)
  fe6.one('#addons').innerHTML = Pos.optionList(Shop.addons)
  if(!poswitch) {
    Order = Pos.newOrder()
    poswitch = "true"
  }
  fe6.id('orderTableBody').innerHTML = Pos.list(Order.records)
  fe6.id('totalPrice').value = Order.totalPrice
  Pos.calcPrice()
}

Pos1.start = function () {
  Shop1 = Db.load('Shop1') || Shop1
  fe6.show(Pos.html)
  fe6.one('#items').innerHTML = Pos.optionList(Shop1.items)
  fe6.one('#addons').innerHTML = Pos.optionList(Shop1.addons)
  if(!poswitch) {
    Order = Pos.newOrder()
    poswitch = "true"
  }
  fe6.id('orderTableBody').innerHTML = Pos.list(Order.records)
  fe6.id('totalPrice').value = Order.totalPrice
  Pos.calcPrice()
}

Pos2.start = function () {
  Shop2 = Db.load('Shop2') || Shop2
  fe6.show(Pos.html)
  fe6.one('#items').innerHTML = Pos.optionList(Shop2.items)
  fe6.one('#addons').innerHTML = Pos.optionList(Shop2.addons)
  if(!poswitch) {
    Order = Pos.newOrder()
    poswitch = "true"
  }
  fe6.id('orderTableBody').innerHTML = Pos.list(Order.records)
  fe6.id('totalPrice').value = Order.totalPrice
  Pos.calcPrice()
}

Pos3.start = function () {
  Shop3 = Db.load('Shop3') || Shop3
  fe6.show(Pos.html)
  fe6.one('#items').innerHTML = Pos.optionList(Shop3.items)
  fe6.one('#addons').innerHTML = Pos.optionList(Shop3.addons)
  if(!poswitch) {
    Order = Pos.newOrder()
    poswitch = "true"
  }
  fe6.id('orderTableBody').innerHTML = Pos.list(Order.records)
  fe6.id('totalPrice').value = Order.totalPrice
  Pos.calcPrice()
}

Pos4.start = function () {
  Shop4 = Db.load('Shop4') || Shop4
  fe6.show(Pos.html)
  fe6.one('#items').innerHTML = Pos.optionList(Shop4.items)
  fe6.one('#addons').innerHTML = Pos.optionList(Shop4.addons)
  if(!poswitch) {
    Order = Pos.newOrder()
    poswitch = "true"
  }
  fe6.id('orderTableBody').innerHTML = Pos.list(Order.records)
  fe6.id('totalPrice').value = Order.totalPrice
  Pos.calcPrice()
}

Pos5.start = function () {
  Shop5 = Db.load('Shop5') || Shop5
  fe6.show(Pos.html)
  fe6.one('#items').innerHTML = Pos.optionList(Shop5.items)
  fe6.one('#addons').innerHTML = Pos.optionList(Shop5.addons)
  if(!poswitch) {
    Order = Pos.newOrder()
    poswitch = "true"
  }
  fe6.id('orderTableBody').innerHTML = Pos.list(Order.records)
  fe6.id('totalPrice').value = Order.totalPrice
  Pos.calcPrice()
}

Pos6.start = function () {
  Shop16 = Db.load('Shop6') || Shop6
  fe6.show(Pos.html)
  fe6.one('#items').innerHTML = Pos.optionList(Shop6.items)
  fe6.one('#addons').innerHTML = Pos.optionList(Shop6.addons)
  if(!poswitch) {
    Order = Pos.newOrder()
    poswitch = "true"
  }
  fe6.id('orderTableBody').innerHTML = Pos.list(Order.records)
  fe6.id('totalPrice').value = Order.totalPrice
  Pos.calcPrice()
}

Pos7.start = function () {
  Shop7 = Db.load('Shop7') || Shop7
  fe6.show(Pos.html)
  fe6.one('#items').innerHTML = Pos.optionList(Shop7.items)
  fe6.one('#addons').innerHTML = Pos.optionList(Shop7.addons)
  if(!poswitch) {
    Order = Pos.newOrder()
    poswitch = "true"
  }
  fe6.id('orderTableBody').innerHTML = Pos.list(Order.records)
  fe6.id('totalPrice').value = Order.totalPrice
  Pos.calcPrice()
}

Pos.newOrder = function () {
  return {totalPrice: 0, records: [], submitted: false}
}

Pos.submit = function () {
  if (Order.records.length === 0) {
    alert('您的訂單是空的，無法送出！')
    return
  }
  Order.time = Date.now()
  Order.submitted = true
  Db.insert('Order', Order)
  fe6.one('#submit').disabled = 'disabled'
  fe6.one('#submit').innerHTML = '已送出'
  fe6.one('#abort').disabled = 'disabled'
  fe6.one('#newOrder').disabled = ''
  poswitch = "false"
  Order = Pos.newOrder()
}

Pos.optionList = function (list) {
  let r = []
  for (let name in list) {
    let price = list[name]
    r.push('<option value="'+name+':'+price+'">'+name+':'+price+'</option>')
  }
  return r.join('\n')
}

Pos.list = function (records) {
  let list = []
  for (let i=0; i<records.length; i++) {
    let r = records[i]
    list.push(`<tr><td>${r.item}</td><td>${r.addon}</td><td class="number">${r.price}</td><td class="number">${r.quantity}</td></tr>`)
  }
  return list.join('\n')
}

Pos.calcPrice = function () {
  let [item, itemPrice] = fe6.one('#items').value.split(':')
  let [addon, addonPrice] = fe6.one('#addons').value.split(':')
  let price = parseInt(itemPrice) + parseInt(addonPrice)
  fe6.one('#price').value = price
  return {item, addon, price}
}

Pos.addItem = function () {
    let {item, addon, price} = Pos.calcPrice()
    let quantity = parseInt(fe6.one('#quantity').value)
    if(quantity>0)
    {
      let record = {item: item, addon:addon, price: price, quantity: quantity}
      Order.records.push(record)
      fe6.one('#orderTableBody').innerHTML = Pos.list(Order.records)
      Order.totalPrice += price * quantity
      fe6.one('#totalPrice').value = Order.totalPrice
    }
}
