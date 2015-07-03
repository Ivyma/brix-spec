/* global define */
define(
    [
        'jquery', 'underscore', 'highlightjs', /* 'mock', */
        'brix/base',
        './css.tpl.js',
        'css!./css.css'
    ],
    function(
        $, _, hljs, /* Mock, */
        Brix,
        template
    ) {
        function CSS() {}

        _.extend(CSS.prototype, Brix.prototype, {
            options: {},
            init: function() {
                // #FA6419 #E65C17 #484340 #
                this.data = {
                    COLORS: [
                        // 品牌色、品牌色 hover、侧导航、表格hover
                        ['联盟', '#FA6419', '#E65C17', '#443F3C', '#FAF1ED'],
                        ['直通车', '#F78400', '#E37900', '#42403C', '#FAF3EB'],
                        ['Tanx', '#50B347', '#479E3F', '#3C433C', '#F0F6EF'],
                        ['钻石展位', '#4A7BF7', '#4471E3', '#3C404A', '#F0F3FA'],
                        ['易传媒', '#6363E6', '#5A5AD1', '#3F3F49', '#F1F1F9'],
                        ['DMP', '#894FC4', '#7B46B0', '#48484E', '#F3F0F7'],
                    ],
                    FONT_SIZES: ['20px', '16px', '14px', '12px'],
                    FONT_FAMILIES: ["'Microsoft YaHei'", "'微软雅黑'", "'华文细黑'", "Georgi", "'Times New Roman'", "Aria", "sans-serif"]
                }
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