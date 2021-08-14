//Tests
(function (host, name) {
	var Main = {};
	//缓存
	Main.cacheData = {};
	Main.method = null;
	Main.getMethod = function () {
		return Main.method;
	};
	Main.setMethod = function (method) {
		Main.method = method;
	};
	host[name] = Main;
})(zzjtnb, 'Tests');

(function (host, name) {
	var defConfig = {
			name: 'tip',
			tips: '测试',
		},
		//缓存测试实例
		instance,
		//获取测试类
		Tests = host.Tests;
	//定义方法
	var pros = {
		//初始化
		init: function () {
			var me = this;
			me.isPC = true;
			//缓存方法
			Tests.setMethod(me);
		},
		showmsg: function () {
			var tip = host.Tip.getInstance();
			tip.setText('自定义提示消息');
			tip.show(10, 0, this);
			// tip.hide();
		},
	};

	var infoMethod = function () {
		console.log('我是类class输出信息');
	};
	// var Main = host.Class(pros, zzjtnb.Event);
	var Main = host.Class(pros, infoMethod);
	Main.defConfig = defConfig;
	Main.getInstance = function (cfg) {
		return instance || (instance = new Main(cfg));
	};
	host[name] = Main;
})(zzjtnb, 'testUtils');

$(document).ready(function () {
	//测试公共访问对象
	var Tests = zzjtnb.Tests;
	zzjtnb.testUtils.getInstance();
	Tests.getMethod().showmsg();
});
