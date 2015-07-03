/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './button.tpl.js',
        'css!./button.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Button () {}

        _.extend( Button.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Button
    }
)