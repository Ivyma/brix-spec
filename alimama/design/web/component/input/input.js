/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './input.tpl.js',
        'css!./input.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Input () {}

        _.extend( Input.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Input
    }
)