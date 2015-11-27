/* global define, window, location, localStorage */
define(['jquery'], function($) {
    return {
        recover: function() {
            if (localStorage.getItem('referer') === location.href) {
                $(window).scrollTop(
                    localStorage.getItem('scrollTop')
                )
            } else {
                $(window).scrollTop(
                    0
                )
            }
            return this
        },
        hold: function() {
            $(window).one('unload', function() {
                localStorage.setItem('referer', location.href)
                localStorage.setItem('scrollTop', $(window).scrollTop())
            })
            return this
        }
    }
})