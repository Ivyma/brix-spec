<div class="hide">
    <h1>样式 <small>CSS</small></h1>
    <hr>
</div>

<div class="mb40">
    <div class="mb40">
        <div class="fontsize-20 mb10">颜色 <small>Colors</small></div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>

    <div class="mb40">
        <div class="fontsize-16 mb10">文字灰度 <small></small></div>
        <div class="row">
            <!-- border background color content -->
            <% 
                var colors = [
                    ['#000000', '#000000', '#FFFFFF', '#333333'],
                    ['#999999', '#999999', '#FFFFFF', '#999999'],
                    ['#CCCCCC', '#CCCCCC', '#FFFFFF', '#CCCCCC'],
                    ['#E6E6E6', '#FFFFFF', '#333333', '#FFFFFF'],
                ]
            %>
            <% _.each(colors, function(item, index){ %>
            <div class="col-sm-3 demo-background-color-item">
                <div class="content" style="border: 1px solid <%= item[0] %>; background-color: <%= item[1] %>; color: <%= item[2] %>;"><%= item[3] %></div>
            </div>
            <% }) %>
        </div>
    </div>
    <div class="mb40">
        <div class="fontsize-16 mb10">色块灰度 <small></small></div>
        <div class="row">
            <!-- border background color content -->
            <% 
                var colors = [
                    ['#CCCCCC', '#CCCCCC', '#FFFFFF', '#CCCCCC'],
                    ['#E6E6E6', '#E6E6E6', '#333333', '#E6E6E6'],
                    ['#F0F0F0', '#F0F0F0', '#333333', '#F0F0F0'],
                    ['#F5F5F5', '#F5F5F5', '#333333', '#F5F5F5'],
                    ['#FAFAFA', '#FAFAFA', '#333333', '#FAFAFA'],
                    ['#E6E6E6', '#FFFFFF', '#333333', '#FFFFFF']
                ]
            %>
            <% _.each(colors, function(item, index){ %>
            <div class="col-sm-3 demo-background-color-item">
                <div class="content" style="border: 1px solid <%= item[0] %>; background-color: <%= item[1] %>; color: <%= item[2] %>;"><%= item[3] %></div>
            </div>
            <% }) %>
        </div>
    </div>
    <div class="mb40">
        <div class="fontsize-16 mb10">淘宝联盟 <span class="productfont ml5" style="color: #FA6419;">&#xe604;</span></div>
        <div class="row">
            <% 
                var colors = [ // border background color content
                    ['#FA6419', '#FA6419', '#FFFFFF', '#FA6419', '品牌色'          ],
                    ['#E65C17', '#E65C17', '#FFFFFF', '#E65C17', '品牌色 hover'    ],
                    ['#443F3C', '#443F3C', '#FFFFFF', '#443F3C', '侧导航'          ],
                    ['#FAF1ED', '#FAF1ED', '#333333', '#FAF1ED', '表格 hover'      ],
                ]
            %>
            <% _.each(colors, function(item, index){ %>
            <div class="col-sm-3 demo-background-color-item">
                <div class="content" style="border: 1px solid <%= item[1] %>; background-color: <%= item[1] %>; color: <%= item[2] %>;"><%= item[3] %></div>
                <div class="text-center mt10"><%= item[4] %></div>
            </div>
            <% }) %>
        </div>
    </div>
    <div class="mb40">
        <div class="fontsize-16 mb10">直通车 <span class="productfont ml5" style="color: #F78400;">&#xe602;</span></div>
        <div class="row">
            <% 
                var colors = [ // border background color content
                    ['#F78400', '#F78400', '#FFFFFF', '#F78400', '品牌色'          ],
                    ['#E37900', '#E37900', '#FFFFFF', '#E37900', '品牌色 hover'    ],
                    ['#42403C', '#42403C', '#FFFFFF', '#42403C', '侧导航'          ],
                    ['#FAF3EB', '#FAF3EB', '#333333', '#FAF3EB', '表格 hover'      ],
                ]
            %>
            <% _.each(colors, function(item, index){ %>
            <div class="col-sm-3 demo-background-color-item">
                <div class="content" style="border: 1px solid <%= item[1] %>; background-color: <%= item[1] %>; color: <%= item[2] %>;"><%= item[3] %></div>
                <div class="text-center mt10"><%= item[4] %></div>
            </div>
            <% }) %>
        </div>
    </div>
    <div class="mb40">
        <div class="fontsize-16 mb10">Tanx <span class="productfont ml5" style="color: #50B347;">&#xe601;</span></div>
        <div class="row">
            <% 
                var colors = [ // border background color content
                    ['#50B347', '#50B347', '#FFFFFF', '#50B347', '品牌色'          ],
                    ['#479E3F', '#479E3F', '#FFFFFF', '#479E3F', '品牌色 hover'    ],
                    ['#3C433C', '#3C433C', '#FFFFFF', '#3C433C', '侧导航'          ],
                    ['#F0F6EF', '#F0F6EF', '#333333', '#F0F6EF', '表格 hover'      ],
                ]
            %>
            <% _.each(colors, function(item, index){ %>
            <div class="col-sm-3 demo-background-color-item">
                <div class="content" style="border: 1px solid <%= item[1] %>; background-color: <%= item[1] %>; color: <%= item[2] %>;"><%= item[3] %></div>
                <div class="text-center mt10"><%= item[4] %></div>
            </div>
            <% }) %>
        </div>
    </div>
    <div class="mb40">
        <div class="fontsize-16 mb10">钻石展位 <span class="productfont ml5" style="color: #4A7BF7;">&#xe603;</span></div>
        <div class="row">
            <% 
                var colors = [ // border background color content
                    ['#4A7BF7', '#4A7BF7', '#FFFFFF', '#4A7BF7', '品牌色'          ],
                    ['#4471E3', '#4471E3', '#FFFFFF', '#4471E3', '品牌色 hover'    ],
                    ['#3C404A', '#3C404A', '#FFFFFF', '#3C404A', '侧导航'          ],
                    ['#F0F3FA', '#F0F3FA', '#333333', '#F0F3FA', '表格 hover'      ],
                ]
            %>
            <% _.each(colors, function(item, index){ %>
            <div class="col-sm-3 demo-background-color-item">
                <div class="content" style="border: 1px solid <%= item[1] %>; background-color: <%= item[1] %>; color: <%= item[2] %>;"><%= item[3] %></div>
                <div class="text-center mt10"><%= item[4] %></div>
            </div>
            <% }) %>
        </div>
    </div>
    <div class="mb40">
        <div class="fontsize-16 mb10">易传媒 <span class="productfont ml5" style="color: #6363E6;">&#58888;</span></div>
        <div class="row">
            <% 
                var colors = [ // border background color content
                    ['#6363E6', '#6363E6', '#FFFFFF', '#6363E6', '品牌色'          ],
                    ['#5A5AD1', '#5A5AD1', '#FFFFFF', '#5A5AD1', '品牌色 hover'    ],
                    ['#3F3F49', '#3F3F49', '#FFFFFF', '#3F3F49', '侧导航'          ],
                    ['#F1F1F9', '#F1F1F9', '#333333', '#F1F1F9', '表格 hover'      ],
                ]
            %>
            <% _.each(colors, function(item, index){ %>
            <div class="col-sm-3 demo-background-color-item">
                <div class="content" style="border: 1px solid <%= item[1] %>; background-color: <%= item[1] %>; color: <%= item[2] %>;"><%= item[3] %></div>
                <div class="text-center mt10"><%= item[4] %></div>
            </div>
            <% }) %>
        </div>
    </div>
    <div class="mb40">
        <div class="fontsize-16 mb10">DMP <span class="productfont ml5" style="color: #894FC4;">&#xe600;</span></div>
        <div class="row">
            <% 
                var colors = [ // border background color content
                    ['#894FC4', '#894FC4', '#FFFFFF', '#894FC4', '品牌色'          ],
                    ['#7B46B0', '#7B46B0', '#FFFFFF', '#7B46B0', '品牌色 hover'    ],
                    ['#48484E', '#48484E', '#FFFFFF', '#48484E', '侧导航'          ],
                    ['#F3F0F7', '#F3F0F7', '#333333', '#F3F0F7', '表格 hover'      ],
                ]
            %>
            <% _.each(colors, function(item, index){ %>
            <div class="col-sm-3 demo-background-color-item">
                <div class="content" style="border: 1px solid <%= item[1] %>; background-color: <%= item[1] %>; color: <%= item[2] %>;"><%= item[3] %></div>
                <div class="text-center mt10"><%= item[4] %></div>
            </div>
            <% }) %>
        </div>
    </div>
</div>

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

<div class="mb40">
    <div class="mb40">
        <div class="fontsize-20 mb10">行距 <small>Line Height</small></div>
    </div>
    <div class="mb40">
        <table class="table">
            <thead>
                <tr>
                    <th>字体大小</th>
                    <th>行距</th>
                    <th>字距</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>正文类（12 ~ 16pt）</td>
                    <td>150% ~ 200%</td>
                    <td>默认</td>
                </tr>
                <tr>
                    <td>标题（16 ~ 30pt）</td>
                    <td>150% ~ 200%</td>
                    <td>默认</td>
                </tr>
                <tr>
                    <td>特殊字体组合</td>
                    <td>实际效果定义</td>
                    <td>默认</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>