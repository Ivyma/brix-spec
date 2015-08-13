/* global define */
define(['mock'], function(Mock) {
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
		// √ 按钮 单选按钮 复选框 下拉框 输入框 文本框 面包屑 翻页器 搜索框 浮层 时间选择器
		// X 日历 就地编辑 通用信息 表格 页脚 进度条 字段控制器 步骤条 标签切换 滚动条 加载
		COMPONENTS: [{
			name: '按钮',
			resp: 'Button',
			prev: 'assets/components/按钮.png'
		}, {
			name: '单选按钮',
			resp: 'Radio',
			prev: 'assets/components/单选.png'
		}, {
			name: '复选框',
			resp: 'Checkbox',
			prev: 'assets/components/多选.png'
		}, {
			name: '下拉框',
			resp: 'Dropdown',
			prev: 'assets/components/下拉框.png'
		}, {
			name: '输入框',
			resp: 'Input',
			prev: 'assets/components/输入框.png'
		}, {
			name: '文本框',
			resp: 'Textarea',
			prev: 'assets/components/文本框.png'
		}, {
			name: '日历',
			resp: 'Calendar',
			prev: 'assets/components/日历.png'
		}, {
			name: '面包屑',
			resp: 'Breadcrumb',
			prev: 'assets/components/面包屑.png'
		}, {
			name: '翻页器',
			resp: 'Pagination',
			prev: 'assets/components/翻页器.png'
		}, {
			name: '搜索框',
			resp: 'SearchBox',
			prev: 'assets/components/搜索框.png'
		}, {
			name: '就地编辑',
			resp: 'Editable',
			prev: 'assets/components/就地编辑.png'
		}, {
			name: '通用信息',
			resp: 'Tooltip',
			prev: 'assets/components/通用说明.png'
		}, {
			name: '表格',
			resp: 'Table',
			prev: 'assets/components/表格.png'
		}, {
			name: '页脚',
			resp: 'Footer',
			prev: 'assets/components/页底.png'
		}, {
			name: '进度条',
			resp: 'Progress',
			prev: 'assets/components/进度条.png'
		}, {
			name: '字段控制器',
			resp: 'Field',
			prev: 'assets/components/字段控制.png'
		}, {
			name: '步骤条',
			resp: 'Wizard',
			prev: 'assets/components/步骤条.png'
		}, {
			name: '浮层',
			resp: 'Dialog',
			prev: 'assets/components/浮层.png'
		}, {
			name: '时间选择器',
			resp: 'HourPicker',
			prev: 'assets/components/时间选择器.png'
		}, {
			name: '标签切换',
			resp: 'Tab',
			prev: 'assets/components/Tab切换.png'
		}, {
			name: '滚动条',
			resp: 'Scrollbar',
			prev: 'assets/components/滚动条.png'
		}, {
			name: '加载',
			resp: 'Spin',
			prev: 'assets/components/加载.png'
		}]
	}
})