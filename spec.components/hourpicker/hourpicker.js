/* global define */
define(
    [
        'jquery', 'underscore', 'moment',
        'brix/base',
        './hourpicker.tpl.js',
        'css!./hourpicker.css'
    ],
    function(
        $, _, moment,
        Brix,
        template
    ) {
        function Hourpicker () {}

        _.extend( Hourpicker.prototype, Brix.prototype, {
            options: {
                utcOffset: function() {
                    var utcOffset = moment().utcOffset() / 60
                    var abs = Math.abs(utcOffset)
                    var result = abs < 10 ? '0' + abs : abs
                    result = utcOffset < 0 ? '-' + result : '+' + result
                    result += ':00'
                    return result
                }()
            },
            init: function() {},
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)
            }
        })

        return Hourpicker
    }
)