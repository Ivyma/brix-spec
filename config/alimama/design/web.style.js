define(function() {
	return {
		name: '样式',
		name_en: 'Style',
		path: 'alimama/',
		href: '#/design/web/index',
		role: ['group'],
		children: [{
			name: '颜色',
			name_en: 'Color',
			role: ['node'],
			path: 'alimama/design/web/style/color/color',
			href: '#/design/web/style/color'
		}, {
			name: '字体',
			name_en: 'Font',
			role: ['node'],
			path: 'alimama/design/web/style/font/font',
			href: '#/design/web/style/font'
		}, {
			name: '行距',
			name_en: 'Line Height',
			role: ['node'],
			path: 'alimama/design/web/style/line_height/line_height',
			href: '#/design/web/style/line_height'
		}, {
			name: '栅格',
			name_en: 'Grid',
			role: ['node'],
			path: 'alimama/design/web/style/grid/grid',
			href: '#/design/web/style/grid'
		}]
	}
})