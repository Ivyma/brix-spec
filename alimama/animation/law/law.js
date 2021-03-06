/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './law.tpl.js',
        'css!./law.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Animation () {}

        _.extend( Animation.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Animation
    }
)