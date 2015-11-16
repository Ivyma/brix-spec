/* global define */
define(['jquery', 'underscore', 'frame.spec.components/sidebar'], function($, _, Sidebar) {
	return function(bu, platform, nav) {

		var $$sidebar = $sidebar = $('.sidebar').empty()
		var top_tpl = '<div class="sidebar-group" data-topName="<%= topName %>"><div class="sidebar-top cursor"><span><%= topName %></span><span class="minecraft-refactor-font fr icon-arrow fontsize-12 color-brand transition"></span></div><div class="sidebar-sub"></div></div>'

		var tpl = '<div class="sidebar-item" data-resp="<%= respHighLight %>"><a href="main.html#<%= href %>"><%= subName %> <small><%= resp %></small></a></div>'
		tpl = _.template(tpl)
		top_tpl = _.template(top_tpl)
		_.each(Sidebar.SIDEBARS[bu][platform][nav], function(item, index) {
			$$sidebar = $sidebar
			if (item.sidebar_top) {
				$(top_tpl({
					topName: item.sidebar_top
				})).appendTo($$sidebar)

				$$sidebar = $sidebar.find('.sidebar-group[data-topName="' + item.sidebar_top + '"] .sidebar-sub')
			}
			_.each(item.sidebar_sub, function(item_sub) {
				$(tpl({
					href: item_sub.href,
					subName: item_sub.name,
					resp: item_sub.resp.replace(/_/,' '),
					respHighLight: item_sub.resp.toLowerCase() || item_sub.resp_hide.toLowerCase()
				})).appendTo($$sidebar)
			})
		})

		$sidebar.find('.sidebar-top').click(function(){
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