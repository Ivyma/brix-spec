define(function() {
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
		name: '组件',
		name_en: 'Component',
		path: 'alimama/design/web/index/index',
		href: '#/design/web/index',
		role: ['group'],
		children: [{
			name: '所有',
			name_en: 'All',
			role: [],
			path: 'alimama/design/web/component/index/index',
			href: '#/design/web/component/index'
		}, {
			name: '按钮',
			name_en: 'Button',
			role: [],
			path: 'alimama/design/web/component/button/README.md',
			href: '#/design/web/component/button',
			prev: RETINA ? 'alimama/design/web/component/assets/按钮@2x.png' : 'alimama/design/web/component/assets/按钮.png'
		}, {
			name: '单选按钮',
			name_en: 'Radio',
			role: [],
			path: 'alimama/design/web/component/radio/README.md',
			href: '#/design/web/component/radio',
			prev: RETINA ? 'alimama/design/web/component/assets/单选@2x.png' : 'alimama/design/web/component/assets/单选.png'
		}, {
			name: '复选框',
			name_en: 'Checkbox',
			role: [],
			path: 'alimama/design/web/component/checkbox/README.md',
			href: '#/design/web/component/checkbox',
			prev: RETINA ? 'alimama/design/web/component/assets/多选@2x.png' : 'alimama/design/web/component/assets/多选.png'
		}, {
			name: '下拉框',
			name_en: 'Dropdown',
			role: [],
			path: 'alimama/design/web/component/dropdown/README.md',
			href: '#/design/web/component/dropdown',
			prev: RETINA ? 'alimama/design/web/component/assets/下拉框@2x.png' : 'alimama/design/web/component/assets/下拉框.png'
		}, {
			name: '输入框',
			name_en: 'Input',
			role: [],
			path: 'alimama/design/web/component/input/README.md',
			href: '#/design/web/component/input',
			prev: RETINA ? 'alimama/design/web/component/assets/输入框@2x.png' : 'alimama/design/web/component/assets/输入框.png'
		}, {
			name: '文本框',
			name_en: 'Textarea',
			role: [],
			path: 'alimama/design/web/component/textarea/README.md',
			href: '#/design/web/component/textarea',
			prev: RETINA ? 'alimama/design/web/component/assets/文本框@2x.png' : 'alimama/design/web/component/assets/文本框.png'
		}, {
			name: '日历',
			name_en: 'Calendar',
			role: [],
			path: 'alimama/design/web/component/calendar/README.md',
			href: '#/design/web/component/calendar',
			prev: RETINA ? 'alimama/design/web/component/assets/日历@2x.png' : 'alimama/design/web/component/assets/日历.png'
		}, {
			name: '面包屑',
			name_en: 'Breadcrumb',
			role: [],
			path: 'alimama/design/web/component/breadcrumb/README.md',
			href: '#/design/web/component/breadcrumb',
			prev: RETINA ? 'alimama/design/web/component/assets/面包屑@2x.png' : 'alimama/design/web/component/assets/面包屑.png'
		}, {
			name: '翻页器',
			name_en: 'Pagination',
			role: [],
			path: 'alimama/design/web/component/pagination/README.md',
			href: '#/design/web/component/pagination',
			prev: RETINA ? 'alimama/design/web/component/assets/翻页器@2x.png' : 'alimama/design/web/component/assets/翻页器.png'
		}, {
			name: '搜索框',
			name_en: 'SearchBox',
			role: [],
			path: 'alimama/design/web/component/searchbox/README.md',
			href: '#/design/web/component/searchbox',
			prev: RETINA ? 'alimama/design/web/component/assets/搜索框@2x.png' : 'alimama/design/web/component/assets/搜索框.png'
		}, {
			name: '就地编辑',
			name_en: 'Editable',
			role: [],
			path: 'alimama/design/web/component/editable/README.md',
			href: '#/design/web/component/editable',
			prev: RETINA ? 'alimama/design/web/component/assets/就地编辑@2x.png' : 'alimama/design/web/component/assets/就地编辑.png'
		}, {
			name: '通用信息',
			name_en: 'Message',
			role: [],
			path: 'alimama/design/web/component/message/README.md',
			href: '#/design/web/component/message',
			prev: RETINA ? 'alimama/design/web/component/assets/通用说明@2x.png' : 'alimama/design/web/component/assets/通用说明.png'
		}, {
			name: '表格',
			name_en: 'Table',
			role: [],
			path: 'alimama/design/web/component/table/README.md',
			href: '#/design/web/component/table',
			prev: RETINA ? 'alimama/design/web/component/assets/表格@2x.png' : 'alimama/design/web/component/assets/表格.png'
		}, {
			name: '页脚',
			name_en: 'Footer',
			role: [],
			path: 'alimama/design/web/component/footer/README.md',
			href: '#/design/web/component/footer',
			prev: RETINA ? 'alimama/design/web/component/assets/页底@2x.png' : 'alimama/design/web/component/assets/页底.png'
		}, {
			name: '进度条',
			name_en: 'Progress',
			role: [],
			path: 'alimama/design/web/component/progress/README.md',
			href: '#/design/web/component/progress',
			prev: RETINA ? 'alimama/design/web/component/assets/进度条@2x.png' : 'alimama/design/web/component/assets/进度条.png'
		}, {
			name: '字段控制器',
			name_en: 'Field',
			role: [],
			path: 'alimama/design/web/component/field/README.md',
			href: '#/design/web/component/field',
			prev: RETINA ? 'alimama/design/web/component/assets/字段控制@2x.png' : 'alimama/design/web/component/assets/字段控制.png'
		}, {
			name: '步骤条',
			name_en: 'Wizard',
			role: [],
			path: 'alimama/design/web/component/wizard/README.md',
			href: '#/design/web/component/wizard',
			prev: RETINA ? 'alimama/design/web/component/assets/步骤条@2x.png' : 'alimama/design/web/component/assets/步骤条.png'
		}, {
			name: '浮层',
			name_en: 'Dialog',
			role: [],
			path: 'alimama/design/web/component/dialog/README.md',
			href: '#/design/web/component/dialog',
			prev: RETINA ? 'alimama/design/web/component/assets/浮层@2x.png' : 'alimama/design/web/component/assets/浮层.png'
		}, {
			name: '时间选择器',
			name_en: 'HourPicker',
			role: [],
			path: 'alimama/design/web/component/hourpicker/README.md',
			href: '#/design/web/component/hourpicker',
			prev: RETINA ? 'alimama/design/web/component/assets/时间选择器@2x.png' : 'alimama/design/web/component/assets/时间选择器.png'
		}, {
			name: '标签切换',
			name_en: 'Tab',
			role: [],
			path: 'alimama/design/web/component/tab/README.md',
			href: '#/design/web/component/tab',
			prev: RETINA ? 'alimama/design/web/component/assets/Tab切换@2x.png' : 'alimama/design/web/component/assets/Tab切换.png'
		}, {
			name: '滚动条',
			name_en: 'Scrollbar',
			role: [],
			path: 'alimama/design/web/component/scrollbar/README.md',
			href: '#/design/web/component/scrollbar',
			prev: RETINA ? 'alimama/design/web/component/assets/滚动条@2x.png' : 'alimama/design/web/component/assets/滚动条.png'
		}, {
			name: '加载',
			name_en: 'Loading',
			role: [],
			path: 'alimama/design/web/component/loading/README.md',
			href: '#/design/web/component/loading',
			prev: RETINA ? 'alimama/design/web/component/assets/加载@2x.png' : 'alimama/design/web/component/assets/加载.png'
		}]
	}
})