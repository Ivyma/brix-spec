/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './field.tpl.js',
        'css!./field.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Field () {}

        _.extend( Field.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Field
    }
)