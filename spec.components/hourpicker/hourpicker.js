/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './hourpicker.tpl.js',
        'css!./hourpicker.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Hourpicker () {}

        _.extend( Hourpicker.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Hourpicker
    }
)