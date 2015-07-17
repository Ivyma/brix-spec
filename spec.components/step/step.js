/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './step.tpl.js',
        'css!./step.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Step () {}

        _.extend( Step.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Step
    }
)