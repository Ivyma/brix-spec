<div class="mb40">
    <div class="fontsize-20 mb10">
    折线图 <small>line</small>
    </div class="fontsize-28">
    <p class="mb20"></p>
</div>

<div class="mb40">
    <div class="fontsize-20 mb10">
    定义 
    </div class="fontsize-28">
    <p class="mb20">
      折线图是用线段将各数据点连接起来而组成的图形。常用来分析数据随时间的变化趋势，也可用来分析多组数据随时间变化的相互作用和相互影响。
    </p>
</div>

<div class="mb40">
    <div class="fontsize-20 mb10">
    基础规范
    </div class="fontsize-28">
    <p class="mb20">
    在折线图中，类别数据沿水平轴均匀分布，所有值数据沿垂直轴均匀分布。
    <br />
    折线图可以清晰的反映数据是递增还是递减、增减的速率、增减的规律（周期性、螺旋性等）、峰值等特征。
    </p>
</div>

<div bx-name="chart.spec.components/list/index"></div>


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
                    Chartx.line(#el , data , options);
                </code></pre>
        </div>
    </div>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>折线图配置</div>
        </div>
        <div class="content-body" style="padding:0;">
                <pre class="example-pre" style="background:white"><code class="hljs html">
 var options = {
    xAxis : {}, //x轴组件配置
    yAxis : {}, //y轴组件配置
    back  : {}, //背景组件配置
    anchor: {}, //瞄准器组件配置，可选，不需要瞄准器可以不做配置
    tips  : {}, //tips组件配置
    graphs: {}  //折线图绘图配置
 };

                </code></pre>
<ul data-anchor-id="foqg">
<li>graphs <br>
<ul><li>biaxial --&gt; 是否显示双Y轴（只适用yAxis配置了两个指标的情况）</li>
<li>line --&gt; 折线的配置 <br>
<ul><li>enabled --&gt; 是否显示</li>
<li>lineWidth --&gt; 线条大小，默认为2</li>
<li>strokeStyle --&gt; 可以是一个颜色值，也可以是一个颜色值的数组，也可以是一个自定义函数，[<a href="#color">颜色值的规则</a>]</li>
<li>smooth --&gt; 是否显示平滑曲线效果的折线 默认未true</li></ul></li>
<li>node --&gt; 线上的圆点配置 <br>
<ul><li>enabled --&gt; 是否显示</li>
<li>corner  --&gt; 是否再拐角的时候才出现圆点</li>
<li>r --&gt; 圆点的半径，默认未2</li>
<li>fillStyle --&gt; 默认为白色#ffffff，和line.strokeStyle一样，也可以是值，数组，和自定义函数[<a href="#color">颜色值的规则</a>]</li>
<li>strokeStyle --&gt; 默认和line.strokeStyle一致，和同样遵循[<a href="#color">颜色值的规则</a>]</li>
<li>lineWidth --&gt; 圆点border大小，默认未2</li></ul></li>
<li>fill --&gt; 填满折线到x轴之间的填充样式配置 <br>
<ul><li>enabled --&gt; 是否显示填充色，默认为true</li>
<li>fillStyle --&gt; 默认和line.strokeStyle一致，遵循[<a href="#color">颜色值的规则</a>]</li>
<li>alpha --&gt; 填充色的透明度，如果不需要填充色的折线图可以把该配置设置为0</li></ul></li></ul></li>
</ul>
        </div>
    </div>
</div>



<div class="example">
    <div class="content">
        <div class="content-header">
            <div>折线图事件</div>
        </div>
        <div class="content-body" style="padding:0;">
                <pre class="example-pre"  style="background:white"><code class="hljs html">
Chartx.line(#el , data , options).then(function( chart ){
    chart.on("click mouseover mousemove mouseout" , function( e ){
        if( e.type == "click" ){
            ... do something    
        }
    });
});
                </code></pre>
<div id="wmd-preview" style="padding:18px 40px;" class="wmd-preview" data-medium-element="true" style="height: auto; left: 0px;"><div class="md-section-divider"></div><p data-anchor-id="8jhk">mobile端事件侦听目前已经全部对接了hammer.js的大部分手势，可以添加tap(点击)， panstart(手势准备移动) ，panmove(手势拖动中)， panend(手势移动结束)。全部手势可以前往<a href="http://hammerjs.github.io/" target="_blank">hammer.js</a>参考。</p><div class="md-section-divider"></div><h5 data-anchor-id="y0gl" id="pc事件-demo">PC事件  demo</h5><ul data-anchor-id="mtbf">
<li>click  --&gt; 点击事件</li>
<li>mouseover --&gt; 进入graphs区域触发</li>
<li>mousemove --&gt; 再graphs区域移动时触发</li>
<li>mouseout  --&gt; 离开graphs区域触发</li>
</ul><div class="md-section-divider"></div><h5 data-anchor-id="xzyp" id="mobile事件-demo">Mobile事件 demo</h5><ul data-anchor-id="0d46">
<li>tap --&gt; 手势点击graphs区域触发</li>
<li>panstart --&gt; 手势点击graphs区域，然后开始移动时触发</li>
<li>panmove --&gt; 手势在graphs区域移动中触发</li>
<li>panend --&gt; 手势的移动结束时触发</li>
</ul></div>
        </div>
    </div>
</div>








