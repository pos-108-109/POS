//商品設定
const Setting = {}
const Setting1 = {}
const Setting2 = {}
const Setting3 = {}
const Setting4 = {}
const Setting5 = {}
const Setting6 = {}
const Setting7 = {}
Setting.selecthtml = `
<div class="shop">
  <button class="big" onclick="fe6.go('settingtype1')">漢堡</button><br/><br/>
  <button class="big" onclick="fe6.go('settingtype2')">蛋餅</button><br/><br/>
  <button class="big" onclick="fe6.go('settingtype3')">總匯三明治</button><br/><br/>
  <button class="big" onclick="fe6.go('settingtype4')">吐司</button><br/><br/>
  <button class="big" onclick="fe6.go('settingtype5')">抓餅</button><br/><br/>
  <button class="big" onclick="fe6.go('settingtype6')">中式</button><br/><br/>
  <button class="big" onclick="fe6.go('settingtype7')">小品</button><br/><br/>
  <button class="big" onclick="fe6.go('settingtype8')">飲品</button><br/><br/>
</div>
`

Setting.html = `
<div class="shop">
  <table>
    <thead><tr><th>欄位</th><th>內容</th></tr></thead>
    <tbody>
      <tr><td>商店名稱</td><td><input id="shopName" type="text" value=""/></td></tr>
      <tr><td>地址</td><td><input id="shopAddress" type="text" value=""/></td></tr>
      <tr><td>電話</td><td><input id="shopTel" type="text" value=""/></td></tr>
      <tr><td>產品清單</td><td><textarea id="items"></textarea></td></tr>
      <tr><td>附加選項</td><td><textarea id="addons"></textarea></td></tr>
      <tr><td>交貨選項</td>
        <td>
          <input id="comeToShop" type="checkbox">來店自取 / 
          <input id="mailToYou"  type="checkbox">宅配寄送 / 
          <input id="goForYou"   type="checkbox">派人到府
        </td>
      </tr>
    </tbody>
  </table>
  <br/>
  <button onclick="Setting.save()">儲存設定</button>
  <button onclick="ShopMain.start()">回主選單</button>
</div>
`
Setting1.html = `
<div class="shop">
  <table>
    <thead><tr><th>欄位</th><th>內容</th></tr></thead>
    <tbody>
      <tr><td>商店名稱</td><td><input id="shopName" type="text" value=""/></td></tr>
      <tr><td>地址</td><td><input id="shopAddress" type="text" value=""/></td></tr>
      <tr><td>電話</td><td><input id="shopTel" type="text" value=""/></td></tr>
      <tr><td>產品清單</td><td><textarea id="items"></textarea></td></tr>
      <tr><td>附加選項</td><td><textarea id="addons"></textarea></td></tr>
      <tr><td>交貨選項</td>
        <td>
          <input id="comeToShop" type="checkbox">來店自取 / 
          <input id="mailToYou"  type="checkbox">宅配寄送 / 
          <input id="goForYou"   type="checkbox">派人到府
        </td>
      </tr>
    </tbody>
  </table>
  <br/>
  <button onclick="Setting1.save()">儲存設定</button>
  <button onclick="ShopMain.start()">回主選單</button>
</div>
`
Setting2.html = `
<div class="shop">
  <table>
    <thead><tr><th>欄位</th><th>內容</th></tr></thead>
    <tbody>
      <tr><td>商店名稱</td><td><input id="shopName" type="text" value=""/></td></tr>
      <tr><td>地址</td><td><input id="shopAddress" type="text" value=""/></td></tr>
      <tr><td>電話</td><td><input id="shopTel" type="text" value=""/></td></tr>
      <tr><td>產品清單</td><td><textarea id="items"></textarea></td></tr>
      <tr><td>附加選項</td><td><textarea id="addons"></textarea></td></tr>
      <tr><td>交貨選項</td>
        <td>
          <input id="comeToShop" type="checkbox">來店自取 / 
          <input id="mailToYou"  type="checkbox">宅配寄送 / 
          <input id="goForYou"   type="checkbox">派人到府
        </td>
      </tr>
    </tbody>
  </table>
  <br/>
  <button onclick="Setting2.save()">儲存設定</button>
  <button onclick="ShopMain.start()">回主選單</button>
</div>
`
Setting3.html = `
<div class="shop">
  <table>
    <thead><tr><th>欄位</th><th>內容</th></tr></thead>
    <tbody>
      <tr><td>商店名稱</td><td><input id="shopName" type="text" value=""/></td></tr>
      <tr><td>地址</td><td><input id="shopAddress" type="text" value=""/></td></tr>
      <tr><td>電話</td><td><input id="shopTel" type="text" value=""/></td></tr>
      <tr><td>產品清單</td><td><textarea id="items"></textarea></td></tr>
      <tr><td>附加選項</td><td><textarea id="addons"></textarea></td></tr>
      <tr><td>交貨選項</td>
        <td>
          <input id="comeToShop" type="checkbox">來店自取 / 
          <input id="mailToYou"  type="checkbox">宅配寄送 / 
          <input id="goForYou"   type="checkbox">派人到府
        </td>
      </tr>
    </tbody>
  </table>
  <br/>
  <button onclick="Setting3.save()">儲存設定</button>
  <button onclick="ShopMain.start()">回主選單</button>
</div>
`
Setting4.html = `
<div class="shop">
  <table>
    <thead><tr><th>欄位</th><th>內容</th></tr></thead>
    <tbody>
      <tr><td>商店名稱</td><td><input id="shopName" type="text" value=""/></td></tr>
      <tr><td>地址</td><td><input id="shopAddress" type="text" value=""/></td></tr>
      <tr><td>電話</td><td><input id="shopTel" type="text" value=""/></td></tr>
      <tr><td>產品清單</td><td><textarea id="items"></textarea></td></tr>
      <tr><td>附加選項</td><td><textarea id="addons"></textarea></td></tr>
      <tr><td>交貨選項</td>
        <td>
          <input id="comeToShop" type="checkbox">來店自取 / 
          <input id="mailToYou"  type="checkbox">宅配寄送 / 
          <input id="goForYou"   type="checkbox">派人到府
        </td>
      </tr>
    </tbody>
  </table>
  <br/>
  <button onclick="Setting4.save()">儲存設定</button>
  <button onclick="ShopMain.start()">回主選單</button>
</div>
`
Setting5.html = `
<div class="shop">
  <table>
    <thead><tr><th>欄位</th><th>內容</th></tr></thead>
    <tbody>
      <tr><td>商店名稱</td><td><input id="shopName" type="text" value=""/></td></tr>
      <tr><td>地址</td><td><input id="shopAddress" type="text" value=""/></td></tr>
      <tr><td>電話</td><td><input id="shopTel" type="text" value=""/></td></tr>
      <tr><td>產品清單</td><td><textarea id="items"></textarea></td></tr>
      <tr><td>附加選項</td><td><textarea id="addons"></textarea></td></tr>
      <tr><td>交貨選項</td>
        <td>
          <input id="comeToShop" type="checkbox">來店自取 / 
          <input id="mailToYou"  type="checkbox">宅配寄送 / 
          <input id="goForYou"   type="checkbox">派人到府
        </td>
      </tr>
    </tbody>
  </table>
  <br/>
  <button onclick="Setting5.save()">儲存設定</button>
  <button onclick="ShopMain.start()">回主選單</button>
</div>
`
Setting6.html = `
<div class="shop">
  <table>
    <thead><tr><th>欄位</th><th>內容</th></tr></thead>
    <tbody>
      <tr><td>商店名稱</td><td><input id="shopName" type="text" value=""/></td></tr>
      <tr><td>地址</td><td><input id="shopAddress" type="text" value=""/></td></tr>
      <tr><td>電話</td><td><input id="shopTel" type="text" value=""/></td></tr>
      <tr><td>產品清單</td><td><textarea id="items"></textarea></td></tr>
      <tr><td>附加選項</td><td><textarea id="addons"></textarea></td></tr>
      <tr><td>交貨選項</td>
        <td>
          <input id="comeToShop" type="checkbox">來店自取 / 
          <input id="mailToYou"  type="checkbox">宅配寄送 / 
          <input id="goForYou"   type="checkbox">派人到府
        </td>
      </tr>
    </tbody>
  </table>
  <br/>
  <button onclick="Setting6.save()">儲存設定</button>
  <button onclick="ShopMain.start()">回主選單</button>
</div>
`
Setting7.html = `
<div class="shop">
  <table>
    <thead><tr><th>欄位</th><th>內容</th></tr></thead>
    <tbody>
      <tr><td>商店名稱</td><td><input id="shopName" type="text" value=""/></td></tr>
      <tr><td>地址</td><td><input id="shopAddress" type="text" value=""/></td></tr>
      <tr><td>電話</td><td><input id="shopTel" type="text" value=""/></td></tr>
      <tr><td>產品清單</td><td><textarea id="items"></textarea></td></tr>
      <tr><td>附加選項</td><td><textarea id="addons"></textarea></td></tr>
      <tr><td>交貨選項</td>
        <td>
          <input id="comeToShop" type="checkbox">來店自取 / 
          <input id="mailToYou"  type="checkbox">宅配寄送 / 
          <input id="goForYou"   type="checkbox">派人到府
        </td>
      </tr>
    </tbody>
  </table>
  <br/>
  <button onclick="Setting7.save()">儲存設定</button>
  <button onclick="ShopMain.start()">回主選單</button>
</div>
`
Setting.select = function(){
  fe6.show(Setting.selecthtml)
}

Setting.start = function () {
  fe6.show(Setting.html)
  fe6.one('#shopName').value = Shop.name
  fe6.one('#shopAddress').value = Shop.address
  fe6.one('#shopTel').value = Shop.tel
  fe6.one('#items').value = JSON.stringify(Shop.items, null, 2)
  fe6.one('#addons').value = JSON.stringify(Shop.addons, null, 2)
  fe6.one('#comeToShop').checked = Shop.isComeToShop
  fe6.one('#mailToYou').checked = Shop.isMailToYou
  fe6.one('#goForYou').checked = Shop.isGoForYou
}

Setting1.start = function () {
  fe6.show(Setting1.html)
  fe6.one('#shopName').value = Shop1.name
  fe6.one('#shopAddress').value = Shop1.address
  fe6.one('#shopTel').value = Shop1.tel
  fe6.one('#items').value = JSON.stringify(Shop1.items, null, 2)
  fe6.one('#addons').value = JSON.stringify(Shop1.addons, null, 2)
  fe6.one('#comeToShop').checked = Shop1.isComeToShop
  fe6.one('#mailToYou').checked = Shop1.isMailToYou
  fe6.one('#goForYou').checked = Shop1.isGoForYou
}

Setting2.start = function () {
  fe6.show(Setting2.html)
  fe6.one('#shopName').value = Shop2.name
  fe6.one('#shopAddress').value = Shop2.address
  fe6.one('#shopTel').value = Shop2.tel
  fe6.one('#items').value = JSON.stringify(Shop2.items, null, 2)
  fe6.one('#addons').value = JSON.stringify(Shop2.addons, null, 2)
  fe6.one('#comeToShop').checked = Shop2.isComeToShop
  fe6.one('#mailToYou').checked = Shop2.isMailToYou
  fe6.one('#goForYou').checked = Shop2.isGoForYou
}

Setting3.start = function () {
  fe6.show(Setting3.html)
  fe6.one('#shopName').value = Shop3.name
  fe6.one('#shopAddress').value = Shop3.address
  fe6.one('#shopTel').value = Shop3.tel
  fe6.one('#items').value = JSON.stringify(Shop3.items, null, 2)
  fe6.one('#addons').value = JSON.stringify(Shop3.addons, null, 2)
  fe6.one('#comeToShop').checked = Shop3.isComeToShop
  fe6.one('#mailToYou').checked = Shop3.isMailToYou
  fe6.one('#goForYou').checked = Shop3.isGoForYou
}

Setting4.start = function () {
  fe6.show(Setting4.html)
  fe6.one('#shopName').value = Shop4.name
  fe6.one('#shopAddress').value = Shop4.address
  fe6.one('#shopTel').value = Shop4.tel
  fe6.one('#items').value = JSON.stringify(Shop4.items, null, 2)
  fe6.one('#addons').value = JSON.stringify(Shop4.addons, null, 2)
  fe6.one('#comeToShop').checked = Shop4.isComeToShop
  fe6.one('#mailToYou').checked = Shop4.isMailToYou
  fe6.one('#goForYou').checked = Shop4.isGoForYou
}

Setting5.start = function () {
  fe6.show(Setting5.html)
  fe6.one('#shopName').value = Shop5.name
  fe6.one('#shopAddress').value = Shop5.address
  fe6.one('#shopTel').value = Shop5.tel
  fe6.one('#items').value = JSON.stringify(Shop5.items, null, 2)
  fe6.one('#addons').value = JSON.stringify(Shop5.addons, null, 2)
  fe6.one('#comeToShop').checked = Shop5.isComeToShop
  fe6.one('#mailToYou').checked = Shop5.isMailToYou
  fe6.one('#goForYou').checked = Shop5.isGoForYou
}

Setting6.start = function () {
  fe6.show(Setting6.html)
  fe6.one('#shopName').value = Shop6.name
  fe6.one('#shopAddress').value = Shop6.address
  fe6.one('#shopTel').value = Shop6.tel
  fe6.one('#items').value = JSON.stringify(Shop6.items, null, 2)
  fe6.one('#addons').value = JSON.stringify(Shop6.addons, null, 2)
  fe6.one('#comeToShop').checked = Shop6.isComeToShop
  fe6.one('#mailToYou').checked = Shop6.isMailToYou
  fe6.one('#goForYou').checked = Shop6.isGoForYou
}

Setting7.start = function () {
  fe6.show(Setting7.html)
  fe6.one('#shopName').value = Shop7.name
  fe6.one('#shopAddress').value = Shop7.address
  fe6.one('#shopTel').value = Shop7.tel
  fe6.one('#items').value = JSON.stringify(Shop7.items, null, 2)
  fe6.one('#addons').value = JSON.stringify(Shop7.addons, null, 2)
  fe6.one('#comeToShop').checked = Shop7.isComeToShop
  fe6.one('#mailToYou').checked = Shop7.isMailToYou
  fe6.one('#goForYou').checked = Shop7.isGoForYou
}

Setting.save = function () {
  try {
    Shop.name = fe6.one('#shopName').value
    Shop.address = fe6.one('#shopAddress').value
    Shop.tel = fe6.one('#shopTel').value
    Shop.items = JSON.parse(fe6.one('#items').value)
    Shop.addons = JSON.parse(fe6.one('#addons').value)
    Shop.isComeToShop = fe6.one('#comeToShop').checked
    Shop.isMailToYou = fe6.one('#mailToYou').checked
    Shop.isGoForYou = fe6.one('#goForYou').checked
  } catch (error) {
    alert('儲存失敗，請檢查格式是否有錯！\n', error)
    return
  }
  Db.save('Shop', Shop)
  fe6.one('#title').innerHTML = Shop.name
  alert('儲存成功！')
}

Setting1.save = function () {
  try {
    Shop1.name = fe6.one('#shopName').value
    Shop1.address = fe6.one('#shopAddress').value
    Shop1.tel = fe6.one('#shopTel').value
    Shop1.items = JSON.parse(fe6.one('#items').value)
    Shop1.addons = JSON.parse(fe6.one('#addons').value)
    Shop1.isComeToShop = fe6.one('#comeToShop').checked
    Shop1.isMailToYou = fe6.one('#mailToYou').checked
    Shop1.isGoForYou = fe6.one('#goForYou').checked
  } catch (error) {
    alert('儲存失敗，請檢查格式是否有錯！\n', error)
    return
  }
  Db.save('Shop1', Shop1)
  fe6.one('#title').innerHTML = Shop1.name
  alert('儲存成功！')
}

Setting2.save = function () {
  try {
    Shop2.name = fe6.one('#shopName').value
    Shop2.address = fe6.one('#shopAddress').value
    Shop2.tel = fe6.one('#shopTel').value
    Shop2.items = JSON.parse(fe6.one('#items').value)
    Shop2.addons = JSON.parse(fe6.one('#addons').value)
    Shop2.isComeToShop = fe6.one('#comeToShop').checked
    Shop2.isMailToYou = fe6.one('#mailToYou').checked
    Shop2.isGoForYou = fe6.one('#goForYou').checked
  } catch (error) {
    alert('儲存失敗，請檢查格式是否有錯！\n', error)
    return
  }
  Db.save('Shop2', Shop2)
  fe6.one('#title').innerHTML = Shop2.name
  alert('儲存成功！')
}

Setting3.save = function () {
  try {
    Shop3.name = fe6.one('#shopName').value
    Shop3.address = fe6.one('#shopAddress').value
    Shop3.tel = fe6.one('#shopTel').value
    Shop3.items = JSON.parse(fe6.one('#items').value)
    Shop3.addons = JSON.parse(fe6.one('#addons').value)
    Shop3.isComeToShop = fe6.one('#comeToShop').checked
    Shop3.isMailToYou = fe6.one('#mailToYou').checked
    Shop3.isGoForYou = fe6.one('#goForYou').checked
  } catch (error) {
    alert('儲存失敗，請檢查格式是否有錯！\n', error)
    return
  }
  Db.save('Shop3', Shop3)
  fe6.one('#title').innerHTML = Shop3.name
  alert('儲存成功！')
}

Setting4.save = function () {
  try {
    Shop4.name = fe6.one('#shopName').value
    Shop4.address = fe6.one('#shopAddress').value
    Shop4.tel = fe6.one('#shopTel').value
    Shop4.items = JSON.parse(fe6.one('#items').value)
    Shop4.addons = JSON.parse(fe6.one('#addons').value)
    Shop4.isComeToShop = fe6.one('#comeToShop').checked
    Shop4.isMailToYou = fe6.one('#mailToYou').checked
    Shop4.isGoForYou = fe6.one('#goForYou').checked
  } catch (error) {
    alert('儲存失敗，請檢查格式是否有錯！\n', error)
    return
  }
  Db.save('Shop4', Shop4)
  fe6.one('#title').innerHTML = Shop4.name
  alert('儲存成功！')
}

Setting5.save = function () {
  try {
    Shop5.name = fe6.one('#shopName').value
    Shop5.address = fe6.one('#shopAddress').value
    Shop5.tel = fe6.one('#shopTel').value
    Shop5.items = JSON.parse(fe6.one('#items').value)
    Shop5.addons = JSON.parse(fe6.one('#addons').value)
    Shop5.isComeToShop = fe6.one('#comeToShop').checked
    Shop5.isMailToYou = fe6.one('#mailToYou').checked
    Shop5.isGoForYou = fe6.one('#goForYou').checked
  } catch (error) {
    alert('儲存失敗，請檢查格式是否有錯！\n', error)
    return
  }
  Db.save('Shop5', Shop5)
  fe6.one('#title').innerHTML = Shop5.name
  alert('儲存成功！')
}

Setting6.save = function () {
  try {
    Shop6.name = fe6.one('#shopName').value
    Shop6.address = fe6.one('#shopAddress').value
    Shop6.tel = fe6.one('#shopTel').value
    Shop6.items = JSON.parse(fe6.one('#items').value)
    Shop6.addons = JSON.parse(fe6.one('#addons').value)
    Shop6.isComeToShop = fe6.one('#comeToShop').checked
    Shop6.isMailToYou = fe6.one('#mailToYou').checked
    Shop6.isGoForYou = fe6.one('#goForYou').checked
  } catch (error) {
    alert('儲存失敗，請檢查格式是否有錯！\n', error)
    return
  }
  Db.save('Shop6', Shop6)
  fe6.one('#title').innerHTML = Shop6.name
  alert('儲存成功！')
}

Setting7.save = function () {
  try {
    Shop7.name = fe6.one('#shopName').value
    Shop7.address = fe6.one('#shopAddress').value
    Shop7.tel = fe6.one('#shopTel').value
    Shop7.items = JSON.parse(fe6.one('#items').value)
    Shop7.addons = JSON.parse(fe6.one('#addons').value)
    Shop7.isComeToShop = fe6.one('#comeToShop').checked
    Shop7.isMailToYou = fe6.one('#mailToYou').checked
    Shop7.isGoForYou = fe6.one('#goForYou').checked
  } catch (error) {
    alert('儲存失敗，請檢查格式是否有錯！\n', error)
    return
  }
  Db.save('Shop7', Shop7)
  fe6.one('#title').innerHTML = Shop7.name
  alert('儲存成功！')
}