/* global define */
/*
    https://github.com/amoffat/bootstrap-application-wizard
 */
define(
    [
        'jquery', 'underscore',
        'components/base', 'brix/event',
        './wizard.tpl.js',
        'css!./wizard.css'
    ],
    function(
        $, _,
        Brix, EventManager,
        template
    ) {
        function Wizard() {}

        _.extend(Wizard.prototype, Brix.prototype, {
            options: {
                cursor: 0,
                total: 3,
                horizontal: true, // 水平
                vertical: false // 垂直
            },
            init: function() {
                this.$element = $(this.element)
                if (this.$element.hasClass('wizard-vertical')) {
                    this.options.horizontal = false
                    this.options.vertical = true
                }
            },
            render: function() {
                var manager = new EventManager()

                this.data = this.data || _.extend({}, this.options)
                    // var html = _.template(template)(this.data)
                    // $(this.element).append(html)

                manager.delegate(this.element, this)

                this.move(undefined, 0)
            },
            move: function(event, dir) { /* jshint unused:false */
                if (this.options.horizontal) {
                    var cursor = this.options.cursor
                    var total = this.options.total
                    cursor = (cursor + dir) % this.options.total

                    // wizard-nav
                    var lis = $('ol.wizard-nav li.item', this.element)
                    lis.removeClass('active')
                        .eq(cursor).addClass('active')

                    // wizard-cards
                    var cards = $('.wizard-cards .wizard-card', this.element)
                    cards.hide()
                        .eq(cursor).show()

                    var next = $('.wizard-next', this.element)
                    var back = $('.wizard-back', this.element)
                    next.html(cursor === total - 1 ? '完成' : '下一步')
                    back[(cursor === 0 || cursor === total - 1) ? 'hide' : 'show']()

                    this.options.cursor = cursor
                }

                return this
            },
            next: function(event) {
                if (this.options.horizontal) {
                    this.move(event, 1)
                }

                if (this.options.vertical) {
                    $(event.currentTarget)
                        .parents('.wizard-card').removeClass('open')
                        .next().addClass('open')
                }

                return this
            },
            back: function(event) {
                this.move(event, -1)
            },
            expand: function(event) {
                if (this.options.vertical) {
                    $(event.currentTarget)
                        .parents('.wizard-card').addClass('open')
                        .siblings().removeClass('open')
                }
                return this
            }
        })

        return Wizard
    }
)