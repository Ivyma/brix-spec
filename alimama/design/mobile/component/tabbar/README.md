<div bx-name="alimama/design/mobile/component/tabbar/tabbar"></div>
<div class="spec-section mb40 ">
    <div class="mb40">
       <div class="fontsize-20 mb10">定义</div>
       <p class="mb20">标签栏用于让用户在不同的子任务、视图和模式中进行切换。使用标签栏来组织整个应用层面的信息结构。</p>
    </div>
    <div class="mb40">
       <div class="fontsize-20 mb10">基础规范</div> 
       <p class="mb0">1、在iOS和Android的手机APP标签栏一次最多可承载5个标签。多于5个标签的时候，可以展示前4个标签，把剩余的标签以列表的形式收在 “更多”之中；</p>
       <p class="mb0">2、iPad等平板内可直接放置多于5个标签（仍需避免放置太多标签），保证横竖屏的标签个数一致，避免视觉跳跃；</p>
       <p class="mb0">3、在标签上加上红底白字，显示数字或者省略号的小气泡（badge），用以展示与应用相关的信息，如通过气泡提示用户该标签中有新的内容；</p>
       <p class="mb0">4、即使标签当前不可用，也不要把它从标签栏中删除；</p>
       <p class="mb20">5、标签栏不随着设备的横竖屏而改变高度。</p>
    </div>
    <div class="mb40">
       <div class="fontsize-20 mb10">使用场景</div> 
       <div class="example">
          <div class="content" style="overflow:hidden;">
            <div class="content-header">
                <div>场景一：四个标签</div> 
            </div> 
            <div class="content-body pd0">
                <div class="content-show">
                   <div class="content-wrap">
                        <div class="tabs" style="">
                            <ol class="brand-tab">
                                <li class="li4 curr">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">首页</span>
                                </li> 
                                <li class="li4">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">标题</span> 
                                </li>
                                <li class="li4">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">标题</span>
                                </li> 
                                <li class="li4">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">标题</span> 
                                </li>
                            </ol>     
                        </div> 
                   </div> 
                </div> 
                <div class="content-pre">
                     <pre class="example-pre" style="border-top:none;">
                         <code class="hljs html xml">
                            <ol class="brand-tab">
                                 <li class="li4 curr"><div class="tabIcon"></div><span class="tabName">首页</span></li> 
                                 <li class="li4"><div class="tabIcon"></div><span class="tabName">标题</span></li> 
                                 <li class="li4"><div class="tabIcon"></div><span class="tabName">标题</span></li> 
                                 <li class="li4"><div class="tabIcon"></div><span class="tabName">标题</span></li> 
                             </ol>
                         </code>
                     </pre> 
                </div> 
            </div> 
          </div> 
       </div>
       <div class="example">
          <div class="content" style="overflow:hidden;">
            <div class="content-header">
                <div>场景二：五个标签</div> 
            </div> 
            <div class="content-body pd0">
                <div class="content-show">
                   <div class="content-wrap">
                        <div class="tabs" style="">
                            <ol class="brand-tab">
                                <li class="li5 curr">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">首页</span>
                                </li> 
                                <li class="li5">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">标题</span> 
                                </li>
                                <li class="li5">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">标题</span>
                                </li> 
                                <li class="li5">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">标题</span> 
                                </li>
                                <li class="li5">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">标题</span> 
                                </li>
                            </ol>     
                        </div> 
                   </div> 
                </div> 
                <div class="content-pre">
                     <pre class="example-pre" style="border-top:none;">
                         <code class="hljs html xml">
                            <ol class="brand-tab">
                                 <li class="li5 curr"><div class="tabIcon"></div><span class="tabName">首页</span></li> 
                                 <li class="li5"><div class="tabIcon"></div><span class="tabName">标题</span></li> 
                                 <li class="li5"><div class="tabIcon"></div><span class="tabName">标题</span></li> 
                                 <li class="li5"><div class="tabIcon"></div><span class="tabName">标题</span></li> 
                                 <li class="li5"><div class="tabIcon"></div><span class="tabName">标题</span></li>
                             </ol>
                         </code>
                     </pre> 
                </div> 
            </div> 
          </div> 
       </div>
       <div class="example">
          <div class="content" style="overflow:hidden;">
            <div class="content-header">
                <div>场景三：多于五个标签</div> 
            </div> 
            <div class="content-body pd0">
                <div class="content-show">
                   <div class="content-wrap">
                        <div class="tabs" style="">
                            <ol class="brand-tab">
                                <li class="li5 curr">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">首页</span>
                                </li> 
                                <li class="li5">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">标题</span> 
                                </li>
                                <li class="li5">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">标题</span>
                                </li> 
                                <li class="li5">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">标题</span> 
                                </li>
                                <li class="li5 more">
                                    <div class="tabmore">...</div>
                                    <span class="tabName">更多</span> 
                                    <div class="popup">
                                        <div class="chooseTab"><p style="border-bottom:1px solid #ccc;">标题</p></div> 
                                        <div class="chooseTab"><p>标题</p></div>
                                    </div>
                                </li>
                            </ol>     
                        </div> 
                   </div> 
                </div> 
                <div class="content-pre">
                     <pre class="example-pre" style="border-top:none;">
                         <code class="hljs html xml">
                            <ol class="brand-tab">
                                 <li class="li5 curr"><div class="tabIcon"></div><span class="tabName">首页</span></li> 
                                 <li class="li5"><div class="tabIcon"></div><span class="tabName">标题</span></li> 
                                 <li class="li5"><div class="tabIcon"></div><span class="tabName">标题</span></li> 
                                 <li class="li5"><div class="tabIcon"></div><span class="tabName">标题</span></li> 
                                 <li class="li5 more"><div class="tabmore"></div><span class="tabName">更多</span></li>
                             </ol>
                         </code>
                     </pre> 
                </div> 
            </div> 
          </div> 
       </div>
       <div class="example">
          <div class="content" style="overflow:hidden;">
            <div class="content-header">
                <div>场景四：重要操作标签</div> 
            </div> 
            <div class="content-body pd0">
                <div class="content-show">
                   <div class="content-wrap">
                        <div class="tabs" style="">
                            <ol class="brand-tab">
                                <li class="li5 curr">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">首页</span>
                                </li> 
                                <li class="li5">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">标题</span> 
                                </li>
                                <li class="li5 major">
                                    <div class="tabIcon"></div>
                                </li> 
                                <li class="li5">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">标题</span> 
                                </li>
                                <li class="li5">
                                    <div class="tabIcon"></div>
                                    <span class="tabName">标题</span> 
                                </li>
                            </ol>     
                        </div> 
                   </div> 
                </div> 
                <div class="content-pre">
                     <pre class="example-pre" style="border-top:none;">
                         <code class="hljs html xml">
                            <ol class="brand-tab">
                                 <li class="li5 curr"><div class="tabIcon"></div><span class="tabName">首页</span></li> 
                                 <li class="li5"><div class="tabIcon"></div><span class="tabName">标题</span></li> 
                                 <li class="li5 major"><div class="tabIcon"></div><span class="tabName">标题</span></li> 
                                 <li class="li5"><div class="tabIcon"></div><span class="tabName">标题</span></li> 
                                 <li class="li5"><div class="tabIcon"></div><span class="tabName">标题</span></li>
                             </ol>
                         </code>
                     </pre> 
                </div> 
            </div> 
          </div> 
       </div>
    </div>
</div>
<script type="text/javascript">
    $(function(){
        $('.brand-tab .more').on('click',function(){
            $('.popup').show();
        }); 
    });
</script>
