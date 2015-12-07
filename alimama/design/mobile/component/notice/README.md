<div class="spec-section mb40">
    <div class="mb40">
        <div class="fontsize-20 mb10">定义</div>
        <p class="mb20">公告是指需要引起用户注意，官方告知用户的信息内容。</p>
    </div>
    <div class="mb40">
        <div class="fontsize-20 mb10">使用场景</div> 
        <div class="example demo1">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景一：简要通知，一句话可理解类公告 （可关闭，点击进入详情，返回后视具体业务场景决定是否隐藏）</div> 
                </div> 
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                           <div style="height:20px;background:#4e4e4e;"></div> 
                           <div class="announcement" style="margin-top:50px;">积分将于次日更新<i class="noticefont closeBtn" onClick="alert(1)">&#xe60b;</i></div>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <div class="announcement">积分将于次日更新<i class="noticefont closeBtn">&#xe60b;</i></div>
                             </code>
                         </pre> 
                    </div>
                </div> 
            </div> 
        </div>
        <!--demo1 end-->
        <div class="example demo2">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景二：指示“查看详情”类公告 （点击进入详情，标题最多显示30个字，返回后不隐藏，按运营规定时间下线）</div> 
                </div> 
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                           <div style="height:20px;background:#4e4e4e;"></div> 
                           <div class="announcement" style="margin-top:50px;">积分将于次日更新<i class="noticefont moreBtn">&#xe604;</i></div>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <div class="announcement">积分将于次日更新<i class="noticefont moreBtn">&#xe604;</i></div>
                             </code>
                         </pre> 
                    </div>
                </div> 
            </div> 
        </div>
        <!--demo2-->
        <div class="example demo3">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景三：轻量提示 （限时隐藏：视具体业务场景）</div> 
                </div> 
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                           <div style="height:20px;background:#4e4e4e;"></div> 
                           <div class="announcement" style="margin-top:50px;">积分将于次日更新</div>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <div class="announcement">积分将于次日更新</div>
                             </code>
                         </pre> 
                    </div>
                </div> 
            </div> 
        </div>
        <!--demo3 end-->
        <div class="example demo3">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景四：超长提示 （公告标题过长时，已跑马灯形式，动态展示）</div> 
                </div> 
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                           <div style="height:20px;background:#4e4e4e;"></div> 
                           <div class="announcement" style="margin-top:50px;"><marquee scrollamount=3 font>我是一个超长的公告标题，已跑马灯的形式进行展示，动态导航</marquee></div>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <div class="announcement"><marquee scrollamount=3 font>我是一个超长的公告标题，已跑马灯的形式进行展示，动态导航</marquee></div>
                             </code>
                         </pre> 
                    </div>
                </div> 
            </div> 
        </div>
        <!--demo4-->
    </div>
</div>
<script>
    $(function(){
        $('.demo1 .closeBtn').on('click',function(){
            $(this).parent().hide();
        }); 
    }) 
</script>
