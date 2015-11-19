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
			type: 'line',
			resp: 'index',
			beizhu: "全部默认配置",
			changjing: "图表使用场景的说明文案图表使用场景的说明文案",
			prevImgType: "png",
			//prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		}, {
			name: '添加删除折线',
			type: 'line',
			resp: 'add_remove_line',
			beizhu: "添加被删除的折线，注意要带上删除时候所在的索引，line.add(id , i);",
			prevImgType: "gif"
		}, {
			name: '实时数据更新',
			type: 'line',
			resp: 'reset-data',
			beizhu: "",
			prevImgType: "gif"
		}, {
			name: '附带瞄准器的折线图',
			type: 'line',
			resp: 'anchor',
			beizhu: "",
			prevImgType: "gif"
		}, {
			name: '双Y轴折线图',
			type: 'line',
			resp: 'biaxial',
			beizhu: "",
			prevImgType: "png"
		}, {
			name: '双Y轴，支持排序',
			type: 'line',
			resp: 'biaxial_sortyaxis',
			beizhu: "",
			prevImgType: "gif"
		}, {
			name: '拐角才出现节点',
			type: 'line',
			resp: 'corner',
			beizhu: "",
			prevImgType: "png"
		}, {
			name: '自定义x,y轴数据',
			type: 'line',
			resp: 'custom_xyAxis_datasection',
			beizhu: "",
			prevImgType: "png"
		}, {
			name: '带渐变填充色',
			type: 'line',
			resp: 'fill_gradient',
			beizhu: "",
			prevImgType: "png"
		}, {
			name: '带均线的折线图',
			type: 'line',
			resp: 'markline',
			beizhu: "",
			prevImgType: "png"
		}, {
			name: '带标注点的折线图',
			type: 'line',
			resp: 'markpoint',
			beizhu: "",
			prevImgType: "png"
		}, {
			name: 'x轴文案旋转',
			type: 'line',
			resp: 'xAxis_rotate',
			beizhu: "",
			prevImgType: "png"
		}],
		bar: [{
			name: '基础柱状图',
			type: 'bar',
			resp: 'index',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '自定义xy轴数据',
			type: 'bar',
			resp: 'custom_xyAxis_datasection',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '柱形图上面带描述',
			type: 'bar',
			resp: 'graphs_info',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '横向柱形图上面带描述',
			type: 'bar',
			resp: 'horizontal_graphs_info',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '倒序y轴',
			type: 'bar',
			resp: 'index_sortyaxis',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '横向柱状图',
			type: 'bar',
			resp: 'horizontal',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '带均线的柱状图',
			type: 'bar',
			resp: 'markline',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '带标注点的柱状图',
			type: 'bar',
			resp: 'markpoint',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '百分比柱状图',
			type: 'bar',
			resp: 'proportion',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '横向百分比柱状图',
			type: 'bar',
			resp: 'proportion_h',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '精简柱状图',
			type: 'bar',
			resp: 'single',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '堆叠柱状图',
			type: 'bar',
			resp: 'superposition',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '横向堆叠柱状图',
			type: 'bar',
			resp: 'superposition_h',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '柱状图x轴文案旋转',
			type: 'bar',
			resp: 'xAxis_rotate',
			beizhu: "",
			prevImgType: "png"
		}],
		all: [{
			name: '折线图',
			resp: 'line',
			prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		}, {
			name: '柱状图',
			resp: 'bar',
			prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		}, {
			name: '地图',
			resp: 'map',
			prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		}, {
			name: '饼图',
			resp: 'pie',
			prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		}, {
			name: '雷达图',
			resp: 'radar',
			prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		}, {
			name: '散点图',
			resp: 'scat',
			prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		}, {
			name: '拓扑图',
			resp: 'topo',
			prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		}, {
			name: '进度图表',
			resp: 'progress',
			prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		}, {
			name: '韦恩图',
			resp: 'venn',
			prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		}, {
			name: '力导向布局图',
			resp: 'force',
			prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		}, {
			name: '混合图表',
			resp: 'hybird',
			prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		}]
	}
})