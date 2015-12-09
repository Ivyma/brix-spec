/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './breadcrumb.tpl.js',
        'css!./breadcrumb.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Breadcrumb () {}

        _.extend( Breadcrumb.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Breadcrumb
    }
)