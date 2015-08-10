<div class="mb40">
    <div class="fontsize-20">搜索框 <small>SearchBox</small></div>
    <div class="color-999 mt4">搜索框是帮助用户在海量内容中缩小范畴，快速获取信息的组件。只要用户开始输入，系统将会提供一组不断更新的查询建议或消除歧义的选项，帮助他们加快输入过程并编写有效的查询条件。</div>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
            <ol>
                <li>搜索必须要有默认的搜索建议 ，如“请输入关键词搜索”。</li>
                <li>搜索的匹配方式 要根据实际结果自动完成搜索建议。</li>
                <li>搜索建议中匹配的部分与其它文字区分开。</li>
            </ol>
        </div>
        <div class="content-body">
            <div class="searchbox mb10 mr40">
                <span class="brixfont">&#xe61c;</span>
                <input type="text" placeholder="请输入关键词搜索">
            </div>
            <div class="searchbox mb10">
                <span class="brixfont">&#xe61c;</span>
                <input type="text" bx-name="components/suggest" placeholder="请输入关键词搜索">
            </div>
            <div class="input-group">
                <input type="text" class="form-control" bx-name="components/suggest" placeholder="请输入关键词搜索">
                <span class="input-group-addon">搜索</span>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 分类搜索</div>
            <div class="color-999 mt6">一个搜索框承担多个分类的查询功能时，可以使用分类搜索样式，默认选中的为最常用的分类。一般分类词置于搜索框上方以标签形式展示或左侧下拉收起。先选分类，再搜索，缩小范畴，结果更明确。</div>
        </div>
        <div class="content-body">
            <div class="bs-example-searchbox-1 mb20">
                <div class="input-group">
                    <div class="input-group-btn">
                        <select bx-name="components/dropdown">
                            <option value="1">分类 1</option>
                            <option value="2">分类 2</option>
                            <option value="3">分类 3</option>
                        </select>
                    </div>
                    <div class="input-group-input">
                        <input type="text" class="form-control" bx-name="components/suggest" placeholder="请输入关键词搜索">
                    </div>
                    <div class="input-group-btn">
                        <button class="btn btn-default bg-brand" type="button">搜索</button>
                    </div>
                </div>
            </div>
            <div class="bs-example-searchbox-2 mb20">
                <div class="input-group-tab">
                    <button class="btn btn-default active" type="button">分类 1</button>
                    <button class="btn btn-default" type="button">分类 2</button>
                    <button class="btn btn-default" type="button">分类 3</button>
                </div>
                <div class="input-group">
                    <div class="input-group-input">
                        <input type="text" class="form-control" bx-name="components/suggest" placeholder="请输入关键词搜索">
                    </div>
                    <div class="input-group-btn">
                        <button class="btn btn-default bg-brand" type="button">搜索</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 2 - 图标型搜索框</div>
            <div class="color-999 mt6">当搜索不是用户关注的重点或页面重点时，采用图标拓展型搜索。默认只显示搜索图标，点击呼出搜索框，并将焦点锁定在搜索框中，引导用户输入。通常应用于列表右上角或导航栏上。</div>
        </div>
        <div class="content-body">
            <div class="searchbox searchbox-simplify mb10">
                <span class="brixfont">&#xe61c;</span>
                <input type="text" placeholder="请输入关键词搜索" style="transition: inherit;">
            </div>
        </div>
    </div>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 3 - 搜索热词</div>
            <div class="color-999 mt6">在搜索框下方放置一排热词，引导目标并非特别明确的用户点击，在站内逛起来。</div>
        </div>
        <div class="content-body">
            <div class="bs-example-searchbox-1 mb20">
                <div class="input-group mb10">
                    <div class="input-group-input">
                        <input type="text" class="form-control" bx-name="components/suggest" placeholder="请输入关键词搜索">
                    </div>
                    <div class="input-group-btn">
                        <button class="btn btn-default bg-brand" type="button">搜索</button>
                    </div>
                </div>
                <div class="hots">
                    <a href="javascript:;">热词 1</a>
                    <a href="javascript:;">热词 2</a>
                    <a href="javascript:;">热词 3</a>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    require(['brix/loader', 'underscore', 'mock'], function(Loader, _, Mock) {
        Loader.boot(function() {
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
        })
    })
</script>