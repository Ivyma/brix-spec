<div class="mb40">
    <div class="fontsize-20">进度条 <small>Progress</small></div>
    <div class="color-999 mt4">进度条用来显示载入内容的进度，不断的提醒用户当前正在处理运行时间较长的操作。确定性的进度随着时间呈线性递增，使用于已明确知晓所要载入内容数量的场景，可显示操作已完成部分的百分比。而非确定性的进度则表达目前的操作正在进行，常用于“加载”。</div>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
            <ol>
                <li>若时间持续2秒以上，10秒以下，则在进度条的上方显示任务的标题，由于发生的情况较明显，不用提供状态及进度百分比。任务完成后，隐藏 进度条，显示成功文案。</li>
                <li>若时间持续10秒以上，则在进度条的下方显示进度状态，右上角显示进度百分比，同时为用户提供中止操作的入口。</li>
            </ol>
        </div>
    </div>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 上传单个文件</div>
            <div class="color-999 mt6">有明确完成度时，显示进度/占比的内容。</div>
        </div>
        <div class="content-body">
            <div class="row mb20">
                <div class="col-sm-4">
                    <div class="btn btn-brand btn-progress mr40">
                        <div class="btn-progress-bar animated infinite ani-progressbar"></div>
                        <span>上传中... 50%</span>
                    </div>
                    <a class="color-999" href="javascript:;">取消</a>
                </div>
                <div class="col-sm-4">
                    <div class="btn btn-brand btn-progress mr40">
                        <div class="btn-progress-bar animated infinite ani-progressbar" style="width: 0%;"></div>
                        <span>上传</span>
                    </div>
                    <span class="color-999">上传成功</span>
                </div>
                <div class="col-sm-4">
                    <div class="btn btn-brand btn-progress mr40">
                        <div class="btn-progress-bar animated infinite ani-progressbar" style="width: 0%;"></div>
                        <span>上传</span>
                    </div>
                    <span class="color-999">宝贝创意.png <a href="javascript:;" class="zsfont color-999">&#xf013f;</a></span>
                </div>
            </div>
            <div class="row mb20">
                <div class="col-sm-4">
                    <div class="btn btn-progress mr40">
                        <div class="btn-progress-bar animated infinite ani-progressbar"></div>
                        <span>上传中... 50%</span>
                    </div>
                    <a class="color-999" href="javascript:;">取消</a>
                </div>
                <div class="col-sm-4">
                    <div class="btn btn-progress mr40">
                        <div class="btn-progress-bar animated infinite ani-progressbar" style="width: 0%;"></div>
                        <span>上传</span>
                    </div>
                    <span class="color-999">上传成功</span>
                </div>
                <div class="col-sm-4">
                    <div class="btn btn-progress mr40">
                        <div class="btn-progress-bar animated infinite ani-progressbar" style="width: 0%;"></div>
                        <span>上传</span>
                    </div>
                    <span class="color-999">宝贝创意.png <a href="javascript:;" class="zsfont color-999">&#xf013f;</a></span>
                </div>
            </div>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        TODO
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 2 - 同步上传多个文件</div>
            <div class="color-999 mt6">有明确完成度时，显示进度/占比的内容。</div>
        </div>
        <div class="content-body">
            <div class="row mb20">
                <div class="col-sm-4">
                    <div class="btn btn-brand btn-progress mr40">
                        <div class="btn-progress-bar animated infinite ani-progressbar" style="width: 25%;"></div>
                        <span>(2/8) 上传中...</span>
                    </div>
                    <a class="color-999" href="javascript:;">取消</a>
                </div>
                <div class="col-sm-4">
                    <div class="btn btn-brand btn-progress mr40">
                        <div class="btn-progress-bar animated infinite ani-progressbar" style="width: 0%;"></div>
                        <span>上传</span>
                    </div>
                    <span class="color-999">上传成功</span>
                </div>
            </div>
            <div class="row mb20">
                <div class="col-sm-4">
                    <div class="btn btn-progress mr40">
                        <div class="btn-progress-bar animated infinite ani-progressbar" style="width: 25%;"></div>
                        <span>(2/8) 上传中...</span>
                    </div>
                    <a class="color-999" href="javascript:;">取消</a>
                </div>
                <div class="col-sm-4">
                    <div class="btn btn-progress mr40">
                        <div class="btn-progress-bar animated infinite ani-progressbar" style="width: 0%;"></div>
                        <span>上传</span>
                    </div>
                    <span class="color-999">上传成功</span>
                </div>
            </div>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        TODO
    </code></pre>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 2 - 页面全局加载</div>
            <div class="color-999 mt6">当页面全局加载时，也可以在浏览器窗口下使用确定型进度条来显示页面进度。</div>
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
        TODO
    </code></pre>
</div>
