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
        function Dropdown() {}

        _.extend(Dropdown.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                var html = _.template(template)(this.options)
                $(this.element).append(html)
            }
        })

        return Dropdown
    }
)