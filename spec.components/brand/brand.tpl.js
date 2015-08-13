/* global define */
define(function() {
    return (function(){/*
<% var RE_FILENAME = /.+\/([^\/]+)/ %>
<% var list = [] %>

<div class="brand">

<div class="hide">
    <div class="">阿里妈妈品牌规范 <small>Brand Guidelines</small></div>
</div>

<div class="brand-story mb40">
    <div class="clearfix"> 
        <div class="pull-left fontsize-20 mb40">品牌故事 <small>Brand Story</small></div>
        <div class="pull-right" style="position: relative;">
            <a class="btn btn-brand" href="javascript:;"
                on-mouseenter="download" 
                on-click="download">
                <span class="specfont">&#xe633;</span>
                <span>下载附件</span>
            </a>
            <% list = ['品牌故事/Alimama品牌指南第一版.pdf'] %>
            <ul class="download-list">
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
    <div class="row">
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

<div class="brand-logo">
    <div class="clearfix"> 
        <div class="pull-left fontsize-20 mb40">标志 <small>Logo</small></div>
        <div class="pull-right" style="position: relative;">
            <a class="btn btn-brand" href="javascript:;"
                on-mouseenter="download" 
                on-click="download">
                <span class="specfont">&#xe633;</span>
                <span>下载附件</span>
            </a>
            <% list = ['标志/阿里妈妈品牌规范-标志.ai', '标志/阿里妈妈品牌规范-标志.pdf', '标志/阿里妈妈旗下产品标志设计规范.ai', '标志/阿里妈妈旗下产品标志设计规范.pdf', '标志/阿里妈妈标志汇总.ai'] %>
            <ul class="download-list">
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
        <div class="fontsize-16">标志中文基本形</div>
        <p class="color-999 mt4">在公司传播的各种应用中，标志的应用范围非常广泛，在公司传播的各种应用中，标志的应用范围非常广泛，可以运用不同的复制技巧放大或缩小成各种尺寸，统一标准地展开设计标志是必要的。标志的字形格式，轻重比例和空间布局不得随意变更。标志的复制与再现必须根据本手册所设定的复制规范进行制作。</p>
        <div class="row">
            <div class="col-sm-12">
                <img class="img-responsive" style="max-width: 216px;" src="assets/logo/01-阿里妈妈标志中文基本型.svg">
            </div>
        </div>
    </div>
    <div class="mb60">
        <div class="fontsize-16 mb10">标志英文基本形</div>
        <div class="row">
            <div class="col-sm-12">
                <img class="img-responsive" style="max-width: 216px;" src="assets/logo/02-阿里妈妈标志英文基本型.svg">
            </div>
        </div>
    </div>
    <div class="mb60">
        <div class="fontsize-16">标志中文标准字基本形再生方格制图</div>
        <p class="color-999 mt4">标志因使用场景各有不同，需要放大不同比例使用时，可依方格图法，得以制作出正确比例尺寸得标志。</p>
        <div class="row">
            <div class="col-sm-7 mb10">
                <img class="img-responsive" src="assets/logo/03-阿里妈妈标志中文标准字基本形再生方格制图.svg">
            </div>
            <div class="col-sm-7">
                <div class="ungrid-row">
                    <div class="ungrid-col" style="width: 70px;">
                        <img class="img-responsive" src="assets/logo/04-阿里妈妈标志英文标准字基本形再生方格制图-1.svg">
                    </div>
                    <div class="ungrid-col pl10 vertical-align-middle">
                        <p class="mb4">基本型最小使用值</p>
                        <p class="color-999">最小使用值得设定是为了保证标志得完整性，当标志缩小至12mm以下时，标志特点不够明显，所以将其设定为标志基本型的使用最小限度。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mb60">
        <div class="fontsize-16 mb10">标志英文标准字基本形再生方格制图</div>
        <div class="row">
            <div class="col-sm-7 mb10">
                <img class="img-responsive" src="assets/logo/04-阿里妈妈标志英文标准字基本形再生方格制图.svg">
            </div>
            <div class="col-sm-7">
                <div class="ungrid-row">
                    <div class="ungrid-col" style="width: 70px;">
                        <img class="img-responsive" src="assets/logo/04-阿里妈妈标志英文标准字基本形再生方格制图-1.svg">
                    </div>
                    <div class="ungrid-col pl10 vertical-align-middle">
                        <p class="mb4">基本型最小使用值</p>
                        <p class="color-999">最小使用值得设定是为了保证标志得完整性，当标志缩小至12mm以下时，标志特点不够明显，所以将其设定为标志基本型的使用最小限度。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mb60">
        <div class="fontsize-16 mb10">标志中英文组合基本形</div>
        <div class="row">
            <div class="col-sm-12">
                <img class="img-responsive" style="max-width: 216px;" src="assets/logo/05-阿里妈妈标志中英文组合基本形.svg">
            </div>
        </div>
    </div>
    <div class="mb60">
        <div class="fontsize-16 mb10">标志中英文组合标准字基本形再生方格制图</div>
        <div class="row">
            <div class="col-sm-7 mb10">
                <img class="img-responsive" src="assets/logo/06-阿里妈妈标志中英文组合标准字基本形再生方格制图.svg">
            </div>
            <div class="col-sm-7">
                <div class="ungrid-row">
                    <div class="ungrid-col" style="width: 70px;">
                        <img class="img-responsive" src="assets/logo/06-阿里妈妈标志中英文组合标准字基本形再生方格制图-1.svg">
                    </div>
                    <div class="ungrid-col pl10 vertical-align-middle">
                        <p class="mb4">基本型最小使用值</p>
                        <p class="color-999">最小使用值得设定是为了保证标志得完整性，当标志缩小至12mm以下时，标志特点不够明显，所以将其设定为标志基本型的使用最小限度。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mb60">
        <div class="fontsize-16 mb10">标志中英文组合标准字基本形保护区域</div>
        <div class="row">
            <div class="col-sm-7">
                <img class="img-responsive" src="assets/logo/07-阿里妈妈标志中英文组合标准字基本形保护区域.svg">
            </div>
        </div>
    </div>
    
    <div class="mb60">
        <div class="mb40">
            <div class="fontsize-16">标志与子品牌组合</div>
            <p class="color-999 mt4">基本元素组合规范是将基本元素依照应用设计项目的需要而预先规划直排、横列、大小、方向等不同的组合单元，主要是为了保证基本元素组合之后的平衡关系。在对外宣传时，如果阿里妈妈标志和旗下平台标志同时使用时，必须参照此组合规范。如果只需要强调子品牌时，公司标志的使用可根据实际情况而定。</p>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="ungrid-row" style="max-width: 500px;">
                    <div class="ungrid-col" style="width: 55%;"><div class="mb8">阿里妈妈标志：</div></div>
                    <div class="ungrid-col"><div class="mb8">平台名称：</div></div>
                </div>
                <img class="img-responsive" style="max-width: 500px;" src="assets/logo/08-阿里妈妈标志与子品牌组合.svg">

                <div class="mt20 mb8">组合使用：</div>
                <img class="img-responsive" style="max-width: 400px;" src="assets/logo/08-阿里妈妈标志与子品牌组合-1.svg">
                <img class="img-responsive mt20" style="max-width: 400px;" src="assets/logo/08-阿里妈妈标志与子品牌组合-2.svg">
            </div>
            <div class="col-sm-12 mt60">
                <div class="ungrid-row" style="max-width: 500px;">
                    <div class="ungrid-col" style="width: 55%;"><div class="mb8">阿里妈妈标志：</div></div>
                    <div class="ungrid-col"><div class="mb8">平台名称：</div></div>
                </div>
                <img class="img-responsive" style="max-width: 436px;" src="assets/logo/09-阿里妈妈标志与子品牌组合.svg">

                <div class="mt20 mb8">组合使用：</div>
                <img class="img-responsive" style="max-width: 400px;" src="assets/logo/09-阿里妈妈标志与子品牌组合-1.svg">
                <img class="img-responsive mt20" style="max-width: 400px;" src="assets/logo/09-阿里妈妈标志与子品牌组合-2.svg">
                <img class="img-responsive mt20" style="max-width: 400px;" src="assets/logo/09-阿里妈妈标志与子品牌组合-3.svg">
            </div>
        </div>
    </div>
    <div class="mb60">
        <div class="fontsize-16 mb10">标志与子品牌组合再生方格制图</div>
        <div class="row">
            <div class="col-sm-8 mb10">
                <img class="img-responsive" src="assets/logo/10-阿里妈妈标志与子品牌组合再生方格制图.svg">
            </div>
            <div class="col-sm-10">
                <div class="ungrid-row">
                    <div class="ungrid-col" style="width: 230px;">
                        <img class="img-responsive" src="assets/logo/10-阿里妈妈标志与子品牌组合再生方格制图-1.svg">
                    </div>
                    <div class="ungrid-col pl10 vertical-align-middle">
                        <p class="mb4">基本型最小使用值</p>
                        <p class="color-999">最小使用值得设定是为了保证标志得完整性，当标志缩小至12mm以下时，标志特点不够明显，所以将其设定为标志基本型的使用最小限度。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt40">
            <div class="col-sm-8">
                <img class="img-responsive" src="assets/logo/11-阿里妈妈标志与子品牌组合再生方格制图.svg">
            </div>
            <div class="col-sm-10">
                <div class="ungrid-row">
                    <div class="ungrid-col" style="width: 230px;">
                        <img class="img-responsive" src="assets/logo/11-阿里妈妈标志与子品牌组合再生方格制图-1.svg">
                    </div>
                    <div class="ungrid-col pl10 vertical-align-middle">
                        <p class="mb4">基本型最小使用值</p>
                        <p class="color-999">最小使用值得设定是为了保证标志得完整性，当标志缩小至12mm以下时，标志特点不够明显，所以将其设定为标志基本型的使用最小限度。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mb60">
        <div class="fontsize-16 mb10">标志与子品牌组合保护区域</div>
        <div class="row">
            <div class="col-sm-8">
                <img class="img-responsive" src="assets/logo/12-阿里妈妈标志与子品牌组合保护区域.svg">
            </div>
            <div class="col-sm-8 mt20">
                <img class="img-responsive" src="assets/logo/13-阿里妈妈标志与子品牌组合保护区域.svg">
            </div>
        </div>
    </div>
    <div class="mb60">
        <div class="fontsize-16">标志标准色</div>
        <p class="color-999 mt4">为了加强商标的个性及延伸性，设定橙色和灰色为标志的标准色。表示商标时的颜色，只能使用已经规定颜色。无论用什么样的复制方法，都要尽可能使用最大限度接近手册中所附色标的颜色。</p>
        <div class="mt20 clearfix">
            <div style="float: left; margin-right: 100px;">
                <div style="width: 160px; height: 160px; border-radius: 50%; text-align: center; line-height: 160px; vertical-align: middle; color: white; background-color: #FF6600;">#FF6600</div>
                <div class="mt20 pl20">
                    <p>橙色</p>
                    <p>C:0 M:74 Y:100 K:0</p>
                    <p>R:255 G:102 B:0</p>
                    <p>#FF6600</p>
                </div>
            </div>
            <div style="float: left;">
                <div style="width: 160px; height: 160px; border-radius: 50%; text-align: center; line-height: 160px; vertical-align: middle; color: white; background-color: #CCCCCC;">#CCCCCC</div>
                <div class="mt20 pl20">
                    <p>灰色</p>
                    <p>C:19 M:15 Y:16 K:0</p>
                    <p>R:204 G:204 B:204</p>
                    <p>#CCCCCC</p>
                </div>
            </div>
        </div>
    </div>
    <div class="mb60">
        <div class="fontsize-16">标志色彩运用和标准色和背景色的关系</div>
        <p class="color-999 mt4">标志在实际应用中，标准色根据不同背景色的变化，其表现形式也随着改变。如果背景色的色彩明度和标准色难以区分的情况下，标志必须采用反白表示。本页规范了在不同深浅背景色中的表示关系。</p>

        <table class="table logo-color-and-background-color" style="width: 75%;">
            <thead>
                <tr>
                    <th width="20%">色彩明度</th>
                    <th width="40%">标准色表示</th>
                    <th width="40%">黑色表示</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>R:255 G:255 B:255</td>
                    <td style="background-color: rgb(255,255,255)"><img class="img-responsive" src="assets/logo/05-阿里妈妈标志中英文组合基本形.svg"></td>
                    <td style="background-color: rgb(255,255,255)"><img class="img-responsive" src="assets/logo/15-阿里妈妈标志色彩运用和标准色和背景色的关系-1.svg"></td>
                </tr>
                <tr>
                    <td>R:229 G:229 B:229</td>
                    <td style="background-color: rgb(229,229,229)"><img class="img-responsive" src="assets/logo/05-阿里妈妈标志中英文组合基本形.svg"></td>
                    <td style="background-color: rgb(229,229,229)"><img class="img-responsive" src="assets/logo/15-阿里妈妈标志色彩运用和标准色和背景色的关系-1.svg"></td>
                </tr>
                <tr>
                    <td>R:126 G:126 B:126</td>
                    <td style="background-color: rgb(126,126,126)"><img class="img-responsive" src="assets/logo/05-阿里妈妈标志中英文组合基本形.svg"></td>
                    <td style="background-color: rgb(126,126,126)"><img class="img-responsive" src="assets/logo/15-阿里妈妈标志色彩运用和标准色和背景色的关系-2.svg"></td>
                </tr>
                <tr>
                    <td>R:0 G:0 B:0</td>
                    <td style="background-color: rgb(0,0,0)"><img class="img-responsive" src="assets/logo/05-阿里妈妈标志中英文组合基本形.svg"></td>
                    <td style="background-color: rgb(0,0,0)"><img class="img-responsive" src="assets/logo/15-阿里妈妈标志色彩运用和标准色和背景色的关系-2.svg"></td>
                </tr>
                <tr>
                    <td>R:255 G:102 B:0</td>
                    <td style="background-color: rgb(255,102,0)"><img class="img-responsive" src="assets/logo/15-阿里妈妈标志色彩运用和标准色和背景色的关系-2.svg"></td>
                    <td style="background-color: rgb(255,102,0)"><img class="img-responsive" src="assets/logo/15-阿里妈妈标志色彩运用和标准色和背景色的关系-2.svg"></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="mb60 logo-forbit-group">
        <div class="fontsize-16">标志禁用组合</div>
        <p class="color-999 mt4">为了确保标志与相应的标志组合的视觉传达中的统一性，特规范以下组合，在实际应用时禁止使用的组合。</p>
        <div class="row">
            <div class="col-sm-5 mb10">
                <img class="img-responsive" src="assets/logo/16-阿里妈妈标志禁用组合.svg">
                <p>组合规范中没有此类中文字体组合</p>
            </div>
            <div class="col-sm-5 mb10">
                <img class="img-responsive" src="assets/logo/16-阿里妈妈标志禁用组合-1.svg">
                <p>阿里妈妈logo标志没有此种颜色组合</p>
            </div>
            <div class="col-sm-5 mb10">
                <img class="img-responsive" src="assets/logo/16-阿里妈妈标志禁用组合-2.svg">
                <p>组合中英文字体过小</p>
            </div>
            <div class="col-sm-5 mb10">
                <img class="img-responsive" src="assets/logo/16-阿里妈妈标志禁用组合-3.svg">
                <p>没有此类中英文横排组合</p>
            </div>
        </div>
    </div>
    <div class="mb60 logo-forbit-group">
        <div class="fontsize-16 mb10">标志与子品牌禁用组合</div>
        <div class="row">
            <div class="col-sm-5 mb20">
                <img class="img-responsive" src="assets/logo/17-阿里妈妈标志与子品牌禁用组合.svg">
                <p>组合没有子品牌logo标志</p>
            </div>
            <div class="col-sm-5 mb20">
                <img class="img-responsive" src="assets/logo/17-阿里妈妈标志与子品牌禁用组合-1.svg">
                <p>阿里妈妈logo标志须在子品牌前面</p>
            </div>
            <div class="col-sm-5 mb20">
                <img class="img-responsive" src="assets/logo/17-阿里妈妈标志与子品牌禁用组合-2.svg">
                <p>没有此类上下组合</p>
            </div>
            <div class="col-sm-5 mb20">
                <img class="img-responsive" src="assets/logo/17-阿里妈妈标志与子品牌禁用组合-3.svg">
                <p>组合样式大小不对称且没有分割线</p>
            </div>
        </div>
    </div>
    <div class="mb60 logo-forbit-group">
        <div class="fontsize-16 mb10">标志禁用其他案例</div>
        <div class="row">
            <div class="col-sm-5 mb20">
                <embed class="img-responsive" src="assets/logo/logo31.svg"></embed>
                <p>阿里妈妈logo标志没有此类色彩搭配和字体</p>
            </div>
            <div class="col-sm-5 mb20">
                <embed class="img-responsive" src="assets/logo/18-阿里妈妈标志禁用其他案例.svg"></embed>
                <p>不是阿里妈妈logo</p>
            </div>
            <div class="col-sm-5 mb20">
                <embed class="img-responsive" src="assets/logo/18-阿里妈妈标志禁用其他案例-1.svg"></embed>
                <p>没有此种灰色组合,小字正确是阿里妈妈旗下产品</p>
            </div>
            <div class="col-sm-5 mb20">
                <embed class="img-responsive" src="assets/logo/18-阿里妈妈标志禁用其他案例-2.svg"></embed>
                <p>不是阿里妈妈logo</p>
            </div>
            <div class="col-sm-5 mb20">
                <embed class="img-responsive" src="assets/logo/18-阿里妈妈标志禁用其他案例-3.svg"></embed>
                <p>不是阿里妈妈logo</p>
            </div>
        </div>
    </div>
</div>

<div class="brand-character">
    <div class="clearfix"> 
        <div class="pull-left fontsize-20 mb40">吉祥物 <small>Character</small></div>
        <div class="pull-right">
            <a class="btn btn-brand" href="javascript:;"
                on-mouseenter="download" 
                on-click="download">
                <span class="specfont">&#xe633;</span>
                <span>下载附件</span>
            </a>
            <% list = ['吉祥物/阿里妈妈品牌规范-吉祥物（校正）.ai', '吉祥物/阿里妈妈品牌规范-吉祥物（校正）.pdf'] %>
            <ul class="download-list">
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
        <div class="ungrid-row mb40">
            <div class="ungrid-col text-align-center vertical-align-middle" style="width: 27%; padding-right: 3%;">
                <img class="img-responsive" src="assets/character/1 袋妈.svg">
            </div>
            <div class="ungrid-col vertical-align-middle" style="width: 50%">
                <p style="font-size: 28px;">阿袋妈</p>
                <p>口头禅：“放着我来”</p>
                <p>星座：金牛座</p>
                <p>喜欢的食物：沙拉</p>
                <p>喜欢的活动：工作</p>
                <p>喜欢的颜色：橙色</p>
                <p>最怕的事情：工作桌被小袋弄乱</p>
                <p>优点：乐观、精打细算</p>
                <p>缺点：喜欢唠叨、有点儿强势，没工作时有点儿懒</p>
            </div>
        </div>
        <div class="ungrid-row">
            <div class="ungrid-col text-align-center vertical-align-middle" style="width: 27%; padding-right: 3%;">
                <img class="img-responsive" src="assets/character/2 小袋.svg" style="width: 60%; margin: 0 auto;"></div>
            <div class="ungrid-col vertical-align-middle" style="width: 50%">
                <p style="font-size: 28px;">小袋</p>
                <p>口头禅：“妈妈我饿了”、“妈妈我困了”</p>
                <p>星座：水平座</p>
                <p>喜欢的食物：所有食物</p>
                <p>喜欢的活动：玩</p>
                <p>最怕的事情：被妈妈发现桌子被自己翻乱</p>
                <p>优点：活力无限、诚实</p>
                <p>缺点：玩闹起来容易失控</p>
            </div>
        </div>
    </div>
    <div class="waixingtezheng mb60">
        <div class="fontsize-16 mb20">外形特征</div>
        <div class="row mb40">
            <div class="col-sm-6">
                <embed src="assets/character/3 特征.svg" style="max-width: 520px;"></embed>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <img src="assets/character/4 特征.svg" style="max-width: 520px;">
            </div>
        </div>
    </div>
    <div class="xinggetezheng mb60">
        <div class="fontsize-16 mb10">性格特征</div>
        <div class="row">
            <div class="col-sm-3">
                <embed src="assets/character/5.1 性格.svg" class="img-responsive" style="max-width: 120px; margin: 0 auto;"></embed>
                <div class="fontsize-16 mb10 text-align-center">乐观</div>
                <p class="color-999">非常乐观的、能够带来充足信心。还能利用各种神器精打细算。</p>
            </div>
            <div class="col-sm-3">
                <img src="assets/character/5.2 性格.svg" class="img-responsive" style="max-width: 120px; margin: 0 auto;">
                <div class="fontsize-16 mb10 text-align-center">助人</div>
                <p class="color-999">我很忙，不是难题不出手。效率超高，别问我怎么做到的。只要是难题都能解决，就是那么较真。</p>
            </div>
            <div class="col-sm-3">
                <img src="assets/character/5.3 性格.svg" class="img-responsive" style="max-width: 120px; margin: 0 auto;">
                <div class="fontsize-16 mb10 text-align-center">聪明</div>
                <p class="color-999">我很聪明，不但在生活方面具备丰富经验值;情商也很高哦!</p>
            </div>
        </div>
    </div>
    <div class="changjing mb60">
        <div class="fontsize-16 mb10">动作和场景/对话</div>
        <div class="ungrid-row mb40" style="max-width: 840px;">
            <div class="ungrid-col" style="width: 20%;">
                <embed class="img-responsive changjing-1" src="assets/character/6.1 场景.svg"></embed>
                <!-- 右 7.2 场景.svg 左 7.3 场景.svg -->
            </div>
            <div class="ungrid-col" style="width: 40%; padding-right: 20px;">
                <embed class="img-responsive changjing-2" src="assets/character/6.2 场景.svg"></embed>
            </div>
            <div class="ungrid-col" style="width: 20%;">
                <embed class="img-responsive changjing-3" src="assets/character/6.3 场景.svg"></embed>
            </div>
        </div>
        <div class="ungrid-row mb40" style="max-width: 840px;">
            <div class="ungrid-col" style="width: 56%;">
                <embed class="img-responsive changjing-4" src="assets/character/7.1 场景.svg"></embed>
                <!-- 右 7.2 场景.svg 左 7.3 场景.svg -->
            </div>
            <div class="ungrid-col" style="width: 40%;">
                <embed class="img-responsive changjing-5" src="assets/character/7.2 场景.svg"></embed>
            </div>
        </div>
    </div>
    <div class="biaoqing mb60">
        <div class="fontsize-16 mb10">表情/袋妈</div>
        <div class="row">
            <div class="col-sm-10">
                <img class="col-sm-2 img-responsive" src="assets/character/8.1 表情.svg">
                <img class="col-sm-2 img-responsive" src="assets/character/8.2 表情.svg">
                <img class="col-sm-2 img-responsive" src="assets/character/8.3 表情.svg">
                <img class="col-sm-2 img-responsive" src="assets/character/8.4 表情.svg">
                <img class="col-sm-2 img-responsive" src="assets/character/8.5 表情.svg">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-10">
                <img class="col-sm-2 img-responsive" src="assets/character/8.6 表情.svg">
                <img class="col-sm-2 img-responsive" src="assets/character/8.7 表情.svg">
                <img class="col-sm-2 img-responsive" src="assets/character/8.8 表情.svg">
                <img class="col-sm-2 img-responsive" src="assets/character/8.9 表情.svg">
                <img class="col-sm-2 img-responsive" src="assets/character/8.10 表情.svg">
            </div>
        </div>
    </div>
    <div class="biaoqing mb60">
        <div class="fontsize-16 mb10">表情/小袋</div>
        <div class="row">
            <div class="col-sm-10">
                <img class="col-sm-2 img-responsive" src="assets/character/9.1 表情.svg">
                <img class="col-sm-2 img-responsive" src="assets/character/9.2 表情.svg">
                <img class="col-sm-2 img-responsive" src="assets/character/9.3 表情.svg">
                <img class="col-sm-2 img-responsive" src="assets/character/9.4 表情.svg">
                <img class="col-sm-2 img-responsive" src="assets/character/9.5 表情.svg">
            </div>
        </div>
    </div>
    <div class="sanshitu mb60">
        <div class="fontsize-16 mb20">三视图/色指定</div>
        <div class="mb60">
            <div class="row mb20">
                <div class="col-sm-10">
                    <img class="col-sm-4 img-responsive" src="assets/character/10.1 三视图.svg">
                    <img class="col-sm-4 img-responsive" src="assets/character/10.2 三视图.svg">
                    <img class="col-sm-4 img-responsive" src="assets/character/10.3 三视图.svg">
                </div>
            </div>
            <div class="row mb20">
                <div class="col-sm-10 text-center">
                    <div class="item">
                        <div class="circle mr5" style="background-color: #FFA083;"></div>
                        <span class="ml5">#FFA083</span>
                    </div>
                    <div class="item">
                        <div class="circle mr5" style="background-color: #FFBF80;"></div>
                        <span class="ml5">#FFBF80</span>
                    </div>
                    <div class="item">
                        <div class="circle mr5" style="background-color: #66361F;"></div>
                        <span class="ml5">#66361F</span>
                    </div>
                    <div class="item">
                        <div class="circle mr5" style="background-color: #E23C30;"></div>
                        <span class="ml5">#E23C30</span>
                    </div>
                    <div class="item">
                        <div class="circle mr5" style="background-color: #FF9B48;"></div>
                        <span class="ml5">#FF9B48</span>
                    </div>
                    <div class="item">
                        <div class="circle mr5" style="background-color: #512A15;"></div>
                        <span class="ml5">#512A15</span>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="row mb20">
                <div class="col-sm-10">
                    <div class="col-sm-3"></div>
                    <img class="col-sm-2 img-responsive" src="assets/character/11.1 三视图.svg">
                    <img class="col-sm-2 img-responsive" src="assets/character/11.2 三视图.svg">
                    <img class="col-sm-2 img-responsive" src="assets/character/11.3 三视图.svg">
                    <div class="col-sm-3"></div>
                </div>
            </div>
            <div class="row mb20">
                <div class="col-sm-10 text-center">
                    <div class="item">
                        <div class="circle mr5" style="background-color: #FCEBCE;"></div>
                        <span>#FCEBCE</span>
                    </div>
                    <div class="item">
                        <div class="circle mr5" style="background-color: #FFBD99;"></div>
                        <span>#FFBD99</span>
                    </div>
                    <div class="item">
                        <div class="circle mr5" style="background-color: #FFDECC;"></div>
                        <span>#FFDECC</span>
                    </div>
                    <div class="item">
                        <div class="circle mr5" style="background-color: #552F19;"></div>
                        <span>#552F19</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="brand-typography mb40">
    <div class="clearfix"> 
        <div class="pull-left fontsize-20 mb40">字体 <small>Typography</small></div>
        <div class="pull-right">
            <a class="btn btn-brand" href="javascript:;"
                on-mouseenter="download" 
                on-click="download">
                <span class="specfont">&#xe633;</span>
                <span>下载附件</span>
            </a>
            <% list = ['字体/阿里妈妈品牌规范-字体.ai', '字体/阿里妈妈品牌规范-字体.pdf', '字体/阿里妈妈品牌规范-字体.zip'] %>
            <ul class="download-list">
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
        <div class="fontsize-16">印刷字体</div>
        <p class="color-999 mt4">为了塑造品牌整体形象,所有传播媒体、刊物及平面印刷等,所需的文字均采用统一专用字体,以供不同场合使用。同时,为求运用方便,在刊物、媒体等内文说明的排版上,若无相同字体,请以形相近的字体取代使用。</p>
        <div class="mt20 mb40">
            <div class="mb20">
                <div class="color-999 mb6">方正兰亭特黑简体(FZLTTHJW)</div>
                <img class="img-responsive cn" src="assets/typography/01-方正兰亭特黑简体.svg">
            </div>
            <div class="mb20">
                <div class="color-999 mb6">方正兰亭粗黑简体(FZLTCHJW)</div>
                <img class="img-responsive cn" src="assets/typography/02-方正兰亭粗黑简体.svg">
            </div>
            <div class="mb20">
                <div class="color-999 mb6">方正兰亭中黑简体(FZLTZHJW)</div>
                <img class="img-responsive cn" src="assets/typography/03-方正兰亭中黑简体.svg">
            </div>
            <div class="mb20">
                <div class="color-999 mb6">方正兰亭黑简体(FZLTHJW)</div>
                <img class="img-responsive cn" src="assets/typography/04-方正兰亭黑简体.svg">
            </div>
            <div class="mb40">
                <div class="color-999 mb6">方正兰亭纤黑简体(FZLTXHJW)</div>
                <img class="img-responsive cn" src="assets/typography/05-方正兰亭纤黑简体.svg">
            </div>

            <div class="mb20">
                <div class="color-999 mb6">Helvetica Neue Bold</div>
                <img class="img-responsive en" src="assets/typography/06-Helvetica Neue Bold.svg">
            </div>
            <div class="mb20">
                <div class="color-999 mb6">Helvetica Neue Medium</div>
                <img class="img-responsive en" src="assets/typography/07-Helvetica Neue Medium.svg">
            </div>
            <div class="mb20">
                <div class="color-999 mb6">Helvetica Neue Regular</div>
                <img class="img-responsive en" src="assets/typography/08-Helvetica Neue Regular.svg">
            </div>
            <div class="mb20">
                <div class="color-999 mb6">Helvetica Neue Light</div>
                <img class="img-responsive en" src="assets/typography/09-Helvetica Neue Light.svg">
            </div>
            <div class="mb20">
                <div class="color-999 mb6">Helvetica Neue Thin</div>
                <img class="img-responsive en" src="assets/typography/10-Helvetica Neue Thin.svg">
            </div>
            <div class="mb20">
                <div class="color-999 mb6">Helvetica Neue UltraLight</div>
                <img class="img-responsive en" src="assets/typography/11-Helvetica Neue UltraLight.svg">
            </div>
        </div>
    </div>
    <div>
        <div class="fontsize-16">系统设备字体</div>
        <p class="color-999 mt4">寻找跨平台最佳的 font-family，适配不同操作系统和浏览器。</p>
        <div class="mb20">
            <p class="mb4">中文：</p>
            <ul style="padding-left: 18px;">
                <li>Windows 优先使用「微软雅黑」，如果没有则使用「中易宋体（SimSun）」。</li>
                <li>OS X 优先使用「冬青黑体简体（Hiragino Sans GB）」，如果没有则使用默认的「华文黑体」。</li>
                <li>Linux 优先使用「文泉驿微米黑」。</li>
            </ul>
            <p class="mb4 mt20">西文：</p>
            <ul style="padding-left: 18px;">
                <li>Windows 优先使用「Tahoma」，其他可用「Arial」、「Verdana」。</li>
                <li>OS X 优先使用「Helvetica Neue」，其他可用「Arial」、「Verdana」。</li>
            </ul>
        </div>
        <div>
            <a href="css.html">详见样式</a>
        </div>
    </div>
</div>

<div class="brand-color-palettes">
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
            <ul class="download-list">
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

<div class="shapes mb40">
    <div class="clearfix">
        <div class="pull-left fontsize-20 mb40">辅助图形 <small>Shapes</small></div>
        <div class="pull-right">
            <a class="btn btn-brand" href="javascript:;"
                on-mouseenter="download" 
                on-click="download">
                <span class="specfont">&#xe633;</span>
                <span>下载附件</span>
            </a>
            <% list = ['辅助形体/阿里妈妈品牌规范-案例辅助形体.ai', '辅助形体/阿里妈妈品牌规范-案例辅助形体.pdf'] %>
            <ul class="download-list">
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

<div class="mb40 hide">
    <div class="mb40">图像 <small>Imagery</small></div><!-- fontsize-20 -->
    <div class="row">
        <img class="col-sm-6 img-responsive" src="placeholder.jpg">
        <img class="col-sm-6 img-responsive" src="placeholder.jpg">
    </div>
</div>

<div class="brand-icon mb40">
    <div class="clearfix">
        <div class="pull-left fontsize-20 mb40">图标 <small>Icon</small></div>
        <div class="pull-right">
            <a class="btn btn-brand" href="javascript:;"
                on-mouseenter="download" 
                on-click="download">
                <span class="specfont">&#xe633;</span>
                <span>下载附件</span>
            </a>
            <% list = ['图标/阿里妈妈品牌规范-图标.ai', '图标/阿里妈妈品牌规范-图标.pdf'] %>
            <ul class="download-list">
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
    <ol class="color-999 mt4" style="padding-left: 18px;">
        <li><p class="mb0">图标设计采用线性的形式,注意线条的比例,言简意赅、表意到位。</p></li>
        <li><p class="mb0">适当增加个性细节,整体图标个性细节统一。</p></li>
        <li><p class="mb0">图标线上实现采用字体图标的形式,目前可在iconfont平台调用合适的图标。 </p></li>
        <li><p class="mb0">若遇到平台中没有的图标,可根据通用风格设计新的矢量图标,并上传到平台。</p></li>
    </ol>
    <div class="row bgicons mb20">
        <div class="col-sm-4">
            <span class="brandfont brandfont-title">&#xe605;</span>
        </div>
        <div class="col-sm-4">
            <span class="brandfont brandfont-title">&#xe60b;</span>
        </div>
        <div class="col-sm-4">
            <span class="brandfont brandfont-title">&#xe618;</span>
        </div>
    </div>
    <div class="row smicons mb20">
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe61c;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe60e;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe602;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe603;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe604;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe605;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe606;</span></div>
    </div>
    <div class="row smicons mb20">
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe607;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe608;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe609;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe60a;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe60b;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe60c;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe60d;</span></div>
    </div>
    <div class="row smicons mb20">
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe601;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe60f;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe610;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe611;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe612;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe613;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe614;</span></div>
    </div>
    <div class="row smicons mb60">
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe615;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe616;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe617;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe618;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe619;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe61a;</span></div>
        <div class="col-sm-2 text-center"><span class="brandfont">&#xe600;</span></div>
    </div>
    <div class="fangge mb60">
        <div class="fontsize-16">图标网格比例</div>
        <p class="color-999 mt4 mb20">制定网格比例与标准,不同形态的图标可以按照圆形、正方、竖矩形、横矩形标准框绘制。图标的整体大小、重量感保持平衡。</p>
        <div class="row mb20">
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/01-64方格.svg">
                <p class="text-center">64 方格</p>
            </div>
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/02-1024方格.svg">
                <p class="text-center">1024 方格</p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/03-圆形图标.svg">
                <p class="text-center">圆形图标</p>
            </div>
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/04-方形图标.svg">
                <p class="text-center">方形图标</p>
            </div>
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/05-竖向图标.svg">
                <p class="text-center">竖向图标</p>
            </div>
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/06-横向图标.svg">
                <p class="text-center">横向图标</p>
            </div>
        </div>
    </div>
    <div class="fangge mb60">
        <p class="color-999 mb20">保持简洁而优美的弧度,推荐用正圆相切,矩形的导角保持统一。并根据不同曲率分出几档弧度层次。</p>
        <div class="row">
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/07-方形图标案例.svg">
                <p class="text-center">方形图标</p>
            </div>
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/08-竖向图标案例.svg">
                <p class="text-center">竖向图标</p>
            </div>
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/09-圆形图标案例.svg">
                <p class="text-center">圆形图标</p>
            </div>
        </div>
    </div>
    <div class="biaochi mb60">
        <p class="color-999 mb20">统一图标的线条粗细,分为主体形态和细节线条两个层次。</p>
        <div class="row">
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/10-方形图标线标尺.svg">
            </div>
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/11-圆形图标线标尺.svg">
            </div>
        </div>
    </div>
    <div class="shili-1 mb60">
        <div class="fontsize-16 mb20">示例 1</div>
        <div class="row">
            <div class="col-sm-4">
                <img class="img-responsive" src="assets/icon/12-全域营销图例.svg">
                <p class="text-center fontsize-16 bold mt10 mb4">全域营销</p>
                <p>通过领先的消费者人群分析技术,帮助用户精准定向人群,管理受众,实现高效营销推广。</p>
            </div>
            <div class="col-sm-4">
                <img class="img-responsive" src="assets/icon/14-达摩院图例.svg">
                <p class="text-center fontsize-16 bold mt10 mb4">达摩院</p>
                <p>通过领先的消费者人群分析技术,帮助用户精准定向人群,管理受众,实现高效营销推广</p>
            </div>
            <div class="col-sm-4">
                <img class="img-responsive" src="assets/icon/16-新媒体图例.svg">
                <p class="text-center fontsize-16 bold mt10 mb4">新媒体</p>
                <p>通过领先的消费者人群分析技术,帮助用户精准定向人群,管理受众,现高效营销推广。</p>
            </div>
        </div>
    </div>
    <div class="shili-2 mb60">
        <div class="fontsize-16 mb20">示例 2</div>
        <div class="row mb20">
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/18-海量标签自由组合.svg">
                <p class="text-center mt10 mb0">海量标签</p>
                <p class="text-center">自由组合</p>
            </div>
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/19-引领强劲商业推广.svg">
                <p class="text-center mt10 mb0">引领强劲</p>
                <p class="text-center">商业推广</p>
            </div>
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/20-线上线下综合应用.svg">
                <p class="text-center mt10 mb0">线上线下</p>
                <p class="text-center">综合应用</p>
            </div>
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/21-数据价值最大化.svg">
                <p class="text-center mt10 mb0">数据价值</p>
                <p class="text-center">最大化</p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/22-覆盖上亿人群.svg">
                <p class="text-center mt10 mb0">覆盖</p>
                <p class="text-center">上亿人群</p>
            </div>
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/23-智能扩展优质人群.svg">
                <p class="text-center mt10 mb0">智能扩展</p>
                <p class="text-center">优质人群</p>
            </div>
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/24-安全稳定数据管理.svg">
                <p class="text-center mt10 mb0">安全稳定</p>
                <p class="text-center">数据管理</p>
            </div>
            <div class="col-sm-3">
                <img class="img-responsive" src="assets/icon/25-第三方服务个性化营销.svg">
                <p class="text-center mt10 mb0">第三方服务</p>
                <p class="text-center">个性化营销</p>
            </div>
        </div>
    </div>
</div>

<div class="brand-grid">
    <div class="clearfix">
        <div class="pull-left fontsize-20 mb40">网格系统 <small>Grid Systems</small></div>
        <div class="pull-right">
            <a class="btn btn-brand" href="javascript:;"
                on-mouseenter="download" 
                on-click="download">
                <span class="specfont">&#xe633;</span>
                <span>下载附件</span>
            </a>
            <% list = ['系统网格/阿里妈妈品牌规范-系统网格.ai', '系统网格/阿里妈妈品牌规范-系统网格.pdf'] %>
            <ul class="download-list">
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

<div class="brand-examples">
    <div class="clearfix">
        <div class="pull-left fontsize-20 mb40">案例 <small>Examples</small></div>
        <div class="pull-right">
            <a class="btn btn-brand" href="javascript:;"
                on-mouseenter="download" 
                on-click="download">
                <span class="specfont">&#xe633;</span>
                <span>下载附件</span>
            </a>
            <% list = ['案例/阿里妈妈名片模版CMYK格式.ai', '案例/阿里妈妈名片模版RGB格式.ai', '案例/阿里妈妈品牌规范-案例.ai', '案例/阿里妈妈品牌规范-案例.pdf', '案例/PPT模板.zip'] %>
            <ul class="download-list">
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
        <div class="fontsize-16 mb10">名片</div>
        <div class="row">
            <img class="col-sm-4 img-responsive" src="assets/examples/01-名片1.svg">
            <img class="col-sm-4 img-responsive" src="assets/examples/02-名片2.svg">
            <img class="col-sm-4 img-responsive" src="assets/examples/03-名片3.svg">
        </div>
    </div>
    <div class="mb60">
        <div class="fontsize-16 mb10">PPT模版</div>
        <div class="row">
            <img class="col-sm-6 img-responsive mb40" src="assets/examples/04-白色ppt封面.svg">
            <img class="col-sm-6 img-responsive mb40" src="assets/examples/05-白色ppt封底.svg">
            <img class="col-sm-6 img-responsive mb40" src="assets/examples/06-黑色ppt封面.svg">
            <img class="col-sm-6 img-responsive mb40" src="assets/examples/07-黑色ppt封底.svg">
        </div>
    </div>
    <div class="mb60">
        <div class="fontsize-16 mb10">包装袋</div>
        <div class="row">
            <img class="col-sm-12 img-responsive mb40" src="assets/examples/08-袋子1.svg">
            <img class="col-sm-12 img-responsive mb40" src="assets/examples/09-袋子2.svg">
            <img class="col-sm-12 img-responsive mb40" src="assets/examples/10-袋子3.svg">
            <img class="col-sm-12 img-responsive mb40" src="assets/examples/11-袋子4.svg">
            <img class="col-sm-12 img-responsive mb40" src="assets/examples/12-袋子5.svg">
        </div>
    </div>
    <div class="mb60">
        <div class="fontsize-16 mb10">书籍</div>
        <div class="row">
            <img class="col-sm-12 img-responsive mb40" src="assets/examples/13-书籍1.svg">
            <img class="col-sm-12 img-responsive mb40" src="assets/examples/14-书籍2.svg">
        </div>
    </div>
    <div class="mb60">
        <div class="fontsize-16 mb10">易拉宝</div>
        <div class="row">
            <img class="col-sm-6 img-responsive mb40" src="assets/examples/15-易拉宝1.svg">
            <img class="col-sm-6 img-responsive mb40" src="assets/examples/16-易拉宝2.svg">
        </div>
    </div>
</div>

</div><!-- /brand
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})