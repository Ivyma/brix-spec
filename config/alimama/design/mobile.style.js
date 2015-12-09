define(function() {
	return {
		name: '样式',
		name_en: 'Style',
		path: 'alimama/design/mobile/style/font/font',
		href: '#/design/mobile/style/font',
		role: ['group'],
		children: [{
			name: '字体',
			name_en: 'Font',
			role: ['node'],
			path: 'alimama/design/mobile/style/font/font',
			href: '#/design/mobile/style/font'
		},{
            name: '段落',
			name_en: 'section',
			role: ['node'],
			path: 'alimama/design/mobile/style/section/section',
			href: '#/design/mobile/style/section' 
        },{
            name: '图标',
			name_en: 'icons',
			role: ['node'],
			path: 'alimama/design/mobile/style/icons/icons',
			href: '#/design/mobile/style/icons' 
        },{
            name: '度量',
			name_en: 'metric',
			role: ['node'],
			path: 'alimama/design/mobile/style/metric/metric',
			href: '#/design/mobile/style/metric' 
        },{
            name: '结构',
			name_en: 'struct',
			role: ['node'],
			path: 'alimama/design/mobile/style/struct/struct',
			href: '#/design/mobile/style/struct' 
        }]
	}
})
