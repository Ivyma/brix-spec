/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base', 'brix/event',
        './rules.tpl.js',
        'css!./rules.css'
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