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
			['DMP', '#894FC4', '#7B46B0', '#48484E', '#F3F0F7'],
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
			name: '按钮 <small>Button</small>',
			resp: 'Button',
			prev: Mock.Random.dataImage('128x128', '128x128')
		}, {
			name: '复选框 <small>Checkbox</small>',
			resp: 'Checkbox',
			prev: Mock.Random.dataImage('128x128', '128x128')
		}, {
			name: '单选按钮 <small>Radio</small>',
			resp: 'Radio',
			prev: Mock.Random.dataImage('128x128', '128x128')
		}, {
			name: '下拉框 <small>Dropdown</small>',
			resp: 'Dropdown',
			prev: Mock.Random.dataImage('128x128', '128x128')
		}, {
			name: '输入框 <small>Input</small>',
			resp: 'Input',
			prev: Mock.Random.dataImage('128x128', '128x128')
		}, {
			name: '文本框 <small>Textarea</small>',
			resp: 'Textarea',
			prev: Mock.Random.dataImage('128x128', '128x128')
		}, {
			name: '翻页器 <small>Pagination</small>',
			resp: 'Pagination',
			prev: Mock.Random.dataImage('128x128', '128x128')
		}, {
			name: '面包屑 <small>Breadcrumb</small>',
			resp: 'Breadcrumb',
			prev: Mock.Random.dataImage('128x128', '128x128')
		}, {
			name: '日历 <small>Calendar</small>',
			resp: 'Calendar',
			prev: Mock.Random.dataImage('128x128', '128x128')
		}, {
			name: '搜索框 <small>SearchBox</small>',
			resp: 'SearchBox',
			prev: Mock.Random.dataImage('128x128', '128x128')
		}, {
			name: '就地编辑 <small>Editable</small>',
			resp: 'Editable',
			prev: Mock.Random.dataImage('128x128', '128x128')
		}, {
			name: '表格 <small>Table</small>',
			resp: 'Table',
			prev: Mock.Random.dataImage('128x128', '128x128')
		}, {
			name: '进度条 <small>Progress</small>',
			resp: 'Progress',
			prev: Mock.Random.dataImage('128x128', '128x128')
		}, {
			name: '字段控制器 <small>Field</small>',
			resp: 'Field',
			prev: Mock.Random.dataImage('128x128', '128x128')
		}, {
			name: '步骤条 <small>Step</small>',
			resp: 'Step',
			prev: Mock.Random.dataImage('128x128', '128x128')
		}, {
			name: '浮出层 <small>Overlay</small>',
			resp: 'Overlay',
			prev: Mock.Random.dataImage('128x128', '128x128')
		}]
	}
})