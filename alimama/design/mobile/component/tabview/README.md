<div bx-name="alimama/design/mobile/component/tabview/tabview"></div>
<div class="spec-section mb40">
    <div class="mb40">
        <div class="fontsize-20 mb10">定义</div>
        <p class="mb20">分段控件让用户在一屏内就可以查看到不同分类的内容，而不需要切换到其他屏幕。</p>
    </div>
    <div class="mb40">
        <div class="fontsize-20 mb10">基础规范</div> 
        <p class="mb0">1、保持每个分段的尺寸一致，支持文字或图片，但不同时使用；</p>
        <p class="mb0">2、每个分段控制尺寸，易于点击，减少误操作；</p>
        <p class="mb0">3、分段控件的个数最多不超过4个。</p>
    </div>
    <div class="mb40">
        <div class="fontsize-20 mb10">使用场景</div> 
        <div class="example demo1">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景一：全页式tab</div> 
                </div> 
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                            <div class="demo_row">
                                <ul>
                                    <li class="select radiusL">选项01</li> 
                                    <li class="radiusR">选项02</li>
                                </ul> 
                            </div>
                            <div class="demo_row">
                                <ul>
                                    <li class="select radiusL">选项01</li> 
                                    <li class="noborder">选项02</li>
                                    <li class="radiusR">选项03</li> 
                                </ul> 
                            </div>
                            <div class="demo_row">
                                <ul>
                                    <li class="select radiusL">选项01</li> 
                                    <li >选项02</li>
                                    <li class="noborder">选项03</li>
                                    <li class="radiusR">选项04</li> 
                                </ul> 
                            </div>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <ul>
                                    <li class="select radiusL">选项01</li> 
                                    <li class="radiusR">选项02</li>
                                </ul>
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
                    <div>场景二：楼层tab</div> 
                </div> 
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                              <ul class="floorTab">
                                    <li class="select ">选项01</li> 
                                    <li class="">选项02</li>
                              </ul> 
                              <ul class="floorTab">
                                    <li class="select ">选项01</li> 
                                    <li class="">选项02</li>
                                    <li >选项03</li>
                              </ul>
                              <ul class="floorTab">
                                    <li class="select ">选项01</li> 
                                    <li class="">选项02</li>
                                    <li >选项03</li>
                                    <li >选项04</li>
                              </ul>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                 <ul class="floorTab">
                                        <li class="select ">选项01</li> 
                                        <li class="">选项02</li>
                                  </ul>
                             </code>
                         </pre> 
                    </div>
                </div> 
            </div> 
        </div>
        <!--demo2 end-->
    </div>
</div>
<script>
    $(function(){
        $('.demo_row li').on('click',function(){
          $(this).parent().find('li').removeClass('select'); 
          $(this).addClass('select');
        });
        $('.floorTab li').on('click',function(){
            $(this).parent().find('li').removeClass('select');
            $(this).addClass('select');
        });
    })
</script>

