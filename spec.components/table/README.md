<div class="mb40">
    <div class="fontsize-20">表格 <small>Table</small></div>
    <div class="color-999 mt4">表格大多应用于偏数据型的网站。表格的主要作用是供用户阅读数据，对数据进行操作。一个构造清晰的表格布局，将大大提升读者对信息的接收速度和理解程度。 </div>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

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
            <div>基础用法</div>
            <ol>
                <li>通过表格的二维矩阵来整理和陈列信息，能够很好的表达信息之间的逻辑关系，易于帮助理解横纵信息之间的关系。举列：一个表头，纯表格。</li>
                <li>当在阅读数据庞大的表格时，读者不得不通过拖拽横向或纵向滚动条来阅读数据，固定表格的表头或行标题列，能帮助读者在阅读过程中仍清晰的知晓单元格数据的属性。</li>
            </ol>
        </div>
        <div class="content-body">
            <table bx-name="components/table" class="table table-hover table-fixed ">
                <thead>
                    <tr>
                        <th class="nowrap">名称</th>
                        <th class="nowrap">状态</th>
                        <th class="nowrap">类型</th>
                        <th class="nowrap">尺寸</th>
                        <th class="nowrap">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <% _.each(list, function(item){ %>
                    <tr>
                        <td class="nowrap"><%= item.name %></td>
                        <td class="nowrap"><%= item.status %></td>
                        <td class="nowrap"><%= item.type %></td>
                        <td class="nowrap"><%= item.size %></td>
                        <td>
                            <div class="operation">
                                <a href="javascript: void(0);">详情</a>
                            </div>
                        </td>
                    </tr>
                    <% }) %>
                </tbody>
            </table>
            <table bx-name="components/table" class="table table-hover table-fixed mt40" data-column-rwd-range="[1,-1]" data-column-rwd-limit="3" data-column-rwd-cursor="1">
                <thead>
                    <tr>
                        <th class="stable">名称</th>
                        <th class="">状态</th>
                        <th class="">类型</th>
                        <th class="">尺寸</th>
                        <th class="">滚动列 1</th>
                        <th class="">滚动列 2</th>
                        <th class="">滚动列 3</th>
                        <th class="stable">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <% _.each(list, function(item){ %>
                    <tr>
                        <td class=""><%= item.name %></td>
                        <td class=""><%= item.status %></td>
                        <td class=""><%= item.type %></td>
                        <td class=""><%= item.size %></td>
                        <td><%= item.scroll1 %></td>
                        <td><%= item.scroll2 %></td>
                        <td><%= item.scroll3 %></td>
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
    <pre><code class="hljs html">
        todo
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 批量操作型表格</div>
            <div class="color-999 mt6">TODO</div>
        </div>
        <div class="content-body">
            <div id="case1-toolbar" class="toolbar mb20" style="visibility: hidden;">
                <button class="btn btn-brand mr10">批量删除</button>
            </div>
            <table id="case1" bx-name="components/table" class="table table-hover">
                <thead>
                    <tr>
                        <th width="40"><input type="checkbox" data-linkage-name="all"></th>
                        <th class="nowrap">名称</th>
                        <th class="nowrap">状态</th>
                        <th class="nowrap">类型</th>
                        <th class="nowrap">尺寸</th>
                        <th class="nowrap">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <% _.each(list, function(item){ %>
                    <tr>
                        <td><input type="checkbox" value="<%= item.name %>" data-linkage-parent-name="all"></td>
                        <td class="nowrap"><%= item.name %></td>
                        <td class="nowrap"><%= item.status %></td>
                        <td class="nowrap"><%= item.type %></td>
                        <td class="nowrap"><%= item.size %></td>
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
    <pre><code class="hljs html">
        TODO
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 2 - 表格操作按钮</div>
            <div class="color-999 mt6">对当前表格进行管理。例如，当用户 hover 在当前表格上出现操作及更多选项、编辑、复制、设置、删除等。</div>
        </div>
        <div class="content-body">
            <table bx-name="components/table" class="table table-hover table-fixed mt40" data-column-rwd-range="[2,-1]" data-column-rwd-limit="3" data-column-rwd-cursor="1">
                <thead>
                    <tr>
                        <th class="stable" width="40"><input type="checkbox" data-linkage-name="all"></th>
                        <th class="stable">名称</th>
                        <th class="">状态</th>
                        <th class="">类型</th>
                        <th class="">尺寸</th>
                        <th class="">滚动列 1</th>
                        <th class="">滚动列 2</th>
                        <th class="">滚动列 3</th>
                        <th class="stable">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <% _.each(list, function(item){ %>
                    <tr>
                        <td><input type="checkbox" value="<%= item.name %>" data-linkage-parent-name="all"></td>
                        <td class=""><%= item.name %></td>
                        <td class=""><%= item.status %></td>
                        <td class=""><%= item.type %></td>
                        <td class=""><%= item.size %></td>
                        <td><%= item.scroll1 %></td>
                        <td><%= item.scroll2 %></td>
                        <td><%= item.scroll3 %></td>
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
    <pre><code class="hljs html">
        TODO
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 3 - 二级列表型表格</div>
            <div class="color-999 mt6">对当前表格进行管理。例如，当用户 hover 在当前表格上出现操作及更多选项、编辑、复制、设置、删除等。</div>
        </div>
        <div class="content-body">
            <table bx-name="components/table" class="table table-hover table-fixed">
                <thead>
                    <tr>
                        <th width="40"></th>
                        <th class="nowrap">名称</th>
                        <th class="nowrap">状态</th>
                        <th class="nowrap">类型</th>
                        <th class="nowrap">尺寸</th>
                        <th class="nowrap">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <% _.each(list, function(item){ %>
                    <tr>
                        <td class="sub-toggle">
                            <span class="brixfont plus fontsize-20 color-ccc">&#xe61f;</span><!-- + -->
                            <span class="brixfont minus fontsize-20 color-brand">&#xe620;</span><!-- - -->
                        </td>
                        <td class="nowrap"><%= item.name %></td>
                        <td class="nowrap"><%= item.status %></td>
                        <td class="nowrap"><%= item.type %></td>
                        <td class="nowrap"><%= item.size %></td>
                        <td>
                            <div class="operation">
                                <a href="javascript: void(0);">详情</a>
                                <a href="javascript: void(0);">编辑</a>
                            </div>
                        </td>
                    </tr>
                    <tr class="sub">
                        <td></td>
                        <td colspan="5">
                            <table bx-name="components/table" class="table table-hover table-fixed">
                                <thead>
                                    <tr>
                                        <th class="nowrap">名称</th>
                                        <th class="nowrap">状态</th>
                                        <th class="nowrap">类型</th>
                                        <th class="nowrap">尺寸</th>
                                        <th class="nowrap">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <% _.each(list, function(item){ %>
                                    <tr>
                                        <td class="nowrap"><%= item.name %></td>
                                        <td class="nowrap"><%= item.status %></td>
                                        <td class="nowrap"><%= item.type %></td>
                                        <td class="nowrap"><%= item.size %></td>
                                        <td>
                                            <div class="operation">
                                                <a href="javascript: void(0);">子操作</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <% }) %>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <% }) %>
                </tbody>
            </table>
        </div>
    </div>
    <pre><code class="hljs html">
        TODO
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 4 - 标题切换型表格</div>
            <div class="color-999 mt6">对当前表格进行管理。例如，当用户 hover 在当前表格上出现操作及更多选项、编辑、复制、设置、删除等。</div>
        </div>
        <div class="content-body">
            <ul class="mm-tabs clearfix" style="border-bottom: 1px solid #E6E6E6;">
                <li class="active"><a href="javascript:;">计划列表</a></li>
                <li><a href="javascript:;">单元列表</a></li>
                <li><a href="javascript:;">人群列表</a></li>
                <li><a href="javascript:;">资源位列表</a></li>
                <!-- <li><a href="javascript:;">创意列表</a></li> -->
                <!-- <li><a href="javascript:;">关键词列表</a></li> -->
            </ul>

            <table bx-name="components/table" class="table table-hover table-fixed">
                <thead>
                    <tr>
                        <th class="nowrap">名称</th>
                        <th class="nowrap">状态</th>
                        <th class="nowrap">类型</th>
                        <th class="nowrap">尺寸</th>
                        <th class="nowrap">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <% _.each(list, function(item){ %>
                    <tr>
                        <td class="nowrap"><%= item.name %></td>
                        <td class="nowrap"><%= item.status %></td>
                        <td class="nowrap"><%= item.type %></td>
                        <td class="nowrap"><%= item.size %></td>
                        <td>
                            <div class="operation">
                                <a href="javascript: void(0);">详情</a>
                                <a href="javascript: void(0);">编辑</a>
                            </div>
                        </td>
                    </tr>
                    <% }) %>
                </tbody>
            </table>
        </div>
    </div>
    <pre><code class="hljs html">
        TODO
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 5 - 完整型表格</div>
            <div class="color-999 mt6">TODO</div>
        </div>
        <div class="content-body">
            <ul class="mm-tabs clearfix" style="border-bottom: 1px solid #E6E6E6;">
                <li class="active"><a href="javascript:;">计划列表</a></li>
                <li><a href="javascript:;">单元列表</a></li>
                <li><a href="javascript:;">人群列表</a></li>
                <li><a href="javascript:;">资源位列表</a></li>
                <!-- <li><a href="javascript:;">创意列表</a></li> -->
                <!-- <li><a href="javascript:;">关键词列表</a></li> -->
            </ul>
            <table bx-name="components/table" class="table table-hover table-fixed" data-column-rwd-range="[1,-1]" data-column-rwd-limit="3" data-column-rwd-cursor="1">
                <thead>
                    <tr>
                        <th class="nowrap">名称</th>
                        <th class="nowrap">状态</th>
                        <th class="nowrap">类型</th>
                        <th class="nowrap">尺寸</th>
                        <th class="nowrap">滚动列 1</th>
                        <th class="nowrap">滚动列 2</th>
                        <th class="nowrap">滚动列 3</th>
                        <th class="nowrap">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <% _.each(list, function(item){ %>
                    <tr>
                        <td class="nowrap"><%= item.name %></td>
                        <td class="nowrap"><%= item.status %></td>
                        <td class="nowrap"><%= item.type %></td>
                        <td class="nowrap"><%= item.size %></td>
                        <td><%= item.scroll1 %></td>
                        <td><%= item.scroll2 %></td>
                        <td><%= item.scroll3 %></td>
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
    <pre><code class="hljs html">
        TODO
    </code></pre>
</div>

<script type="text/javascript">
    require(['jquery', 'brix/loader'], function($, Loader) {
        Loader.boot(function(argument) {
            Loader.query($('#case1')).on('toggle.table', function(event, values, target) {
                $('#case1-toolbar').css(
                    'visibility',
                    values.length ? 'visible' : 'hidden'
                )
            })
            $('.sub-toggle > .brixfont').on('click', function(event) {
                $(event.currentTarget)
                    .parents('td.sub-toggle').toggleClass('open')
                    .parent('tr').next('tr.sub').toggle()
            })
        })
    })
</script>