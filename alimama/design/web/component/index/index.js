/* global define, console */
define(
    [
        'jquery', 'underscore', 'mock',
        'brix/base', 'brix/event',
        'config/alimama/index', /*'config/alimama/mapped',*/
        'alimama/frame/download/download',
        './index.tpl.js',
        'css!./index.css'
    ],
    function(
        $, _, Mock,
        Brix, EventManager,
        CONSTANT, /*MAPPED,*/
        download,
        template
    ) {

        function Components() {}

        _.extend(Components.prototype, Brix.prototype, {
            options: {},
            init: function() {
                // name resp desc readme links
                this.data = {
                    BASICS: [],
                    COMPONENTS: CONSTANT.DESIGN.WEB.COMPONENT.children.slice(1)
                }
                _.each(this.data.COMPONENTS, function(item /*, index*/ ) {
                    item.prev = item.prev || Mock.Random.dataImage('128x128', '')
                })
                console.log(this.data)
            },
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)

                var manager = new EventManager('on-')
                manager.delegate(this.element, this)
            },
            download: download
        })

        return Components
    }
)