/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './overlay.tpl.js',
        'css!./overlay.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Overlay () {}

        _.extend( Overlay.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Overlay
    }
)