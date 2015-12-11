<div class="spec-section mb40 navBar">
   <div class="mb40">
        <div class="fontsize-20 mb10">定义</div>
        <p class="mb20">搜索栏用来获取用户键入的文本，用以作为搜索的关键字，依据实际场景增加输入文本的暗提示。</p>
    </div>
    <div class="mb40">
        <div class="fontsize-20 mb10">基础规范</div> 
        <p class="mb0">1、在常规状态下，搜索栏上会依据实际场景显示输入文本的暗提示，如写明搜索功能描述性的标题，如“请搜索要分享的宝贝”，或提示用户输入的文本将在哪里搜索，如“搜索收藏店铺的宝贝”；</p>
        <p class="mb0">2、根据输入的内容，智能匹配相关关键词，同时记录搜索历史，减少用户的输入成本；</p>
        <p class="mb20">3、一旦搜索框中有内容输入，立即出现清除图标，方便用户一键清空输入的内容，而不是通过多次点击键盘的回删键进行逐个删除。当搜索框中无内容输入，隐藏清除图标。</p>
    </div>
    <div class="mb40">
        <div class="fontsize-20 mb10">使用场景</div> 
        <div class="example">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景一：基础搜索样式</div> 
                </div> 
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                            <div bx-name="alimama/design/mobile/component/searchbar/searchbar"></div>
                            <ul class="suggestList">
                                <li>连衣裙夏</li>
                                <li>连衣裙 长裙</li>
                                <li>连衣裙 中裙</li>
                            </ul>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <div class="search_box">
                                    <form class="sbox txt">
                                        <span>
                                            <input class="ico search_input" name="q" type="search" placeholder="输入您要分享的宝贝" autocomplete="off"  autocorrect="off" maxlength="50" value=""/>
                                        </span>
                                        <span class="button">
                                            <b></b>
                                        </span>
                                        <i class="btn_cancel">取消</i>
                                    </form> 
                                </div>
                             </code>
                         </pre> 
                    </div>
                </div> 
            </div> 
        </div>
        <!--demo1 end-->
        <div class="example">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景二：切换搜索</div> 
                </div> 
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                            <div class="search_box">
                                <form class="sbox txt">
                                    <span class=""> 
                                        <i class="typeChoose" isshow='false'>
                                             宝贝 
                                             <b class="searchfont">&#xe607;</b>
                                        </i> 
                                        <!-- <b class="myfont searchico"></b>-->
                                         <input class="single search_input" name="q" type="search" placeholder="输入并搜索您要分享的宝贝" autocomplete="off" autocorrect="off" maxlength="50" value=""/>
                                     </span>
                                     <span class="button">
                                         <b></b>
                                     </span>
                                     <i class="btn_cancel">取消</i>
                                     <div class="toggle">
                                         <ul>
                                             <li class="tItem" data-type="isrch">宝贝</li> 
                                             <li class="tItem last" data-type="ssrch">店铺</li>
                                         </ul> 
                                     </div>
                                </form> 
                            </div>
                            <ul class="suggestList">
                                <li>连衣裙夏</li>
                                <li>连衣裙 长裙</li>
                                <li>连衣裙 中裙</li>
                            </ul>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <div class="search_box">
                                    <form class="sbox txt">
                                        <span class=""> 
                                            <i class="typeChoose" isshow='false'>
                                                 宝贝 
                                                 <b class="searchfont">&#xe607;</b>
                                            </i> 
                                            <!-- <b class="myfont searchico"></b>-->
                                             <input class="single search_input" name="q" type="search" placeholder="输入并搜索您要分享的宝贝" autocomplete="off" autocorrect="off" maxlength="50" value=""/>
                                         </span>
                                         <span class="button">
                                             <b></b>
                                         </span>
                                         <i class="btn_cancel">取消</i>
                                         <div class="toggle">
                                             <ul>
                                                 <li class="tItem" data-type="isrch">宝贝</li> 
                                                 <li class="tItem last" data-type="ssrch">店铺</li>
                                             </ul> 
                                         </div>
                                    </form> 
                                </div>
                             </code>
                         </pre> 
                    </div>
                </div> 
            </div> 
        </div>
    </div>
</div>
