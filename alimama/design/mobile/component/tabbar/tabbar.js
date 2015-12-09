/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './tabbar.tpl.js',
        'css!./tabbar.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        /*
            ### 数据
                {}
            ### 选项
                TODO
            ### 属性
                TODO
            ### 方法
                TODO
            ### 事件
                TODO
            ===

            ### 公共选项
                data template css
            ### 公共属性
                element relatedElement 
                moduleId clientId parentClientId childClientIds 
                data template css
            ### 公共方法
                .render()
            ### 公共事件
                ready destroyed

        */
        function Tabbar () {}

        _.extend( Tabbar.prototype, Brix.prototype, {
            options: {},
            init: function() {
                // 支持自定义 HTML 模板 template
                template = this.options.template || template
                // 支持自定义 CSS 样式
                if (this.options.css) require(['css!' + this.options.css])
            },
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
                alert(1)
            }
        })

        return Tabbar
    }
)
