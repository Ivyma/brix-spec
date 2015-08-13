<div class="mb40">
    <div class="fontsize-20">加载 <small>Spin</small></div>
    <div class="color-999 mt4">当用户做出操作时，系统为完成此操作所需要的时间为等待时间。</div>
</div>

<div class="usage mb40">
    <div>基础用法</div>
    <ol>
        <li>等待时间在 0.1 秒内：在用户感知中算是即时，不需要 loading 显示。</li>
        <li>等待时间为 0.1 ～ 1秒：用户即能感知延迟，需要 loading 显示。</li>
        <li>等待时间超过 1 秒：建议告知用户真实进度百分比（完成度或等待时间）</li>
        <li>等待时间超过 10 秒钟：非常长的等待，需要告知用户进度且不建议阻挡用户做其他的操作 （非同步操作）。</li>
    </ol>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 按钮中的加载</div>
            <div class="color-999 mt6">有明确加载状态，较长时间的加载需使用进度条的方式加载。</div>
        </div>
        <div class="content-body">
            <button class="btn btn-brand mr10"><span class="bx-anim-btn-loading"></span></button>
            <button class="btn mr10"><span class="bx-anim-btn-loading"></span></button>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        <button class="btn btn-brand mr10"><span class="bx-anim-btn-loading"></span></button>
        <button class="btn mr10"><span class="bx-anim-btn-loading"></span></button>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 2 - 页面加载进度</div>
            <div class="color-999 mt6">当页面全局加载时，也可以在浏览器窗口下使用确定型进度来显示页面进度。</div>
        </div>
        <div class="content-body" style="padding-right: 0; padding-bottom: 0;">
            <div style="height: 50px; background-color: #FF6600;"></div>
            <div style="height: 4px; background-color: #fc4218; margin-top: -4px; width: 80%;"></div>
            <div class="ungrid-row">
                <div class="ungrid-col" style="width: 200px; padding: 60px 30px; text-align: center; vertical-align: top; background-color: #423f48;"></div>
                <div class="ungrid-col" style="padding: 40px; background-color: #fafafa;">
                    <p class="flat-text small"></p>
                    <p class="flat-text full-width mt10"></p>
                    <p class="flat-text full-width mt10"></p>
                </div>
            </div>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        <div style="height: 4px; background-color: #fc4218; margin-top: -4px; width: 80%;"></div>
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 3 - 页面加载状态</div>
            <div class="color-999 mt6">当页面全局加载以及模块内容加载时，使用图形形变方式展现加载状态。</div>
        </div>
        <div class="content-body" style="padding-right: 0; padding-bottom: 0;">
            <div style="height: 50px; background-color: #FF6600;"></div>
            <div style="height: 4px; background-color: #fc4218; margin-top: -4px; width: 80%;"></div>
            <div class="ungrid-row">
                <div class="ungrid-col" style="width: 200px; padding: 60px 30px; text-align: center; vertical-align: top; background-color: #423f48;"></div>
                <div class="ungrid-col" style="padding: 60px 40px 40px 40px; background-color: #fafafa;">
                    <div bx-name="components/spin"></div>
                </div>
            </div>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        <div bx-name="components/spin"></div>
    </code></pre>
</div>

<script type="text/javascript">
    require(['css!spec.components/animate.css'])
</script>