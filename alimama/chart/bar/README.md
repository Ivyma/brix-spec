<div class="mb40">
    <div class="fontsize-20 mb10">
    柱状图 <small>bar</small>
    </div class="fontsize-28">
    <p class="mb20"></p>
</div>

<div class="mb40">
    <div class="fontsize-20 mb10">
    定义 
    </div class="fontsize-28">
    <p class="mb20">
        直方图是由一系列高度不等的纵向条纹或线段排列组成的图形。常用来表示数据的分布情况。
    </p>
</div>

<div class="mb40">
    <div class="fontsize-20 mb10">
    基础规范
    </div class="fontsize-28">
    <p class="mb20">
 在直方图中，类别数据一般情况下沿水平轴均匀分布，所有值数据沿垂直轴均匀分布。
 <br />
 直方图可设关键点数据，同时鼠标在移动到相关选中区域会浮出详细数据。
    </p>
</div>


<div bx-name="alimama/chart/list/index"></div>


<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
        </div>
        <div class="content-body" style="padding:0;">
                <pre class="example-pre"  style="background:white"><code class="hljs html">
                    var data= [
                        ["xfield","uv" ,"pv","click"],
                        [ 1      , 101 , 20 , 33    ],
                        [ 2      , 67  , 51 , 26    ],
                        [ 8      , 99  , 83 , 51    ]
                    ];
                    var options = {}
                    Chartx.bar(#el , data , options);
                </code></pre>
        </div>
    </div>
</div>


<div class="example">
    <div class="content">
        <div class="content-header">
            <div>柱状图配置</div>
        </div>
        <div class="content-body" style="padding:0;">
                <pre class="example-pre"  style="background:white"><code class="hljs html">
var options = {
    ...组件配置
    graphs: {}  //柱状图绘图配置
}
                </code></pre>

<ul data-anchor-id="72xn">
<li>type --&gt; 可选，如果填写horizontal，则会渲染横向柱状图，默认不配则为纵向柱状图 <br>
<ul><li>graphs </li>
<li>bar --&gt; 单条bar柱状图形的样式 <br>
<ul><li>width --&gt; 单条bar宽度，默认12</li>
<li>fillStyle --&gt; 单条bar的填充色</li>
<li>radius --&gt; bar的圆角</li></ul></li>
<li>text --&gt; bar上面的文本 <br>
<ul><li>enabled --&gt; 是否显示</li>
<li>fillStyle --&gt; 目前不支持配置，值为"#999"</li>
<li>fontSize  --&gt; 描述文本大小</li>
<li>format --&gt; {function}把原始文本转换座位最终显示文本的转换函数。比如原始数据都是[0.1 , 0.2 , 0.3]，但是实际的显示需要是10%,20%,30%这样的。</li></ul></li></ul></li>
</ul>
        </div>
    </div>
</div>


<div class="example">
    <div class="content">
        <div class="content-header">
            <div>柱状图事件</div>
        </div>
        <div class="content-body" style="padding:0;">
                <pre class="example-pre"  style="background:white"><code class="hljs html">
                     bar.on("click" , function(e){
                         
                         //e.eventInfo.iGroup: 分组索引
                         //e.eventInfo.iLay:   堆叠索引，-1代表未选择bar
                         //e.eventInfo.iNode:  单个分组中，bar索引 -1代表未选择bar 

                         //nodesInfoList存放着该事件覆盖的对应节点集合。
                         //比如点击bar的分组区域，该nodesInfoList包含了该分组的所有bar矩形.
                         //如果点击了具体的某个bar矩形，nodesInfoList则仅包含对应的这个bar矩形
                         _.each( e.eventInfo.nodesInfoList , function( info ){
                             console.log( info.field+":"+info.value );
                         } );
                     });
                </code></pre>
        </div>
    </div>
</div>