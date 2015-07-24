<div class="mb40">
    <div class="fontsize-20">单选按钮 <small>Radio</small></div>
    <div class="color-999 mt4">单选按钮允许用户从两个或多个选项中选择一个选项。每个选项都表示为一个单选按钮，用户只能选择单选按钮组中的一个单选按钮。</div>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
            <ol>
                <li>单选按钮平等地强调所有选项。若在大部分情况下为大多数用户推荐默认选项，请使用下拉框展现。</li>
                <li>如果仅有两个相互排斥的选项，请将其合并到单个复选框或切换开关。例如，使用复选框“我同意”而不是两个单选按钮“我同意”和“我不同意”。</li>
                <li>默认情况下，以横向排列 展示。</li>
            </ol>
        </div>
        <div class="content-body">
            <div>
                <label><input type="radio"> 未选中</label>
                <label><input type="radio" checked>已选中</label>
            </div>
            <div>
                <label><input type="radio" disabled> 禁用/未选中</label>
                <label><input type="radio" checked disabled>禁用/已选中</label>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
        <label><input type="radio"> 未选中</label>
        <label><input type="radio" checked>已选中</label>
        <label><input type="radio" disabled> 禁用/未选中</label>
        <label><input type="radio" checked disabled>禁用/已选中</label>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 竖向展示1</div>
            <div class="color-999 mt6">当选项间有多层级关系时使用竖向展示。</div>
        </div>
        <div class="content-body">
            <ul class="checklist">
                <li><label><input type="radio" name="sss"> 单选1</label></li>
                <li><label><input type="radio" name="sss"> 单选2</label></li>
                <li>
                    <label><input type="radio" name="sss"> 单选3</label>
                    <ul class="checklist">
                        <li><label><input type="checkbox"> 多选1</label></li>
                        <li><label><input type="checkbox"> 多选2</label></li>
                        <li><label><input type="checkbox"> 多选3</label></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <pre><code class="hljs html">
        <ul class="checklist">
            <li><label><input type="radio" name="sss"> 单选1</label></li>
            <li><label><input type="radio" name="sss"> 单选2</label></li>
            <li>
                <label><input type="radio" name="sss"> 单选3</label>
                <ul class="checklist">
                    <li><label><input type="checkbox"> 多选1</label></li>
                    <li><label><input type="checkbox"> 多选2</label></li>
                    <li><label><input type="checkbox"> 多选3</label></li>
                </ul>
            </li>
        </ul>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 2 - 竖向展示2</div>
            <div class="color-999 mt6">当选项有个别的说明性文案时使用竖向展示。</div>
        </div>
        <div class="content-body">
            <ul class="checklist">
                <li>
                    <label>
                        <input type="radio" name="sss"> 多选1
                        <p class="desc">此处为真此单选的一些注意说明</p>
                    </label>
                </li>
                <li>
                    <label>
                        <input type="radio" name="sss"> 多选2
                        <p class="desc">此处为真此单选的一些注意说明</p>
                    </label>
                </li>
                <li>
                    <label>
                        <input type="radio" name="sss"> 多选3
                        <p class="desc">此处为真此单选的一些注意说明</p>
                    </label>
                </li>
            </ul>
        </div>
    </div>
    <pre><code class="hljs html">
        <ul class="checklist">
            <li>
                <label>
                    <input type="radio" name="sss"> 多选1
                    <p class="desc">此处为真此单选的一些注意说明</p>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="sss"> 多选2
                    <p class="desc">此处为真此单选的一些注意说明</p>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="sss"> 多选3
                    <p class="desc">此处为真此单选的一些注意说明</p>
                </label>
            </li>
        </ul>
    </code></pre>
</div>