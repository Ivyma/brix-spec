<div class="mb40">
    <div class="fontsize-20">标签切换 <small>Tab</small></div>
    <div class="color-999 mt4">TAB是通过折叠信息紧凑展示页面内容，避免在有限的显示区域内展示过多信息的一种方式。根据信息和内容本身的属性，以及用户任务，对所有的信息和内容进行分类，而不减少网页的信息容量。</div>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
            <ol>
                <li>存在多个同一层级、并列关系的分组。</li>
                <li>各分组对应不同的内容，不必同时展现。</li>
                <li>分组的数量和内容不随TAB的切换而改变。</li>
                <li>任一时间，有且只有一个分组处于激活状态。 </li>
            </ol>
        </div>
        <div class="content-body">
            <ul class="mm-tabs clearfix" style="margin-bottom: -1px;">
                <li class="active"><a href="javascript:;">标题选项 1</a></li>
                <li><a href="javascript:;">标题选项 2</a></li>
                <li><a href="javascript:;">标题选项 3</a></li>
            </ul>
        </div>
    </div>
    <pre><code>
    	<ul class="mm-tabs clearfix" style="margin-bottom: -1px;">
            <li class="active"><a href="javascript:;">标题选项 1</a></li>
            <li><a href="javascript:;">标题选项 2</a></li>
            <li><a href="javascript:;">标题选项 3</a></li>
        </ul>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 悬停切换</div>
            <div class="color-999 mt6">为防止鼠标滑过时误操作，需设定300ms的延迟时间。 </div>
        </div>
        <div class="content-body">
            <ul class="mm-tabs clearfix mb20" style="" data-event="mouseenter" data-delay="300" data-content="#case1-content">
                <li class="active"><a href="javascript:;">标题选项 1</a></li>
                <li><a href="javascript:;">标题选项 2</a></li>
                <li><a href="javascript:;">标题选项 3</a></li>
            </ul>
            <div id="case1-content">
                <div>
                    <p class="flat-text small">内容 1</p>
                    <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                    <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                </div>
                <div class="hide">
                    <p class="flat-text small">内容 2</p>
                    <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                    <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                </div>
                <div class="hide">
                    <p class="flat-text small">内容 3</p>
                    <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                    <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                </div>
            </div>
        </div>
    </div>
    <pre><code>
        <ul class="mm-tabs clearfix" style="margin-bottom: -1px;">
            <li class="active"><a href="javascript:;">标题选项 1</a></li>
            <li><a href="javascript:;">标题选项 2</a></li>
            <li><a href="javascript:;">标题选项 3</a></li>
        </ul>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 2 - 点击切换</div>
            <div class="color-999 mt6">除分组标题外，扩大点击的响应区域。 </div>
        </div>
        <div class="content-body">
            <ul class="mm-tabs clearfix mb20" style="" data-content="#case2-content">
                <li class="active"><a href="javascript:;">标题选项 1</a></li>
                <li><a href="javascript:;">标题选项 2</a></li>
                <li><a href="javascript:;">标题选项 3</a></li>
            </ul>
            <div id="case2-content">
                <div>
                    <p class="flat-text small">内容 1</p>
                    <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                    <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                </div>
                <div class="hide">
                    <p class="flat-text small">内容 2</p>
                    <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                    <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                </div>
                <div class="hide">
                    <p class="flat-text small">内容 3</p>
                    <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                    <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                </div>
            </div>
        </div>
    </div>
    <pre><code>
        <ul class="mm-tabs clearfix" style="margin-bottom: -1px;">
            <li class="active"><a href="javascript:;">标题选项 1</a></li>
            <li><a href="javascript:;">标题选项 2</a></li>
            <li><a href="javascript:;">标题选项 3</a></li>
        </ul>
    </code></pre>
</div>

<script type="text/javascript">
    require(['jquery', 'underscore'], function($, _) {
        _.each($('ul.mm-tabs'), function(item, index){
            item = $(item)
            var type = item.attr('data-event') || 'click'
            var delay = item.attr('data-delay') || 0
            item.on(type, 'li', function(event) {
                setTimeout(function() {
                    var contents = $(event.delegateTarget).attr('data-content')
                    if (contents) {
                        $(contents).children().hide()
                            .eq(
                                $(event.currentTarget).index()
                            ).removeClass('hide').show()
                    }
                    $(event.currentTarget).addClass('active')
                        .siblings().removeClass('active')
                }, delay)
            })
        })
    })
</script>