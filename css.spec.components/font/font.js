/* global define */
define(
    [
        'jquery', 'underscore', 'highlightjs',
        'brix/base',
        'spec.components/constant',
        './font.tpl.js',
        'css!./font.css'
    ],
    function(
        $, _, hljs,
        Brix,
        Constant,
        template
    ) {
        function CSS() {}

        _.extend(CSS.prototype, Brix.prototype, {
            options: {},
            init: function() {
                this.data = Constant
            },
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