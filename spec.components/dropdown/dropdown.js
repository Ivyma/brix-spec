/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/event', 'components/dropdown',
        './dropdown.tpl.js',
        'css!./dropdown.css'
    ],
    function(
        $, _,
        EventManager, Base,
        template
    ) {
        function Dropdown() {}

        _.extend(Dropdown.prototype, Base.prototype, {
            options: {
                value: '',
                data: [],
                searchbox: false,
                popover: false,
                popover_width: 200
            },
            // init: function() {},
            render: function() {
                var that = this
                var manager = new EventManager()

                // { data, label value }
                var data = _.extend({}, this.options, {
                    data: this.options.data,
                    disabled: this.options.disabled || this.$element.prop('disabled')
                }, function() {
                    // data-value
                    if (that.options.value) that.$element.val(that.options.value)

                    var selectedIndex = that.$element.prop('selectedIndex')
                    var selectedOption = $(that.element.options[selectedIndex !== -1 ? selectedIndex : 0])
                    return {
                        label: selectedOption.text(),
                        value: selectedOption.attr('value')
                    }
                }())

                this.$relatedElement = $(
                    _.template(template)(data)
                ).insertAfter(this.$element)

                manager.delegate(this.$element, this)
                manager.delegate(this.$relatedElement, this)

                Loader.boot(this.$relatedElement)

                // this._responsive()

                this._autoHide()
            }
        })

        return Dropdown
    }
)