define(['jquery'], function ($) {

  var videoCtrl = {
    cls: {
        ctrlHide: 'video-ctrl-hide',
        skipBtn: 'video-skip',
        replayBtn: 'video-replay'
    },
    config: {
        stateKey: 'siteIndexVideoState'
    },
    init: function () {
        var that = this;

        this.loadState();
        this.cacheElements();
        this.addListeners();

        if (this.state.played) {
            this.$video.on('loadedmetadata', function () {
                that.skip();
            });
        }

        this.state.played = true;
        this.saveState();
    },
    saveState: function () {
        localStorage.setItem(this.config.stateKey, JSON.stringify(this.state));
    },
    loadState: function () {
        var stateStr = localStorage.getItem(this.config.stateKey);

        if (stateStr) {
            try {
                this.state = JSON.parse(stateStr);
            } catch (e) {
                this.state = {};
            }
        } else {
            this.state = {}
        }
    },
    cacheElements: function () {
      var $main = $('.site-index .video-container');
      this.$main = $main;
      this.$video = $main.find('.si-video');
      this.$skip = $main.find('.video-skip');
      this.$replay = $main.find('.video-replay');
      this.$ctrl = $main.find('.video-ctrl');

      this.$proxy = $(this);
    },
    addListeners: function () {
        var that = this;

        this.$video.on('ended', function () {
            $(that).trigger('ended');
        });

        this.$main.on('click', '.video-skip', function () {
            that.skip();
        });
        this.$main.on('click', '.video-replay', function () {
            that.replay();
        });

        var $that = $(this);
        $that.on('ended', function () {
            that.showReplayBtn();
        });
    },
    showCtrl: function (filterSelector) {
        this.$ctrl.addClass(this.cls.ctrlHide)
            .filter(filterSelector)
            .removeClass(this.cls.ctrlHide);
    },
    showSkipBtn: function () {
        this.showCtrl('.' + this.cls.skipBtn);
    },
    showReplayBtn: function () {
        this.showCtrl('.' + this.cls.replayBtn);
    },
    replay: function () {
        this.$video[0].currentTime = 0;
        $(this).trigger('play');
    },
    skip: function () {
        this.$video[0].currentTime = this.$video[0].duration;
    }
  };

  window.v = videoCtrl;

  return videoCtrl;
});
