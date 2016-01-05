define(['jquery'], function ($) {

  var videoCtrl = {
    cls: {
        ctrlHide: 'video-ctrl-hide',
        skipBtn: 'video-skip',
        replayBtn: 'video-replay',
        videoShow: 'si-video-show'
    },
    config: {
        stateKey: 'siteIndexVideoState',
        videoUrl: './alimama/index/assets/video/welcome.mp4'
    },
    init: function () {
        this.loadState()
        this.cacheElements()
        this.addListeners()

        this.$video.prop('src', this.config.videoUrl)
    },
    saveState: function () {
        localStorage.setItem(this.config.stateKey, JSON.stringify(this.state))
    },
    loadState: function () {
        var stateStr = localStorage.getItem(this.config.stateKey)

        if (stateStr) {
            try {
                this.state = JSON.parse(stateStr)
            } catch (e) {
                this.state = {}
            }
        } else {
            this.state = {}
        }
    },
    cacheElements: function () {
        var $main = $('.site-index .video-container')
        this.$main = $main


        this.$video = $main.find('.si-video')
        this.$skip = $main.find('.video-skip')
        this.$replay = $main.find('.video-replay')
        this.$ctrl = $main.find('.video-ctrl')

        this.$proxy = $(this)
    },
    addListeners: function () {
        var that = this

        this.$video.on('ended', function () {
            that.$proxy.trigger('ended')
        })

        this.$main.on('click', '.video-skip', function () {
            that.skip()
        })
        this.$main.on('click', '.video-replay', function () {
            that.replay()
        })

        this.$proxy.on('ended', function () {
            that.showReplayBtn()
        })

        this.$video.on('loadedmetadata', function () {
            if (that.state.skip) {
                that.skip()
            } else {
                that.state.skip = true
                that.saveState()
            }
            that.$video.show()
            that.$video.addClass(that.cls.videoShow)
        })

    },
    showCtrl: function (filterSelector) {
        this.$ctrl.addClass(this.cls.ctrlHide)
            .filter(filterSelector)
            .removeClass(this.cls.ctrlHide)
    },
    showSkipBtn: function () {
        this.showCtrl('.' + this.cls.skipBtn)
    },
    showReplayBtn: function () {
        this.showCtrl('.' + this.cls.replayBtn)
    },
    replay: function () {
        this.$video[0].currentTime = 0
        $(this).trigger('play')
    },
    skip: function () {
        this.$video[0].currentTime = this.$video[0].duration
    }
  }

  window.v = videoCtrl

  return videoCtrl
})
