/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './dropdown.tpl.js',
        'css!./dropdown.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Dropdown () {}

        _.extend( Dropdown.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Dropdown
    }
)