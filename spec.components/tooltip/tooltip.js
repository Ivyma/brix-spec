/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './tooltip.tpl.js',
        'css!./tooltip.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Tooltip() {}

        _.extend(Tooltip.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Tooltip
    }
)