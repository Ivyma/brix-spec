/* global define */
define(function() {
    return (function(){/*
<% var RE_FILENAME = /.+\/([^\/]+)/ %>
<% var list = [] %>

<div class="brand">

    <div class="hide">
        <div class="">阿里妈妈品牌规范 <small>Brand Guidelines</small></div>
    </div>

    <div class="spec-section brand-story mb40" style="">
        <div class="hide">
            <div class="fontsize-20">品牌故事 <small>Brand Story</small></div>
        </div>
        <div class="row mb40">
            <div class="col-sm-7" style="margin-top: 7%;">
                <div class="color-brand fontsize-20 mb5">Increasing brand value of customer driven</div>
                <div class="color-brand fontsize-20 mb10">客户价值驱动品牌提升</div>
                <a class="btn btn-brand" href="alimama/brand/download/品牌故事/Alimama品牌指南第一版.pdf">
                    <span class="specfont">&#xe633;</span>
                    <span>下载品牌指南</span>
                </a>
            </div>
            <div class="col-sm-4 design-decoration">
                <img class="img-responsive" src="alimama/brand/assets/landing/字母B.gif">
            </div>
        </div>
        <div class="mb40 brand-personality">
            <div class="fontsize-20 text-center mb40">Brand personality</div>
            <div class="row">
                <div class="col-sm-5">
                    <div class="border-left-brand mb20" style="float: left; clear: both;">
                        <div class="fontsize-16">服务</div>
                        <div class="color-999">为客户提供贴心、放心服务，<br>给人安全、可信赖的感觉</div>
                    </div>
                    <div class="border-left-brand mb20" style="float: right; clear: both;">
                        <div class="fontsize-16">卓越</div>
                        <div class="color-999">为有效率、有能力。<br>高效而强大。</div>
                    </div>
                </div>
                <div class="col-sm-2">
                    <img src="alimama/brand/assets/story/20151206/袋鼠头像.svg">
                </div>
                <div class="col-sm-5">
                    <div class="border-left-brand mb20" style="float: right; clear: both;">
                        <div class="fontsize-16">母性</div>
                        <div class="color-999">为温暖、细致、周全、像妈妈<br>般的照顾和支持。</div>
                    </div>
                    <div class="border-left-brand mb20" style="float: left; clear: both;">
                        <div class="fontsize-16">活力</div>
                        <div class="color-999">为充满活力和生命力，<br>新领域发展能力。</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb40 visual-style">
            <div class="fontsize-20 text-center mb40">Visual style</div>
            <div class="row">
                <div class="col-sm-3">
                    <div class="text-center mb10">
                        <img src="alimama/brand/assets/story/20151206/生活化.svg">
                    </div>
                    <div class="fontsize-16">生活化 <span class="color-brand">Life-oriented</span></div>
                    <p class="color-999 mt4 mb0">我们通过成功的案例证明我们的商业价值。我们品牌的外在风格带有真实感受，创意来源于生活中的场景、人物、物品等元素。我们不需要过度包装。</p>
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-3">
                    <div class="text-center mb10">
                        <img src="alimama/brand/assets/story/20151206/温情.svg">
                    </div>
                    <div class="fontsize-16">温情 <span class="color-brand">Warm</span></div>
                    <p class="color-999 mt4 mb0">我们关心客户，并给他们带来长久的信心。我们塑造温和的、带有情感的形象；我们品牌的外在风格会带有一些温情的元素，如柔和的线条、形态和配色，温暖和细腻的纹理等。</p>
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-3">
                    <div class="text-center mb10">
                        <img src="alimama/brand/assets/story/20151206/活力.svg">
                    </div>
                    <div class="fontsize-16">活力 <span class="color-brand">Vitality</span></div>
                    <p class="color-999 mt4 mb0">阿里妈妈的潜力是无限的。我们为此在朴实的基调中注入活力和乐观的情绪；融入一些朝气和感染力。我们把握配色、构图、排版中的节奏感；我们关注动效在品牌中的合理运用。</p>
                </div>
                <div class="col-sm-1"></div>
            </div>
        </div>
        <div class="mb40 brand-download">
            <div class="fontsize-20 text-center mb40">Download</div>
            <div class="row text-center">
                <div class="col-sm-3">
                    <div class="mb10">
                        <a href="alimama/brand/download/标志/阿里妈妈品牌规范-标志.ai" class="item">
                            <img src="alimama/brand/assets/story/20151206/标识.svg">
                        </a>
                    </div>
                    <div class="fontsize-16">标识 <span class="color-brand">Logo</span></div>
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-3">
                    <div class="mb10 item">
                        <a href="alimama/brand/download/吉祥物/阿里妈妈品牌规范-吉祥物（校正）.ai" class="item">
                            <img src="alimama/brand/assets/story/20151206/吉祥物.svg">
                        </a>
                    </div>
                    <div class="fontsize-16">吉祥物 <span class="color-brand">Mascot</span></div>
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-3">
                    <div class="mb10 item">
                        <a href="alimama/brand/download/案例/PPT模板.zip" class="item">
                            <img src="alimama/brand/assets/story/20151206/ppt.svg">
                        </a>
                    </div>
                    <div class="fontsize-16">幻灯片模板 <span class="color-brand">Slideshare</span></div>
                </div>
                <div class="col-sm-1"></div>
            </div>
        </div>
        <!-- 废弃 -->
        <div class="clearfix hide"> 
            <div class="pull-left mb40" style="font-size: 20px;">品牌故事 <small>Brand Story</small></div>
            <div class="pull-right" style="position: relative;">
                <a class="btn btn-brand" href="javascript:;"
                    on-mouseenter="download" 
                    on-click="download">
                    <span class="specfont">&#xe633;</span>
                    <span>下载附件</span>
                </a>
                <% list = ['品牌故事/Alimama品牌指南第一版.pdf'] %>
                <ul class="spec-download-list">
                    <% for( var i = 0; i < list.length; i++ ) { %>
                    <li class="clearfix">
                        <a href="alimama/brand/download/<%= list[i] %>" download="">
                            <span class="name"><%= RE_FILENAME.exec(list[i])[1] %></span>
                            <span class="specfont">&#xe633;</span>
                        </a>
                    </li>
                    <% } %>
                </ul>
            </div>
        </div>
        <div class="row hide">
            <div class="col-sm-12 mb40">
                <div class="fontsize-16">生活化 <small>Life-oriented</small></div>
                <p class="color-999 mt4 mb0">我们通过成功的案例证明我们的商业价值。我们品牌的外在风格带有真实感受，创意来源于生活中的场景、人物、物品等元素。我们不需要过度包装。</p>
            </div>
            <div class="col-sm-12 mb40">
                <div class="fontsize-16">温情 <small>Warm</small></div>
                <p class="color-999 mt4 mb0">我们关心客户，并给他们带来长久的信心。我们塑造温和的、带有情感的形象；我们品牌的外在风格会带有一些温情的元素，如柔和的线条、形态和配色，温暖和细腻的纹理等。</p>
            </div>
            <div class="col-sm-12 mb40">
                <div class="fontsize-16">活力 <small>Vitality</small></div>
                <p class="color-999 mt4 mb0">阿里妈妈的潜力是无限的。我们为此在朴实的基调中注入活力和乐观的情绪；融入一些朝气和感染力。我们把握配色、构图、排版中的节奏感；我们关注动效在品牌中的合理运用。</p>
            </div>
        </div>
    </div>


</div><!-- /brand -->
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})