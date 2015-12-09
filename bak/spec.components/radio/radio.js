/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './radio.tpl.js',
        'css!./radio.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Radio () {}

        _.extend( Radio.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Radio
    }
)