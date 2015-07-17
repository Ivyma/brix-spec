/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './calendar.tpl.js',
        'css!./calendar.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Calendar () {}

        _.extend( Calendar.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Calendar
    }
)