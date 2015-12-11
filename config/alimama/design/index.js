/* global define */
define([
	'./web',
	'./mobile'
], function(Web, Mobile) {
	var DESIGN = {
		name: '设计',
		name_en: 'design',
		path: 'alimama/design/web/index/index',
		href: '#/design/index',
		role: ['nav'],
		device: true,
		children: [
			Web,
			Mobile
		],
		WEB: Web,
		MOBILE: Mobile
	}
	return DESIGN
})