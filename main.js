/* global require, window, location, document */
/*
    // Test
    setInterval(function() {
        location.hash = Mock.Random.pick(_.keys(require('config/alimama/mapped')))
    }, 1000)
*/
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

        var EFFECT_OUT = 'bx-anim-fade-out-left'
        var EFFECT_IN = 'bx-anim-fade-in-left'
        var ANIMATIONEND = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
        var BU = 'ALIMAMA'

        function handle() {
            if (!location.hash) {
                location.hash = '#/design/index'
                return
            }

            var $main = $('#main').removeClass(EFFECT_IN).removeClass(EFFECT_OUT)
            var animationend = true // 如果有 EFFECT_OUT，则默认为 false

            // $main.addClass(EFFECT_OUT)
            // $main.on(ANIMATIONEND, function(event) {
            //     animationend = true
            // })

            var path = MAPPED[location.hash]
            var moduleId = /(\.tpl|\.md)$/.test(path) ? 'alimama/frame/readme/readme' : path
            log('    _hash_', location.hash)
            log('    _path_', path)
            log('_moduleId_', moduleId)

            require([moduleId], function() { // 先手动加载新模块，待完成后再替换内容，以保证移除动画的内容是正确的。
                if (animationend) {
                    load()
                } else {
                    var loading = false
                    $main.on(ANIMATIONEND, function(event) {
                        if (event.target !== $main[0]) return
                        if (!loading) {
                            loading = true
                            load()
                        }
                    })
                }
            })

            function load() {
                // Loader.load(element, moduleId, options, complete)
                Loader.load(
                    $main,
                    moduleId, // 'components/readme'
                    {
                        url: path
                    },
                    done
                )
            }

            function done() {
                Catalog(BU)
                $('a[href="' + location.hash + '"]').parent().addClass('active') // 高亮
                    // var current = 
                    // _.each(current, function(item, index) {
                    //     if (item.scrollIntoViewIfNeeded) item.scrollIntoViewIfNeeded()
                    // })

                _.each($(document.body).find('pre code'), function(code /*, index*/ ) {
                    hljs.highlightBlock(code)
                })

                end()
            }

            function end() {
                $main.removeClass(EFFECT_IN).removeClass(EFFECT_OUT).addClass(EFFECT_IN)

                // $main.on(ANIMATIONEND, function( /*event*/ ) {
                Holder.recover().hold()
                    // })
            }
        }

        handle()
        var router = new Router()
        router.init()
        router.on(/(.*)/, handle)
    }
)