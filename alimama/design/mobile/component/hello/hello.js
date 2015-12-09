/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './hello.tpl.js',
        'css!./hello.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Hello() {}

        _.extend(Hello.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Hello
    }
)