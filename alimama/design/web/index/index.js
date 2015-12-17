/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base', 'brix/event',
        './index.tpl.js',
        'css!./index.css',
        'css!../assets/landing/landing.css'
    ],
    function(
        $, _,
        Brix, EventManager,
        template
    ) {

        function design() {}

        _.extend(design.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                var html = _.template(template)
                $(this.element).append(html)

                var manager = new EventManager('on-')
                manager.delegate(this.element, this)
            }
        })

        return design
    }
)