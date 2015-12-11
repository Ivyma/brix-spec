/* global define, location */
define(
    [
        'jquery', 'underscore', 'mock', /*'director',*/ 'URIjs/URI',
        'config/alimama/index' /*, 'config/alimama/mapped'*/
    ],
    function(
        $, _, Mock, /*Router,*/ URI,
        CONSTANT /*, MAPPED*/
    ) {

        var tpl = Mock.heredoc(function() {
            /*!
            <% if (PLATFORM) { %>
                <!-- <%= JSON.stringify( PLATFORM ) %> -->
                <div class="pc-wireless text-align-center fontsize-0 mb20">
                    <div class="left-ellipse inline-block relative cursor <%= PLATFORM.name === 'WEB' ? 'active' : '' %>">
                        <a href="<%= GROUP.WEB.href %>">
                            <span class="minecraft-refactor-font icon-pc color-fff fontsize-20"></span>
                        </a>
                    </div>
                    <div class="right-ellipse inline-block relative cursor <%= PLATFORM.name === 'MOBILE' ? 'active' : '' %>">
                        <a href="<%= GROUP.MOBILE.href %>">
                            <span class="minecraft-refactor-font icon-wireless color-fff fontsize-20"></span>
                        </a>
                    </div>
                </div><!-- pc-wireless -->
            <% } %>
            <% _.each(LIST, function(item1, index) { %>
                <div class="sidebar-group">
                <% if (_.indexOf(item1.role, 'group') !== -1 ) { %>
                    <div class="sidebar-top cursor">
                        <span><%= item1.name %></span>
                        <span class="minecraft-refactor-font fr icon-arrow fontsize-12 color-brand transition"></span>
                    </div>
                    <div class="sidebar-sub">
                        <% _.each(item1.children, function(item2, index) { %>
                            <div class="sidebar-item">
                                <a href="<%= item2.href %>">
                                    <%= item2.name %> 
                                    <small><%= item2.name_en %></small>
                                </a>
                            </div>
                        <% }) %>
                    </div>
                <% } else { %>
                    <div class="sidebar-item">
                        <a href="<%= item1.href %>">
                            <%= item1.name %> 
                            <small><%= item1.name_en %></small>
                        </a>
                    </div>
                <% } %>
                </div>
            <% }) %>
             */
        })
        tpl = _.template(tpl)

        return function() {
            var uri = new URI(location.href)
            var fragment = uri.fragment() // hash witout leading #
            if (!fragment) return
            var furi = new URI(fragment)
            var segment = furi.segment() // directories
                // segment[0] group design|brand|animation|css|all|readme
                // segment[1] page  colors|radio|brand_story|rules

            var group = segment[0]
            var platform = segment[1]
            var GROUP = CONSTANT[group.toUpperCase()]
            var PLATFORM
            if (GROUP.device) {
                if (!/web|mobile/i.test(platform)) {
                    platform = 'web'
                }
                _.each(GROUP.children, function(item /*, index*/ ) {
                    if (item.name_en == platform.toUpperCase()) PLATFORM = item
                })
            }
            var LIST = PLATFORM ? PLATFORM.children : GROUP.children

            var $sidebar = $('.sidebar').empty().html(
                tpl({
                    GROUP: GROUP,
                    PLATFORM: PLATFORM,
                    LIST: LIST
                })
            )

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