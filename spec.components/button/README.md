# 按钮 <small>Button</small>

按钮是为用户提供了触发即时操作的入口。

## 示例 <small>Examples</small>

<div class="bs-example">
    <div class="content">
        <h3>基础用法</h3>
        <ol>
            <li>一个模块中（如浮层、表格等）只能有一个主要按钮，其余全为次要按钮（同时包含禁用按钮与文字链接）；</li>
            <li>当操作是导航到另一个页面窗口时，不要使用按钮，而应改用链接；</li>
            <li>对于向导导航，请使用标记为“上一步”和“下一步”的按钮；</li>
            <li>使用简洁具体而又明白易懂的文本来描述点击按钮后 可以执行的操作。</li>
            <li>主要按钮始终在左边停靠。</li>
        </ol>
        <hr>
        <button class="btn btn-brand mr10">主要按钮</button>
        <button class="btn mr10">次要按钮</button>
        <button class="btn btn-disabled  mr10">不可点按钮</button>
        <a href="javascript:;">文字按钮</a>
    </div>
    <pre><code class="hljs html">
        <button class="btn btn-brand mr10">主要按钮</button>
        <button class="btn mr10">次要按钮</button>
        <button class="btn btn-disabled  mr10">不可点按钮</button>
        <a href="javascript:;">文字按钮</a>
    </code></pre>
</div>

<div class="bs-example">
    <div class="content">
        <h3>场景 1 - 单个按钮</h3>
        <p>模块操作的按钮置于模块内，跨模块或页面等级的按钮置于模块外。</p>
        <hr>
        <div>
            <div style="height: 42px; background-color: #FF6600;"></div>
            <div class="ungrid-row">
                <div class="ungrid-col" style="width: 200px; padding: 45px 30px; text-align: center; vertical-align: top; background-color: #423f48;">
                    <button class="btn btn-brand">＋新建推广计划</button>
                </div>
                <div class="ungrid-col" style="padding: 50px; background-color: #fafafa;">
                    <p class="flat-text small"></p>
                    <p class="flat-text full-width"></p>
                    <p class="flat-text full-width"></p>
                    <p class="flat-text full-width"></p>
                </div>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
        <button class="btn btn-brand">＋新建推广计划</button>
    </code></pre>
</div>

<div class="bs-example">
    <div class="content">
        <h3>场景 2 - 按钮对</h3>
        <ol>
            <li>对话框中的按钮置于左下角，主要按钮居左。例如，“确认”和“取消”。</li>
            <li>指示最常见或最受推荐的操作时，使用主要按钮。</li>
            <li>按钮永远置于对话框顶层，内容出现滚动时不遮挡按钮。</li>
        </ol>
        <hr>
        <div style="padding: 50px; background-color: rgba(0,0,0,.5);">
            <div style="border-radius: 6px; border: 1px solid #e6e6e6; background-color: #FFF;">
                <div style="padding: 15px; border-bottom: 1px solid #e6e6e6;">
                    <p class="flat-text small" style="margin: 10px 0;"></p>
                </div>
                <div style="padding: 15px;">
                    <p class="flat-text full-width"></p>
                    <p class="flat-text full-width"></p>
                </div>
                <div style="padding: 15px; border-top: 1px solid #e6e6e6;">
                    <button class="btn btn-brand mr10">确定</button>
                    <button class="btn mr10">取消</button>
                </div>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
        <button class="btn btn-brand mr10">确定</button>
        <button class="btn mr10">取消</button>
    </code></pre>
</div>

<div class="bs-example">
    <div class="content">
        <h3>场景 3 - 按钮组</h3>
        <ol>
            <li>当有两个或三个按钮时，需要指示最常见或最受推荐的操作，并使用主要按钮。</li>
            <li>当需要为用户显示更多操作（如按钮超过三个时），考虑使用复选框或单选按钮，用户可从中选择操作，并通过一个命令按钮来触发这些操作。 </li>
        </ol>
        <hr>
        <div>
            <h3>时段报表</h3>
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
    <pre><code class="hljs html">
        <button class="btn btn-brand mr10">＋新建推广计划</button>
        <button class="btn mr10">修改人群</button>
        <button class="btn mr10">设置定向</button>
    </code></pre>
</div>


<div class="bs-example">
    <div class="content">
        <h3>场景 4 - 按钮的信息反馈</h3>
        <ol>
            <li>表格表单、用户输入错误时，按下按钮给出抖动反馈动作。</li>
            <li>必选项提示后伴随空缺项错误原因浮出，非必选提示后按钮跟随错误原因浮出。</li>
            <li>确认反馈动效仅发生在主要按钮和次要按钮，文字链中不提供抖动反馈样式。</li>
        </ol>
        <hr>
        <div style="padding: 50px; background-color: rgba(0,0,0,.5);">
            <div style="border-radius: 6px; border: 1px solid #e6e6e6; background-color: #FFF;">
                <div style="padding: 15px; border-bottom: 1px solid #e6e6e6;">
                    <p class="flat-text small" style="margin: 10px 0;"></p>
                </div>
                <div style="padding: 15px;">
                    <p class="flat-text full-width"></p>
                    <p class="flat-text full-width"></p>
                </div>
                <div style="padding: 15px; border-top: 1px solid #e6e6e6;">
                    <button class="btn btn-brand mr10 animated infinite ani-shake">确定</button>
                    <button class="btn mr10">取消</button>
                </div>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
        <button class="btn btn-brand mr10 animated infinite ani-shake">确定</button>
        <button class="btn mr10">取消</button>
    </code></pre>
</div>

<div class="bs-example">
    <div class="content">
        <h3>场景 5 - 按钮加载状态</h3>
        <ol></ol>
        <hr>
        <div>
            <div class="btn btn-brand btn-progress mr10">
                <div class="btn-progress-bar animated infinite ani-progressbar"></div>
                <span>正在加载</span>
            </div>
            <div class="btn btn-progress mr10">
                <div class="btn-progress-bar animated infinite ani-progressbar"></div>
                <span>正在加载</span>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
        <div class="btn btn-brand btn-progress mr10">
            <div class="btn-progress-bar animated infinite ani-progressbar"></div>
            <span>正在加载</span>
        </div>
        <div class="btn btn-progress mr10">
            <div class="btn-progress-bar animated infinite ani-progressbar"></div>
            <span>正在加载</span>
        </div>
    </code></pre>
</div>
