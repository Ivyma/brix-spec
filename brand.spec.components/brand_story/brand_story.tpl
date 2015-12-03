<% var RE_FILENAME = /.+\/([^\/]+)/ %>
<% var list = [] %>

<div class="brand">

    <div class="hide">
        <div class="">阿里妈妈品牌规范 <small>Brand Guidelines</small></div>
    </div>

    <div class="spec-section brand-story mb40" style="">
        <div class="hide">
            <div class="fontsize-20">品牌故事 <small>Brand Story</small></div>
        </div>
        <div class="row mb40">
            <div class="col-sm-7"><img class="img-responsive" src="assets/story/branding landingpage字样2x.svg" style="margin-bottom: 80px;"></div>

            <div class="col-sm-4 design-decoration">
                <img class="img-responsive" src="assets/design/landing/字母B.gif" alt="字母B">
            </div>
 
        </div>
        <div class="clearfix"> 
            <div class="pull-left mb40" style="font-size: 20px;">品牌故事 <small>Brand Story</small></div>
            <div class="pull-right" style="position: relative;">
                <a class="btn btn-brand" href="javascript:;"
                    on-mouseenter="download" 
                    on-click="download">
                    <span class="specfont">&#xe633;</span>
                    <span>下载附件</span>
                </a>
                <% list = ['品牌故事/Alimama品牌指南第一版.pdf'] %>
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


</div><!-- /brand -->