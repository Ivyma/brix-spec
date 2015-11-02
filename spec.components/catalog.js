/* global define */
define(['jquery', 'underscore'], function($, _) {
	return function(sidebar, headers, subs) {

		_.each($(':header' + ',' + headers), function(header /*, index*/ ) {
			var $header = $(header)
			var text = $.trim($header.text())
			$header.before(
				$('<a class="spec-anchor">').attr('name', text)
			)
		})
		// var hash = location.hash
		// location.hash = ''
		// location.hash = hash

		var $sidebar = $(sidebar).empty()
		var $headers = $(headers)

		_.each($headers, function(header /*, index*/ ) {
			var $header = $(header)
			var html = $header.html()
			var text = $.trim($header.text())
			
			var $item = $('<div class="sidebar-item">').appendTo($sidebar)
			$('<a>').html(html).appendTo($item)
				.attr('href', '#' + text)

			// 
			if (subs) {
				var $subs = $header.parent().find(subs)
				_.each($subs, function(sub /*, index*/ ) {
					var $sub = $(sub)
					var html = $sub.html()
					var text = $.trim($sub.text())
					
					var $item = $('<div class="sidebar-item-sub">').appendTo($sidebar)
					$('<a class="ellipsis">').html(html).appendTo($item)
						.attr('href', '#' + text)
				})
			}
		})

		$sidebar.on('click', '.sidebar-item', function(event) {
			$(event.currentTarget)
				.addClass('active')
				.siblings().removeClass('active')
		})
	}
})