# 文本框 <small>Textarea</small>

文本框是为用户提供一个输入文字字数较多或需要分行分段编辑的控件，支持键盘焦点。当需要用户输入或编辑的文字字数较少（如只有一行）时，采用输入框。

<div class="bs-example">
    <div class="content">
        <h3>基础用法</h3>
        <ol>
            <li>主要用于从用户端获取相关字段的信息。</li>
            <li>文本框的高度应满足典型输入内容的要求，宽度不宜太宽，以免造成单行内容过长，影响阅读。</li>
            <li>输入前提示：该标签内容的相关补充说明（如输入的格式、字数限制等）。</li>
            <li>输入时提示：若输入信息有限定，则需在接收用户输入时，进行实时编辑检查。</li>
            <li>验证后反馈：输入正确、错误或必填等反馈说明 。</li>
        </ol>
        <hr>
        <form data-parsley-validation-threshold="0" data-parsley-focus="none" class="form" action="">
            <div class="row">
                <div class="col-sm-6">
                    <textarea class="form-control" rows="3" placeholder="请输入描述信息" data-parsley-trigger="change keyup" data-parsley-required=""></textarea>
                </div>
                <div class="col-sm-6"></div>
            </div>
        </form>
    </div>
    <pre><code class="hljs html">
        <textarea class="form-control" rows="3" placeholder="请输入描述信息" data-parsley-trigger="change keyup" data-parsley-required=""></textarea>
    </code></pre>
</div>

<div class="bs-example">
    <div class="content">
        <h3>场景 1 - 名称待定</h3>
        <p>当输入信息有限定时，需在接收用户的输入时，进行实时编辑检查。例如，当输入的字数有限制时，需要随着输入动态变化，倒数计数来提醒用户。</p>
        <hr>
        <form data-parsley-validation-threshold="0" data-parsley-focus="none" class="form" action="">
            <div class="row">
                <div class="col-sm-6">
                    <textarea class="form-control" rows="3" placeholder="请输入描述信息" 
                        onkeyup="$('#maxlength-tips').text(Math.max(0, 100 - this.value.length))" 
                        data-parsley-trigger="change keyup" data-parsley-maxlength="100"></textarea>
                    <div></div>
                    <ul class="parsley-errors-list filled">
                        <li class="parsley-maxlength">还可输入 <span id="maxlength-tips">100</span> 个字</li>
                    </ul>
                </div>
                <div class="col-sm-6"></div>
            </div>
        </form>
    </div>
    <pre><code class="hljs html">
        <textarea class="form-control" rows="3" placeholder="请输入描述信息" 
            onkeyup="$('#maxlength-tips').text(Math.max(0, 100 - this.value.length))" 
            data-parsley-trigger="change keyup" data-parsley-maxlength="100"></textarea>
    </code></pre>
</div>

<script type="text/javascript">
    require(['jquery', 'parsley', 'dependencies/parsleyjs/src/i18n/zh_cn'], function($, Parsley) {
        window.ParsleyValidator.setLocale('zh_cn');
        $('form').parsley()
    })
</script>