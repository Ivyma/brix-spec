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

	var RETINA = isRetina()

	return {
		COLORS: [
			// 品牌色、品牌色 hover、侧导航、表格hover
			['联盟', '#FA6419', '#E65C17', '#443F3C', '#FAF1ED'],
			['直通车', '#F78400', '#E37900', '#42403C', '#FAF3EB'],
			['Tanx', '#50B347', '#479E3F', '#3C433C', '#F0F6EF'],
			['钻石展位', '#4A7BF7', '#4471E3', '#3C404A', '#F0F3FA'],
			['易传媒', '#6363E6', '#5A5AD1', '#3F3F49', '#F1F1F9'],
			['DMP', '#895AC7', '#7B50B3', '#47414E', '#F1EDF6'],
		],
		FONT_SIZES: ['20px', '16px', '14px', '12px'],
		FONT_FAMILIES: ["'Microsoft YaHei'", "'微软雅黑'", "'华文细黑'", "Georgi", "'Times New Roman'", "Aria", "sans-serif"],
		BASICS: [{
			name: 'Brix Loader',
			resp: 'brix-loader',
			desc: '组件加载器，负责管理组件的整个生命周期，包括加载、初始化、渲染和销毁。',
			readme: '',
			links: [
				['GitHub', 'https://github.com/thx/brix-loader']
			]
		}, {
			name: 'Brix Base',
			resp: 'brix-base',
			desc: '组件基类，<a href="https://github.com/thx/brix-loader/blob/master/src/brix/loader.js#L3">Brix Component Definition</a> 的最简实现。在编写 Brix Component Implement 时，建议从继承该实现开始。',
			readme: '',
			links: [
				['GitHub', 'https://github.com/nuysoft/brix-base']
			]
		}, {
			name: 'Brix Event',
			resp: 'brix-event',
			desc: '支持 bx-type 风格的事件模型，实现事件与与 DOM 结构的松耦合，提升可读性、可复用性和可测试性。',
			readme: '',
			links: [
				['GitHub', 'https://github.com/nuysoft/brix-event']
			]
		}],
		COMPONENTS: [{
			name: '按钮',
			resp: 'Button',
			prev: RETINA ? 'assets/components/按钮@2x.png' : 'assets/components/按钮.png'
		}, {
			name: '单选按钮',
			resp: 'Radio',
			prev: RETINA ? 'assets/components/单选@2x.png' : 'assets/components/单选.png'
		}, {
			name: '复选框',
			resp: 'Checkbox',
			prev: RETINA ? 'assets/components/多选@2x.png' : 'assets/components/多选.png'
		}, {
			name: '下拉框',
			resp: 'Dropdown',
			prev: RETINA ? 'assets/components/下拉框@2x.png' : 'assets/components/下拉框.png'
		}, {
			name: '输入框',
			resp: 'Input',
			prev: RETINA ? 'assets/components/输入框@2x.png' : 'assets/components/输入框.png'
		}, {
			name: '文本框',
			resp: 'Textarea',
			prev: RETINA ? 'assets/components/文本框@2x.png' : 'assets/components/文本框.png'
		}, {
			name: '日历',
			resp: 'Calendar',
			prev: RETINA ? 'assets/components/日历@2x.png' : 'assets/components/日历.png'
		}, {
			name: '面包屑',
			resp: 'Breadcrumb',
			prev: RETINA ? 'assets/components/面包屑@2x.png' : 'assets/components/面包屑.png'
		}, {
			name: '翻页器',
			resp: 'Pagination',
			prev: RETINA ? 'assets/components/翻页器@2x.png' : 'assets/components/翻页器.png'
		}, {
			name: '搜索框',
			resp: 'SearchBox',
			prev: RETINA ? 'assets/components/搜索框@2x.png' : 'assets/components/搜索框.png'
		}, {
			name: '就地编辑',
			resp: 'Editable',
			prev: RETINA ? 'assets/components/就地编辑@2x.png' : 'assets/components/就地编辑.png'
		}, {
			name: '通用信息',
			resp: 'Message',
			prev: RETINA ? 'assets/components/通用说明@2x.png' : 'assets/components/通用说明.png'
		}, {
			name: '表格',
			resp: 'Table',
			prev: RETINA ? 'assets/components/表格@2x.png' : 'assets/components/表格.png'
		}, {
			name: '页脚',
			resp: 'Footer',
			prev: RETINA ? 'assets/components/页底@2x.png' : 'assets/components/页底.png'
		}, {
			name: '进度条',
			resp: 'Progress',
			prev: RETINA ? 'assets/components/进度条@2x.png' : 'assets/components/进度条.png'
		}, {
			name: '字段控制器',
			resp: 'Field',
			prev: RETINA ? 'assets/components/字段控制@2x.png' : 'assets/components/字段控制.png'
		}, {
			name: '步骤条',
			resp: 'Wizard',
			prev: RETINA ? 'assets/components/步骤条@2x.png' : 'assets/components/步骤条.png'
		}, {
			name: '浮层',
			resp: 'Dialog',
			prev: RETINA ? 'assets/components/浮层@2x.png' : 'assets/components/浮层.png'
		}, {
			name: '时间选择器',
			resp: 'HourPicker',
			prev: RETINA ? 'assets/components/时间选择器@2x.png' : 'assets/components/时间选择器.png'
		}, {
			name: '标签切换',
			resp: 'Tab',
			prev: RETINA ? 'assets/components/Tab切换@2x.png' : 'assets/components/Tab切换.png'
		}, {
			name: '滚动条',
			resp: 'Scrollbar',
			prev: RETINA ? 'assets/components/滚动条@2x.png' : 'assets/components/滚动条.png'
		}, {
			name: '加载',
			resp: 'Loading',
			prev: RETINA ? 'assets/components/加载@2x.png' : 'assets/components/加载.png'
		}]
	}
})