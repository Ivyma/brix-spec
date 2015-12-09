/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './searchbox.tpl.js',
        'css!./searchbox.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function SearchBox () {}

        _.extend( SearchBox.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return SearchBox
    }
)