/* global define */
define(
    [
        'jquery', 'underscore', 'mock',
        'brix/base',
        './table.tpl.js',
        'css!./table.css'
    ],
    function(
        $, _, Mock,
        Brix,
        template
    ) {
        function Table () {}

        _.extend( Table.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Table
    }
)