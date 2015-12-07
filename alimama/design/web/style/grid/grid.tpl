<div class="hide">
    <h1>样式 <small>CSS</small></h1>
    <hr>
</div>

<div class="spec-section mb40">
    <div class="mb40">
        <div class="fontsize-20 mb10">栅格 <small>Grid</small></div>
    </div>
    <div class="mb40">
        <div class="fontsize-16 mb10">栅格说明 <small></small></div>
        <table class="table">
            <thead>
                <tr>
                    <th></th>
                    <th>超小屏幕设备<br>手机 &lt;768px</th>
                    <th>小屏幕设备<br>平板 ≥768px</th>
                    <th>中等屏幕设备<br>桌面 ≥992px</th>
                    <th>大屏幕设备<br>桌面 ≥1200px</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>最大宽度</td>
                    <td>auto</td>
                    <td>720px</td>
                    <td>960px</td>
                    <td>1140px</td>
                </tr>
                <tr>
                    <td>最大列宽</td>
                    <td>auto</td>
                    <td>60px</td>
                    <td>80px</td>
                    <td>95px</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="mb40">
        <div class="fontsize-16 mb10">用法 <small></small></div>
        <pre><code class="hljs html">&lt;div class="mm-row"&gt;
  &lt;div class="col col-1"&gt;...&lt;/div&gt;
  &lt;div class="col col-2"&gt;...&lt;/div&gt;
  &lt;div class="col col-2"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
    <div class="mb40">
        <div class="fontsize-16 mb10">64 列栅格 <small></small></div>
        <div>
            <div class="mm-row">
                <div class="col col-10"> 10n </div>
                <div class="col col-50 offset-2"> 50n </div>
            </div>
            <div class="mm-row">
                <div class="col col-10"> 10n </div>
                <div class="col col-24 offset-2"> 24n </div>
                <div class="col col-24 offset-2"> 24n </div>
            </div>
            <div class="mm-row">
                <div class="col col-10"> 10n </div>
                <div class="col col-15 offset-2"> 15n </div>
                <div class="col col-16 offset-2"> 16n </div>
                <div class="col col-15 offset-2"> 15n </div>
            </div>
            <div class="mm-row">
                <div class="col col-10"> 10n </div>
                <div class="col col-11 offset-2"> 11n </div>
                <div class="col col-11 offset-2"> 11n </div>
                <div class="col col-11 offset-2"> 11n </div>
                <div class="col col-11 offset-2"> 11n </div>
            </div>
            <div class="mm-row">
                <div class="col col-58 offset-3"> 58n offset-3 </div>
            </div>
        </div>
    </div>
</div>