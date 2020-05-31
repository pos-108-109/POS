const Home = {}

Home.html = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!--
Design by TEMPLATED
http://templated.co
Released for free under the Creative Commons Attribution License

Name       : StoneWork 
Description: A two-column, fixed-width design with dark color scheme.
Version    : 1.0
Released   : 20140228

-->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>專題銷售時點系統</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<link href="http://fonts.googleapis.com/css?family=Didact+Gothic" rel="stylesheet" />
<link href="default.css" rel="stylesheet" type="text/css" media="all" />
<link href="fonts.css" rel="stylesheet" type="text/css" media="all" />

<!--[if IE 6]><link href="default_ie6.css" rel="stylesheet" type="text/css" /><![endif]-->

</head>
<body>
<div class="home" id="header-wrapper">
	<div id="header" class="container">
		<div id="logo"> </div>
	</div>
	<div id="banner" class="container">
		<div class="title">
			<h2>銷售時點系統</h2>
		</div>
		<ul class="actions">
			<li><a onclick="fe6.go('shop')" class="button">進入訂購系統</a></li>
		</ul>
	</div>
</div>
<div id="three-column" class="container">
	<div class="title">
		<h2>店家資訊</h2>
	</div>
	<div class="boxA">
		<a href="#" class="button button-alt">住址</a>
		<h1>金門縣金湖鎮漁村107號</h1>
		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d335.27623493763355!2d118.40812352821577!3d24.436997241565688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1575356947327!5m2!1szh-TW!2stw" width="300" height="200" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
	</div>
	<div class="boxB">
		<p></p>
		
	</div>
	<div class="boxC">
		<a href="#" class="button button-alt">電話</a>
		<h1>082-336643</h1>
	</div>
</div>
<div id="welcome">
	<div class="container">
		<div class="title">
			<h2>銷售時點系統目的</h2>
			
		</div>
		<h2>
			1.利用整合並實際運用至今所學的網頁相關知識，製作出銷售時點系統。
		</h2>
		<h2>
			2.製作銷售時點系統，是讓想創業但資金較少，不用花大筆錢就能享受銷售時點系統。
		</h2>
		<h2>
			3.做出一個銷售時點系統，可以走到哪都可以使用，不用固定一定要在哪台機器使用。
		</h2>
		
	</div>
</div>
<div id="copyright" class="container">
	<p>&copy; 金門大學資訊工程學系 專題報告 資工系 第二組 吳筱涵 周純宇 李奕緯 莊凱翔 </p>
</div>
<script src="fe6.js"></script>
</body>
</html>

`

Home.start = function () {
	document.querySelector('.navbar').style.visibility = "hidden"
	fe6.show(Home.html)
}
