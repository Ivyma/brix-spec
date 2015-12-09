/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './scrollbar.tpl.js',
        'css!./scrollbar.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Scrollbar () {}

        _.extend( Scrollbar.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Scrollbar
    }
)