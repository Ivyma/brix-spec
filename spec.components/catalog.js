/* global define */
define(['jquery', 'underscore'], function($, _) {
	return function(sidebar, headers, subs) {
		var $sidebar = $(sidebar).empty()
		var $headers = $(headers)

		_.each($headers, function(header /*, index*/ ) {
			var $header = $(header)
			var html = $header.html()
			var text = $header.text()
			$header.before(
				$('<a class="spec-anchor">').attr('name', text)
			)
			var $item = $('<div class="sidebar-item">').appendTo($sidebar)
			$('<a>').html(html).appendTo($item)
				.attr('href', '#' + text)

			// 
			if (subs) {
				var $subs = $header.parent().find(subs)
				_.each($subs, function(sub /*, index*/ ) {
					var $sub = $(sub)
					var html = $sub.html()
					var text = $sub.text()
					$sub.before(
						$('<a class="spec-anchor">').attr('name', text)
					)
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