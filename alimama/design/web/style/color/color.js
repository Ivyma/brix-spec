/* global define */
define(
    [
        'jquery', 'underscore', 'highlightjs',
        'brix/base',
        './color.tpl.js',
        'css!./color.css'
    ],
    function(
        $, _, hljs,
        Brix,
        template
    ) {
        function CSS() {}

        _.extend(CSS.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                var html = _.template(template)(this.data)
                $(this.element).append(html)

                /* jshint unused:false */
                $(this.element).find('pre code').each(function(index, code) {
                    hljs.highlightBlock(code)
                })
            }
        })
        return CSS
    }
)