/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './searchbar.tpl.js',
        'css!./searchbar.css'
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
        function Searchbar () {}

        _.extend( Searchbar.prototype, Brix.prototype, {
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
                this.events();
            },
            events :function(){
                $('.search_input').on('focus',function(){
                    $('.search_box').addClass('active'); 
                }); 
                $('.search_input').on('input',function(e){
                    var val = $.trim($(this).val());
                    if(val != ''){
                        $('.button').show(); 
                        $(this).parents('.content-wrap').find('.suggestList').show();
                    }else{
                        $('.button').hide(); 
                        $(this).parents('.content-wrap').find('.suggestList').hide();
                    }
                });
                $('.typeChoose').on('click',function(){
                    if($(this).attr('isshow')=='false'){
                        $('.toggle').show(); 
                        $(this).attr('isshow','true');
                    }else{
                        $('.toggle').hide(); 
                        $(this).attr('isshow','false');
                    } 
                });
            }
        })

        return Searchbar
    }
)
