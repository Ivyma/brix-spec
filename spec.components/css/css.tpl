<div class="hide">
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

    <div class="mb40">
        <div class="fontsize-28 mb10">字体 <small>Font</small></div class="fontsize-28">
        <p class="mb20">提高文字辨识性和页面易读性，并在视觉上达到统一和整体。</p>
        <div class="mb40">
            <div class="fontsize-18 mb10">标题 <small>Header</small></div>
            <p>标题字号范围建议12-28号，都为2的整数倍，设备格式统一采用系统设备字体；图片格式标题文本统一采用阿里妈妈后台专用字体，样式为锐利SHARP，字号不做绝对限制。</p>
            <p>日常使用推荐带橙点 12号、14号、16号、20号，使用时不可以加粗字体。</p>
            <div>
                <% var _recommend = [20, 16, 14, 12] %>
                <% _.each([32, 30, 28, 26, 24, 22, 20, 18, 16, 14, 12], function(item, index){ %>
                <div class="ungrid-row">
                    <div class="ungrid-col" style="width: 140px;  height: 40px; text-align: right; padding-right: 30px;">
                        <% if(_.indexOf(_recommend, item) !== -1) { %>
                        <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #FF6600; margin-right: 20px;"></span>
                        <% } %>
                        <%= item %>px
                    </div>
                    <div class="ungrid-col"><span style="font-size: <%= item %>px;">标题字体</span></div>
                </div>
                <% }) %>
            </div>
        </div>
        <div class="mb40">
            <div class="fontsize-18 mb10">数字/英文 <small>Alphabet/Number</small></div>
            <p>数字/英文字体样式为锐利SHARP，字号不做绝对限制。</p>
            <p>日常使用推荐带橙点 12号、14号、16号、20号、24号，使用时需要强调可以加粗字体。 </p>
            <div>
                <% var _recommend = [24, 20, 16, 14, 12] %>
                <% _.each([32, 30, 28, 26, 24, 22, 20, 18, 16, 14, 12], function(item, index){ %>
                <div class="ungrid-row">
                    <div class="ungrid-col" style="width: 140px;  height: 40px; text-align: right; padding-right: 30px;">
                        <% if(_.indexOf(_recommend, item) !== -1) { %>
                        <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #FF6600; margin-right: 20px;"></span>
                        <% } %>
                        <%= item %>px
                    </div>
                    <div class="ungrid-col"><span style="font-size: <%= item %>px;">0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ</span></div>
                </div>
                <% }) %>
            </div>
        </div>
        <div>
            <div class="fontsize-18 mb10">系统设备字体 <small>Font Families</small></div>
            <p>为了适配不同操作系统和游览器，所需文字均采用系统自带字体，以供不同系统设备做最佳适配陪。</p>
            <div>
                <p class="fontsize-14">中文</p>
                <p>Windows优先使用（微软雅黑），如果没有则使用（中易宋体SimSun）。</p>
                <p>OS X优先使用（冬青黑体简体Hiragino Sans GB），如果没有则使用默认（华文黑体）。</p>
                <p>Linux优先使用（文泉驿微米黑）。</p>
                <p class="fontsize-14">西文</p>
                <p>Windows优先使用（Tahoma）。</p>
                <p>OS X优先使用（Helvetica Neue）。 </p>
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

    <div class="fontsize-28 mb10">颜色 <small>Colors</small></div>
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
            <div style="height: 50px; background-color: <%= item[1] %>;"></div>
            <div class="ungrid-row">
                <div class="ungrid-col" style="width: 50px; background-color: <%= item[3] %>;"></div>
                <div class="ungrid-col" style="padding: 50px; background-color: #fafafa;">
                    <p class="flat-text small"></p>
                    <p class="flat-text full-width"></p>
                </div>
            </div>
        </div>
        <% }) %>
    </div>

    <div class="row">
    	<% _.each(COLORS, function(item, index){ %>
        <div class="col-xs-4 mb10">
            <div style="font-size: 32px; color: <%= item[1] %>;">Aa</div>
            <div><%= item[1] %></div>
        </div>
        <% }) %>
    </div>

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
</div>