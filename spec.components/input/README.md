<div class="mb40">
    <div class="fontsize-20">输入框 <small>Input</small></div>
    <div class="color-999 mt4">输入框是为用户提供一个输入文字、编辑已输入文字的控件，支持键盘焦点和密码输入。输入框的长度是由内容决定的，需要根据输入内容的长短来设计。当需要用户输入或编辑的文字字数较多或需分行分段编辑时，采用文本框。</div>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
            <ol>
                <li>主要用于从用户端获取相关字段的信息。</li>
                <li>当输入信息有限定时，需在接收用户的输入时，进行实时编辑检查。</li>
                <li>输入前提示：该标签内容的相关补充说明（如输入的格式、字数限制等）。</li>
                <li>输入时提示：若输入信息有限定，则需在接收用户输入时，进行实时编辑检查。</li>
                <li>验证后反馈：输入正确、错误或必填等反馈说明。 </li>
            </ol>
        </div>
        <div class="content-body">
            <form data-parsley-validation-threshold="0" data-parsley-focus="none" class="form" action="">
                <div class="row">
                    <div class="col-sm-6">
                        <input placeholder="请输入计划名称" data-parsley-trigger="change keyup" data-parsley-required="">
                    </div>
                    <div class="col-sm-6">
                        <input placeholder="昵称不超过 18 个字" data-parsley-trigger="change keyup" data-parsley-maxlength="18">
                    </div>
                </div>
            </form>
        </div>
    </div>
    <pre><code class="hljs html">
        <input placeholder="请输入计划名称" data-parsley-trigger="change keyup" data-parsley-required="">
        <input placeholder="昵称不超过 18 个字" data-parsley-trigger="change keyup" data-parsley-maxlength="18">
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 密码输入</div>
            <div class="color-999 mt6">密码形式—用户输入密码时使用，密码内容屏蔽显示；当用户按下键盘“caps lock”锁定大写字母时，在输入框右侧显示icon来提示用户当前的大小写状态。</div>
        </div>
        <div class="content-body">
            <div class="row">
                <div class="col-sm-6">
                    <input type="password" placeholder="请输入密码">
                </div>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
        <input type="password" placeholder="请输入密码">
    </code></pre>
</div>

<script type="text/javascript">
    require(['jquery', 'parsley'], function($, Parsley) {
        require(['dependencies/parsleyjs/src/i18n/zh_cn'])
        $('form').parsley()
    })
</script>