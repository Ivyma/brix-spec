/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './progress.tpl.js',
        'css!./progress.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Progress () {}

        _.extend( Progress.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Progress
    }
)