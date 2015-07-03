/* global define, console */
define(
    [
        'jquery', 'underscore', 'mock',
        'brix/base',
        './components.tpl.js',
        'css!./components.css'
    ],
    function(
        $, _, Mock,
        Brix,
        template
    ) {

        var BASICS = [{
            name: 'Brix Loader',
            resp: 'brix-loader',
            desc: '组件加载器，负责管理组件的整个生命周期，包括加载、初始化、渲染和销毁。',
            readme: '',
            links: [
                ['GitHub', 'https://github.com/thx/brix-loader']
            ]
        }, {
            name: 'Brix Base',
            resp: 'brix-base',
            desc: '组件基类，<a href="https://github.com/thx/brix-loader/blob/master/src/brix/loader.js#L3">Brix Component Definition</a> 的最简实现。在编写 Brix Component Implement 时，建议从继承该实现开始。',
            readme: '',
            links: [
                ['GitHub', 'https://github.com/nuysoft/brix-base']
            ]
        }, {
            name: 'Brix Event',
            resp: 'brix-event',
            desc: '支持 bx-type 风格的事件模型，实现事件与与 DOM 结构的松耦合，提升可读性、可复用性和可测试性。',
            readme: '',
            links: [
                ['GitHub', 'https://github.com/nuysoft/brix-event']
            ]
        }]
        var COMPONENTS = [{
            name: '按钮 <small>Button</small>',
            resp: 'Button',
            prev: Mock.Random.dataImage('128x128', '128x128')
        }, {
            name: '复选框 <small>Checkbox</small>',
            resp: 'Checkbox',
            prev: Mock.Random.dataImage('128x128', '128x128')
        }, {
            name: '单选按钮 <small>Radio</small>',
            resp: 'Radio',
            prev: Mock.Random.dataImage('128x128', '128x128')
        }, {
            name: '下拉框 <small>Dropdown</small>',
            resp: 'Dropdown',
            prev: Mock.Random.dataImage('128x128', '128x128')
        }]

        function Components() {}
        Components.BASICS = BASICS
        Components.COMPONENTS = COMPONENTS

        _.extend(Components.prototype, Brix.prototype, {
            options: {},
            init: function() {
                // name resp desc readme links
                this.data = {
                    BASICS: BASICS,
                    COMPONENTS: COMPONENTS
                }
                _.each(this.data.COMPONENTS, function(item /*, index*/ ) {
                    item.preview = Mock.Random.dataImage('128x128', '')
                })
                console.log(this.data)
            },
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Components
    }
)