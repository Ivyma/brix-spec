/* global define */
define([
	'brix/loader',
	'bower_components/zeroclipboard/dist/ZeroClipboard.js',
	'jquery', 'underscore', 'mock'
], function(
	Loader,
	ZeroClipboard,
	$, _, Mock
) {
	var tpl = Mock.heredoc(function() {
		/*!
		<div class="zero-clipboard">
			<span class="btn-clipboard btn-clipboard-hover" 
				bx-name="components/popover" 
				data-content="<%= content %>" 
				data-placement="top" data-width="130">
				Copy
			</span>
		</div>
 		*/
	})

	var tips = ['Copy to clipboard', 'Copied!']

	return {
		init: function() {
			$('pre').before(_.template(tpl)({
				content: tips[0]
			}))

			// https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/instructions.md
			_.each($('.btn-clipboard'), function(item /*, index*/ ) {
				Loader.boot(item)
				$(item).mouseenter(function() {
					Loader.query(item).content(tips[0])
				})

				var client = new ZeroClipboard(item)
				client.on('copy', function(event) {
					var clipboard = event.clipboardData
					var content = $(item).parent().next().text()
					clipboard.setData('text/plain', content)

					Loader.query(item).content(tips[1])
				})
			})
		}
	}
})