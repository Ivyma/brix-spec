/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './readme.tpl.js',
        'css!./readme.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Readme() {}

        _.extend(Readme.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Readme
    }
)