/* global require, window, location, document */
require(
    [
        'jquery', 'underscore', 'director', 'highlightjs', 'log',
        'brix/loader',
        'config/alimama/index', 'config/alimama/mapped',
        'alimama/frame/holder',
        'alimama/frame/catalog'
    ],
    function(
        $, _, Router, hljs, log,
        Loader,
        CONSTANT, MAPPED,
        Holder,
        Catalog
    ) {
        window.CONSTANT = CONSTANT
        window.MAPPED = MAPPED

        var EFFECT = 'bx-anim-fade-in-left'
        var BU = 'ALIMAMA'

        function handle() {
            var $main = $('#main').removeClass(EFFECT)
            var path = MAPPED[location.hash]
            var moduleId = /(\.tpl|\.md)$/.test(path) ? 'alimama/frame/readme/readme' : path
            log('    _hash_', location.hash)
            log('    _path_', path)
            log('_moduleId_', moduleId)

            // Loader.load(element, moduleId, options, complete)
            Loader.load(
                $main,
                moduleId, // 'components/readme'
                {
                    url: path
                },
                function() {
                    // 
                    Catalog(BU)

                    // 
                    _.each($(document.body).find('pre code'), function(code /*, index*/ ) {
                        hljs.highlightBlock(code)
                    })

                    // $('[data-resp="' + name + '"]').addClass('active') // 高亮
                    $('a[href="' + location.hash + '"]').parent().addClass('active') // 高亮

                    // $('.sidebar-wrapper .pc-wireless')[groupHooks[group] ? 'show' : 'hide']() // pc 无线是否显示

                    $main.addClass(EFFECT) //添加滑动效果

                    // $(window).scrollTop(0)
                    Holder.recover().hold()
                }
            )
        }

        handle()
        var router = new Router()
        router.init()
        router.on(/(.*)/, handle)
    }
)