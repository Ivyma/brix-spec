/* global define */
define(['underscore'], function(_) {
	var DESIGN = {
		name: '样式',
		name_en: 'CSS',
		type: 'node',
		path: 'design.spec.components/design/design',
		hash: '#/design/pc/index'
	}
	var DESIGN_CSS_PC = [{
		name: '颜色',
		name_en: 'Colors',
		type: 'node',
		path: 'css.spec.components/colors/colors',
		hash: '#/pc/css/colors'
	}, {
		name: '字体',
		name_en: 'Font',
		type: 'node',
		path: 'css.spec.components/font/font',
		hash: '#/pc/css/font'
	}, {
		name: '行距',
		name_en: 'Line Height',
		type: 'node',
		path: 'css.spec.components/line_height/line_height',
		hash: '#/pc/css/line_height'
	}, {
		name: '栅格',
		name_en: 'Grid',
		type: 'node',
		path: 'css.spec.components/grid/grid',
		hash: '#/pc/css/grid'
	}]
	var DESIGN_COMPONENT_PC = [{
		name: '所有',
		name_en: 'All',
		type: 'node',
		path: 'all.spec.components/all/all',
		hash: '#/pc/all/all'
	}, {
		name: '按钮',
		name_en: 'Button',
		type: 'node',
		path: 'spec.components/button/README.md',
		hash: '#/pc/components/button'
	}, {
		name: '单选按钮',
		name_en: 'Radio',
		type: 'node',
		path: 'spec.components/radio/README.md',
		hash: '#/pc/components/radio'
	}, {
		name: '复选框',
		name_en: 'Checkbox',
		type: 'node',
		path: 'spec.components/checkbox/README.md',
		hash: '#/pc/components/checkbox'
	}, {
		name: '下拉框',
		name_en: 'Dropdown',
		type: 'node',
		path: 'spec.components/dropdown/README.md',
		hash: '#/pc/components/dropdown'
	}, {
		name: '输入框',
		name_en: 'Input',
		type: 'node',
		path: 'spec.components/input/README.md',
		hash: '#/pc/components/input'
	}, {
		name: '文本框',
		name_en: 'Textarea',
		type: 'node',
		path: 'spec.components/textarea/README.md',
		hash: '#/pc/components/textarea'
	}, {
		name: '日历',
		name_en: 'Calendar',
		type: 'node',
		path: 'spec.components/calendar/README.md',
		hash: '#/pc/components/calendar'
	}, {
		name: '面包屑',
		name_en: 'Breadcrumb',
		type: 'node',
		path: 'spec.components/breadcrumb/README.md',
		hash: '#/pc/components/breadcrumb'
	}, {
		name: '翻页器',
		name_en: 'Pagination',
		type: 'node',
		path: 'spec.components/pagination/README.md',
		hash: '#/pc/components/pagination'
	}, {
		name: '搜索框',
		name_en: 'SearchBox',
		type: 'node',
		path: 'spec.components/searchbox/README.md',
		hash: '#/pc/components/searchbox'
	}, {
		name: '就地编辑',
		name_en: 'Editable',
		type: 'node',
		path: 'spec.components/editable/README.md',
		hash: '#/pc/components/editable'
	}, {
		name: '通用信息',
		name_en: 'Message',
		type: 'node',
		path: 'spec.components/message/README.md',
		hash: '#/pc/components/message'
	}, {
		name: '表格',
		name_en: 'Table',
		type: 'node',
		path: 'spec.components/table/README.md',
		hash: '#/pc/components/table'
	}, {
		name: '页脚',
		name_en: 'Footer',
		type: 'node',
		path: 'spec.components/footer/README.md',
		hash: '#/pc/components/footer'
	}, {
		name: '进度条',
		name_en: 'Progress',
		type: 'node',
		path: 'spec.components/progress/README.md',
		hash: '#/pc/components/progress'
	}, {
		name: '字段控制器',
		name_en: 'Field',
		type: 'node',
		path: 'spec.components/field/README.md',
		hash: '#/pc/components/field'
	}, {
		name: '步骤条',
		name_en: 'Wizard',
		type: 'node',
		path: 'spec.components/wizard/README.md',
		hash: '#/pc/components/wizard'
	}, {
		name: '浮层',
		name_en: 'Dialog',
		type: 'node',
		path: 'spec.components/dialog/README.md',
		hash: '#/pc/components/dialog'
	}, {
		name: '时间选择器',
		name_en: 'HourPicker',
		type: 'node',
		path: 'spec.components/hourpicker/README.md',
		hash: '#/pc/components/hourpicker'
	}, {
		name: '标签切换',
		name_en: 'Tab',
		type: 'node',
		path: 'spec.components/tab/README.md',
		hash: '#/pc/components/tab'
	}, {
		name: '滚动条',
		name_en: 'Scrollbar',
		type: 'node',
		path: 'spec.components/scrollbar/README.md',
		hash: '#/pc/components/scrollbar'
	}, {
		name: '加载',
		name_en: 'Loading',
		type: 'node',
		path: 'spec.components/loading/README.md',
		hash: '#/pc/components/loading'
	}]
	var BRAND = [{
		name: '品牌故事',
		name_en: 'Brand Story',
		type: 'node',
		path: 'brand.spec.components/brand_story/brand_story',
		hash: '#/brand/brand_story'
	}, {
		name: '标志',
		name_en: 'Logo',
		type: 'node',
		path: 'brand.spec.components/logo/logo',
		hash: '#/brand/logo'
	}, {
		name: '吉祥物',
		name_en: 'Mascot',
		type: 'node',
		path: 'brand.spec.components/mascot/mascot',
		hash: '#/brand/mascot'
	}, {
		name: '字体',
		name_en: 'Typography',
		type: 'node',
		path: 'brand.spec.components/typography/typography',
		hash: '#/brand/typography'
	}, {
		name: '色盘',
		name_en: 'Color Palettes',
		type: 'node',
		path: 'brand.spec.components/color_palettes/color_palettes',
		hash: '#/brand/color_palettes'
	}, {
		name: '辅助图形',
		name_en: 'Shapes',
		type: 'node',
		path: 'brand.spec.components/shapes/shapes',
		hash: '#/brand/shapes'
	}, {
		name: '图标',
		name_en: 'Icon',
		type: 'node',
		path: 'brand.spec.components/icon/icon',
		hash: '#/brand/icon'
	}, {
		name: '网格系统',
		name_en: 'Grid_Systems',
		type: 'node',
		path: 'brand.spec.components/grid_systems/grid_systems',
		hash: '#/brand/grid_systems'
	}, {
		name: '案例',
		name_en: 'Examples',
		type: 'node',
		path: 'brand.spec.components/examples/examples',
		hash: '#/brand/examples'
	}]
	var ANIMATION = [{
		name: '动效规范',
		name_en: '',
		type: 'node',
		path: 'animation.spec.components/rules/rules',
		hash: '#/animation/rules'
	}, {
		name: '真实的动效',
		name_en: '',
		type: 'node',
		path: 'animation.spec.components/real/real',
		hash: '#/animation/real'
	}, {
		name: '效率优先',
		name_en: '',
		type: 'node',
		path: 'animation.spec.components/effective/effective',
		hash: '#/animation/effective'
	}, {
		name: '遵循法则',
		name_en: '',
		type: 'node',
		path: 'animation.spec.components/law/law',
		hash: '#/animation/law'
	}]
	var CHART = [{
		name: 'Chartx',
		name_en: ' ',
		type: 'node',
		path: 'chart.spec.components/index/README.md',
		hash: '#/chart/index'
	}, {
		name: '所有',
		name_en: 'All',
		type: 'node',
		path: 'chart.spec.components/all/README.md',
		hash: '#/chart/all'
	}, {
		name: '折线图',
		name_en: 'Line',
		type: 'node',
		path: 'chart.spec.components/line/README.md',
		hash: '#/chart/line'
	}, {
		name: '柱状图',
		name_en: 'Bar',
		type: 'node',
		path: 'chart.spec.components/bar/README.md',
		hash: '#/chart/bar'
	}, {
		name: '饼图',
		name_en: 'Pie',
		type: 'node',
		path: 'chart.spec.components/pie/README.md',
		hash: '#/chart/pie'
	}, {
		name: '地图',
		name_en: 'Map',
		type: 'node',
		path: 'chart.spec.components/map/README.md',
		hash: '#/chart/map'
	}, {
		name: '雷达图',
		name_en: 'Radar',
		type: 'node',
		path: 'chart.spec.components/radar/README.md',
		hash: '#/chart/radar'
	}, {
		name: '散点图',
		name_en: 'Scat',
		type: 'node',
		path: 'chart.spec.components/scat/README.md',
		hash: '#/chart/scat'
	}, {
		name: '拓扑图',
		name_en: 'Topo',
		type: 'node',
		path: 'chart.spec.components/topo/README.md',
		hash: '#/chart/topo'
	}, {
		name: '进度图',
		name_en: 'Progress',
		type: 'node',
		path: 'chart.spec.components/progress/README.md',
		hash: '#/chart/progress'
	}, {
		name: '韦恩图',
		name_en: 'Venn',
		type: 'node',
		path: 'chart.spec.components/venn/README.md',
		hash: '#/chart/venn'
	}, {
		name: '和铉图',
		name_en: 'Chord',
		type: 'node',
		path: 'chart.spec.components/chord/README.md',
		hash: '#/chart/chord'
	}, {
		name: '混合图表',
		name_en: 'Hybrid',
		type: 'node',
		path: 'chart.spec.components/hybrid/README.md',
		hash: '#/chart/hybrid'
	}]

	var DESIGN_CSS_WIRELESS = []
	var DESIGN_COMPONENT_WIRELESS = []

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
				'WIRELESS': {
					'design': [{
						'sidebar_top': '样式',
						'sidebar_sub': DESIGN_CSS_PC
					}, {
						'sidebar_top': '组件',
						'sidebar_sub': DESIGN_COMPONENT_PC
					}],
				}
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