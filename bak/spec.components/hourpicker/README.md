<div class="mb40">
    <div class="fontsize-20">时间选择器 <small>Hourpicker</small></div>
    <div class="color-999 mt4">时间选择器是让用户根据自身需求，选择要投放的时间（精细到小时维度）、向用户展示选择后时间信息，并提供修改功能的辅助窗口。</div>
</div>

<div class="usage mb40">
    <div>基本规范</div>
    <ol>
        <li>默认在入口点显示选定的时间，选中入口点会展开一个选择器浮层，供用户进行选择。时间选取器会覆盖其他UI，它不会将其他UI 推开。视业务需求，可以同步设置两个时间段的投放时间。如工作日使用一个投放时间，休息日使用一个投放时间。</li>
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
            <div bx-name="components/hourpicker" data-simplify="true" data-value="12345,60"></div>
        </div>
    </div>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>视业务需求，可以精细化筛选周一到周天的投放时间。</div>
        </div>
        <div class="content-body">
            <div bx-name="components/hourpicker" data-value="1234560"></div>
        </div>
    </div>
</div>

<script type="text/javascript">
    require(['brix/loader'], function(Loader) {
        Loader.boot(function() {
            var instance = Loader.query('components/hourpicker')[0]
            // instance.shortcut('0123456')
        })
    })
</script>