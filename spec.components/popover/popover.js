/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './popover.tpl.js',
        'css!./popover.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Popover () {}

        _.extend( Popover.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Popover
    }
)