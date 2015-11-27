/* global define */
define(function() {
    return (function(){/*
<div class="hide">
    <h1>样式 <small>CSS</small></h1>
    <hr>
</div>

<div class="spec-section mb40">
    <div class="mb40">
        <div class="fontsize-20 mb10">字体 <small>Font</small></div class="fontsize-28">
        <p class="mb20">提高文字辨识性和页面易读性，并在视觉上达到统一和整体。</p>
    </div>

    <% var _recommend = [20, 16, 14, 12] %>
    <% var _sizes = [32, 30, 28, 26, 24, 22, 20, 18, 16, 14, 12] %>

    <div class="mb40">
        <div class="fontsize-18 mb10">标题 <small>Header</small></div>
        <p class="mb0">标题字号范围建议12-28号，都为2的整数倍，设备格式统一采用系统设备字体；图片格式标题文本统一采用阿里妈妈后台专用字体，样式为锐利SHARP，字号不做绝对限制。</p>
        <p class="mb0">日常使用推荐带橙点 12号、14号、16号、20号，使用时不可以加粗字体。</p>
        <div class="mt20">
            <table style="width: 100%; table-layout: fixed; overflow: hidden;">
                <tbody>
                    <% _.each(_sizes, function(item, index){ %>
                    <tr>
                        <td style="width: 140px;  height: 40px; text-align: right; padding-right: 30px;">
                            <% if(_.indexOf(_recommend, item) !== -1) { %>
                            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #FF6600; margin-right: 20px;"></span>
                            <% } %>
                            <%= item %>px
                        </td>
                        <td><span style="font-size: <%= item %>px;">标题字体</span></td>
                    </tr>
                    <% }) %>
                    
                </tbody>
            </table>
        </div>
    </div>
    <div class="mb40">
        <div class="fontsize-18 mb10">数字/英文 <small>Alphabet/Number</small></div>
        <p class="mb0">数字/英文字体样式为锐利SHARP，字号不做绝对限制。</p>
        <p class="mb0">日常使用推荐带橙点 12号、14号、16号、20号、24号，使用时需要强调可以加粗字体。 </p>
        <div class="mt20">
            <table style="width: 100%; table-layout: fixed; overflow: hidden;">
                <tbody>
                    <% _recommend.push(24) %>
                    <% _.each(_sizes, function(item, index){ %>
                    <tr>
                        <td style="width: 140px;  height: 40px; text-align: right; padding-right: 30px;">
                            <% if(_.indexOf(_recommend, item) !== -1) { %>
                            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #FF6600; margin-right: 20px;"></span>
                            <% } %>
                            <%= item %>px
                        </td>
                        <td><span style="font-size: <%= item %>px;">0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ</span></td>
                    </tr>
                    <% }) %>
                    
                </tbody>
            </table>
        </div>
    </div>
    <div class="mb20">
        <div class="fontsize-18 mb10">系统设备字体 <small>Font Families</small></div>
        <p>为了适配不同操作系统和游览器，所需文字均采用系统自带字体，以供不同系统设备做最佳适配陪。</p>
        <div>
            <p class="fontsize-14">中文</p>
            <ol class="pl20">
                <li>Windows 优先使用（微软雅黑），如果没有则使用（中易体 SimSun ）。</li>
                <li>OS X优先使用（冬青黑体简体 Hiragino Sans GB），如果没有则使用默认（华文黑体）。</li>
                <li>Linux 优先使用（文泉驿微米黑）。</li>
            </ol>
        </div>
        <div>
            <p class="fontsize-14">西文</p>
            <ol class="pl20">
                <li>Windows 优先使用（Tahoma）。</li>
                <li>OS X优先使用（Helvetica Neue）。 </li>
            </ol>
        </div>
    </div>
    <div>
        <pre><code>body {
    font-size: 12px;
    font-family: "Microsoft YaHei", "微软雅黑", STXihei, "华文细黑", Georgia, "Times New Roman", Arial, sans-serif;
    background-color: #fff;
    color: #333;
    -webkit-font-smoothing: antialiased;
}</code></pre>
    </div>
</div>


    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})