/* global window, require, console */
require.config({
	paths: {
		mock: 'bower_components/mockjs/dist/mock',
	}
})
require(['jquery', 'underscore', 'brix/loader'], function($, _, Loader) {
	window.Loader = Loader

	/* jshint unused:false */
	Loader.boot(function() {
		console.log(new Date(), 'done!')
	}, function(error, instance, index, count) {
		var nprogress = Loader.query('components/nprogress')
		if (nprogress.length) nprogress.set((index) / count)
	})
})