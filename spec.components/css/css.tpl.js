/* global define */
define(function() {
    return (function(){/*
<link href="http://g-assets.daily.taobao.net/thx/brix-release/0.0.22/highlightjs/styles/github.css" rel="stylesheet">

<div class="sidebar-wrapper">
    <div class="sidebar"></div>
</div>

<div class="main-wrapper">

    <div class="container">
        <h1>样式 <small>CSS</small></h1>
        <hr>
    </div>

    <div class="container">
        <blockquote>
            <p>基于 <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a> 构建，结构参考了 <a href="http://cssstats.com/">CSS Stats</a>。</blockquote></p>
        <h2>Colors</h2>
        <div class="row">
        	<% _.each(COLORS, function(item, index){ %>
            <div class="col-xs-3 mb10">
                <div style="font-size: 32px; color: <%= item %>;">Aa</div>
                <div><%= item %></div>
            </div>
            <% }) %>
        </div>
        <h2>Background Colors</h2>
        <div class="row">
        	<% _.each(BACKGROUND_COLORS, function(item, index){ %>
            <div class="col-sm-3 demo-background-color-item">
                <div class="content" style="background-color: <%= item %>; "><%= item %></div>
            </div>
            <% }) %>
        </div>
        <div class="row">
        	<% _.each(BACKGROUND_COLORS_HOVER, function(item, index){ %>
            <div class="col-sm-3 demo-background-color-item">
                <div class="content">
                    <div class="up" style="background-color: <%= item[0] %>;"><%= item[0] %></div>
                    <div class="down" style="background-color: <%= item[1] %>;"><%= item[1] %></div>
                </div>
            </div>
        	<% }) %>
        </div>
        <h2>Font Sizes</h2>
        <div class="">
        	<% _.each(FONT_SIZES, function(item, index){ %>
            <div class="mb10" style="font-size: <%= item %>;">字体大小 Font Size <%= item %></div>
            <% }) %>
        </div>
        <h2>Font Families</h2>
        <div class="">
        	<% _.each(FONT_FAMILIES, function(family, index){ %>
            <div class="row mb10">
            	<% _.each(FONT_SIZES, function(size, index){ %>
                <span class="col-sm-3" style="font-size: <%= size %>; font-family: <%- family %>;"><%- family %> <%= size %></span>
                <% }) %>
            </div>
            <% }) %>
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

</div>
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})