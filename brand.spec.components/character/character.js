/* global define, document */
define(
    [
        'jquery', 'underscore',
        'brix/base', 'brix/event',
        'components/dialog/position',
        './character.tpl.js',
        'css!./character.css'
    ],
    function(
        $, _,
        Brix, EventManager,
        position,
        template
    ) {
        function Brand() {}

        _.extend(Brand.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                var manager = new EventManager('on-')
                var html = _.template(template)(this.data)
                $(this.element).append(html)

                manager.delegate(this.element, this)
            },
            download: function(event) {
                var overlay = $(event.currentTarget).next().show()
                var offset = position(event.currentTarget, overlay, 'bottom', 'right')
                var relatedMarginLeft = parseInt(overlay.css('margin-left'), 10) || 0
                var relatedMarginTop = parseInt(overlay.css('margin-top'), 10) || 0
                $(overlay).show().offset({
                    left: offset.left + relatedMarginLeft,
                    top: offset.top + relatedMarginTop
                })

                // auto hide
                var type = 'click.download_list_autohide_' + this.clientId
                $(document.body).off(type)
                    .on(type, function(event) {
                        if (overlay.has(event.target).length) return
                        $(document.body).off(type)
                        overlay.hide()
                    })
            }
        })

        return Brand
    }
)