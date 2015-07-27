/* global define */
define(
    [
        'jquery', 'underscore',
        'brix/base',
        './footer.tpl.js',
        'css!./footer.css'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        function Footer() {}

        _.extend(Footer.prototype, Brix.prototype, {
            options: {},
            init: function() {},
            render: function() {
                var that = this
                $.ajax({
                    url: 'http://www.taobao.com/go/rgn/mm/footer.php',
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    success: function(resp, status, xhr) {
                        $(that.element).append(
                            $('<textarea />').html(resp).val()
                        )
                    }
                })

                // http://www.taobao.com/go/rgn/mm/footer.php?callback=jsonp189
                // var html = _.template(template)(this.data)
                // $(this.element).append(html)
            }
        })

        return Footer
    }
)