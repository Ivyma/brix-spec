/* global require, console */
require(['brix/loader'], function(Loader) {
    /* jshint unused:false */
    Loader.boot(function() {
        console.log('done!')
    }, function(error, instance, index, count) {
        var nprogress = Loader.query('components/nprogress')
        if (nprogress.length) nprogress.set((index + 1) / count)
    })
})