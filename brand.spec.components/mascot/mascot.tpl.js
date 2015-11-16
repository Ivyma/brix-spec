/* global define */
define(function() {
    return (function(){/*
<% var RE_FILENAME = /.+\/([^\/]+)/ %>
<% var list = [] %>

<div class="brand">

    <div class="hide">
        <div class="">阿里妈妈品牌规范 <small>Brand Guidelines</small></div>
    </div>


    <div class="spec-section brand-mascot">
        <div class="clearfix"> 
            <div class="pull-left fontsize-20 mb40">吉祥物 <small>Mascot</small></div>
            <div class="pull-right relative">
                <a class="btn btn-brand" href="javascript:;"
                    on-mouseenter="download" 
                    on-click="download">
                    <span class="specfont">&#xe633;</span>
                    <span>下载附件</span>
                </a>
                <% list = ['吉祥物/阿里妈妈品牌规范-吉祥物（校正）.ai', '吉祥物/阿里妈妈品牌规范-吉祥物（校正）.pdf'] %>
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
            <div class="ungrid-row mb40">
                <div class="ungrid-col text-align-center vertical-align-middle" style="width: 27%; padding-right: 3%;">
                    <img class="img-responsive" src="assets/mascot/1 袋妈.svg">
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
                    <img class="img-responsive" src="assets/mascot/2 小袋.svg" style="width: 60%; margin: 0 auto;"></div>
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
                    <embed src="assets/mascot/3 特征.svg" style="max-width: 520px;"></embed>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <img src="assets/mascot/4 特征.svg" style="max-width: 520px;">
                </div>
            </div>
        </div>
        <div class="xinggetezheng mb60">
            <div class="fontsize-16 mb10">性格特征</div>
            <div class="row">
                <div class="col-sm-3">
                    <embed src="assets/mascot/5.1 性格.svg" class="img-responsive" style="max-width: 120px; margin: 0 auto;"></embed>
                    <div class="fontsize-16 mb10 text-align-center">乐观</div>
                    <p class="color-999">非常乐观的、能够带来充足信心。还能利用各种神器精打细算。</p>
                </div>
                <div class="col-sm-3">
                    <img src="assets/mascot/5.2 性格.svg" class="img-responsive" style="max-width: 120px; margin: 0 auto;">
                    <div class="fontsize-16 mb10 text-align-center">助人</div>
                    <p class="color-999">我很忙，不是难题不出手。效率超高，别问我怎么做到的。只要是难题都能解决，就是那么较真。</p>
                </div>
                <div class="col-sm-3">
                    <img src="assets/mascot/5.3 性格.svg" class="img-responsive" style="max-width: 120px; margin: 0 auto;">
                    <div class="fontsize-16 mb10 text-align-center">聪明</div>
                    <p class="color-999">我很聪明，不但在生活方面具备丰富经验值;情商也很高哦!</p>
                </div>
            </div>
        </div>
        <div class="changjing mb60">
            <div class="fontsize-16 mb10">动作和场景/对话</div>
            <div class="ungrid-row mb40" style="max-width: 840px;">
                <div class="ungrid-col" style="width: 20%;">
                    <embed class="img-responsive changjing-1" src="assets/mascot/6.1 场景.svg"></embed>
                    <!-- 右 7.2 场景.svg 左 7.3 场景.svg -->
                </div>
                <div class="ungrid-col" style="width: 40%; padding-right: 20px;">
                    <embed class="img-responsive changjing-2" src="assets/mascot/6.2 场景.svg"></embed>
                </div>
                <div class="ungrid-col" style="width: 20%;">
                    <embed class="img-responsive changjing-3" src="assets/mascot/6.3 场景.svg"></embed>
                </div>
            </div>
            <div class="ungrid-row mb40" style="max-width: 840px;">
                <div class="ungrid-col" style="width: 56%;">
                    <embed class="img-responsive changjing-4" src="assets/mascot/7.1 场景.svg"></embed>
                    <!-- 右 7.2 场景.svg 左 7.3 场景.svg -->
                </div>
                <div class="ungrid-col" style="width: 40%;">
                    <embed class="img-responsive changjing-5" src="assets/mascot/7.2 场景.svg"></embed>
                </div>
            </div>
        </div>
        <div class="biaoqing mb60">
            <div class="fontsize-16 mb10">表情/袋妈</div>
            <div class="row">
                <div class="col-sm-10">
                    <img class="col-sm-2 img-responsive" src="assets/mascot/8.1 表情.svg">
                    <img class="col-sm-2 img-responsive" src="assets/mascot/8.2 表情.svg">
                    <img class="col-sm-2 img-responsive" src="assets/mascot/8.3 表情.svg">
                    <img class="col-sm-2 img-responsive" src="assets/mascot/8.4 表情.svg">
                    <img class="col-sm-2 img-responsive" src="assets/mascot/8.5 表情.svg">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-10">
                    <img class="col-sm-2 img-responsive" src="assets/mascot/8.6 表情.svg">
                    <img class="col-sm-2 img-responsive" src="assets/mascot/8.7 表情.svg">
                    <img class="col-sm-2 img-responsive" src="assets/mascot/8.8 表情.svg">
                    <img class="col-sm-2 img-responsive" src="assets/mascot/8.9 表情.svg">
                    <img class="col-sm-2 img-responsive" src="assets/mascot/8.10 表情.svg">
                </div>
            </div>
        </div>
        <div class="biaoqing mb60">
            <div class="fontsize-16 mb10">表情/小袋</div>
            <div class="row">
                <div class="col-sm-10">
                    <img class="col-sm-2 img-responsive" src="assets/mascot/9.1 表情.svg">
                    <img class="col-sm-2 img-responsive" src="assets/mascot/9.2 表情.svg">
                    <img class="col-sm-2 img-responsive" src="assets/mascot/9.3 表情.svg">
                    <img class="col-sm-2 img-responsive" src="assets/mascot/9.4 表情.svg">
                    <img class="col-sm-2 img-responsive" src="assets/mascot/9.5 表情.svg">
                </div>
            </div>
        </div>
        <div class="sanshitu mb60">
            <div class="fontsize-16 mb20">三视图/色指定</div>
            <div class="mb60">
                <div class="row mb20">
                    <div class="col-sm-10">
                        <img class="col-sm-4 img-responsive" src="assets/mascot/10.1 三视图.svg">
                        <img class="col-sm-4 img-responsive" src="assets/mascot/10.2 三视图.svg">
                        <img class="col-sm-4 img-responsive" src="assets/mascot/10.3 三视图.svg">
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
                        <img class="col-sm-2 img-responsive" src="assets/mascot/11.1 三视图.svg">
                        <img class="col-sm-2 img-responsive" src="assets/mascot/11.2 三视图.svg">
                        <img class="col-sm-2 img-responsive" src="assets/mascot/11.3 三视图.svg">
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


</div><!-- /brand -->
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})