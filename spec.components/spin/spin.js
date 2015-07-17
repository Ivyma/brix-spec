/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './spin.tpl.js',
        'css!./spin.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Spin () {}

        _.extend( Spin.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Spin
    }
)