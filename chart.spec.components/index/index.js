/* global define, console */
define(
    [
        'jquery', 'underscore', 'mock',
        'brix/base', 'brix/event',
        'chart.spec.components/constant',
        //'../brand/brand.js',
        './index.tpl.js',
        'css!./index.css'
    ],
    function(
        $, _, Mock,
        Brix, EventManager,
        Constant,
        //Brand,
        template
    ) {

        function Components() {}
        _.extend(Components.prototype, Brix.prototype, {
            options: {},
            init: function() {
                // name resp desc readme links
                this.data = {
                    BASICS: Constant.BASICS,
                    COMPONENTS: Constant.all
                }
                _.each(this.data.COMPONENTS, function(item /*, index*/ ) {
                    item.prev = item.prev || Mock.Random.dataImage('128x128', '')
                })
                //console.log(this.data)
            },
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)

                var manager = new EventManager('on-')
                manager.delegate(this.element, this)
            }
            //download: Brand.prototype.download
        })

        return Components
    }
)