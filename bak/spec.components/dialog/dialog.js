/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './dialog.tpl.js',
        'css!./dialog.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Dialog () {}

        _.extend( Dialog.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Dialog
    }
)