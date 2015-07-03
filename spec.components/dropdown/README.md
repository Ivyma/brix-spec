# 下拉框 <small>Dropdown</small>

下拉框是选定的项始终可见、其他项通过单击下拉按钮才显示的列表。使用下拉框，用户可以在展开的列表中作出选择。通过下拉框，用户可以选择一个且只能选择一个选项。使用下拉框可以节省屏幕空间，使用户的注意力更聚焦。

## 示例 <small>Examples</small>

<div class="bs-example">
    <div class="content">
        <h3>基础用法</h3>
        <ol>
            <li>使用下拉框 控件可让用户从一组项目中选择单个值，这些项目使用单独一行文本充分显示。</li>
            <li>当少于 5 个项目时，考虑使用单选按钮（如果只能选择一个项目）或复选框（如果可以选择多个项目）。</li>
            <li>将下拉列表项目的文本内容限制为单行。</li>
            <li>下拉框的宽度由内容决定 ，但不小于面板宽度。</li>
            <li>可选择面板的高度由下拉项目数决定，但该高度不得大于六个选项的高度，超过面板高度后，则出现滚动条。</li>
            <li>按逻辑顺序排序下拉列表的项目，例如将相关的选项组合在一起，优先放置最常用的选项。</li>
        </ol>
        <hr>
        <select bx-name="components/dropdown">
            <option value="1">Action</option>
            <option value="2">Another action</option>
            <option value="3">Something else here</option>
        </select>
    </div>
</div>

<div class="bs-example">
    <div class="content">
        <h3>场景 1 - 标题待定</h3>
        <p>当下拉框展开的项过多且同质化时，提供搜索功能，方便用户快速定位到要选择的项。</p>
        <hr>
        <div>
            TODO
        </div>
    </div>
</div>

<div class="bs-example">
    <div class="content">
        <h3>场景 2 - 标题待定</h3>
        <p>当下拉框的项内容长度过长时，需要对内容进行截断，以“…”结尾，鼠标放置在上面时显示该项的全部内容。</p>
        <hr>
        <div>
            TODO
        </div>
    </div>
</div>

<div class="bs-example">
    <div class="content">
        <h3>场景 3 - 标题待定</h3>
        <p>当下拉框中的项有某些明显规律时，可对各项进行分组，方便用户查找。</p>
        <hr>
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
    </div>
    <pre><code class="hljs html">
    </code></pre>
</div>
