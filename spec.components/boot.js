/* global window, require, console */
require(['jquery', 'underscore', 'brix/loader'], function($, _, Loader) {
	window.Loader = Loader

	require(['http://g-assets.daily.taobao.net/thx/brix-release/0.0.22/bootstrap/dist/js/bootstrap.js'])

	/* jshint unused:false */
	Loader.boot(function() {
		console.log('done!')
	}, function(error, instance, index, count) {
		var nprogress = Loader.query('components/nprogress')
		if (nprogress.length) nprogress.set((index) / count)
	})
})