<div class="mb40">
    <div class="fontsize-20">日历 <small>Calendar</small></div>
    <div class="color-999 mt4">日历提供了一种用于选择特定日期或日期范围的途径，默认显示选定的日期，点击下拉展开一个筛选界面，供用户进行日期选择。</div>
</div>

<div class="usage mb40">
    <div>基本规范</div>
    <ol>
        <li>更换当前日期，切换至其它日期。 提供年、月的快速切换。</li>
        <li>更换当前日期范围，切换至其它日期范围，需判断日期的先后关系。提供年、月的快速切换。</li>
    </ol>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
            <div class="color-999 mt6 hide"></div>
        </div>
        <div class="content-body">
            <input bx-name="components/datepickerwrapper" type="text" class="w100 mr40">
            <div bx-name="components/datepickerwrapper" 
                data-dates="['2015-1-1', '2015-1-2']" 
                data-shortcuts="false" 
                class="datepickerwrapper-trigger">
                <span data-index="0">2015-1-1</span> 至 <span data-index="1">2015-1-2</span>
                <i class="brixfont pull-right ml5 down">&#xe623;</i>
                <i class="brixfont pull-right ml5 up">&#xe62e;</i>
            </div>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        <input bx-name="components/datepickerwrapper" type="text" class="w100 mr40">
        <div bx-name="components/datepickerwrapper" 
            data-dates="['2015-1-1', '2015-1-2']" 
            data-shortcuts="false" 
            class="datepickerwrapper-trigger">
            <span data-index="0">2015-1-1</span> 至 <span data-index="1">2015-1-2</span>
            <i class="brixfont pull-right ml5 down">&#xe623;</i>
            <i class="brixfont pull-right ml5 up">&#xe62e;</i>
        </div>
    </code></pre>
</div>


<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 快捷日历</div>
            <div class="color-999 mt6">根据用户使用的情况，设置常用的日期选项，通过快捷日期，提高选择效率。日期上下联动显示。如表格中，日历作为时间筛选器存在，默认显示最近7天，用户可快速切换至最近30天。</div>
        </div>
        <div class="content-body">
            <div bx-name="components/datepickerwrapper" 
                data-dates="['2015-1-1', '2015-1-2']" 
                class="datepickerwrapper-trigger">
                <span data-index="0">2015-1-1</span> 至 <span data-index="1">2015-1-2</span>
                <i class="brixfont pull-right ml5 down">&#xe623;</i>
                <i class="brixfont pull-right ml5 up">&#xe62e;</i>
            </div>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        <div bx-name="components/datepickerwrapper" 
            data-dates="['2015-1-1', '2015-1-2']" 
            class="datepickerwrapper-trigger">
            <span data-index="0">2015-1-1</span> 至 <span data-index="1">2015-1-2</span>
            <i class="brixfont pull-right ml5 down">&#xe623;</i>
            <i class="brixfont pull-right ml5 up">&#xe62e;</i>
        </div>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 2 - 对比日历</div>
            <div class="color-999 mt6">图表默认显示某一时间范围的效果统计，若需再指定一个日期或日期范围进行对比时，需要保证所选的天数一致。</div>
        </div>
        <div class="content-body">
            <div id="case2" bx-name="components/datepickerwrapper" 
                data-dates="['2015-1-1', '2015-1-2']" 
                data-shortcuts="false" 
                class="datepickerwrapper-trigger">
                <span data-index="0">2015-1-1</span> 至 <span data-index="1">2015-1-2</span>
                <i class="brixfont pull-right ml5 down">&#xe623;</i>
                <i class="brixfont pull-right ml5 up">&#xe62e;</i>
            </div>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs js">
        <div id="case2" bx-name="components/datepickerwrapper" 
            data-dates="['2015-1-1', '2015-1-2']" 
            data-shortcuts="false" 
            class="datepickerwrapper-trigger">
            <span data-index="0">2015-1-1</span> 至 <span data-index="1">2015-1-2</span>
            <i class="brixfont pull-right ml5 down">&#xe623;</i>
            <i class="brixfont pull-right ml5 up">&#xe62e;</i>
        </div>
    </code></pre>
    <pre class="example-pre"><code class="hljs js">
        var case2 = Loader.query($('#case2'))[0]
        var pickers = Loader.query('components/datepicker', case2.$relatedElement)
        pickers[0].on('change.datepicker', function(event, date, type){
            pickers[1].val(
                moment(date).add(1, 'month')
            )
        })
        pickers[1].on('change.datepicker', function(event, date, type){
            pickers[0].val(
                moment(date).add(-1, 'month')
            )
        })
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 3 - 标题式日历</div>
            <div class="color-999 mt6">当日期组件控制整个页面或模块统计的时间范围，则以标题形式展现。</div>
        </div>
        <div class="content-body">
            <span bx-name="components/datepickerwrapper" class="cursor-pointer fontsize-16">请选择日期</span>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        <span bx-name="components/datepickerwrapper" class="cursor-pointer fontsize-16">请选择日期</span>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 4 - 起止分段式日历</div>
            <div class="color-999 mt6">当需要明确表达起止时间时（如在创建计划时），可使用拆分日历组件。</div>
        </div>
        <div class="content-body">
            <div class="mr40" style="display: inline-block;">
                <div class="pl9 mb10 color-999">开始日期</div>
                <div style="position: relative;">
                    <input bx-name="components/datepickerwrapper" type="text" class="form-control">
                    <span class="brixfont color-c" style="position: absolute; right: 9px; top: 6px;">&#xe615;</span>
                </div>
            </div>
            <div style="position: relative; display: inline-block;">
                <div class="pl9 mb10 color-999">结束日期</div>
                <div style="position: relative;">
                    <input bx-name="components/datepickerwrapper" type="text" class="form-control">
                    <span class="brixfont color-c" style="position: absolute; right: 9px; top: 6px;">&#xe615;</span>
                </div>
            </div>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        <div class="mr40" style="display: inline-block;">
            <div class="pl9 mb10 color-999">开始日期</div>
            <div style="position: relative;">
                <input bx-name="components/datepickerwrapper" type="text" class="form-control">
                <span class="brixfont color-c" style="position: absolute; right: 9px; top: 6px;">&#xe615;</span>
            </div>
        </div>
        <div style="position: relative; display: inline-block;">
            <div class="pl9 mb10 color-999">结束日期</div>
            <div style="position: relative;">
                <input bx-name="components/datepickerwrapper" type="text" class="form-control">
                <span class="brixfont color-c" style="position: absolute; right: 9px; top: 6px;">&#xe615;</span>
            </div>
        </div>
    </code></pre>
</div>

<script type="text/javascript">
    require(['jquery', 'moment', 'brix/loader'], function($, moment, Loader) {
        Loader.boot(function(){
            var case2 = Loader.query($('#case2'))[0]
            var pickers = Loader.query('components/datepicker', case2.$relatedElement)
            pickers[0].on('change.datepicker', function(event, date, type){
                pickers[1].val(
                    moment(date).add(1, 'month')
                )
            })
            pickers[1].on('change.datepicker', function(event, date, type){
                pickers[0].val(
                    moment(date).add(-1, 'month')
                )
            })
        })
    })
</script>