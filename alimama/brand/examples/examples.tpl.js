/* global define */
define(function() {
    return (function(){/*
<% var RE_FILENAME = /.+\/([^\/]+)/ %>
<% var list = [] %>

<div class="brand">

    <div class="hide">
        <div class="">阿里妈妈品牌规范 <small>Brand Guidelines</small></div>
    </div>

    <div class="spec-section brand-examples">
        <div class="clearfix">
            <div class="pull-left fontsize-20 mb40">案例 <small>Examples</small></div>
            <div class="pull-right relative">
                <a class="btn btn-brand" href="javascript:;"
                    on-mouseenter="download" 
                    on-click="download">
                    <span class="specfont">&#xe633;</span>
                    <span>下载附件</span>
                </a>
                <% list = ['案例/阿里妈妈名片模版CMYK格式.ai', '案例/阿里妈妈名片模版RGB格式.ai', '案例/阿里妈妈品牌规范-案例.ai', '案例/阿里妈妈品牌规范-案例.pdf', '案例/PPT模板.zip'] %>
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
        <div class="mb60">
            <div class="fontsize-16 mb10">名片</div>
            <div class="row">
                <img class="col-sm-4 img-responsive" src="alimama/brand/assets/examples/01-名片1.svg">
                <img class="col-sm-4 img-responsive" src="alimama/brand/assets/examples/02-名片2.svg">
                <img class="col-sm-4 img-responsive" src="alimama/brand/assets/examples/03-名片3.svg">
            </div>
        </div>
        <div class="mb60">
            <div class="fontsize-16 mb10">PPT模版</div>
            <div class="row">
                <img class="col-sm-6 img-responsive mb40" src="alimama/brand/assets/examples/04-白色ppt封面.svg">
                <img class="col-sm-6 img-responsive mb40" src="alimama/brand/assets/examples/05-白色ppt封底.svg">
                <img class="col-sm-6 img-responsive mb40" src="alimama/brand/assets/examples/06-黑色ppt封面.svg">
                <img class="col-sm-6 img-responsive mb40" src="alimama/brand/assets/examples/07-黑色ppt封底.svg">
            </div>
        </div>
        <div class="mb60">
            <div class="fontsize-16 mb10">包装袋</div>
            <div class="row">
                <img class="col-sm-12 img-responsive mb40" src="alimama/brand/assets/examples/08-袋子1.svg">
                <img class="col-sm-12 img-responsive mb40" src="alimama/brand/assets/examples/09-袋子2.svg">
                <img class="col-sm-12 img-responsive mb40" src="alimama/brand/assets/examples/10-袋子3.svg">
                <img class="col-sm-12 img-responsive mb40" src="alimama/brand/assets/examples/11-袋子4.svg">
                <img class="col-sm-12 img-responsive mb40" src="alimama/brand/assets/examples/12-袋子5.svg">
            </div>
        </div>
        <div class="mb60">
            <div class="fontsize-16 mb10">书籍</div>
            <div class="row">
                <img class="col-sm-12 img-responsive mb40" src="alimama/brand/assets/examples/13-书籍1.svg">
                <img class="col-sm-12 img-responsive mb40" src="alimama/brand/assets/examples/14-书籍2.svg">
            </div>
        </div>
        <div class="mb60">
            <div class="fontsize-16 mb10">易拉宝</div>
            <div class="row">
                <img class="col-sm-6 img-responsive mb40" src="alimama/brand/assets/examples/15-易拉宝1.svg">
                <img class="col-sm-6 img-responsive mb40" src="alimama/brand/assets/examples/16-易拉宝2.svg">
            </div>
        </div>
    </div>

</div><!-- /brand -->
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})