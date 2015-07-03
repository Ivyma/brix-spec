/* global define */
define(function() {
    return (function(){/*
<div class="">
    <h1>样式 <small>CSS</small></h1>
    <hr>
</div>

<div class="">
    <!-- <blockquote>
        <p>基于 <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a> 构建，结构参考了 <a href="http://cssstats.com/">CSS Stats</a>。</p>
    </blockquote> -->

    <div class="hide">
        <div class="list">
            <div class="item">
                <div class="item-content">hello</div>
                <div class="item-actions">
                    <div class="item-actions-users">
                        <div class="item-actions-user"></div>
                        <div class="item-actions-user"></div>
                        <div class="item-actions-user"></div>
                        <div class="item-actions-user"></div>
                        <div class="item-actions-user"></div>
                        <div class="item-actions-user"></div>
                        <div class="item-actions-user"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <h2>这页放什么东西</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida 
    <table class="table-brand">
        <tbody>
            <tr>
                <td></td>
                <% _.each(COLORS, function(item, index){ %>
                    <td><h3><%= item[0] %></h3></td>
                <% }) %>
            </tr>
            <tr>
                <td><h3>品牌色</h3></td>
                <% _.each(COLORS, function(item, index){ %>
                    <td>
                        <div class="img-circle mb10" style="width: 85px; height: 85px; background-color: <%= item[1] %>;"></div>
                        <p><%= item[1] %></p>
                    </td>
                <% }) %>
            </tr>
            <tr>
                <td><h3>品牌色 hover</h3></td>
                <% _.each(COLORS, function(item, index){ %>
                    <td>
                        <div class="img-circle mb10" style="width: 50px; height: 50px; background-color: <%= item[2] %>;"></div>
                        <p><%= item[2] %></p>
                    </td>
                <% }) %>
            </tr>
            <tr>
                <td><h3>测导航</h3></td>
                <% _.each(COLORS, function(item, index){ %>
                    <td>
                        <div class="img-circle mb10" style="width: 50px; height: 50px; background-color: <%= item[3] %>;"></div>
                        <p><%= item[3] %></p>
                    </td>
                <% }) %>
            </tr>
            <tr>
                <td><h3>表格 hover</h3></td>
                <% _.each(COLORS, function(item, index){ %>
                    <td>
                        <div class="img-circle mb10" style="width: 50px; height: 50px; background-color: <%= item[4] %>;"></div>
                        <p><%= item[4] %></p>
                    </td>
                <% }) %>
            </tr>
        </tbody>
    </table>

    <div class="row">
        <% _.each(COLORS, function(item, index){ %>
        <div class="col-xs-4 mb10">
            <div style="height: 42px; background-color: <%= item[1] %>;"></div>
            <div class="ungrid-row">
                <div class="ungrid-col" style="width: 50px; padding: 45px 30px; text-align: center; vertical-align: top; background-color: <%= item[3] %>;"></div>
                <div class="ungrid-col" style="padding: 50px; background-color: #fafafa;">
                    <p class="flat-text small"></p>
                    <p class="flat-text full-width"></p>
                </div>
            </div>
        </div>
        <% }) %>
    </div>

    <h2>颜色 <small>Colors</small></h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida 
    <div class="row">
    	<% _.each(COLORS, function(item, index){ %>
        <div class="col-xs-4 mb10">
            <div style="font-size: 32px; color: <%= item[1] %>;">Aa</div>
            <div><%= item[1] %></div>
        </div>
        <% }) %>
    </div>

    <h2>背景色 <small>Background Colors</small></h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. </p>
    <div class="row">
    	<% _.each([], function(item, index){ %>
        <div class="col-sm-4 demo-background-color-item">
            <div class="content" style="background-color: <%= item[1] %>; "><%= item[1] %></div>
        </div>
        <% }) %>
    </div>
    <div class="row">
    	<% _.each(COLORS, function(item, index){ %>
        <div class="col-sm-4 demo-background-color-hover-item">
            <div class="content">
                <div class="up" style="background-color: <%= item[1] %>;"><%= item[1] %></div>
                <div class="down" style="background-color: <%= item[2] %>;"><%= item[2] %></div>
                <p class="mt10 mb10"><%= item[0] %></p>
                <!-- <div class="up" style="background-color: <%= item[3] %>;"><%= item[3] %></div>
                <div class="down" style="background-color: <%= item[4] %>;"><%= item[4] %></div> -->
            </div>
        </div>
    	<% }) %>
    </div>

    <h2>字体大小 Font Sizes</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida 
    <div class="">
    	<% _.each(FONT_SIZES, function(item, index){ %>
        <div class="mb10" style="font-size: <%= item %>;">字体大小 Font Size <%= item %></div>
        <% }) %>
    </div>

    <h2>字体 <small>Font Families</small></h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida 
    <div class="hide">
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
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})