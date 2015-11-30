/* global define */
define(['underscore'], function(_) {
	var DESIGN = {
		name: '样式',
		name_en: 'CSS',
		type: 'node',
		path: 'design.spec.components/design/design',
		hash: '#/design'
	}
	var DESIGN_CSS_PC = [{
		name: '颜色',
		name_en: 'Colors',
		type: 'node',
		path: 'css.spec.components/colors/colors',
		hash: '#/css/colors',

		resp: 'Colors',
		href: '#/css/colors'
	}, {
		name: '字体',
		name_en: 'Font',
		type: 'node',
		path: 'css.spec.components/font/font',
		hash: '#/css/font',

		resp: 'Font',
		href: '#/css/font'
	}, {
		name: '行距',
		name_en: 'Line Height',
		type: 'node',
		path: 'css.spec.components/line_height/line_height',
		hash: '#/css/line_height',

		resp: 'Line_Height',
		href: '#/css/line_height'
	}, {
		name: '栅格',
		name_en: 'Grid',
		type: 'node',
		path: 'css.spec.components/grid/grid',
		hash: '#/css/grid',

		resp: 'Grid',
		href: '#/css/grid'
	}]
	var DESIGN_COMPONENT_PC = [{
		name: '所有',
		name_en: 'All',
		type: 'node',
		path: 'all.spec.components/all/all',
		hash: '#/all/all',

		resp: 'All',
		href: '#/all/all'
	}, {
		name: '按钮',
		name_en: 'Button',
		type: 'node',
		path: 'spec.components/button/README.md',
		hash: '#/components/button',

		resp: 'Button',
		href: '#/readme/button'
	}, {
		name: '单选按钮',
		name_en: 'Radio',
		type: 'node',
		path: 'spec.components/radio/README.md',
		hash: '#/components/radio',

		resp: 'Radio',
		href: '#/readme/radio'
	}, {
		name: '复选框',
		name_en: 'Checkbox',
		type: 'node',
		path: 'spec.components/checkbox/README.md',
		hash: '#/components/checkbox',

		resp: 'Checkbox',
		href: '#/readme/checkbox'
	}, {
		name: '下拉框',
		name_en: 'Dropdown',
		type: 'node',
		path: 'spec.components/dropdown/README.md',
		hash: '#/components/dropdown',

		resp: 'Dropdown',
		href: '#/readme/dropdown'
	}, {
		name: '输入框',
		name_en: 'Input',
		type: 'node',
		path: 'spec.components/input/README.md',
		hash: '#/components/input',

		resp: 'Input',
		href: '#/readme/input'
	}, {
		name: '文本框',
		name_en: 'Textarea',
		type: 'node',
		path: 'spec.components/textarea/README.md',
		hash: '#/components/textarea',

		resp: 'Textarea',
		href: '#/readme/textarea'
	}, {
		name: '日历',
		name_en: 'Calendar',
		type: 'node',
		path: 'spec.components/calendar/README.md',
		hash: '#/components/calendar',

		resp: 'Calendar',
		href: '#/readme/calendar'
	}, {
		name: '面包屑',
		name_en: 'Breadcrumb',
		type: 'node',
		path: 'spec.components/breadcrumb/README.md',
		hash: '#/components/breadcrumb',

		resp: 'Breadcrumb',
		href: '#/readme/breadcrumb'
	}, {
		name: '翻页器',
		name_en: 'Pagination',
		type: 'node',
		path: 'spec.components/pagination/README.md',
		hash: '#/components/pagination',

		resp: 'Pagination',
		href: '#/readme/pagination'
	}, {
		name: '搜索框',
		name_en: 'SearchBox',
		type: 'node',
		path: 'spec.components/searchbox/README.md',
		hash: '#/components/searchbox',

		resp: 'SearchBox',
		href: '#/readme/searchbox'
	}, {
		name: '就地编辑',
		name_en: 'Editable',
		type: 'node',
		path: 'spec.components/editable/README.md',
		hash: '#/components/editable',

		resp: 'Editable',
		href: '#/readme/editable'
	}, {
		name: '通用信息',
		name_en: 'Message',
		type: 'node',
		path: 'spec.components/message/README.md',
		hash: '#/components/message',

		resp: 'Message',
		href: '#/readme/message'
	}, {
		name: '表格',
		name_en: 'Table',
		type: 'node',
		path: 'spec.components/table/README.md',
		hash: '#/components/table',

		resp: 'Table',
		href: '#/readme/table'
	}, {
		name: '页脚',
		name_en: 'Footer',
		type: 'node',
		path: 'spec.components/footer/README.md',
		hash: '#/components/footer',

		resp: 'Footer',
		href: '#/readme/footer'
	}, {
		name: '进度条',
		name_en: 'Progress',
		type: 'node',
		path: 'spec.components/progress/README.md',
		hash: '#/components/progress',

		resp: 'Progress',
		href: '#/readme/progress'
	}, {
		name: '字段控制器',
		name_en: 'Field',
		type: 'node',
		path: 'spec.components/field/README.md',
		hash: '#/components/field',

		resp: 'Field',
		href: '#/readme/field'
	}, {
		name: '步骤条',
		name_en: 'Wizard',
		type: 'node',
		path: 'spec.components/wizard/README.md',
		hash: '#/components/wizard',

		resp: 'Wizard',
		href: '#/readme/wizard'
	}, {
		name: '浮层',
		name_en: 'Dialog',
		type: 'node',
		path: 'spec.components/dialog/README.md',
		hash: '#/components/dialog',

		resp: 'Dialog',
		href: '#/readme/dialog'
	}, {
		name: '时间选择器',
		name_en: 'HourPicker',
		type: 'node',
		path: 'spec.components/hourpicker/README.md',
		hash: '#/components/hourpicker',

		resp: 'HourPicker',
		href: '#/readme/hourpicker'
	}, {
		name: '标签切换',
		name_en: 'Tab',
		type: 'node',
		path: 'spec.components/tab/README.md',
		hash: '#/components/tab',

		resp: 'Tab',
		href: '#/readme/tab'
	}, {
		name: '滚动条',
		name_en: 'Scrollbar',
		type: 'node',
		path: 'spec.components/scrollbar/README.md',
		hash: '#/components/scrollbar',

		resp: 'Scrollbar',
		href: '#/readme/scrollbar'
	}, {
		name: '加载',
		name_en: 'Loading',
		type: 'node',
		path: 'spec.components/loading/README.md',
		hash: '#/components/loading',

		resp: 'Loading',
		href: '#/readme/loading'
	}]
	var BRAND = [{
		name: '品牌故事',
		name_en: 'Brand Story',
		type: 'node',
		path: 'brand.spec.components/brand_story/brand_story',
		hash: '#/brand/brand_story',

		resp: 'Brand_Story',
		href: '#/brand/brand_story'
	}, {
		name: '标志',
		name_en: 'Logo',
		type: 'node',
		path: 'brand.spec.components/logo/logo',
		hash: '#/brand/logo',

		resp: 'Logo',
		href: '#/brand/logo'
	}, {
		name: '吉祥物',
		name_en: 'Mascot',
		type: 'node',
		path: 'brand.spec.components/mascot/mascot',
		hash: '#/brand/mascot',

		resp: 'Mascot',
		href: '#/brand/mascot'
	}, {
		name: '字体',
		name_en: 'Typography',
		type: 'node',
		path: 'brand.spec.components/typography/typography',
		hash: '#/brand/typography',

		resp: 'Typography',
		href: '#/brand/typography'
	}, {
		name: '色盘',
		name_en: 'Color Palettes',
		type: 'node',
		path: 'brand.spec.components/color_palettes/color_palettes',
		hash: '#/brand/color_palettes',

		resp: 'Color_Palettes',
		href: '#/brand/color_palettes'
	}, {
		name: '辅助图形',
		name_en: 'Shapes',
		type: 'node',
		path: 'brand.spec.components/shapes/shapes',
		hash: '#/brand/shapes',

		resp: 'Shapes',
		href: '#/brand/shapes'
	}, {
		name: '图标',
		name_en: 'Icon',
		type: 'node',
		path: 'brand.spec.components/icon/icon',
		hash: '#/brand/icon',

		resp: 'Icon',
		href: '#/brand/icon'
	}, {
		name: '网格系统',
		name_en: 'Grid_Systems',
		type: 'node',
		path: 'brand.spec.components/grid_systems/grid_systems',
		hash: '#/brand/grid_systems',

		resp: 'Grid_Systems',
		href: '#/brand/grid_systems'
	}, {
		name: '案例',
		name_en: 'Examples',
		type: 'node',
		path: 'brand.spec.components/examples/examples',
		hash: '#/brand/examples',

		resp: 'Examples',
		href: '#/brand/examples'
	}]
	var ANIMATION = [{
		name: '动效规范',
		name_en: '',
		type: 'node',
		path: 'animation.spec.components/rules/rules',
		hash: '#/animation/rules',

		// resp: '',
		// 'resp_hide': 'rules',
		resp: 'rules',
		href: '#/animation/rules'
	}, {
		name: '真实的动效',
		name_en: '',
		type: 'node',
		path: 'animation.spec.components/real/real',
		hash: '#/animation/real',

		// resp: '',
		// 'resp_hide': 'real',
		resp: 'real',
		href: '#/animation/real'
	}, {
		name: '效率优先',
		name_en: '',
		type: 'node',
		path: 'animation.spec.components/effective/effective',
		hash: '#/animation/effective',

		// resp: '',
		// 'resp_hide': 'effective',
		resp: 'effective',
		href: '#/animation/effective'
	}, {
		name: '遵循法则',
		name_en: '',
		type: 'node',
		path: 'animation.spec.components/law/law',
		hash: '#/animation/law',

		// resp: '',
		// 'resp_hide': 'law',
		resp: 'law',
		href: '#/animation/law'
	}]
	var CHART = [{
		name: 'Chartx',
		name_en: ' ',
		type: 'node',
		path: 'chart.spec.components/index/README.md',
		hash: '#/chart/index',

		resp: 'chartx',
		herf: '#/chart/index',
	},{
		name: '所有',
		name_en: 'All',
		type: 'node',
		path: 'chart.spec.components/all/README.md',
		hash: '#/chart/all',

		resp: 'all',
		herf: '#/chart/all',
	},{
		name: '折线图',
		name_en: 'Line',
		type: 'node',
		path: 'chart.spec.components/line/README.md',
		hash: '#/chart/line',

		resp: 'Line',
		herf: '#/chart/line',
	},{
		name: '柱状图',
		name_en: 'Bar',
		type: 'node',
		path: 'chart.spec.components/bar/README.md',
		hash: '#/chart/bar',

		resp: 'Bar',
		herf: '#/chart/bar',
	},{
		name: '饼图',
		name_en: 'Pie',
		type: 'node',
		path: 'chart.spec.components/pie/README.md',
		hash: '#/chart/pie',

		resp: 'Pie',
		herf: '#/chart/pie',
	},{
		name: '地图',
		name_en: 'Map',
		type: 'node',
		path: 'chart.spec.components/map/README.md',
		hash: '#/chart/map',

		resp: 'Map',
		herf: '#/chart/map',
	},{
		name: '雷达图',
		name_en: 'Radar',
		type: 'node',
		path: 'chart.spec.components/radar/README.md',
		hash: '#/chart/radar',

		resp: 'Radar',
		herf: '#/chart/radar',
	},{
		name: '散点图',
		name_en: 'Scat',
		type: 'node',
		path: 'chart.spec.components/scat/README.md',
		hash: '#/chart/scat',

		resp: 'Scat',
		herf: '#/chart/scat',
	},{
		name: '拓扑图',
		name_en: 'Topo',
		type: 'node',
		path: 'chart.spec.components/topo/README.md',
		hash: '#/chart/topo',

		resp: 'Topo',
		herf: '#/chart/topo',
	},{
		name: '进度图',
		name_en: 'Progress',
		type: 'node',
		path: 'chart.spec.components/progress/README.md',
		hash: '#/chart/progress',

		resp: 'Progress',
		herf: '#/chart/progress',
	},{
		name: '韦恩图',
		name_en: 'Venn',
		type: 'node',
		path: 'chart.spec.components/venn/README.md',
		hash: '#/chart/venn',

		resp: 'Venn',
		herf: '#/chart/venn',
	},{
		name: '和铉图',
		name_en: 'Chord',
		type: 'node',
		path: 'chart.spec.components/chord/README.md',
		hash: '#/chart/chord',

		resp: 'Chord',
		herf: '#/chart/chord',
	},{
		name: '混合图表',
		name_en: 'Hybrid',
		type: 'node',
		path: 'chart.spec.components/hybrid/README.md',
		hash: '#/chart/hybrid',

		resp: 'Hybrid',
		herf: '#/chart/hybrid',
	}]

	return {
		DESIGN: DESIGN,
		DESIGN_CSS_PC: DESIGN_CSS_PC,
		DESIGN_COMPONENT_PC: DESIGN_COMPONENT_PC,
		BRAND: BRAND,
		ANIMATION: ANIMATION,
		SIDEBARS: {
			'ALIMAMA': {
				'PC': {
					'design': [{
						'sidebar_top': '样式',
						'sidebar_sub': DESIGN_CSS_PC
					}, {
						'sidebar_top': '组件',
						'sidebar_sub': DESIGN_COMPONENT_PC
					}],
					'chart': [{
						'sidebar_sub': CHART,
					}],
					'brand': [{
						'sidebar_sub': BRAND
					}],
					'animation': [{
						'sidebar_sub': ANIMATION
					}]
				},
				'WIRELESS': {}
			}
		},
		MAPPED: function() {
			var mapped = {}
			_.each([DESIGN, DESIGN_CSS_PC, DESIGN_COMPONENT_PC, CHART, BRAND, ANIMATION], function(group) {
				if (_.isArray(group)) {
					_.each(group, function(node) {
						mapped[node.hash] = node.path
					})
				} else {
					mapped[group.hash] = group.path
				}
			})
			return mapped
		}()
	}
})