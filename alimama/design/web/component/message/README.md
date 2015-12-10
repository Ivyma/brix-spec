<!-- http://ademo.alicdn.com/private/system/vd_assets/assets/000/171/613/46/45/f2/06/ef3088875f35e401a53d6873/original/%E9%80%9A%E7%94%A8%E4%BF%A1%E6%81%AF2.png -->
<div class="mb40">
    <div class="fontsize-20">通用信息 <small>Message</small></div>
    <div class="color-999 mt4">任何一个产品，即使用户界面做的再好，也离不开用户引导和信息提示。当需要告诉用户要做什么，或将要了解的信息传递给用户时，最直接的方式是使用文字。</div>
</div>

<div class="usage mb40">
    <div>基本规范</div>
    <ol>
        <li>帮助：提供用户功能、作用的解释。例如：列表中数据字段的解释。</li>
        <li>资讯：告知用户事项、状态，知晓即可的信息，该信息可关闭。例如：您报名参加的活动已通过。</li>
        <li>低风险警告：需要用户知道并采取行动，若忽略该信息，后续可进行修复的事件。例如：您的账户余额不足，请尽快充值。去充值。</li>
        <li>高风险警告：需要用户知道并采取行动，若忽略该信息，后续无法挽回的事件。例如：您的账户已被触发，处于冻结状态。去申诉。</li>
        <li>成功：用户操作已成功。例如：计划创建成功。</li>
        <li>失败：用户操作已失效或是需要马上采取行动的问题。例如：提交失败。</li>
    </ol>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
        </div>
        <div class="content-body">
            <div class="contextual-message bg-info mb40">
                <span class="zsfont glyph color-help">&#xe6ab;<!-- &#xe6ab; --></span>
                <span>XXX 创意已经通过审核。</span>
            </div>
            <div class="contextual-message bg-info mb40">
                <span class="zsfont glyph color-help">&#xe6af;<!-- &#xe6af; --></span>
                <span>XXX 创意已经通过审核。</span>
            </div>
            <div class="contextual-message bg-warning color-f mb40">
                <span class="zsfont glyph">&#xe6ae;<!-- &#xe6ae; --></span>
                <span>您的账户余额不足，请尽快崇志。<a href="javascript:;" class="color-f ml10">去充值</a></span>
            </div>
            <div class="contextual-message bg-danger color-f mb40">
                <span class="zsfont glyph">&#xe6ad;<!-- &#xe6ad; --></span>
                <span>您的账户已被处罚，处于冻结状态。<a href="javascript:;" class="color-f ml10">去申诉</a></span>
            </div>
            <div class="contextual-message bg-success color-f mb40">
                <span class="zsfont glyph">&#xe6aa;<!-- &#xe6aa; --></span>
                <span>恭喜，您的 XXX 计划已经创建完成。</span>
            </div>
            <div class="contextual-message bg-fail color-f mb40">
                <span class="zsfont glyph">&#xe6a7;<!-- &#xe6a7; --></span>
                <span>对不起，当前的修改提交失败，请重试。</span>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
        <div class="contextual-message bg-info mb40">
            <span class="zsfont glyph color-help">&#xe6ab;<!-- &#xe6ab; --></span>
            <span>XXX 创意已经通过审核。</span>
        </div>
        <div class="contextual-message bg-info mb40">
            <span class="zsfont glyph color-help">&#xe6af;<!-- &#xe6af; --></span>
            <span>XXX 创意已经通过审核。</span>
        </div>
        <div class="contextual-message bg-warning color-f mb40">
            <span class="zsfont glyph">&#xe6ae;<!-- &#xe6ae; --></span>
            <span>您的账户余额不足，请尽快崇志。<a href="javascript:;" class="color-f ml10">去充值</a></span>
        </div>
        <div class="contextual-message bg-danger color-f mb40">
            <span class="zsfont glyph">&#xe6ad;<!-- &#xe6ad; --></span>
            <span>您的账户已被处罚，处于冻结状态。<a href="javascript:;" class="color-f ml10">去申诉</a></span>
        </div>
        <div class="contextual-message bg-success color-f mb40">
            <span class="zsfont glyph">&#xe6aa;<!-- &#xe6aa; --></span>
            <span>恭喜，您的 XXX 计划已经创建完成。</span>
        </div>
        <div class="contextual-message bg-fail color-f mb40">
            <span class="zsfont glyph">&#xe6a7;<!-- &#xe6a7; --></span>
            <span>对不起，当前的修改提交失败，请重试。</span>
        </div>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 组件级信息反馈</div>
        </div>
        <div class="content-body">
            <div class="">
                <p class="color-brand pl9">人群名称</p>
                <input class="focus" style="width: 330px;" value="一线城市成熟男性高富帅">
                <span class="color-ccc ml10">不超过 10 个字符</span>
            </div>
            <div class="mt40">
                <p class="color-red pl9">人群名称</p>
                <input class="error" style="width: 330px;" value="一线城市成熟男性高富帅">
                <span class="color-red ml10">错误提示文案</span>
            </div>
            <div class="mt40">
                <p class="color-333 pl9">人群名称</p>
                <input style="width: 330px;" value="一线城市成熟男性高富帅">
                <span class="color-green brixfont fontsize-20 ml10">&#xe627;</span>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
        
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 2 - 模块级信息反馈</div>
        </div>
        <div class="content-body" style="padding-right: 0; padding-bottom: 0;">
            <div style="height: 50px; background-color: #FF6600;"></div>
            <div class="ungrid-row">
                <div class="ungrid-col" style="width: 200px; padding: 60px 30px; text-align: center; vertical-align: top; background-color: #423f48;">
                </div>
                <div class="ungrid-col" style="padding: 40px; background-color: #fafafa; position: relative;">
                    <p class="flat-text small"></p>
                    <div class="contextual-message bg-warning color-f mt10 mb10" style="border-radius: 0;">
                        <span class="zsfont glyph">&#xe6ae;<!-- &#xe6ae; --></span>
                        <span>您上传的创意中有个 1 个不符合当前的设置。</span>
                    </div>
                    <p class="flat-text full-width mt10"></p>
                    <p class="flat-text full-width mt10"></p>
                </div>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
        
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 3 - 页面级信息反馈</div>
            <!-- <div class="color-999 mt6">反馈，是由一个操作所引导的提示页面，并独立成提示区域，通常在页面的顶部显示。</div>
            <ol>
                <li>成功：用户操作已成功；</li>
                <li>错误：提醒用户操作已失败或是需要马上采取行动的问题。有效的错误反馈需要解释错误发生的原因，并提供解决方案。</li>
            </ol> -->
        </div>
        <div class="content-body" style="padding-right: 0; padding-bottom: 0;">
            <div style="height: 50px; background-color: #FF6600;"></div>
            <div class="ungrid-row">
                <div class="ungrid-col" style="width: 200px; padding: 60px 30px; text-align: center; vertical-align: top; background-color: #423f48;">
                </div>
                <div class="ungrid-col" style="padding: 72px 40px 40px 40px; background-color: #fafafa; position: relative;">
                    <div class="contextual-message contextual-message-sticky bg-info mb10">
                        <span class="zsfont glyph color-help"><!-- &#xe6af; --></span>
                        <span>XXX 创意已经通过审核。</span>
                    </div>
                    <p class="flat-text small"></p>
                    <p class="flat-text full-width mt10"></p>
                    <p class="flat-text full-width mt10"></p>
                </div>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
        
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 4 - 账户级信息反馈</div>
            <!-- <div class="color-999 mt6">用于显示用户需要关注的系统事件，出现在页面导航上方。如用户账号被冻结影响用户的全局操作。</div> -->
        </div>
        <div class="content-body" style="padding-right: 0; padding-bottom: 0;">
            <div style="position: relative;">
                <div class="contextual-message bg-danger color-f" style="border-radius: 0;">
                    <span class="zsfont glyph">&#xe6ad;<!-- &#xe6ad; --></span>
                    <span>您的账户已被处罚，处于冻结状态。<a href="javascript:;" class="color-f ml10">去申诉</a></span>
                </div>
                <div style="height: 50px; background-color: #FF6600;"></div>
                <div class="ungrid-row">
                    <div class="ungrid-col" style="width: 200px; padding: 60px 30px; text-align: center; vertical-align: top; background-color: #423f48;">
                    </div>
                    <div class="ungrid-col" style="padding: 40px; background-color: #fafafa;">
                        <p class="flat-text small"></p>
                        <p class="flat-text full-width mt10"></p>
                        <p class="flat-text full-width mt10"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
        
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 5 - 系统反馈</div>
            <!-- <div class="color-999 mt6">404、500 页面错误，提供用户反馈或上一页的快捷入口。</div>
            <ol class="hide">
                <li>警告：提醒用户将来可能导致产生问题，出现于页面的上方，在页面导航下方。如余额不足时，不充值将会停止投放。</li>
            </ol> -->
        </div>
        <div class="content-body">
            <!-- <div class="text-center" style="font-size: 100px;">404</div> -->
            <div>
                <img class="img-responsive" src="alimama/design/web/component/assets/404-01.svg">
            </div>
            <div class="text-center fontsize-20 color-999">啊哦！思绪全乱了，让我静一静。</div>
            <div class="text-center fontsize-20 color-999">暂时无法为您服务拉。</div>
            <div class="text-center mt20">
                <a href="/" class="btn btn-brand">返回首页</a>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
        
    </code></pre>
</div>
