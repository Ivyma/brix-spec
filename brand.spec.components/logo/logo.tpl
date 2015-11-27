<% var RE_FILENAME = /.+\/([^\/]+)/ %>
<% var list = [] %>

<div class="brand">

    <div class="hide">
        <div class="">阿里妈妈品牌规范 <small>Brand Guidelines</small></div>
    </div>


    <div class="spec-section brand-logo">
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


</div><!-- /brand -->