/* global define */
define(function() {
    return (function(){/*
<% var RE_FILENAME = /.+\/([^\/]+)/ %>
<% var list = [] %>

<div class="brand">

    <div class="hide">
        <div class="">阿里妈妈品牌规范 <small>Brand Guidelines</small></div>
    </div>

    <div class="spec-section brand-shapes mb40">
        <div class="clearfix">
            <div class="pull-left fontsize-20 mb40">辅助图形 <small>Shapes</small></div>
            <div class="pull-right relative">
                <a class="btn btn-brand" href="javascript:;"
                    on-mouseenter="download" 
                    on-click="download">
                    <span class="specfont">&#xe633;</span>
                    <span>下载附件</span>
                </a>
                <% list = ['辅助形体/阿里妈妈品牌规范-案例辅助形体.ai', '辅助形体/阿里妈妈品牌规范-案例辅助形体.pdf'] %>
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
        <div class="mb40 mt4">
            <p class="color-999 mb0">辅助图形可做为背景、图案纹理使用,也可以配合主 VI 使用。注意辅助图形并不是 Logo。</p>
            <p class="color-999 mb0">我们以“母体”为概念设计辅助图形，充满象征意义。预示着阿里妈妈品牌是充满张力的、包容的和开放的。</p>
        </div>
        <div class="row mb60">
            <div class="col-sm-4" style="max-width: 340px;">
                <div style="position: relative; max-width: 280px;">
                    <img class="img-responsive" src="assets/shapes/01辅形-面.svg">
                    <img class="img-responsive" src="assets/shapes/03辅形－单色logo.svg" style="
                        position: absolute;
                        left: 25%;
                        width: 50%;
                        top: 38%;
                        margin-top: 0;">
                </div>
            </div>
            <div class="col-sm-4" style="max-width: 340px;">
                <div style="position: relative; max-width: 280px;">
                    <img class="img-responsive" src="assets/shapes/02辅形-线.svg">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4" style="max-width: 340px;">
                <div style="position: relative; max-width: 280px;">
                    <img class="img-responsive" src="assets/shapes/04辅形－面.svg">
                    <img class="img-responsive" src="assets/shapes/03辅形－单色logo.svg" style="
                        position: absolute;
                        left: 23%;
                        width: 50%;
                        top: 35%;
                        margin-top: 0;">
                </div>
            </div>
            <div class="col-sm-4" style="max-width: 340px;">
                <div style="position: relative; max-width: 280px;">
                    <img class="img-responsive" src="assets/shapes/05辅形－线.svg">
                </div>
            </div>
        </div>
    </div>


</div><!-- /brand -->
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})