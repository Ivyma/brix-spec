/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './editable.tpl.js',
        'css!./editable.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Editable () {}

        _.extend( Editable.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Editable
    }
)