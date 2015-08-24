<div class="mb40">
    <div class="fontsize-20">复选框 <small>Checkbox</small></div>
    <div class="color-999 mt4">复选框为用户提供在两个独立且对立的选项之间表明选择的方法。在极少数情况下，复选框既不处于取消选中状态也不处于选中状态，它会处于所谓不确定的状态。</div>
</div>

<div class="usage mb40">
    <div>基本规范</div>
    <ol>
        <li>默认情况下以横向排列展示。</li>
        <li>当存在两个或多个选项，但用户只能选择一个选项时，请使用单选按钮。 </li>
    </ol>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
            <ol class="hide">
                <li>当用户需要选择任何选项组合时创建一组复选框。</li>
                <li>复选框用来选择一个或多个不相互排斥的选项或者混合选项。</li>
                <li>当存在多个选项，但只能选择一个选项时，应使用单选按钮。</li>
                <li>默认情况下，以横向排列展示。</li>
            </ol>
        </div>
        <div class="content-body">
            <div>
                <label><input type="checkbox"> 未选中</label>
                <label><input type="checkbox" checked>已选中</label>
            </div>
            <div>
                <label class="disabled"><input type="checkbox" disabled> 禁用/未选中</label>
                <label class="disabled"><input type="checkbox" checked disabled>禁用/已选中</label>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
        <label><input type="checkbox"> 选项1</label>
        <label><input type="checkbox"> 选项2</label>
        <label><input type="checkbox"> 选项3</label>
        <label><input type="checkbox"> 选项4</label>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 二元选择</div>
            <div class="color-999 mt6">使用单个复选框来表示二元的是或否选项，如同意产品协议时。</div>
        </div>
        <div class="content-body">
            <label><input type="checkbox"> 阅读并接受<a href="javascript:;">《用户协议》</a></label>    
        </div>
    </div>
    <pre><code class="hljs html">
        <label><input type="checkbox"> 阅读并接受<a href="javascript:;">《用户协议》</a></label>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 2 - 竖向展示</div>
            <div class="color-999 mt6">当选项间有多层级关系时使用竖向展示。</div>
        </div>
        <div class="content-body">
            <ul class="checklist" id="case2">
                <li><label><input type="radio" name="sss" data-linkage-name="all-1"> 单选1</label></li>
                <li><label><input type="radio" name="sss" data-linkage-name="all-2"> 单选2</label></li>
                <li>
                    <label><input type="radio" name="sss" data-linkage-name="all"> 单选3</label>
                    <ul class="checklist">
                        <li><label><input type="checkbox" data-linkage-parent-name="all"> 多选1</label></li>
                        <li><label><input type="checkbox" data-linkage-parent-name="all"> 多选2</label></li>
                        <li><label><input type="checkbox" data-linkage-parent-name="all"> 多选3</label></li>
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
            <div>场景 3 - 竖向展示2</div>
            <div class="color-999 mt6">当选项有个别的说明性文案时使用竖向展示。</div>
        </div>
        <div class="content-body">
            <ul class="checklist">
                <li>
                    <label>
                        <input type="checkbox"> 多选1
                        <p class="desc">此处为真此单选的一些注意说明</p>
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox"> 多选2
                        <p class="desc">此处为真此单选的一些注意说明</p>
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox"> 多选3
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
                    <input type="checkbox"> 多选1
                    <p class="desc">此处为真此单选的一些注意说明</p>
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox"> 多选2
                    <p class="desc">此处为真此单选的一些注意说明</p>
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox"> 多选3
                    <p class="desc">此处为真此单选的一些注意说明</p>
                </label>
            </li>
        </ul>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 4 - 互斥式复选框（包含与被包含关系）</div>
            <div class="color-999 mt6">当一个选项应用于多个对象时，可以使用复选框来表示该选项应用于全部、部分还是不应用于任何对象。</div>
        </div>
        <div class="content-body">
            <div class="checklist-linkage" id="case4">
                <ul>
                    <li><label class="title">标题</li>
                    <li><label><input type="checkbox" data-linkage-name="all"> 全部</label></li>
                    <li><label><input type="checkbox" data-linkage-parent-name="all"> 选项1</label></li>
                    <li><label><input type="checkbox" data-linkage-parent-name="all"> 选项2</label></li>
                    <li><label><input type="checkbox" data-linkage-parent-name="all"> 选项3</label></li>
                </ul>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
        <div class="checklist-linkage">
            <ul>
                <li><label class="title">标题</li>
                <li><label><input type="checkbox" data-linkage-name="all"> 全部</label></li>
                <li><label><input type="checkbox" data-linkage-parent-name="all"> 选项1</label></li>
                <li><label><input type="checkbox" data-linkage-parent-name="all"> 选项2</label></li>
                <li><label><input type="checkbox" data-linkage-parent-name="all"> 选项3</label></li>
            </ul>
        </div>
    </code></pre>
</div>

<script type="text/javascript">
    require(['spec.components/linkage'], function(Linkage) {
        Linkage('#case2')
        Linkage('#case4')
    })
</script>