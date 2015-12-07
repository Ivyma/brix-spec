/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './textarea.tpl.js',
        'css!./textarea.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Textarea () {}

        _.extend( Textarea.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Textarea
    }
)