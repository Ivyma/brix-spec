/* global define */
define(
    [
        'jquery', 'underscore', /*'mock',*/
        'brix/base',
        './tab.tpl.js',
        'css!./tab.css'
    ],
    function(
        $, _, /*Mock,*/
        Brix,
        template
    ) {
        function Tab() {}

        _.extend(Tab.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Tab
    }
)