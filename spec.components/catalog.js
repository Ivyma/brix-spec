define(['jquery', 'underscore'], function($, _) {
	return function(sidebar, headers) {
		var $sidebar = $(sidebar).empty()
		var $headers = $(headers)
		_.each($headers, function(header, index) {
			var $header = $(header)
			var text = $header.text()
			$header.before(
				$('<a class="spec-anchor">').attr('name', text)
			)
			var $item = $('<div class="sidebar-item">').appendTo($sidebar)
			$('<a>').text(text).appendTo($item)
				.attr('href', '#' + text)
		})

		$sidebar.on('click', '.sidebar-item', function(event) {
			$(event.currentTarget)
				.addClass('active')
				.siblings().removeClass('active')
		})
	}
})