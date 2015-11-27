/* global require, location, document */
require([
    'jquery', 'underscore', 'director', 'URIjs/URI', 'highlightjs', 'log',
    'brix/loader',
    'spec.components/holder',
    'frame.spec.components/catalog', 'frame.spec.components/sidebar'
], function(
    $, _, Router, URI, hljs, log,
    Loader,
    Holder,
    Catalog, Constant
) {
    var EFFECT = 'bx-anim-fade-in-left'
    var BU = 'ALIMAMA'
    var DEVICE = 'PC'

    function handle() {

        var $main = $('#main').removeClass(EFFECT)
        var uri = new URI(location.href)
        var fragment = uri.fragment() // hash witout leading #
        if (!fragment) return
        var furi = new URI(fragment)
        var segment = furi.segment() // directories
            // segment[0] design|brand|animation|css|all|readme
            // segment[1] colors|radio|brand_story|rules

        var baseUrlHooks = {
            readme: function() {
                return 'spec.components'
            },
            _default: function() {
                return segment[0] + '.spec.components'
            }
        }
        var baseUrl = (baseUrlHooks[segment[0]] || baseUrlHooks._default)()

        var group = segment[0]
        var name = segment[1] || segment[0]
        var path = baseUrl + '/' + name + '/' +
            (
                {
                    readme: 'README.md',
                    chart: 'README.md'
                }[group] || 
                name + '.tpl'
            )
            // (group === 'readme' ? 'README.md' : name + '.tpl')
        log('    _base_', baseUrl)
        log('   _group_', group)
        log('    _name_', name)
        log('    _path_', path)

        // Loader.load(element, moduleId, options, complete)
        var moduleId = (group === 'readme' || group === 'chart') ?
            'spec.components/readme/readme' :
            (baseUrl + '/' + name + '/' + name)
        log('_moduleId_', moduleId)

        path = Constant.MAPPED[location.hash]
        moduleId = /(\.tpl|\.md)$/.test(path) ? 'spec.components/readme/readme' : path

        Loader.load(
            $main,
            moduleId, // 'components/readme', 
            {
                url: path
            },
            function() {
                // 判断是否在设计板块下
                var groupHooks = {
                    css: 'design',
                    components: 'design',
                    all: 'design',
                    readme: 'design',
                    design: 'design'
                }
                Catalog(BU, DEVICE, groupHooks[group] || group)

                _.each($(document.body).find('pre code'), function(code /*, index*/ ) {
                    hljs.highlightBlock(code)
                })

                // $('[data-resp="' + name + '"]').addClass('active') // 高亮
                $('a[href="' + location.hash + '"]').parent().addClass('active') // 高亮

                $('.sidebar-wrapper .pc-wireless')[groupHooks[group] ? 'show' : 'hide']() // pc 无线是否显示

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
})