/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './message.tpl.js',
        'css!./message.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Message() {}

        _.extend(Message.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Message
    }
)