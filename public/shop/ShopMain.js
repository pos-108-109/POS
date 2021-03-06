const ShopMain = {}

ShopMain.html = `
<div class="shop">
  <button class="big" onclick="fe6.go('pos')">新增訂單</button><br/><br/>
  <button class="big" onclick="fe6.go('todayReport')">本日報表</button><br/><br/>
  <button class="big" onclick="fe6.go('report')">本月報表</button><br/><br/>
  <button class="big" onclick="fe6.go('settingselect')">商店設定</button><br/><br/>
</div>
`

ShopMain.leftMenuHtml = `
<a href="#about">關於 LaPos</a>
<a href="#announce">商店公告</a>
<a href="#map">商店地圖</a>
<a href="#message">發訊息給商店</a>
<a href="#help">使用說明</a>
<a href="#license">軟體授權</a>
`

ShopMain.start = function () {
  document.querySelector('.navbar').style.visibility = "visible"
  Shop = Db.load('Shop') || Shop
  fe6.go('shop')
  fe6.show(ShopMain.html)
  fe6.title(Shop.name)
  fe6.html('#leftMenu', ShopMain.leftMenuHtml)
}

ShopMain.todayReport = function () {
  Report.start({range: Lib.dayRange(new Date())})
}