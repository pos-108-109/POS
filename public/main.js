fe6.router({
  '': () => fe6.go('home'),
  home: () => Home.start(),
  signup: () => Signup.start(),
  login: () => Login.start(),
  logout: () => { Logout.start(); Logout.submit() },
  myarea: () => MyArea.start(),
  shop: () => ShopMain.start(),
  pos: () => Pos.start(),
  pos1: () => Pos1.start(),
  pos2: () => Pos2.start(),
  pos3: () => Pos3.start(),
  pos4: () => Pos4.start(),
  pos5: () => Pos5.start(),
  pos6: () => Pos6.start(),
  pos7: () => Pos7.start(),
  todayReport: () => ShopMain.todayReport(),
  report: () => Report.start(),
  settingselect: () => Setting.select(),
  settingtype1: () => Setting.start(),
  settingtype2: () => Setting1.start(),
  settingtype3: () => Setting2.start(),
  settingtype4: () => Setting3.start(),
  settingtype5: () => Setting4.start(),
  settingtype6: () => Setting5.start(),
  settingtype7: () => Setting6.start(),
  settingtype8: () => Setting7.start(),
})