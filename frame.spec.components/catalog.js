/* global define */
define(
	[
		'jquery', 'underscore', 'mock',
		'frame.spec.components/sidebar'
	],
	function(
		$, _, Mock,
		Sidebar
	) {
		return function(bu, platform, nav) {
			var $sidebar = $('.sidebar').empty()
			var $tmp
			var groupTpl = Mock.heredoc(function() {
				/*!
					<div class="sidebar-group" data-topName="<%= topName %>">
						<div class="sidebar-top cursor">
							<span><%= topName %></span>
							<span class="minecraft-refactor-font fr icon-arrow fontsize-12 color-brand transition"></span>
						</div>
						<div class="sidebar-sub"></div>
					</div>
				 */
			})
			var itemTpl = Mock.heredoc(function() {
				/*!
					<div class="sidebar-item" data-resp="<%= respHighLight %>">
						<a href="<%= href %>">
							<%= subName %> 
							<small><%= subNameEn %></small>
						</a>
					</div>
				 */
			})
			groupTpl = _.template(groupTpl)
			itemTpl = _.template(itemTpl)
			_.each(Sidebar.SIDEBARS[bu][platform][nav], function(item /*, index*/ ) {
				$tmp = $sidebar
				if (item.sidebar_top) {
					$(groupTpl({
						topName: item.sidebar_top
					})).appendTo($tmp)

					$tmp = $sidebar.find('.sidebar-group[data-topName="' + item.sidebar_top + '"] .sidebar-sub')
				}
				_.each(item.sidebar_sub, function(item_sub) {
					$(itemTpl({
						href: item_sub.hash,
						subName: item_sub.name,
						subNameEn: item_sub.name_en,
						resp: item_sub.resp.replace(/_/, ' '),
						respHighLight: item_sub.resp.toLowerCase() || item_sub.resp_hide.toLowerCase()
					})).appendTo($tmp)
				})
			})

			$sidebar.find('.sidebar-top').click(function() {
				var $item = $(this).children('.minecraft-refactor-font')
				$item[$item.hasClass('down') ? 'removeClass' : 'addClass']('down').parent('.sidebar-top')
					.siblings().toggle('slow')
			})

			$sidebar.on('click', '.sidebar-item', function(event) {
				$(event.currentTarget)
					.addClass('active')
					.siblings().removeClass('active')
			})
		}
	})