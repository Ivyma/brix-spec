define([
    'jquery'
], function ($) {

    /**
     * √ 1. 添加跳过视频,直接显示导航
     * √ 2. 添加整个效果重播功能
     * √ 3. 用户第一次访问才播放视频. 后续直接显示导航
     * √ 4. 导航项选择之后触发隐藏, 通过监听css时间触发. 而不是settimeout
     * √ 5. 自定义event. 用jquery即可.
     * √ 6. this缓存命名改成that
     * √ 7. 如果不牵涉到闭包访问this, 不需要定义var me = this
     * √ 8. video-ctrl功能,
     * 9. video事件不应该重新触发. 让用户直接绑定到video上即可
        : 现在videoCtrl, navItemCtrl都有$proxy代理. 事件统一监听到这里, 如果用户关心其他事件自己监听$video
     * √ 10. 不需要复用的事件监听器直接用匿名函数即可
     * √ 11. navitem slidein结束事件名改成slideinend
     * √ 12. 工具类命名参考构造函数
     * √ 13. 事件监听器函数命名应该是描述函数执行了什么操作
        : 全部改成匿名函数了
     * √ 14. jquery对象统一使用$开头
     * √ 15. 事件托管获取托管dom使用e.currentTarget
     * √ 16. resetStatus改成resetState
     **/

    var app = {
        duration: {
            hide: 1000
        },
        init: function (NavItemCtrl, VideoCtrl) {
            this.NavItemCtrl = NavItemCtrl
            this.VideoCtrl = VideoCtrl
            this.cacheElements()
            this.addListeners()
        },
        cacheElements: function () {
            this.$main = $('.site-index')
            this.$proxy = $(this)
        },
        addListeners: function () {
            var that = this

            this.VideoCtrl.$proxy.on('ended', function () {
                that.NavItemCtrl.slidein()
            })
            this.VideoCtrl.$proxy.on('play', function () {
                that.NavItemCtrl.shiftOut()
                that.NavItemCtrl.stopLoop()
                that.NavItemCtrl.index = 0
                that.VideoCtrl.showSkipBtn()
            })

            this.NavItemCtrl.$proxy.on('itemselected', function (e, itemName) {
                /*jshint unused: false */
                that.NavItemCtrl.destroy()
                that.hide(itemName)
            })
        },
        hide: function (itemName) {
            this.$main.hide()
            this.$proxy.trigger('close', itemName)
        }
      }

    return app
})
