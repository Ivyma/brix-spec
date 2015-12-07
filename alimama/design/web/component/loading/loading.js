/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './loading.tpl.js',
        'css!./loading.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Loading() {}

        _.extend(Loading.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Loading
    }
)