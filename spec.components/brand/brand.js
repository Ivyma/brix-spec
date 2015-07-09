/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './brand.tpl.js',
        'css!./brand.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Brand() {}

        _.extend(Brand.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Brand
    }
)