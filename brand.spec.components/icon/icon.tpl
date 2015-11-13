<% var RE_FILENAME = /.+\/([^\/]+)/ %>
<% var list = [] %>

<div class="brand">

    <div class="hide">
        <div class="">阿里妈妈品牌规范 <small>Brand Guidelines</small></div>
    </div>

    <div class="spec-section brand-icon mb40">
        <div class="clearfix">
            <div class="pull-left fontsize-20 mb40">图标 <small>Icon</small></div>
            <div class="pull-right relative">
                <a class="btn btn-brand" href="javascript:;"
                    on-mouseenter="download" 
                    on-click="download">
                    <span class="specfont">&#xe633;</span>
                    <span>下载附件</span>
                </a>
                <% list = ['图标/阿里妈妈品牌规范-图标.ai', '图标/阿里妈妈品牌规范-图标.pdf'] %>
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


</div><!-- /brand -->