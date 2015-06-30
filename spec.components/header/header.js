/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './header.tpl.js',
        'css!./header.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Header () {}

        _.extend( Header.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Header
    }
)