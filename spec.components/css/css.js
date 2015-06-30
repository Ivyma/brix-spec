/* global define */
define(
    [
        'jquery', 'underscore', 'highlightjs', 'mock',
        'brix/base',
        './css.tpl.js',
        'css!./css.css'
    ],
    function(
        $, _, hljs, Mock,
        Brix,
        template
    ) {
        function CSS() {}

        _.extend(CSS.prototype, Brix.prototype, {
            options: {},
            init: function() {
                this.data = {
                    COLORS: ['#000000', '#333333', '#666666', '#999999', '#4D7FFF', '#9561F0', '#68499E', '#339966', '#56abe4', '#428BCA', '#ED4242', '#16C98D', '#2378FF', '#FF6600'],
                    BACKGROUND_COLORS: ['#000000', '#333333', '#666666', '#999999', '#4D7FFF', '#9561F0', '#68499E', '#339966', '#56abe4', '#428BCA', '#ED4242', '#16C98D', '#2378FF', '#FF6600'],
                    BACKGROUND_COLORS_HOVER: [
                        ['#1ABC9C', '#16A085'],
                        ['#2ECC71', '#21AE60'],
                        ['#3498DB', '#2980B9'],
                        ['#9B59B6', '#8E44AD']
                    ],
                    FONT_SIZES: ['20px', '16px', '14px', '12px'],
                    FONT_FAMILIES: ["'Microsoft YaHei'", "'微软雅黑'", "'华文细黑'", "Georgi", "'Times New Roman'", "Aria", "sans-serif"]
                }
                this.data = Mock.mock({
                    'COLORS|20': ['@color'],
                    'BACKGROUND_COLORS|20': ['@color'],
                    'BACKGROUND_COLORS_HOVER|20': [
                        ['@color', '@color']
                    ],
                    FONT_SIZES: ['20px', '16px', '14px', '12px'],
                    FONT_FAMILIES: ["'Microsoft YaHei'", "'微软雅黑'", "'华文细黑'", "Georgi", "'Times New Roman'", "Aria", "sans-serif"]
                })
            },
            render: function() {
                this.data = this.data || _.extend({}, this.options)
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