/* global define */
define([
	'bower_components/zeroclipboard/dist/ZeroClipboard.js',
	'jquery', 'underscore', 'mock'
], function(
	ZeroClipboard,
	$, _, Mock
) {
	var tpl = Mock.heredoc(function() {
		/*!
		<div class="zero-clipboard">
			<span class="btn-clipboard btn-clipboard-hover">
				Copy
			</span>
		</div>
 		*/
	})

	return {
		init: function() {
			$('pre').before(tpl)

			// https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/instructions.md
			_.each($('.btn-clipboard'), function(item /*, index*/ ) {
				var client = new ZeroClipboard(item)
				client.on('copy', function(event) {
					var clipboard = event.clipboardData
					clipboard.setData('text/plain', $(item).parent().next().text())
				})
			})
		}
	}
})