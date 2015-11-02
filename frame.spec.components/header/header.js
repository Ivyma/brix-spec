/* global define, location */
define(
    [
        'jquery', 'underscore', 'URIjs/URI',
        'brix/base',
        'spec.components/constant',
        './header.tpl.js',
        'css!./header.css'
    ],
    function(
        $, _, URI,
        Brix,
        Constant,
        template
    ) {
        function Header() {}

        _.extend(Header.prototype, Brix.prototype, {
            options: {},
            init: function() {
                this.data = {
                    COMPONENTS: Constant.COMPONENTS
                }
            },
            render: function() {
                var html = _.template(template)(this.data)
                $(this.element).append(html)


                var uri = new URI(location.href)
                var path = uri.filename()
                path = {
                    'readme.html': 'components.html'
                }[path] || path

                var items = $(this.element).find('a')
                _.each(items, function(item /*, index*/ ) {
                    var $item = $(item)
                    var href = $item.attr('href')
                    if (href === path) $item.parent('li').addClass('active')
                })
            }
        })

        return Header
    }
)