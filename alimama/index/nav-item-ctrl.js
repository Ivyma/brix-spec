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
        event: {
            itemActiveAnimationEnd: 'animationend.activeend',
            itemLeaveAnimationEnd: 'animationend.leaveend',
            slideinEnd: 'animationend.slideinend'
        },
        timerid: null,
        index: 0,
        isPaused: true,
        init: function () {
            this.cacheElements()
            this.addListeners()
        },
        cacheElements: function () {
            var $main = $('.site-index')
            this.$main = $main
            this.$proxy = $(this)

            this.$navList = $main.find('.nav-list')
            this.$navItems = $main.find('.nav-item')
        },
        addListeners: function () {
            var that = this

            this.$navList.on('mouseenter.navitemctrl', '.nav-item', function (e) {
                that.stopLoop()
                that.$navItems.off(that.event.itemLeaveAnimationEnd)
                that.enterItem(that.$navItems.index(e.currentTarget))
            })
            this.$navList.on('mouseleave.navitemctrl', '.nav-item', function (e) {
                that.leaveItem(that.$navItems.index(e.currentTarget))
                $(e.currentTarget).one(that.event.itemLeaveAnimationEnd, function () {
                    that.startLoop()
                })
            })

            this.$navList.on('click.navitemctrl', '.nav-item', function (e) {
                that.selectItem(that.$navItems.index(e.currentTarget))
            })


            this.$proxy.on('slideinend', function () {
                that.isPaused = false
                that.activeItem(0)
            })
        },
        destroy: function () {
            this.stopLoop()
            this.removeListeners()
            this.detachElements()
            this.$proxy.trigger('destroy')
        },
        removeListeners: function () {
            this.$navList.off('.navitemctrl')
        },
        detachElements: function () {
            this.$main = null
            this.$navList = null
            this.$navItems = null
        },
        selectItem: function (index) {
            var that = this
            this.stopLoop()
            var $item = this.$navItems.eq(index)
            $item.addClass(this.cls.itemSelected)
                .siblings()
                .addClass(this.cls.itemFadeout)

            $item.one('transitionend', function () {
                that.$proxy.trigger('itemselected', $item.data('name'))
            })
        },
        stopLoop: function () {
            this.isPaused = true
            this.$navItems.off(this.event.itemActiveAnimationEnd)
            this.$proxy.trigger('loopstop')
        },
        startLoop: function () {
            var that = this
            this.isPaused = false
            this.activeItem(that.index + 1)
        },
        removeItemStateClass: function () {
            this.$navItems.removeClass([
                this.cls.itemActive,
                this.cls.itemEnter,
                this.cls.itemLeave
            ].join(' '))
        },
        enterItem: function (index) {
            this.index = index
            this.removeItemStateClass()
            this.$navItems.eq(index).addClass(this.cls.itemEnter)
            this.$proxy.trigger('itementer')
        },
        leaveItem: function (index) {
            this.index = index
            this.removeItemStateClass()
            this.$navItems.eq(index).addClass(this.cls.itemLeave)
            this.$proxy.trigger('itemleave')
        },
        activeItem: function (index) {
            var that = this
            if (!this.$navItems) {
                return
            }

            index = (index + this.$navItems.length ) % this.$navItems.length

            this.index = index
            this.removeItemStateClass()
            this.$navItems.eq(index).addClass(this.cls.itemActive)
                .one(this.event.itemActiveAnimationEnd, function () {
                    that.activeItem(that.index + 1)
                })
            this.$proxy.trigger('itemactive')
        },
        slidein: function () {
            var that = this
            var i = 0

            function slidein() {
                if (!that.$navItems) {
                    return
                }
                var $currentItem = that.$navItems.eq(i)
                $currentItem.addClass(that.cls.itemSlidein)

                i += 1


                if (i < that.$navItems.length) {
                    setTimeout(slidein, 200)
                } else if (i == that.$navItems.length) {
                    $currentItem.one(that.event.slideinEnd, function () {
                        that.$proxy.trigger('slideinend')
                    })
                }
            }

            slidein()
        },
        shiftOut: function () {
            this.index = 0
            this.$navItems.removeClass(this.cls.itemSlidein)
        }
    }

    window.n = navItemCtrl

    return navItemCtrl
})
