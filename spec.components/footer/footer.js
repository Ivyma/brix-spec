/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './footer.tpl.js',
        'css!./footer.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Footer () {}

        _.extend( Footer.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Footer
    }
)