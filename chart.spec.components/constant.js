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
			prevImgType: "png"
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
			prevImgType: "png"
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
		}, {
			name: '双轴，多纬度，不同排序',
			type: 'line',
			resp: 'biaxial_morefield_sort',
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
		map : [
        {
			name: '中国地图',
			type: 'map',
			resp: 'index',
			beizhu: "",
			prevImgType: "png"
		},
		{
			name: '中国地图- 省市地图联动',
			type: 'map',
			resp: 'provinces_linkage',
			beizhu: "",
			prevImgType: "gif"
		},
		{
			name: '世界地图',
			type: 'map',
			resp: 'world',
			beizhu: "",
			prevImgType: "png"
		},
		{
			name: '中国地图-标注点',
			type: 'map',
			resp: 'markpoint',
			beizhu: "",
			prevImgType: "png"
		}
		],
        //////////////////////////////////////////////////////////////////////////////////////////////////////
		pie : [
        {
			name: '基础饼图',
			type: 'pie',
			resp: 'index',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '饼图，无周边tips',
			type: 'pie',
			resp: 'nodatalabel',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '实心饼图',
			type: 'pie',
			resp: 'solid',
			beizhu: "",
			prevImgType: "png"
		}
		],
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        radar : [
        {
			name: '基础雷达图',
			type: 'radar',
			resp: 'index',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '雷达图，可自定义y轴的纬度',
			type: 'radar',
			resp: 'custom_yAxis',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '雷达图，平滑曲线',
			type: 'radar',
			resp: 'smooth',
			beizhu: "",
			prevImgType: "png"
		}
		],
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        scat : [
        {
			name: '基础散点图',
			type: 'scat',
			resp: 'index',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '带标尺，而且自定义坐标原点',
			type: 'scat',
			resp: 'cross_origin',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '散点图，带label',
			type: 'scat',
			resp: 'index_label',
			beizhu: "",
			prevImgType: "png"
		}
		],
        //////////////////////////////////////////////////////////////////////////////////////////////////////
		topo : [
        {
			name: '树状图',
			type: 'topo',
			resp: 'tree',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '横向树状图',
			type: 'topo',
			resp: 'tree-h',
			beizhu: "",
			prevImgType: "png"
		}
		],
        //////////////////////////////////////////////////////////////////////////////////////////////////////
		progress : [
        {
			name: '基础进度图表',
			type: 'progress',
			resp: 'index',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '进度图表样式1',
			type: 'progress',
			resp: 'index1',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '多分组进度图表',
			type: 'progress',
			resp: 'morebar',
			beizhu: "",
			prevImgType: "png"
		}
		],
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        venn : [{
			name: '韦恩图',
			type: 'venn',
			resp: 'index',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '多纬度韦恩图',
			type: 'venn',
			resp: 'morecircle',
			beizhu: "",
			prevImgType: "png"
		}
		],
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        chord : [{
			name: '和铉图',
			type: 'chord',
			resp: 'index',
			beizhu: "",
			prevImgType: "png"
		}
		],
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        hybrid : [{
			name: '柱折混合图',
			type: 'hybrid',
			resp: 'bar_line',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '柱折混合图-markPoint',
			type: 'hybrid',
			resp: 'bar_line_markpoint',
			beizhu: "",
			prevImgType: "png"
		},{
			name: '多分组进度图表',
			type: 'hybrid',
			resp: 'bar_line_markline',
			beizhu: "",
			prevImgType: "png"
		}
		],
        //////////////////////////////////////////////////////////////////////////////////////////////////////
		all: [{
			name: '折线图',
			resp: 'line',
			prev: 'index.png'
			//prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		}, {
			name: '柱状图',
			resp: 'bar',
			prev: 'index.png'
		}, {
			name: '地图',
			resp: 'map',
			prev: 'index.png'
		}, {
			name: '饼图',
			resp: 'pie',
			prev: 'index.png'
		}, {
			name: '雷达图',
			resp: 'radar',
			prev: 'index.png'
		}, {
			name: '散点图',
			resp: 'scat',
			prev: 'index.png'
		}, {
			name: '拓扑图',
			resp: 'topo',
			prev: 'index.png'
		}, {
			name: '进度图表',
			resp: 'progress',
			prev: 'index.png'
		}, {
			name: '和旋图',
			resp: 'chord',
			prev: 'index.png'
		}, {
			name: '韦恩图',
			resp: 'venn',
			prev: 'index.png'
		}, {
			name: '混合图表',
			resp: 'hybrid',
			prev: 'bar_line.png'
		}]
	}
})