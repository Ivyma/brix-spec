/* global define */
define(function() {
    return (function(){/*
<% var RE_FILENAME = /.+\/([^\/]+)/ %>
<% var list = [] %>

<div class="brand">

    <div class="hide">
        <div class="">阿里妈妈品牌规范 <small>Brand Guidelines</small></div>
    </div>

    <div class="spec-section brand-grid">
        <div class="clearfix">
            <div class="pull-left fontsize-20 mb40">网格系统 <small>Grid Systems</small></div>
            <div class="pull-right relative">
                <a class="btn btn-brand" href="javascript:;"
                    on-mouseenter="download" 
                    on-click="download">
                    <span class="specfont">&#xe633;</span>
                    <span>下载附件</span>
                </a>
                <% list = ['系统网格/阿里妈妈品牌规范-系统网格.ai', '系统网格/阿里妈妈品牌规范-系统网格.pdf'] %>
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
        <div class="web mb60">
            <div class="fontsize-16">Web 上的栅格</div>
            <p class="color-999 mt4 mb20">品牌站点和各产品 Minisite 采用 12 栏流体栅格，可以根据版面需要分为通栏、两栏、三栏、四栏甚至六栏的形式。根据站点的特点和内容，在pc端可 以先采用一种固定的宽度，通过流体的方式适配平板。</p>
            <div class="row mb20">
                <div class="col-sm-4">
                    <p>PC 宽屏</p>
                    <img class="img-responsive" src="assets/grid-systems/01-PC宽屏.svg">
                </div>
                <div class="col-sm-4">
                    <p>PC 窄屏</p>
                    <img class="img-responsive" src="assets/grid-systems/02-PC窄屏.svg">
                </div>
                <div class="col-sm-4">
                    <p>iPAD 竖屏</p>
                    <img class="img-responsive" src="assets/grid-systems/03-iPAD竖屏.svg">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <img class="img-responsive" src="assets/grid-systems/04-pc栅格.svg">
                </div>
            </div>
        </div>
        <div class="print mb60">
            <div class="fontsize-16 mb10">印刷上的栅格</div>
            <p class="color-999 mt4 mb20">平面印刷上优先采用12栏、12列的网格系统,以应对多种物料设计的需求，网格系统可根据实际应用尺寸按比例拉伸。我们的排版遵循标准的定义、动态布局。</p>
            <div class="row">
                <img class="col-sm-12 img-responsive mb40" src="assets/grid-systems/05-印刷12栅格.svg">
                <img class="col-sm-6 img-responsive mb40" src="assets/grid-systems/06-书籍.svg">
                <img class="col-sm-6 img-responsive mb40" src="assets/grid-systems/07-书籍栅格.svg">
                <img class="col-sm-6 img-responsive mb40" src="assets/grid-systems/08-白色ppt.svg">
                <img class="col-sm-6 img-responsive mb40" src="assets/grid-systems/09-白色ppt栅格.svg">
                <img class="col-sm-6 img-responsive mb40" src="assets/grid-systems/10-黑色ppt.svg">
                <img class="col-sm-6 img-responsive mb40" src="assets/grid-systems/11-黑色ppt栅格.svg">
            </div>
        </div>
    </div>


</div><!-- /brand -->
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})