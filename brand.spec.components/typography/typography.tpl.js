/* global define */
define(function() {
    return (function(){/*
<% var RE_FILENAME = /.+\/([^\/]+)/ %>
<% var list = [] %>

<div class="brand">

    <div class="hide">
        <div class="">阿里妈妈品牌规范 <small>Brand Guidelines</small></div>
    </div>


    <div class="spec-section brand-typography mb40">
        <div class="clearfix"> 
            <div class="pull-left fontsize-20 mb40">字体 <small>Typography</small></div>
            <div class="pull-right relative">
                <a class="btn btn-brand" href="javascript:;"
                    on-mouseenter="download" 
                    on-click="download">
                    <span class="specfont">&#xe633;</span>
                    <span>下载附件</span>
                </a>
                <% list = ['字体/阿里妈妈品牌规范-字体.ai', '字体/阿里妈妈品牌规范-字体.pdf', '字体/阿里妈妈品牌规范-字体.zip'] %>
                <ul class="spec-download-list">
                    <% for( var i = 0; i < list.length; i++ ) { %>
                    <li class="clearfix">
                        <a href="download/<%= list[i] %>" download="">
                            <span class="name"><%= RE_FILENAME.exec(list[i])[1] %></span>
                            <span class="specfont">&#xe633;</span>
                        </a>
                    </li>
                    <% } %>
                </ul>
            </div>
        </div>
        <div class="mb60">
            <div class="fontsize-16">印刷字体</div>
            <p class="color-999 mt4">为了塑造品牌整体形象,所有传播媒体、刊物及平面印刷等,所需的文字均采用统一专用字体,以供不同场合使用。同时,为求运用方便,在刊物、媒体等内文说明的排版上,若无相同字体,请以形相近的字体取代使用。</p>
            <div class="mt20 mb40">
                <div class="mb20">
                    <div class="color-999 mb6">方正兰亭特黑简体(FZLTTHJW)</div>
                    <img class="img-responsive cn" src="assets/typography/01-方正兰亭特黑简体.svg">
                </div>
                <div class="mb20">
                    <div class="color-999 mb6">方正兰亭粗黑简体(FZLTCHJW)</div>
                    <img class="img-responsive cn" src="assets/typography/02-方正兰亭粗黑简体.svg">
                </div>
                <div class="mb20">
                    <div class="color-999 mb6">方正兰亭中黑简体(FZLTZHJW)</div>
                    <img class="img-responsive cn" src="assets/typography/03-方正兰亭中黑简体.svg">
                </div>
                <div class="mb20">
                    <div class="color-999 mb6">方正兰亭黑简体(FZLTHJW)</div>
                    <img class="img-responsive cn" src="assets/typography/04-方正兰亭黑简体.svg">
                </div>
                <div class="mb40">
                    <div class="color-999 mb6">方正兰亭纤黑简体(FZLTXHJW)</div>
                    <img class="img-responsive cn" src="assets/typography/05-方正兰亭纤黑简体.svg">
                </div>

                <div class="mb20">
                    <div class="color-999 mb6">Helvetica Neue Bold</div>
                    <img class="img-responsive en" src="assets/typography/06-Helvetica Neue Bold.svg">
                </div>
                <div class="mb20">
                    <div class="color-999 mb6">Helvetica Neue Medium</div>
                    <img class="img-responsive en" src="assets/typography/07-Helvetica Neue Medium.svg">
                </div>
                <div class="mb20">
                    <div class="color-999 mb6">Helvetica Neue Regular</div>
                    <img class="img-responsive en" src="assets/typography/08-Helvetica Neue Regular.svg">
                </div>
                <div class="mb20">
                    <div class="color-999 mb6">Helvetica Neue Light</div>
                    <img class="img-responsive en" src="assets/typography/09-Helvetica Neue Light.svg">
                </div>
                <div class="mb20">
                    <div class="color-999 mb6">Helvetica Neue Thin</div>
                    <img class="img-responsive en" src="assets/typography/10-Helvetica Neue Thin.svg">
                </div>
                <div class="mb20">
                    <div class="color-999 mb6">Helvetica Neue UltraLight</div>
                    <img class="img-responsive en" src="assets/typography/11-Helvetica Neue UltraLight.svg">
                </div>
            </div>
        </div>
        <div>
            <div class="fontsize-16">系统设备字体</div>
            <p class="color-999 mt4">寻找跨平台最佳的 font-family，适配不同操作系统和浏览器。</p>
            <div class="mb20">
                <p class="mb4">中文：</p>
                <ul style="padding-left: 18px;">
                    <li>Windows 优先使用「微软雅黑」，如果没有则使用「中易宋体（SimSun）」。</li>
                    <li>OS X 优先使用「冬青黑体简体（Hiragino Sans GB）」，如果没有则使用默认的「华文黑体」。</li>
                    <li>Linux 优先使用「文泉驿微米黑」。</li>
                </ul>
                <p class="mb4 mt20">西文：</p>
                <ul style="padding-left: 18px;">
                    <li>Windows 优先使用「Tahoma」，其他可用「Arial」、「Verdana」。</li>
                    <li>OS X 优先使用「Helvetica Neue」，其他可用「Arial」、「Verdana」。</li>
                </ul>
            </div>
            <div>
                <a href="css.html#字体 Font">详见样式</a>
            </div>
        </div>
    </div>


</div><!-- /brand -->
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})