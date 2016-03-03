<div class="mb40">
    <div class="fontsize-20">下拉框 <small>Dropdown</small></div>
    <div class="color-999 mt4">下拉框是选定的项始终可见、其他项通过单击下拉按钮才显示的列表。使用下拉框，用户可以在展开的列表中作出选择。通过下拉框，用户可以选择一个且只能选择一个选项。使用下拉框可以节省屏幕空间，使用户的注意力更聚焦。</div>
</div>

<div class="usage mb40">
    <div>基本规范</div>
    <ol>
        <li>列表选项按照逻辑顺序排序，优先显示用户最常用的推荐选项。</li>
        <li>下拉框内容需保持单行并尽量完整显示，展开的下拉面板宽度需等于或大于下拉框宽度。</li>
        <li>若选项数少于 5 个时，可考虑使用单选按钮  </li>
        <li>选项列表的高度由下拉项目数决定，但该高度不得大于六个选项的高度，超过则出现滚动条 </li>
    </ol>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
            <ol class="hide">
                <li>使用下拉框 控件可让用户从一组项目中选择单个值，这些项目使用单独一行文本充分显示。</li>
                <li>当少于 5 个项目时，考虑使用单选按钮（如果只能选择一个项目）或复选框（如果可以选择多个项目）。</li>
                <li>将下拉列表项目的文本内容限制为单行。</li>
                <li>下拉框的宽度由内容决定 ，但不小于面板宽度。</li>
                <li>可选择面板的高度由下拉项目数决定，但该高度不得大于六个选项的高度，超过面板高度后，则出现滚动条。</li>
                <li>按逻辑顺序排序下拉列表的项目，例如将相关的选项组合在一起，优先放置最常用的选项。</li>
            </ol>
        </div>
        <div class="content-body">
            <select bx-name="components/dropdown">
                <% _.each(_.range(100), function(item, index){ %>
                <option value="<%= index %>">选项 <%= index + 1 %></option>
                <% }) %>
            </select>
        </div>
    </div>
    <pre><code class="hljs html">
        <select bx-name="components/dropdown">
            <option value="0">选项 1</option>
            <option value="1">选项 2</option>
            <option value="2">选项 3</option>
            <option value="3">选项 4</option>
        </select>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 下拉搜索</div>
            <div class="color-999 mt6">当下拉框展开的项过多且同质化时，提供搜索功能，方便用户快速定位到要选择的项。</div>
        </div>
        <div class="content-body">
            <select bx-name="components/dropdown" data-value="1" data-searchbox="true" bx-search="filter">
                <% _.each(_.range(100), function(item, index){ %>
                <option value="<%= index %>">选项 <%= index + 1 %></option>
                <% }) %>
            </select>
        </div>
    </div>
    <pre><code class="hljs html">
        <select bx-name="components/dropdown" data-value="1" data-searchbox="true" bx-search="filter">
            <option value="0">选项 1</option>
            <option value="1">选项 2</option>
            <option value="2">选项 3</option>
            <option value="3">选项 4</option>
        </select>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 2 - 自适应缩减</div>
            <div class="color-999 mt6">当下拉框的项内容长度过长时，需要对内容进行截断，以“…”结尾，鼠标放置在上面时显示该项的全部内容。</div>
        </div>
        <div class="content-body dropdown-case2">
            <select bx-name="components/dropdown" data-popover="200">
                <% _.each(_.range(100), function(item, index){ %>
                <%  item = Mock.Random.cparagraph() %>
                <option value="<%= index %>">选项 <%= index + 1 %> <%= item %></option>
                <% }) %>
            </select>
        </div>
    </div>
    <pre><code class="hljs html">
        <select bx-name="components/dropdown" data-popover="200">
            <option value="0">选项 1 ...</option>
            <option value="1">选项 2 ...</option>
            <option value="2">选项 3 ...</option>
            <option value="3">选项 4 ...</option>
        </select>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 3 - 下拉分组</div>
            <div class="color-999 mt6">当下拉框中的项有某些明显规律时，可对各项进行分组，方便用户查找。</div>
        </div>
        <div class="content-body">
            <select bx-name="components/dropdown">
                <% _.each(_.range(100), function(item, index){ %>
                <optgroup label="小组 <%= index + 1 %>">
                    <option value="<%= index%>">子选项 <%= index + 1 %></option>
                </optgroup>
                <% }) %>
            </select>
        </div>
    </div>
    <pre><code class="hljs html">
        <select bx-name="components/dropdown">
            <optgroup label="optgroup 1">
                <option value="1">Action</option>
            </optgroup>
            <optgroup label="optgroup 2">
                <option value="2">Another action</option>
            </optgroup>
            <optgroup label="optgroup 3">
                <option value="3" selected="">Something else here</option>
            </optgroup>
        </select>
    </code></pre>
</div>

<script type="text/javascript"></script>
<style type="text/css">
    .popover {
        font-family: "Microsoft YaHei", "微软雅黑", STXihei, "华文细黑", Georgia, "Times New Roman", Arial, sans-serif;
    }
</style>