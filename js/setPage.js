jQuery(document).ready(function($) { //$变量被占用

	//检测窗口宽度
	$(window).resize(function() {
		if ($(window).width() <= 360) {
			$("#header h1").hide();
			$("#header h2").hide();
		} else {
			$("#header h1").show();
			$("#header h2").show();
		}
		if ($(window).width() <= 263) {
			$("#header").css("background-image", "none");
		} else {
			$("#header").css("background-image", "url(/local--files/component:theme/logo.png)");
		}
	});



	//将侧边栏转移到顶部
	var topBar = $(".top-bar ul")[0];
	var mobileTopBar = $(".mobile-top-bar ul")[0];
	for (let i = 0; i < 3; i++) {
		$(".top-bar ul li")[0].remove();
		$(".mobile-top-bar ul li")[0].remove();
	}
	

	$.ajax({
		url: "http://www.nihonium.site/WD%20Editor/xml/menu.xml",
		dataType: "xml",
		type: "post",
		timeout: 1000,
		cache: false,
		success: function(xml) {
			alert("succceed!");
		}
	});

	{
		let li = document.createElement("li");
		let menu =
			'<strong><a href="javascript:;">网站链接</a></strong>\
		<ul>\
		<li><a href="/start">沙盒主页</a></li>\
		<li><a href="/index">沙盒目录</a></li>\
		<li><a href="http://scp-wiki-cn.wikidot.com">SCP-CN维基</a></li>\
		<li><a href="http://scp-wiki-cn.wikidot.com/how-to-write-an-scp">如何撰写一篇SCP文档</a></li>\
		<li><a href="http://scp-wiki-cn.wikidot.com/guide-hub">指导中心</a></li>\
		<li><a href="http://scp-wiki-cn.wikidot.com/wiki-syntax">维基语法</a></li>\
		<li><a href="http://scp-wiki-cn.wikidot.com/syntax-quick-reference">语法速查</a></li>\
		<li><a href="http://scp-wiki-cn.wikidot.com/forum/c-882988/">讨论区：点子及头脑风暴</a></li>\
		<li><a href="http://scp-wiki-cn.wikidot.com/forum/c-882987/">讨论区：草稿与批判</a></li>\
		</ul>';

		let mobileLi = document.createElement("li");
		let mobileMenu =
			'<a href="javascript:;">网站链接</a>\
		<ul>\
		<li><a href="/start">沙盒主页</a></li>\
		<li><a href="/index">沙盒目录</a></li>\
		<li><a href="http://scp-wiki-cn.wikidot.com">SCP-CN维基</a></li>\
		<li><a href="http://scp-wiki-cn.wikidot.com/how-to-write-an-scp">如何撰写一篇SCP文档</a></li>\
		<li><a href="http://scp-wiki-cn.wikidot.com/guide-hub">指导中心</a></li>\
		<li><a href="http://scp-wiki-cn.wikidot.com/wiki-syntax">维基语法</a></li>\
		<li><a href="http://scp-wiki-cn.wikidot.com/syntax-quick-reference">语法速查</a></li>\
		<li><a href="http://scp-wiki-cn.wikidot.com/forum/c-882988/">讨论区：点子及头脑风暴</a></li>\
		<li><a href="http://scp-wiki-cn.wikidot.com/forum/c-882987/">讨论区：草稿与批判</a></li>\
		</ul>';

		li.innerHTML = menu;
		mobileLi.innerHTML = mobileMenu;
		topBar.prepend(li);
		mobileTopBar.prepend(mobileLi);
	}


	{
		let li = document.createElement("li");
		let menu =
			'<strong><a href="javascript:;">管理专用</a></strong>\
		<ul>\
		<li><a href="/_admin">控制台</a></li>\
		<li><a href="/system:list-all-categories">所有分类</a></li>\
		<li><a href="/system:recent-changes">最近更新</a></li>\
		<li><a href="/nav:side">侧栏</a></li>\
		<li><a href="/nav:top">顶栏</a></li>\
		<li><a href="/component:theme">版式</a></li>\
		</ul>';

		let mobileLi = document.createElement("li");
		let mobileMenu =
			'<a href="javascript:;">管理专用</a>\
		<ul>\
		<li><a href="/_admin">控制台</a></li>\
		<li><a href="/system:list-all-categories">所有分类</a></li>\
		<li><a href="/system:recent-changes">最近更新</a></li>\
		<li><a href="/nav:side">侧栏</a></li>\
		<li><a href="/nav:top">顶栏</a></li>\
		<li><a href="/component:theme">版式</a></li>\
		</ul>';

		li.innerHTML = menu;
		mobileLi.innerHTML = mobileMenu;
		topBar.append(li);
		mobileTopBar.append(mobileLi);
	}

	$("#side-bar").remove();
	$("div.open-menu").remove();


	//插入编辑区

	$("#content-wrap").prepend('<div id="edit-area" contenteditable="true">sfdgsg</div>');



});
