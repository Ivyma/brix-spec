<% var RE_FILENAME = /.+\/([^\/]+)/ %>
<% var list = [] %>

<div class="brand">

    <div class="hide">
        <div class="">阿里妈妈品牌规范 <small>Brand Guidelines</small></div>
    </div>

    <div class="spec-section brand-color-palettes">
        <div class="clearfix">
            <div class="pull-left fontsize-20 mb40">色盘 <small>Color Palettes</small></div>
            <div class="pull-right">
                <a class="btn btn-brand" href="javascript:;"
                    on-mouseenter="download" 
                    on-click="download">
                    <span class="specfont">&#xe633;</span>
                    <span>下载附件</span>
                </a>
                <% list = ['色盘/阿里妈妈品牌规范－色盘.ai', '色盘/阿里妈妈品牌规范－色盘.pdf'] %>
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
            <div class="fontsize-16 mb20">品牌标准色</div>
            <div class="brand-color-standard" style="width: 220px; height: 220px; color: #FFF; background-color: #FF6600; border-radius: 50%; display: table-cell; vertical-align: middle; padding-left: 60px;">
                <p>1585</p>
                <p>C:0 M:74 Y:100 K:0</p>
                <p>R:255 G:102 B:0</p>
                <p>#FF6600</p>
            </div>
        </div>
        <div class="mb60">
            <div class="fontsize-16">一级品牌色盘</div>
            <div class="mb40 mt4">
                <p class="color-999 mb0">我们的一级品牌色盘中设置12种辅助色彩，配合品牌色使用。辅助色不可用来替代品牌色。</p>
                <p class="color-999 mb0">RGB 和 HEX 色值运用于显示设备，包括 PC、平板、手机等。CMYK 和 Pantone 色值运用于印刷。</p>
                <p class="color-999 mb0">在实际运用中，无论从 RGB 到 CMYK 的转换，还是用其他任何复制方法，都要尽可能最大限度接近指南中的色标颜色。</p>
            </div>
            <div class="row">
                <div class="col-sm-4" style="max-width: 226px;">
                    <div class="item" style="background-color: #FFEEC6; color: #bc8c4d;">
                        <p>PANTONE DS 5-7 C </p>
                        <p>C0 M5 Y25 K0 </p>
                        <p>R255 G238 B198</p>
                        <p>HEX #FFEEC6</p>
                    </div>
                    <div class="item" style="background-color: #FED7B2; color: #c98a5f;">
                        <p>PANTONE 712 UP </p>
                        <p>C0 M17 Y30 K0 </p>
                        <p>R254 G215 B178</p>
                        <p>HEX #FED7B2</p>
                    </div>
                    <div class="item" style="background-color: #FABC52;">
                        <p>PANTONE 142 UP </p>
                        <p>C0 M29 Y78 K0 </p>
                        <p>R253 G188 B82</p>
                        <p>HEX #FABC52</p>
                    </div>
                    <div class="item" style="background-color: #F7987D;">
                        <p>PANTONE 170 UP </p>
                        <p>C0 M49 Y48 K0 </p>
                        <p>R247 G152 B125</p>
                        <p>HEX #F7987D</p>
                    </div>
                </div>
                <div class="col-sm-4" style="max-width: 226px;">
                    <div class="item" style="background-color: #B8D0E9; color: #6286a0;">
                        <p>PANTONE 2708 UP</p>
                        <p>C26 M10 Y1 K0</p>
                        <p>R184 G208 B233</p>
                        <p>HEX #B8D0E9</p>
                    </div>
                    <div class="item" style="background-color: #84AABC;">
                        <p>PANTONE DS 228-7 C</p>
                        <p>C30 M3 Y0 K25</p>
                        <p>R132 G170 B188</p>
                        <p>HEX #84AABC</p>
                    </div>
                    <div class="item" style="background-color: #5C82B4;">
                        <p>PANTONE DS 205-4 C</p>
                        <p>C60 M35 Y0 K15</p>
                        <p>R92 G130 B180</p>
                        <p>HEX #5C82B4</p>
                    </div>
                    <div class="item" style="background-color: #30787B;">
                        <p>PANTONE 7477 UP</p>
                        <p>C80 M35 Y46 K15</p>
                        <p>R48 G120 B123</p>
                        <p>HEX #30787B</p>
                    </div>
                </div>
                <div class="col-sm-4" style="max-width: 226px;">
                    <div class="item" style="background-color: #E5D1C8; color: #b5867d;">
                        <p>PANTONE DS 62-9 C </p>
                        <p>C0 M10 Y10 K0 </p>
                        <p>R229 G209 B200</p>
                        <p>HEX #E5D1C8</p>
                    </div>
                    <div class="item" style="background-color: #B4AB76;">
                        <p>PANTONE DS 11-6 C </p>
                        <p>C10 M10 Y50 K25 </p>
                        <p>R180 G171 B118</p>
                        <p>HEX #B4AB76</p>
                    </div>
                    <div class="item" style="background-color: #E56B67;">
                        <p>PANTONE DS 98-4 C </p>
                        <p>C0 M70 Y50 K5 </p>
                        <p>R229 G107 B103</p>
                        <p>HEX #E56B67</p>
                    </div>
                    <div class="item" style="background-color: #60453F;">
                        <p>PANTONE Black 5 UP </p>
                        <p>C49 M65 Y64 K41 </p>
                        <p>R96 G69 B63</p>
                        <p>HEX #60453F</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb60">
            <div class="fontsize-16">二级品牌色盘</div>
            <p class="color-999 mt4 mb40">为了在品牌传达中有更好的扩展,我们在一级品牌色盘的基础上增加种二级品牌色。在实际运用种作为二级辅色配合品牌色和一级辅色使用。</p>
            <div class="row">
                <div class="col-sm-4" style="max-width: 226px;">
                    <div class="item" style="background-color: #BAB1BA;">
                        <p>PANTONE DS 147-8 C</p>
                        <p>C10 M15 Y5 K20</p>
                        <p>R186 G177 B186</p>
                        <p>HEX #BAB1BA</p>
                    </div>
                    <div class="item" style="background-color: #CFA7A4;">
                        <p>PANTONE DS 110-8 C</p>
                        <p>C0 M25 Y15 K20</p>
                        <p>R207 G167 B164</p>
                        <p>HEX #CFA7A4</p>
                    </div>
                    <div class="item" style="background-color: #BAA09D;">
                        <p>PANTONE DS 96-8 C</p>
                        <p>C10 M25 Y20 K20</p>
                        <p>R186 G160 B157</p>
                        <p>HEX #BAA09D</p>
                    </div>
                    <div class="item" style="background-color: #CEA98D;">
                        <p>PANTONE DS 54-7 C</p>
                        <p>C10 M30 Y40 K5</p>
                        <p>R206 G169 B141</p>
                        <p>HEX #CEA98D</p>
                    </div>
                </div>
                <div class="col-sm-4" style="max-width: 226px;">
                    <div class="item" style="background-color: #FDF1EE; color: #627fa0;">
                        <p>PANTONE DS 124-9 C</p>
                        <p>C0 M5 Y3 K0</p>
                        <p>R253 G241 B238</p>
                        <p>HEX #FDF1EE</p>
                    </div>
                    <div class="item" style="background-color: #FBD3D1;">
                        <p>PANTONE DS 114-8 C</p>
                        <p>C0 M20 Y10 K0</p>
                        <p>R251 G211 B209</p>
                        <p>HEX #FBD3D1</p>
                    </div>
                    <div class="item" style="background-color: #DB6679;">
                        <p>PANTONE DS 125-3 C</p>
                        <p>C0 M70 Y30 K10</p>
                        <p>R219 G102 B121</p>
                        <p>HEX #DB6679</p>
                    </div>
                    <div class="item" style="background-color: #865F7E;">
                        <p>PANTONE DS 167-4 C</p>
                        <p>C30 M60 Y0 K30</p>
                        <p>R134 G95 B126</p>
                        <p>HEX #865F7E</p>
                    </div>
                </div>
                <div class="col-sm-4" style="max-width: 226px;">
                    <div class="item" style="background-color: #355C87; color: #e0b7b6;">
                        <p>PANTONE DS 200-1 C</p>
                        <p>C90 M70 Y30 K0</p>
                        <p>R53 G92 B135</p>
                        <p>HEX #355C87</p>
                    </div>
                    <div class="item" style="background-color: #5B6235;">
                        <p>PANTONE 5753 EC</p>
                        <p>C21 M0 Y80 K69</p>
                        <p>R91 G98 B53</p>
                        <p>HEX #5B6235</p>
                    </div>
                    <div class="item" style="background-color: #DBDE71;">
                        <p>PANTONE DS 310-5 C</p>
                        <p>C10 M0 Y50 K5</p>
                        <p>R219 G222 B113</p>
                        <p>HEX #DBDE71</p>
                    </div>
                    <div class="item" style="background-color: #EDEBAC;">
                        <p>PANTONE 615 EC</p>
                        <p>C2 M0 Y38 K7</p>
                        <p>R237 G235 B172</p>
                        <p>HEX #EDEBAC</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb60">
            <div class="fontsize-16">色彩搭配</div>
            <div class="mb40 mt4">
                <p class="color-999 mb0">在设定品牌色盘之外,色彩应用中最重要的环节就是色彩搭配。</p>
                <p class="color-999 mb0">为了符合生活化、温情的风格定义，我们建议配色选色上控制在基准色-对比色的范围内；避免基准色与互补色的直接对比和搭配。</p>
            </div>
            <div style="width: 80%; max-width: 640px;">
                <embed class="img-responsive" src="assets/color-palettes/01色带-有字体.svg"></embed>
            </div>
        </div>
        <div class="mb60 huijiese">
            <div class="fontsize-16">灰阶色</div>
            <div class="mb40 mt4">
                <p class="color-999 mb0">整体按照黑色 #000000 的透明度百分比进行设置。以下为在白色 #FFFFFF 背景下的色值。
                <p class="color-999 mb0">文字色值：按照 #000000 透明度 100%、80%、60%、40%、20% 取值，保持 20% 的递减梯度。</p>
                <p class="color-999 mb0">分隔线色值：按照 #000000 透明度 16%、8%、4%、2% 取值，保持除 2 的递减梯度。</p>
            </div>
            <div class="row">
                <div class="col-sm-4" style="max-width: 226px;">
                    <div class="item" style="background-color: #000000;">
                        <p>C:79 M:68 Y:67 K:90</p>
                        <p>R:0 G:0 B:0</p>
                        <p>#000000</p>
                    </div>
                    <div class="item" style="background-color: #333333;">
                        <p>C:69 M:63 Y:62 K:58</p>
                        <p>R:51 G:51 B:51</p>
                        <p>#333333</p>
                    </div>
                    <div class="item" style="background-color: #666666;">
                        <p>C:67 M:59 Y:56 K:6</p>
                        <p>R:102 G:102 B:102</p>
                        <p>#666666</p>
                    </div>
                </div>
                <div class="col-sm-4" style="max-width: 226px;">
                    <div class="item" style="background-color: #999999;">
                        <p>C:46 M:38 Y:35 K:0</p>
                        <p>R:153 G:153 B:153</p>
                        <p>#999999</p>
                    </div>

                    <div class="item" style="background-color: #cccccc; color: #666;">
                        <p>C:23 M:18 Y:17 K:0</p>
                        <p>R:204 G:204 B:204</p>
                        <p>#cccccc</p>
                    </div>

                    <div class="item" style="background-color: #ebebeb; color: #999;">
                        <p>C:10 M:7 Y:7 K:0</p>
                        <p>R:235 G:235 B:2354</p>
                        <p>#ebebeb</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div><!-- /brand -->