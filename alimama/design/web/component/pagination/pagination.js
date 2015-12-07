/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './pagination.tpl.js',
        'css!./pagination.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Pagination () {}

        _.extend( Pagination.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Pagination
    }
)