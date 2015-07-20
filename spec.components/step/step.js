/* global define */
define(
    [
        'jquery', 'underscore',
        'components/base', 'brix/event',
        './step.tpl.js',
        'css!./step.css'
    ],
    function(
        $, _,
        Brix, EventManager,
        template
    ) {
        function Step() {}

        _.extend(Step.prototype, Brix.prototype, {
            options: {
                cursor: 0,
                total: 3
            },
            init: function() {},
            render: function() {
                var manager = new EventManager()

                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)

                manager.delegate(this.element, this)

                this.move(undefined, 0)
            },
            move: function(event, dir) {
                var cursor = this.options.cursor
                var total = this.options.total

                var lis = $('ol.steps li.step', this.element)
                lis.eq(cursor).removeClass('active')

                cursor = (cursor + dir) % this.options.total
                lis.eq(cursor).addClass('active')

                var next = $('.btn-step-next', this.element)
                var prev = $('.btn-step-prev', this.element)
                next.html(cursor === total - 1 ? '完成' : '下一步')
                prev[cursor === 0 ? 'hide' : 'show']()

                this.options.cursor = cursor
            },
            next: function(event) {
                this.move(event, 1)
            },
            prev: function(event) {
                this.move(event, -1)
            }
        })

        return Step
    }
)