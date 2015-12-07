<div class="hide">
    <h1>样式 <small>CSS</small></h1>
    <hr>
</div>

<div class="spec-section mb40">
    <div class="mb40">
        <div class="fontsize-20 mb10">颜色 <small>Colors</small></div>
        <p>在SHB中降低S值-10°到-30°，B值-20°到-10°去区分色环自然产生的颜色模糊区域，再整体降低10°饱和度和去除亮度最高的疲劳色来适应用户长时间使用。在剩下的颜色中按照七色原则选取区分最大的7种颜色，最大程度的区分各个产品。</p>
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
