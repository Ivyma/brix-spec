/* global define, location */
define(
    [
        'jquery', 'underscore', 'URIjs/URI',
        'brix/base',
        './header.tpl.js',
        'css!./header.css'
    ],
    function(
        $, _, URI,
        Brix,
        template
    ) {
        function Header() {}

        _.extend(Header.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)


                var uri = new URI(location.href)
                var path = uri.path().slice(1)
                path = {
                    'readme.html': 'components.html'
                }[path] || path

                var items = $(this.element).find('a')
                _.each(items, function(item /*, index*/ ) {
                    var $item = $(item)
                    var href = $item.attr('href')
                    if (href === path) $item.addClass('active')
                })
            }
        })

        return Header
    }
)