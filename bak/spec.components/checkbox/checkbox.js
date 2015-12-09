/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './checkbox.tpl.js',
        'css!./checkbox.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Checkbox() {}

        _.extend(Checkbox.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Checkbox
    }
)