/* global define */
define(function() {
    return (function(){/*
<div class="spec-section mb40">
    <div class="mb40">
        <div class="fontsize-20 mb10">字体 <small>Font</small></div>
        <p class="mb20">不同的终端平台预装有不同的字体，为保证用户阅读时的统一感受，避免混乱，我们设定一套字体规则，确保文字在不同平台上以合适的方式展现。</p>
    </div>  
    <div class="mb40">
        <div class="fontsize-14 mb10">中文字体</div>
        <p class="mb0">iOS优先使用「苹方体（San Francisco）」；如果没有则使用默认的[华文黑体（STHeiti）]。</p>
        <p class="mb0">Android优先使用[Roboto]；如果没有则使用[Droid Sans Fallback]。 </p>
        <p class="mb0">H5使用Cube中的Type.CSS，根据系统不同优先使用相应的字体。</p>
    </div>
    <div class="mb40">
        <div class="fontsize-14 mb10">西文&数字 字体</div>
        <p class="mb0">iOS优先使用[Helvetica Neue]。</p>
        <p class="mb0">Android优先使用[Roboto]；如果没有则使用[Droid Sans]。</p>
        <p class="mb0">H5使用Cube中的Type.CSS，优先使用[Tahoma]。</p>
     </div> 
    <p class="mb20">注：Type.CSS的font-family为：[Helvetica neue]，[tahoma]，[hiragino sans gb]，[stheiti]，[wenquanyi micro hei]</p>
     <div>
     <pre>
        <code class="hljs html xml">
         body {
             font-size: 12px;
             font-family: "Microsoft YaHei", "微软雅黑", STXihei, "华文细黑", Georgia, "Times New Roman", Arial, sans-serif;
             background-color: #fff;
             color: #333;
            -webkit-font-smoothing: antialiased;
         }
         </code>
     </pre>        
     </div>    
     <div class="mb40">
         <div class="fontsize-20 mb10">字号<small>Font Size</small></div>
         <p class="mb0">根据文本内容的不同，我们定义不同的字体大小，让内容更易于区分，更方便阅读。</p>
         <p class="mb0">字体的基本大小为12px至20px，以2px递增；20px至40px，以8px递增。中文字符一般不做加粗效果。</p>
         <% var _sizes = [{size:36,txt:'巨型03'}, {size:28,txt:'巨型02'}, {size:20,txt:'巨型01'}, {size:18,txt:'标题/已选'}, {size:16,txt:'正文/列表'}, {size:14,txt:'名称02/表述'}, {size:12,txt:'名称01/说明'},{size:10,txt:'辅助说明'}] %> 
         <div class="mt20">
            <table style="width: 100%; table-layout: fixed; overflow: hidden;">
                    <tbody>
                        <% _.each(_sizes, function(item, index){ %>
                        <tr>
                            <td style="width: 60px;  height: 40px;padding-right:30px;">
                                <%= item.size %>px
                            </td>
                            <td style="width:100px;">
                                <%= item.txt %>
                            </td> 
                            <td><span style="font-size: <%= item.size %>px;">让我们荡起双浆 ABCabc 123</span></td>
                        </tr>
                        <% }) %>
                        
                    </tbody>
             </table>
        </div>
        <p class="mt40">注：此处使用的尺寸单位是在@1x下的大小，在其他像素密度的屏幕下，需要做相应的倍数换算。</p>
     </div>
    
    <div class="mb40">
        <div class="fontsize-20 mb10">对比度 <small>Contrast</small></div>
        <p class="mb0">对比色主要针对阅读性文字来制定。</p>
        <p class="mb0">基于文字内容的重要级别不同，以及所在的环境背景，定义两组三种不同级别的颜色。</p>
    </div>
    <div class="mb40">
       <div class="fontsize-20 mb10">数字 <small>Number</small></div> 
       <p class="mb20">为了让数字字段更加清晰，易于阅读，我们对数字进行了专门的定义。</p>
       <div class="mb20">
           <table style="width:360px;table-layout:fixed;overflow:hidden;">
               <tbody>
                   <tr>
                       <th style="font-size:12px;font-weight:normal;">金额</th>
                       <th style="font-size:12px;font-weight:normal;">比率</th>
                       <th style="font-size:12px;font-weight:normal;">成交笔数</th>
                   </tr>
                   <tr>
                       <td style="font-size:18px;font-weight:bold;"><span style="font-family:'MicrosoftYaHei', 'Microsoft YaHei';font-weight:400;font-size:12px;">￥</span>99,865<span style="font-family:'Tahoma-Bold', 'Tahoma Negreta', 'Tahoma';font-weight:700;font-size:12px;">.36</span></td>
                       <td style="font-size:18px;font-weight:bold;">52<span style="font-family:'Tahoma-Bold', 'Tahoma Negreta', 'Tahoma';font-weight:700;font-size:12px;">.36%</span></td>
                       <td style="font-size:18px;font-weight:bold;">5,232</td>
                   </tr>
               </tbody>
           </table>
       </div> 
       <p class="mb20">数字的正数位：按照字号规则大于等于12px，使用千位分隔符，可加粗；数字的小数及小数点：在价格与百分比情况下，统一显示两位，大小为正数位的一半同时要大于等于12px，可加粗；单位、货币符、百分号统一为不加粗，大小同为正数位的一半同时要大于等于12px。</p>
       <% var _recommend = [28, 20, 18, 16] %>
    <% var __size = [28, 20, 18, 16, 16, 14, 12] %> 
       <div>
         <table style="width: 100%; table-layout: fixed; overflow: hidden;">
                    <tbody>
                        <% _.each(__size, function(item, index){ %>
                        <tr>
                            <td style="width: 60px;  height: 40px;padding-right:30px;">
                                <%= item %>px
                            </td>
                                <td style="width:100px;">
                                  <% if(_.indexOf(_recommend, item) !== -1 && index != 4) { %>
                                    bold
                                  <% } %>
                                </td>
                            
                            <td><span style="font-size: <%= item %>px;font-weight:<% if(_.indexOf(_recommend, item) !== -1) { %>bold<% } %>"><span style="font-family:'MicrosoftYaHei', 'Microsoft YaHei';font-weight:400;font-size:12px;">￥</span>99,865<span style="font-family:'Tahoma-Bold', 'Tahoma Negreta', 'Tahoma';font-weight:400;font-size:12px;">.36</span></span></td>
                        </tr>
                        <% }) %>
                        
                    </tbody>
             </table>   
       </div>
    </div>
</div>



    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})