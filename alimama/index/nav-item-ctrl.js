define(['jquery'], function ($) {


  var navItemCtrl = {
    duration: 2000,
    cls: {
      item: 'nav-item',
      itemActive: 'nav-item-active',
      itemEnter: 'nav-item-enter',
      itemLeave: 'nav-item-leave',
      itemSlidein: 'nav-item-slidein',
      itemFadeout: 'nav-item-fadeout',
      itemSelected: 'nav-item-selected'
    },
    timerid: null,
    index: 0,
    init: function () {
      this.cacheElements();
      this.addListeners();
    },
    cacheElements: function () {
      var $main = $('.site-index');
      this.$main = $main;
      this.$proxy = $(this);


      this.$navList = $main.find('.nav-list');
      this.$navItems = $main.find('.nav-item');
    },
    addListeners: function () {
      var that = this;

      this.$navList.on('mouseenter.navitemctrl', '.nav-item', function (e) {
        that.stopLoop();
        that.enterItem(that.$navItems.index(e.currentTarget));
      });
      this.$navList.on('mouseleave.navitemctrl', '.nav-item', function (e) {
        that.leaveItem(that.$navItems.index(e.currentTarget));
        that.startLoop();
      });

      this.$navList.on('click.navitemctrl', '.nav-item', function (e) {
        that.selectItem(that.$navItems.index(e.currentTarget));
      });
    },
    destroy: function () {
        this.stopLoop();
        this.removeListeners();
        this.detachElements();
        this.$proxy.trigger('destroy');
    },
    removeListeners: function () {
        this.$navList.off('.navitemctrl');
    },
    detachElements: function () {
        this.$main = null;
        this.$navList = null;
        this.$navItems = null;
    },
    selectItem: function (index) {
        this.stopLoop();
        var $item = this.$navItems.eq(index);
        $item.addClass(this.cls.itemSelected)
            .siblings()
            .addClass(this.cls.itemFadeout);

        this.$proxy.trigger('itemselected', $item.data('name'));
    },
    stopLoop: function () {
      if (this.timerid) {
        clearInterval(this.timerid);
        this.timerid = 0;
      }
      this.$proxy.trigger('loopstop');
    },
    startLoop: function () {
      var that = this;
      if (!this.timerid) {
          this.timerid = setInterval(function () {
            that.activeItem(that.index + 1);
          }, this.duration);
          this.$proxy.trigger('loopstart');
      }
    },
    resetState: function () {
      this.$navItems.removeClass([
        this.cls.itemActive,
        this.cls.itemEnter,
        this.cls.itemLeave
      ].join(' '));
    },
    enterItem: function (index) {
      this.index = index;
      this.resetState();
      this.$navItems.eq(index).addClass(this.cls.itemEnter);
      this.$proxy.trigger('itementer');
    },
    leaveItem: function (index) {
      this.index = index;
      this.resetState();
      this.$navItems.eq(index).addClass(this.cls.itemLeave);
      this.$proxy.trigger('itemleave');
    },
    activeItem: function (index) {
      if (!this.$navItems) {
        return;
      }

      index = (index + this.$navItems.length ) % this.$navItems.length

      this.index = index;
      this.resetState();
      this.$navItems.eq(index).addClass(this.cls.itemActive);
      this.$proxy.trigger('itemactive');
    },
    slidein: function () {
        var that = this;
        var i = 0;


        function slidein() {
            if (!that.$navItems) {
                return;
            }
            that.$navItems.eq(i).addClass(that.cls.itemSlidein);
            if (i < that.$navItems.length) {
                ++i;
                setTimeout(slidein, 200);
            } else {
                setTimeout(function () {
                    that.$proxy.trigger('slideinend');
                }, 1200);
            }
        }

        slidein();
    },
    shiftOut: function () {
        this.index = 0;
        this.$navItems.removeClass(this.cls.itemSlidein);
    }
  };

  window.n = navItemCtrl;

  return navItemCtrl;
});
