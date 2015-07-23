<div class="mb40">
    <div class="fontsize-20">面包屑 <small>Breadcrumb</small></div>
    <div class="color-999 mt4">面包屑作为辅助和补充的导航方式，表达内容的归属层级关系。通常出现于主导航之下，内容之上，用于表明用户当前所在的位置，并提供给用户返回之前任何一个页面的链接。帮助表达内容归属层级关系，属于关联性导航。</div>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
            <div class="color-999 mt6">最常见的面包屑的样式是：横向的文字链接，由大于号“>”分开，这个符号暗示了它们的层级关系，每个层级的文字均可点击。</div>
        </div>
        <div class="content-body">
            <ol class="breadcrumb">
                <li><a href="javascript:;">一级类目</a></li>
                <li><a href="javascript:;">二级类目</a></li>
                <li class="active">三级类目</li>
            </ol>
        </div>
    </div>
    <pre><code class="hljs html">
        <ol class="breadcrumb">
            <li><a href="javascript:;">一级类目</a></li>
            <li><a href="javascript:;">二级类目</a></li>
            <li class="active">三级类目</li>
        </ol>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 基于产品归属</div>
            <div class="color-999 mt6">显示当前产品的上下层级，包含与被包含关系，如电子商务中表达的类目：一级类目 > 二级类目 > 三级类目。</div>    
        </div>
        <div class="content-body">
            <ol class="breadcrumb">
                <li><a href="javascript:;">女装</a></li>
                <li><a href="javascript:;">上衣</a></li>
                <li class="active">运动 T 恤</li>
            </ol>
        </div>
    </div>
    <pre><code class="hljs html">
        <ol class="breadcrumb">
            <li><a href="javascript:;">女装</a></li>
            <li><a href="javascript:;">上衣</a></li>
            <li class="active">运动 T 恤</li>
        </ol>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 基于用户浏览及所在位置关系</div>
            <div class="color-999 mt6">显示用户浏览的轨迹及当前在网站的层次结构。它们通常用于导航方案（通常超过两个级别），如计划管理中的：计划 > 单元 > 创意。</div>
        </div>
        <div class="content-body">
            <ol class="breadcrumb">
                <li>
                    <select bx-name="components/dropdown">
                        <option value="1">计划名称 1</option>
                        <option value="2">计划名称 2</option>
                        <option value="3">计划名称 3</option>
                    </select>
                </li>
                <li><a href="javascript:;">宝贝名称</a></li>
                <li class="active">宝贝关键词 1</li>
            </ol>
        </div>
    </div>
</div>