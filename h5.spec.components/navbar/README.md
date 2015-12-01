<div class="spec-section mb40 navBar">
   <div class="mb40">
        <div class="fontsize-20 mb10">定义</div>
        <p class="mb20">导航栏承载着APP层级结构的跳转，支持用户前后行进，并支持当前视图中内容的管理。导航栏总在屏幕的顶部，状态栏的正下方。</p>
    </div>
    <div class="mb40">
        <div class="fontsize-20 mb10">基础规范</div> 
        <p class="mb0">1、导航栏的最左侧主要用于放置返回、关闭。若是在首页可根据实际场景放置其他控件，如隐藏的左侧导航抽屉。</p>
        <p class="mb0">2、iOS的标题居中显示，也可放置分段控件；Android的标题则是靠左显示。</p>
        <p class="mb20">3、导航栏是右侧是针对当前页面进行管理、设置、帮助入口的图标、文字或一组控件（操作项的显示不应超过2个，若超出请使用更多图标，点击下拉选择）。</p>
    </div> 
    <div class="mb40">
       <div class="fontsize-20 mb10">使用场景</div>  
       <div class="example">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景一：一级标题</div> 
                </div> 
                <div class="content-header">
                    <div style="text-align:center;">IOS</div> 
                </div>
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                            <div style="height:20px;background:#4e4e4e;"></div>
                            <header class="navBar-ios levelSenior">
                                淘宝联盟 
                                <a href="javascript:;" class="oprate-btn">登录</a>
                            </header>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <header class="navBar-ios levelSenior">
                                    淘宝联盟 
                                    <a href="javascript:;" class="oprate-btn">登录</a>
                                </header>
                             </code>
                         </pre> 
                    </div>
                </div> 
                <div class="content-header" style="border-radius:0 6px 0 0;border-top:1px solid #e6e6e6;">
                    <div style="text-align:center;">Android</div> 
                </div>
                <div class="content-body pd0 android">
                    <div class="content-show">
                       <div class="content-wrap">
                            <div style="height:20px;background:#4e4e4e;"></div>
                            <header class="navBar-android levelSenior">
                                淘宝联盟 
                                <a href="javascript:;" class="oprate-btn">登录</a>
                            </header>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <header class="navBar-android levelSenior">
                                    淘宝联盟 
                                    <a href="javascript:;" class="oprate-btn">登录</a>
                                </header>
                             </code>
                         </pre> 
                    </div>
                </div>
            </div> 
        </div>
        <!--场景一结束-->
        <div class="example demo2">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景二：二级标题</div> 
                </div> 
                <div class="content-header">
                    <div style="text-align:center;">IOS</div> 
                </div>
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                            <div style="height:20px;background:#4e4e4e;"></div>
                            <header class="navBar-ios">
                                    导航栏的标题
                                   <a href="javascript:;" class="oprate-btn navfont">&#xe610;</a>
                            </header>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <header class="navBar-ios">
                                    导航栏的标题
                                   <a href="javascript:;" class="oprate-btn navfont">&#xe610;</a>
                                </header>
                             </code>
                         </pre> 
                    </div>
                </div> 
                <div class="content-header" style="border-radius:0 6px 0 0;border-top:1px solid #e6e6e6;">
                    <div style="text-align:center;">Android</div> 
                </div>
                <div class="content-body pd0 android">
                    <div class="content-show">
                       <div class="content-wrap">
                            <div style="height:20px;background:#4e4e4e;"></div>
                            <header class="navBar-android">
                                  导航栏的标题 
                                   <a href="javascript:;" class="oprate-btn navfont">&#xe610;</a>
                            </header>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <header class="navBar-android">
                                  导航栏的标题 
                                   <a href="javascript:;" class="oprate-btn navfont">&#xe610;</a>
                                </header>
                             </code>
                         </pre> 
                    </div>
                </div>
            </div> 
        </div>
        <!--场景二结束-->
        <div class="example demo3">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景三：H5页面超过两级</div> 
                </div> 
                <div class="content-header">
                    <div style="text-align:center;">IOS</div> 
                </div>
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                            <div style="height:20px;background:#4e4e4e;"></div>
                            <header class="navBar-ios">
                                    导航栏的标题
                                   <a href="javascript:;" class="oprate-close">关闭</a>
                                   <a href="javascript:;" class="oprate-btn navfont">&#xe610;</a>
                            </header>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <header class="navBar-ios">
                                    导航栏的标题
                                   <a href="javascript:;" class="oprate-close">关闭</a>
                                   <a href="javascript:;" class="oprate-btn navfont">&#xe610;</a>
                                </header>
                             </code>
                         </pre> 
                    </div>
                </div> 
                <div class="content-header" style="border-radius:0 6px 0 0;border-top:1px solid #e6e6e6;">
                    <div style="text-align:center;">Android</div> 
                </div>
                <div class="content-body pd0 android">
                    <div class="content-show">
                       <div class="content-wrap">
                            <div style="height:20px;background:#4e4e4e;"></div>
                            <header class="navBar-android">
                                  导航栏的标题 
                                   <a href="javascript:;" class="oprate-close navfont">&#xe611;</a>
                            </header>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <header class="navBar-android">
                                  导航栏的标题 
                                   <a href="javascript:;" class="oprate-close navfont">&#xe611;</a>
                                </header>
                             </code>
                         </pre> 
                    </div>
                </div>
            </div> 
        </div>
        <!--场景三结束-->
        <div class="example demo4">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景四：临时窗口</div> 
                </div> 
                <div class="content-header">
                    <div style="text-align:center;">IOS</div> 
                </div>
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                            <div style="height:20px;background:#4e4e4e;"></div>
                            <header class="navBar-ios">
                                    导航栏的标题
                                   <a href="javascript:;" class="oprate-close">关闭</a>
                            </header>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <header class="navBar-ios">
                                    导航栏的标题
                                   <a href="javascript:;" class="oprate-close">关闭</a>
                                </header>
                             </code>
                         </pre> 
                    </div>
                </div> 
                <div class="content-header" style="border-radius:0 6px 0 0;border-top:1px solid #e6e6e6;">
                    <div style="text-align:center;">Android</div> 
                </div>
                <div class="content-body pd0 android">
                    <div class="content-show">
                       <div class="content-wrap">
                            <div style="height:20px;background:#4e4e4e;"></div>
                            <header class="navBar-android">
                                  导航栏的标题 
                                   <a href="javascript:;" class="oprate-close navfont">&#xe611;</a>
                            </header>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <header class="navBar-android">
                                  导航栏的标题 
                                   <a href="javascript:;" class="oprate-close navfont">&#xe611;</a>
                                </header>
                             </code>
                         </pre> 
                    </div>
                </div>
            </div> 
        </div>
        <!--场景4结束-->
        <div class="example demo5">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景五：标题有下拉内容</div> 
                </div> 
                <div class="content-header">
                    <div style="text-align:center;">IOS</div> 
                </div>
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                            <div style="height:20px;background:#4e4e4e;"></div>
                            <header class="navBar-ios">
                                   <h2>标题01<b class="navfont">&#xe607;</b></h2> 
                                   <a href="javascript:;" class="oprate-back navfont">&#xe610;</a>
                            </header>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <header class="navBar-ios">
                                   <h2>标题01<b class="navfont">&#xe607;</b></h2> 
                                   <a href="javascript:;" class="oprate-back navfont">&#xe610;</a>
                                </header>
                             </code>
                         </pre> 
                    </div>
                </div> 
                <div class="content-header" style="border-radius:0 6px 0 0;border-top:1px solid #e6e6e6;">
                    <div style="text-align:center;">Android</div> 
                </div>
                <div class="content-body pd0 android">
                    <div class="content-show">
                       <div class="content-wrap">
                            <div style="height:20px;background:#4e4e4e;"></div>
                            <header class="navBar-android">
                                   <h2>标题01<b class="navfont">&#xe607;</b></h2> 
                                   <a href="javascript:;" class="oprate-back navfont">&#xe610;</a>
                            </header>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <header class="navBar-android">
                                   <h2>标题01<b class="navfont">&#xe607;</b></h2> 
                                   <a href="javascript:;" class="oprate-back navfont">&#xe610;</a>
                                </header>
                             </code>
                         </pre> 
                    </div>
                </div>
            </div> 
        </div>
        <!--场景五结束-->
        <div class="example demo6">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景六：导航带更多操作</div> 
                </div> 
                <div class="content-header">
                    <div style="text-align:center;">IOS</div> 
                </div>
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                            <div style="height:20px;background:#4e4e4e;"></div>
                            <header class="navBar-ios">
                                    导航栏的标题
                                   <a href="javascript:;" class="oprate-back navfont">&#xe610;</a>
                                   <a href="javascript:;" class="oprate-btn navfont">&#xe612;</a>
                            </header>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <header class="navBar-ios">
                                    导航栏的标题
                                   <a href="javascript:;" class="oprate-back navfont">&#xe610;</a>
                                   <a href="javascript:;" class="oprate-btn navfont">&#xe612;</a>
                                </header>
                             </code>
                         </pre> 
                    </div>
                </div> 
                <div class="content-header" style="border-radius:0 6px 0 0;border-top:1px solid #e6e6e6;">
                    <div style="text-align:center;">Android</div> 
                </div>
                <div class="content-body pd0 android">
                    <div class="content-show">
                       <div class="content-wrap">
                            <div style="height:20px;background:#4e4e4e;"></div>
                            <header class="navBar-android">
                                    导航栏的标题
                                   <a href="javascript:;" class="oprate-back navfont">&#xe610;</a>
                                   <a href="javascript:;" class="oprate-btn navfont">&#xe612;</a>
                            </header>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <header class="navBar-android">
                                    导航栏的标题
                                   <a href="javascript:;" class="oprate-back navfont">&#xe610;</a>
                                   <a href="javascript:;" class="oprate-btn navfont">&#xe612;</a>
                                </header>
                             </code>
                         </pre> 
                    </div>
                </div>
            </div> 
        </div>
        <!--场景六结束-->
        <div class="example demo7">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景七：导航带辅助说明</div> 
                </div> 
                <div class="content-header">
                    <div style="text-align:center;">IOS</div> 
                </div>
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                           <div style="height:20px;background:#4e4e4e;"></div>
                           <header class="navBar-ios">
                                  <hgroup>
                                        <h1>导航栏的标题</h1>
                                        <h5>辅助说明</h5> 
                                  </hgroup> 
                                  <a href="javascript:;" class="oprate-back navfont">&#xe610;</a>
                            </header>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <header class="navBar-ios">
                                  <hgroup>
                                        <h1>导航栏的标题</h1>
                                        <h5>辅助说明</h5> 
                                  </hgroup> 
                                  <a href="javascript:;" class="oprate-back navfont">&#xe610;</a>
                                </header>
                             </code>
                         </pre> 
                    </div>
                </div> 
                <div class="content-header" style="border-radius:0 6px 0 0;border-top:1px solid #e6e6e6;">
                    <div style="text-align:center;">Android</div> 
                </div>
                <div class="content-body pd0 android">
                    <div class="content-show">
                       <div class="content-wrap">
                            <div style="height:20px;background:#4e4e4e;"></div>
                            <header class="navBar-android">
                                  <hgroup>
                                        <h1>导航栏的标题</h1>
                                        <h5>辅助说明</h5> 
                                  </hgroup> 
                                  <a href="javascript:;" class="oprate-back navfont">&#xe610;</a>
                            </header>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <header class="navBar-android">
                                  <hgroup>
                                        <h1>导航栏的标题</h1>
                                        <h5>辅助说明</h5> 
                                  </hgroup> 
                                  <a href="javascript:;" class="oprate-back navfont">&#xe610;</a>
                                </header>
                             </code>
                         </pre> 
                    </div>
                </div>
            </div> 
        </div>
    </div>
</div>

