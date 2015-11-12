/* global define, window */
define(['mock'], function( /*Mock*/ ) {

	// https://github.com/KyleAMathews/isRetina/blob/master/index.js
	function isRetina() {
		var mediaQuery;
		if (typeof window !== "undefined" && window !== null) {
			mediaQuery = "(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)";
			if (window.devicePixelRatio > 1.25) {
				return true;
			}
			if (window.matchMedia && window.matchMedia(mediaQuery).matches) {
				return true;
			}
		}
		return false;
	}

	var RETINA = isRetina();

	return {
		line: [{
			name: '基础折线图',
			resp1: 'index',
			beizhu : "全部默认配置",
			changjing : "图表使用场景的说明文案图表使用场景的说明文案",
			prev : "http://thx.github.io/chartx/assets/chart/line/index.png",
			//prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		},{
			name: '基础折线图',
			resp: 'index',
			beizhu : "全部默认配置",
			changjing : "图表使用场景的说明文案图表使用场景的说明文案",
			prev : "http://thx.github.io/chartx/assets/chart/line/index.png",
			//prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		},{
			name: '基础折线图',
			resp: 'index',
			beizhu : "全部默认配置",
			changjing : "图表使用场景的说明文案图表使用场景的说明文案",
			prev : "http://thx.github.io/chartx/assets/chart/line/index.png",
			//prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		},{
			name: '基础折线图',
			resp: 'index',
			beizhu : "全部默认配置",
			changjing : "图表使用场景的说明文案图表使用场景的说明文案",
			prev : "http://thx.github.io/chartx/assets/chart/line/index.png",
			//prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		},{
			name: '基础折线图',
			resp: 'index',
			beizhu : "全部默认配置",
			changjing : "图表使用场景的说明文案图表使用场景的说明文案",
			prev : "http://thx.github.io/chartx/assets/chart/line/index.png",
			//prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		},{
			name: '基础折线图',
			resp: 'index',
			beizhu : "全部默认配置",
			changjing : "图表使用场景的说明文案图表使用场景的说明文案",
			prev : "http://thx.github.io/chartx/assets/chart/line/index.png",
			//prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		}],
		all : [
            {
            	name : '折线图',
            	resp : 'line',
            	prev : RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
            },
            {
            	name : '柱状图',
            	resp : 'bar',
            	prev : RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
            },
            {
            	name : '地图',
            	resp : 'map',
            	prev : RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
            },
            {
            	name : '饼图',
            	resp : 'pie',
            	prev : RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
            },
            {
            	name : '雷达图',
            	resp : 'radar',
            	prev : RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
            },
            {
            	name : '散点图',
            	resp : 'scat',
            	prev : RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
            },
            {
            	name : '拓扑图',
            	resp : 'topo',
            	prev : RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
            },
            {
            	name : '进度图表',
            	resp : 'progress',
            	prev : RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
            },
            {
            	name : '韦恩图',
            	resp : 'venn',
            	prev : RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
            },
            {
            	name : '力导向布局图',
            	resp : 'force',
            	prev : RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
            },
            {
            	name : '混合图表',
            	resp : 'hybird',
            	prev : RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
            }
		]
	}
})
