/* global define, document, location */
define(
    [
        'jquery', 'underscore', 'URIjs/URI',
        'brix/base', 'brix/event',
        'frame.spec.components/sidebar', // 'spec.components/constant',
        './header.tpl.js',
        'css!./header.css'
    ],
    function(
        $, _, URI,
        Brix, EventManager,
        Constant,
        template
    ) {
        function Header() {}

        _.extend(Header.prototype, Brix.prototype, {
            options: {},
            init: function() {
                this.data = Constant
            },
            render: function() {
                var html = _.template(template)(this.data)
                $(this.element).append(html)

                var uri = new URI(location.href)
                var fragment = uri.fragment()
                var furi = URI(fragment)
                var segment = furi.segment()
                    // var query = furi.query(true)
                    // var name = query.name.toLowerCase()
                var path = segment[0]
                path = {
                    'readme': 'css',
                    'components': 'css'
                }[path] || path

                var items = $(this.element).find('ul.navbar-nav > li > a')
                _.each(items, function(item /*, index*/ ) {
                    var $item = $(item)
                    var href = $item.attr('href')
                    if (href.indexOf(path) >= 0) $item.parent('li').addClass('active')
                })

                $('.nav').on('click', 'li', function(event) {
                    $(event.currentTarget)
                        .addClass('active')
                        .siblings().removeClass('active')
                })

                var manager = new EventManager('on-')
                manager.delegate(this.element, this)
            },
            /* jshint unused:false */
            toggleNavbar: function(event, navbar) {
                var $nav = $(navbar || '#minecraft-header-navbar-collapse-phone')
                $nav.toggleClass('collapse')

                $(document.body).toggleClass('modal-open')
            },
            toggleNavDropdown: function(event) {
                var $target = $(event.currentTarget)
                $target.closest('li').toggleClass('open')
            },
            toggleBrand: function(event) {
                var $target = $(event.currentTarget)
                $target.closest('.dropdown').toggleClass('open')
            },
            selectBrand: function(event) {
                var $target = $(event.currentTarget)
                var $li = $target.closest('li')
                var $dropdown = $target.closest('.dropdown')
                var value = $target.html()

                $dropdown.find('.dropdown-toggle-label').html(value)
                $dropdown.toggleClass('open')
                $li.addClass('active')
                    .siblings().removeClass('active')
            }
        })

        return Header
    }
)