<div class="spec-section mb40">
   <div class="mb40">
        <div class="fontsize-20 mb10">定义</div>
        <p class="mb20">表单主要用于用户数据的收集，包括输入框、选择器、开关等。</p>
    </div>
    <div class="mb40">
        <div class="fontsize-20 mb10">基础规范</div> 
        <p class="mb0">1、针对不同的组件，填写不同的引导性暗文提示，点击时触发不同的系统组件（如日历、键盘、滚动选择器）；</p>
        <p class="mb0">2、触发选择器后，需要将默认的值显示在对应的表单组件中，并随用户的滚动而变换不同的选项；</p>
        <p class="mb0">3、优先使用系统自带的系统组件，满足用户的使用习惯。</p>
    </div> 
    <div class="mb40">
        <div class="fontsize-20 mb10">使用场景</div> 
        <div class="example demo1">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景一：输入框</div> 
                </div> 
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="demo_content">
                            <div class="phone_demo">
                                <div class="inputCol">
                                    <span class="colt">标签名</span> 
                                    <input type="text" placeholder="输入内容的暗提示"/>
                                </div> 
                            </div> 
                       </div> 
                       <div class="demo_content">
                            <div class="phone_demo">
                                <div class="inputCol">
                                    <span class="colIcon">标签名</span> 
                                    <input type="text" placeholder="输入内容的暗提示"/>
                                </div> 
                            </div> 
                       </div>
                       <div class="demo_content">
                            <div class="phone_demo">
                                <div class="inputCol">
                                    <input type="text" placeholder="输入内容的暗提示"/>
                                </div> 
                            </div> 
                       </div>
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <div class="inputCol">
                                    <span class="colt">标签名</span> 
                                    <input type="text" placeholder="输入内容的暗提示"/>
                                </div>
                             </code>
                         </pre> 
                     </div>
                 </div> 
             </div> 
      </div>
        <!--demo1end-->
        <div class="example demo1">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景二：开关</div> 
                </div> 
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="demo_content">
                            <div class="phone_demo">
                                <div class="ToggleCol">
                                    <span class="colt">音效提示</span> 
                                    <div class="toggleBtn off"><i ></i></div>
                                </div> 
                            </div> 
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <div class="ToggleCol">
                                    <span class="colt">音效提示</span> 
                                    <div class="toggleBtn off"><i ></i></div>
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
                    <div>场景三：文本框</div> 
                </div> 
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="demo_content" style="height:268px;">
                            <div class="phone_demo" style="height:268px;">
                                 <textarea placeholder="输入的暗文提示"></textarea>
                            </div> 
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                  <textarea placeholder="输入的暗文提示"></textarea>
                             </code>
                         </pre> 
                     </div>
                 </div> 
             </div> 
      </div>
      <!--demo3-->
</div>
<script>
    $('.inputCol input').on('focus',function(){
       $(this).parent().addClass('active'); 
    })
    $('.inputCol input').on('blur',function(){
       $(this).parent().removeClass('active'); 
    })
    $('.toggleBtn').on('click',function(){
        if($(this).hasClass('off')){
            $(this).removeClass('off').addClass('on'); 
        }else if($(this).hasClass('on')){
            $(this).removeClass('on').addClass('off');
       } 
    });
</script>
