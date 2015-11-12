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
                var fragment = uri.fragment()
                var furi = URI(fragment)
                var segment = furi.segment()
                // var query = furi.query(true)
                // var name = query.name.toLowerCase()
                var path = segment[0]
                path = {
                    'readme': 'design',
                    'components' : 'design',
                    'css': 'design'
                }[path] || path

                var items = $(this.element).find('a')
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
            }
        })

        return Header
    }
)