/* global define */
define(
    [
        'jquery', 'underscore', 'moment',
        'brix/base',
        'components/hourpicker',
        './hourpicker.tpl.js',
        'css!./hourpicker.css'
    ],
    function(
        $, _, moment,
        Brix,
        HourPickerBase,
        template
    ) {
        function Hourpicker() {}

        _.extend(Hourpicker.prototype, Brix.prototype, HourPickerBase.prototype, {
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
            init: function() {
                this.$element = $(this.element)
            },
            render: function() {
                this.data = this.data || _.extend({}, this.options)
                var html = _.template(template)(this.data)
                $(this.element).append(html)

                var hours = _.range(0, 24)
                var mapped = {
                    12345: hours,
                    60: hours
                }
                this.val(mapped)
            },
            _syncShortcut: function() {

            }
        })

        return Hourpicker
    }
)