<div class="mb40">
    <div class="fontsize-20">就地编辑 <small>Editable</small></div>
    <div class="color-999 mt4">用户可以就在当前页面内容所处的地方直接编辑该内容，而无须跳转到另一个新页面去编辑。</div>
</div>

<div class="usage mb40">
    <div>基本规范</div>
    <ol>
        <li>当用户移动到页面上的文字时，显示可编辑的图标，点击页面上的文字/图标时，该文字就会出现在一个编辑框中，用户对文字进行修改完成后点击确认按钮或点击编辑框外其余区域，新的文本将更新至服务器，然后编辑框消失，显示更新后的文本。</li>
    </ol>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
            <div class="color-999 mt6"></div>
        </div>
        <div class="content-body">
            <div class="editable" bx-name="components/editable">
                <span class="editable-content">文字内容</span>
                <a href="javascript:;" class="editable-toggle brixfont color-c">&#xe604;<!-- &#xe604; --></a>
                <input value="文字内容" class="editable-input" style="display: none;">
            </div>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        <div class="editable" bx-name="components/editable">
            <span class="editable-content">文字内容</span>
            <a href="javascript:;" class="editable-toggle brixfont color-c">&#xe604;<!-- &#xe604; --></a>
            <input value="文字内容" class="editable-input" style="display: none;">
        </div>
    </code></pre>
</div>

<% 
    var list = Mock.mock({
        'list|3': [{
            name: '@ctitle',
            'status|1': ['通过', '拒绝', '待审'],
            'type|1': ['图片', 'Flash', '视频'],
            size: '@int(1,1000)x@int(1,1000)',
            scroll1: '@word',
            scroll2: '@word',
            scroll3: '@word'
        }]
    }).list
%>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 就地编辑表格中的内容</div>
            <div class="color-999 mt6">表格中的就地编辑，适合使用文本形式就地编辑实现，鼠标hover到内容区域或整一行的任何区域（视业务场景）出现文本框，点击激活编辑文本框，鼠标移出编辑框后点击内容即被保存。</div>
        </div>
        <div class="content-body">
            <table bx-name="components/table" class="table table-hover table-fixed ">
                <thead>
                    <tr>
                        <th class="nowrap" width="40%">名称</th>
                        <th class="nowrap">状态</th>
                        <th class="nowrap">类型</th>
                        <th class="nowrap">尺寸</th>
                        <th class="nowrap">操作</th>
                    </tr>
                </thead>
                <tbody id="case-1">
                    <% _.each(list, function(item){ %>
                    <tr>
                        <td class="nowrap ellipsis">
                            <div class="editable" bx-name="components/editable">
                                <span class="editable-content"><%= item.name %></span>
                                <a href="javascript:;" class="editable-toggle brixfont color-c">&#xe604;<!-- &#xe604; --></a>
                                <input value="<%= item.name %>" class="editable-input" style="display: none;">
                            </div>
                        </td>
                        <td class="nowrap ellipsis">
                            <!-- <span bx-name="components/editable"><%= item.name %></span> -->
                            <%= item.status %>
                        </td>
                        <td class="nowrap ellipsis">
                            <%= item.type %>
                        </td>
                        <td class="nowrap ellipsis">
                            <%= item.size %>
                        </td>
                        <td>
                            <div class="operation">
                                <a href="javascript: void(0);">详情</a>
                            </div>
                        </td>
                    </tr>
                    <% }) %>
                </tbody>
            </table>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html"></code></pre>
</div>
<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 2 - 就地编辑浮出下拉选项</div>
            <div class="color-999 mt6">系统能够出一些智能结果，那在激活输入框或用户输入文字时智能下滑出层。鼠标点击输入框和层以后的区域，下滑框收回。</div>
        </div>
        <div class="content-body">
            <div id="case-2">
                <div class="editable">
                    <span class="editable-content">文字内容</span>
                    <a href="javascript:;" class="editable-toggle brixfont color-ccc">&#xe604;<!-- &#xe604; --></a>
                    <div class="suggestwrapper" style="display: none;">
                        <input bx-name="components/suggest" value="文字内容">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html"></code></pre>
</div>

<script>
    require(['css!spec.components/searchbox/searchbox.css'])
    require(['brix/loader', 'jquery', 'underscore', 'mock'], function(Loader, $,_, Mock) {
        (function(argument) {
            var wrapper = $('#case-base')
            var span = wrapper.find('span')
            var a = wrapper.find('a')
            var input = wrapper.find('input')
            a.on('click', function() {
                a.hide(), span.hide(), input.show().focus()
            })
            input
                .on('blur', function() {
                    a.show(), span.show(), input.hide()
                })
                .on('keydown', function(event) {
                    if (event.which === 13 || event.which === 27) {
                        a.show(), span.show(), input.hide()
                    }
                    span.text(input.val())
                })
        })();
        (function(argument) {
            return
            var wrapper = $('#case-1')
            var editable = wrapper.find('.editable')
            _.each(editable,  function(item, index){
                item = $(item)
                var content = item.find('.editable-content')
                var toggle = item.find('.editable-toggle')
                var input = item.find('.editable-input')
                toggle.on('click', function(){
                    toggle.hide(), content.hide(), input.show().focus()
                })
                input
                    .on('blur', function() {
                        content.show(), input.hide()
                        toggle.css('display', '')
                    })
                    .on('keydown', function(event) {
                        if (event.which === 13 || event.which === 27) {
                            content.show(), input.hide()
                            toggle.css('display', '')
                        }
                        content.text(input.val())
                    })
            })
        })();
        (function(argument) {
            var wrapper = $('#case-2')
            var span = wrapper.find('span')
            var a = wrapper.find('a')
            var suggestwrapper = wrapper.find('.suggestwrapper')
            var input = wrapper.find('input')
            a.on('click', function() {
                a.hide(), span.hide(), suggestwrapper.show(), input.focus()
            })
            Loader.boot(function() {
                Loader.query(input).on('change.suggest.done', function() {
                    a.show(), span.show(), suggestwrapper.hide(), span.text(input.val())
                })
            })
        })();

        Loader.boot(done)
        function done() {
            var data = Mock.mock({
                'list|100': ['@NAME', '@NATURAL(1,1000000)', '@CWORD(5,10)']
            }).list
            var suggests = Loader.query('components/suggest')
            _.each(suggests, function(item, index){
                item.on('change.suggest.input', function(event, value) {
                    if (!$.trim(value)) {
                        item.close()
                        return
                    }
                    item.data(
                        _.filter(data, function(item, index){
                            return ('' + item).toLowerCase().indexOf(value.toLowerCase()) !== -1
                        })
                        .sort(function(a, b) {
                            return ('' + a).toLowerCase().indexOf(value.toLowerCase()) - ('' + b).toLowerCase().indexOf(value.toLowerCase())
                        })
                    )
                })
            })
        }
    })
</script>