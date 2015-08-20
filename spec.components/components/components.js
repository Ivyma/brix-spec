/* global define, console */
define(
    [
        'jquery', 'underscore', 'mock',
        'brix/base',
        'spec.components/constant',
        './components.tpl.js',
        'css!./components.css'
    ],
    function(
        $, _, Mock,
        Brix,
        Constant,
        template
    ) {

        function Components() {}

        _.extend(Components.prototype, Brix.prototype, {
            options: {},
            init: function() {
                // name resp desc readme links
                this.data = {
                    BASICS: Constant.BASICS,
                    COMPONENTS: Constant.COMPONENTS
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
            }
        })

        return Components
    }
)