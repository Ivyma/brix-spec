<div class="mb40">
    <div class="fontsize-20">按钮 <small>Button</small></div>
    <div class="color-999 mt4">按钮是为用户提供了触发即时操作的入口。</div>
</div>

<div class="usage mb40">
    <div>基本规范</div>
    <ol>
        <li>每个按钮都有一个相对应的操作或流程；如果是导航到另一个页面窗口，请使用链接。</li>
        <li>按钮有两种，主要和次要。主要按钮为页面上最重要操作，一个模块中(如浮层、表格、表单等)只能有一个主要按钮, 主引导用户的操作行为； 其他的操作皆为次要操作(同时包含禁用按钮与文字链接)。</li>
        <li>主要按钮永远放在最左边</li>
    </ol>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
        </div>
        <div class="content-body">
            <button class="btn btn-brand mr60">主要按钮</button>
            <button class="btn mr60">次要按钮</button>
            <button class="btn btn-disabled mr60">不可点按钮</button>
            <a class="" href="javascript:;">文字按钮</a>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        <button class="btn btn-brand mr10">主要按钮</button>
        <button class="btn mr10">次要按钮</button>
        <button class="btn btn-disabled  mr10">不可点按钮</button>
        <a href="javascript:;">文字按钮</a>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 单个按钮</div>
            <div class="color-999 mt6">模块操作的按钮置于模块内，跨模块或页面等级的按钮置于模块外。</div>
        </div>
        <div class="content-body" style="padding-right: 0; padding-bottom: 0;">
            <div style="height: 50px; background-color: #FF6600;"></div>
            <div class="ungrid-row">
                <div class="ungrid-col" style="width: 200px; padding: 60px 30px; text-align: center; vertical-align: top; background-color: #423f48;">
                    <button class="btn btn-brand">＋新建推广计划</button>
                </div>
                <div class="ungrid-col" style="padding: 40px; background-color: #fafafa;">
                    <p class="flat-text small"></p>
                    <p class="flat-text full-width mt10"></p>
                    <p class="flat-text full-width mt10"></p>
                </div>
            </div>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        <button class="btn btn-brand">＋新建推广计划</button>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 2 - 按钮对</div>
            <ol>
                <li>对话框中的按钮置于左下角，主要按钮居左。例如，“确认”和“取消”。</li>
                <li>指示最常见或最受推荐的操作时，使用主要按钮。</li>
                <li>按钮永远置于对话框顶层，内容出现滚动时不遮挡按钮。</li>
            </ol>
        </div>
        <div class="content-body bg-backdrop" style="padding-right: 0;">
            <div style="border-radius: 6px; border: 1px solid #e6e6e6; background-color: #FFF;">
                <div style="padding: 18px 40px; border-bottom: 1px solid #e6e6e6;">
                    <p class="flat-text small" style=""></p>
                </div>
                <div style="padding: 18px 40px;">
                    <p class="flat-text full-width"></p>
                    <p class="flat-text full-width mt10"></p>
                </div>
                <div style="padding: 18px 40px; border-top: 1px solid #e6e6e6;">
                    <button class="btn btn-brand mr10">确定</button>
                    <button class="btn mr10">取消</button>
                </div>
            </div>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        <button class="btn btn-brand mr10">确定</button>
        <button class="btn mr10">取消</button>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 3 - 按钮组</div>
            <ol>
                <li>当有两个或三个按钮时，需要指示最常见或最受推荐的操作，并使用主要按钮。</li>
                <li>当需要为用户显示更多操作（如按钮超过三个时），考虑使用复选框或单选按钮，用户可从中选择操作，并通过一个命令按钮来触发这些操作。 </li>
            </ol>
        </div>
        <div class="content-body">
            <div class="fontsize-16 mb10">时段报表</div>
            <div class="mb10">
                <button class="btn btn-brand mr10">＋新建推广计划</button>
                <button class="btn mr10">修改人群</button>
                <button class="btn mr10">设置定向</button>
            </div>
            <div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>字段1</th>
                            <th>字段2</th>
                            <th>字段3</th>
                            <th>字段4</th>
                            <th>字段5</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                        <tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        <button class="btn btn-brand mr10">＋新建推广计划</button>
        <button class="btn mr10">修改人群</button>
        <button class="btn mr10">设置定向</button>
    </code></pre>
</div>


<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 4 - 按钮的信息反馈</div>
            <ol>
                <li>表格表单、用户输入错误时，按下按钮给出抖动反馈动作。</li>
                <li>必选项提示后伴随空缺项错误原因浮出，非必选提示后按钮跟随错误原因浮出。</li>
                <li>确认反馈动效仅发生在主要按钮和次要按钮，文字链中不提供抖动反馈样式。</li>
            </ol>
        </div>
        <div class="content-body" style="padding: 60px 0 50px 120px; background-color: #474747">
            <div style="border-radius: 6px; border: 1px solid #e6e6e6; background-color: #FFF;">
                <div style="padding: 18px 40px; border-bottom: 1px solid #e6e6e6;">
                    <p class="flat-text small"></p>
                </div>
                <div style="padding: 18px 40px;">
                    <p class="flat-text full-width"></p>
                    <p class="flat-text full-width mt10"></p>
                </div>
                <div style="padding: 18px 40px; border-top: 1px solid #e6e6e6;">
                    <button class="btn btn-brand mr10 animated infinite ani-shake">确定</button>
                    <button class="btn mr10">取消</button>
                </div>
            </div>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        <button class="btn btn-brand mr10 animated infinite ani-shake">确定</button>
        <button class="btn mr10">取消</button>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 5 - 按钮加载状态</div>
            <ol></ol>
        </div>
        <div class="content-body">
            <div class="btn btn-brand btn-progress mr60">
                <div class="btn-progress-bar animated infinite ani-progressbar"></div>
                <span>正在加载</span>
            </div>
            <div class="btn btn-progress mr60">
                <div class="btn-progress-bar animated infinite ani-progressbar"></div>
                <span>正在加载</span>
            </div>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        <div class="btn btn-brand btn-progress mr60">
            <div class="btn-progress-bar animated infinite ani-progressbar"></div>
            <span>正在加载</span>
        </div>
        <div class="btn btn-progress mr60">
            <div class="btn-progress-bar animated infinite ani-progressbar"></div>
            <span>正在加载</span>
        </div>
    </code></pre>
</div>
