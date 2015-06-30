/* global define, console */
define(
    [
        'jquery', 'underscore', 'mock',
        'brix/base',
        './components.tpl.js',
        'css!./components.css'
    ],
    function(
        $, _, Mock,
        Brix,
        template
    ) {
        function Components() {}

        _.extend(Components.prototype, Brix.prototype, {
            options: {},
            init: function() {
                this.data = {
                    BASICS: [],
                    COMPONENTS: [{
                        name: 'Dropdown',
                    }, {
                        name: 'Pagination',
                    }, {
                        name: 'DatePicker',
                    }, {
                        name: 'DatePickerWrapper',
                    }, {
                        name: 'Dialog',
                    }, {
                        name: 'Table',
                    }, {
                        name: 'Popover',
                    }, {
                        name: 'Uploader',
                    }, {
                        name: 'Validation',
                    }, {
                        name: 'AreaPicker',
                    }, {
                        name: 'HourPicker',
                    }, {
                        name: 'ChartxWrapper',
                    }, {
                        name: 'Suggest',
                    }, {
                        name: 'TagInput',
                    }, {
                        name: 'Tree',
                    }, {
                        name: 'ColorPicker',
                    }, {
                        name: 'Editor',
                    }, {
                        name: 'Editable',
                    }, {
                        name: 'Spin',
                    }, {
                        name: 'Countdown',
                    }, {
                        name: 'Sidebar',
                    }, {
                        name: 'Chart',
                    }, {
                        name: 'Imager',
                    }, {
                        name: 'Ellipsis',
                    }]
                }
                this.data.BASICS = Mock.mock({
                    'list|3': [{
                        name: '@first'
                    }]
                }).list
                _.each(this.data.BASICS, function(item /*, index*/ ) {
                    item.desc = Mock.Random.sentence()
                })
                this.data.COMPONENTS = Mock.mock({
                    'list|12': [{
                        name: '@first'
                    }]
                }).list
                _.each(this.data.COMPONENTS, function(item /*, index*/ ) {
                    item.preview = Mock.Random.dataImage('128x128', item.name)
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