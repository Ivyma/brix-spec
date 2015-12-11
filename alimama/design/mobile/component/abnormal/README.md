<div bx-name="alimama/design/mobile/component/abnormal/abnormal"></div>
<div class="spec-section mb40">
    <div class="mb40">
        <div class="fontsize-20 mb10">定义</div>
        <p class="mb20">在用户使用过程中，可能因为网络等原因，导致页面连接不了，刷新有问题，数据无返回等情况，需要给到对应的异常提示，并提供对应的可行操作或建议。</p>
    </div>
    <div class="mb40">
        <div class="fontsize-20 mb10">基础规范</div> 
        <p class="mb0">当用户没有提交任何资料或者网络连接不顺畅的时候，需提供对应的缺省页面，说明出现该情况的原因及对应的解决方案。</p>
    </div>
    <div class="mb40">
        <div class="fontsize-20 mb10">使用场景</div> 
        <div class="example demo1">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景一：空白页</div> 
                </div> 
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                          <div style="height:20px;background:#4e4e4e;"></div> 
                          <header style="height:44px;background:#fafafa;border-bottom:1px solid #ccc;"></header>
                          <div class="blank_page">
                              <div class="blankIcon"></div>
                              <p class="text">您还没有相关订单哦</p>
                              <p class="annouce">快去分享吧</p>
                              <div class="operateArea">
                                  <button class="btn share">去分享</button> 
                              </div> 
                          </div>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <div class="blank_page">
                                   <div class="blankIcon"></div>
                                   <p class="text">您还没有相关订单哦</p>
                                   <p class="annouce">快去分享吧</p>
                                   <div class="operateArea">
                                       <button class="btn share">去分享</button> 
                                   </div> 
                               </div>
                             </code>
                         </pre> 
                    </div>
                </div> 
            </div> 
        </div>
        <!--demo1 end-->
        <div class="example demo1">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景二：网络无法连接</div> 
                </div> 
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                          <div style="height:20px;background:#4e4e4e;"></div> 
                          <header style="height:44px;background:#fafafa;border-bottom:1px solid #ccc;"></header>
                          <div class="blank_page">
                              <div class="networkIcon"></div>
                              <p class="text">网络无法连接</p>
                              <p class="annouce">请检查您的手机是否联网</p>
                              <div class="operateArea">
                                  <button class="btn refresh">刷新再试</button> 
                              </div> 
                           </div>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <div class="blank_page">
                                   <div class="networkIcon"></div>
                                   <p class="text">网络无法连接</p>
                                   <p class="annouce">请检查您的手机是否联网</p>
                                   <div class="operateArea">
                                       <button class="btn refresh">刷新再试</button> 
                                   </div> 
                                </div>
                             </code>
                         </pre> 
                    </div>
                </div> 
            </div> 
        </div>
        <!--demo2-->
        <div class="example demo1">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景二：网络无法连接</div> 
                </div> 
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                          <div style="height:20px;background:#4e4e4e;"></div> 
                          <header style="height:44px;background:#fafafa;border-bottom:1px solid #ccc;"></header>
                          <div class="blank_page">
                              <div class="sysErr"></div>
                              <p class="text">系统出错啦</p>
                              <p class="annouce">请刷新页面再试</p>
                              <div class="operateArea">
                                  <button class="btn refresh">刷新再试</button> 
                              </div> 
                           </div>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <div class="blank_page">
                                   <div class="sysErr"></div>
                                   <p class="text">系统出错啦</p>
                                   <p class="annouce">请刷新页面再试</p>
                                   <div class="operateArea">
                                       <button class="btn refresh">刷新再试</button> 
                                   </div> 
                                </div>
                             </code>
                         </pre> 
                    </div>
                </div> 
            </div> 
        </div>
        <!--demo3 -->
    </div>
</div>
