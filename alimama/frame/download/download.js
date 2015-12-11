/* global define, document */
define(
	[
		'jquery',
		'components/dialog/position',
		'css!./download.css'
	],
	function(
		$,
		position
	) {
		return function download(event) {
			var overlay = $(event.currentTarget).next().show()
			var offset = position(event.currentTarget, overlay, 'bottom', 'right')
			var relatedMarginLeft = parseInt(overlay.css('margin-left'), 10) || 0
			var relatedMarginTop = parseInt(overlay.css('margin-top'), 10) || 0
			$(overlay).show().offset({
				left: offset.left + relatedMarginLeft,
				top: offset.top + relatedMarginTop
			})

			// auto hide
			var type = 'click.download_list_autohide_' + this.clientId
			$(document.body).off(type)
				.on(type, function(event) {
					if (overlay.has(event.target).length) return
					$(document.body).off(type)
					overlay.hide()
				})
		}
	}
)