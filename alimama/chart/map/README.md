<div class="mb40">
    <div class="fontsize-20 mb10">
    地图 <small>map</small>
    </div class="fontsize-28">
    <p class="mb20"></p>
</div>

<div class="mb40">
    <div class="fontsize-20 mb10">
    定义 
    </div class="fontsize-28">
    <p class="mb20">
        地图图表是以特定颜色绘制的大陆、国家或地区的地图，用来展示地理背景的业务数据，区域的颜色与地图上相关地点的特定指标数值相对应。
    </p>
</div>

<div class="mb40">
    <div class="fontsize-20 mb10">
    基础规范
    </div class="fontsize-28">
    <p class="mb20">
        基本上宏观分析展现各省市业务数据的时候，使用地图图表。        
    </p>
</div>

<div bx-name="alimama/chart/list/index"></div>




<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
        </div>
        <div class="content-body" style="padding:18p 40px;">
                <pre class="example-pre"  style="background:white"><code class="hljs html">
                    var data = [
                        [ "area"   , "click" , "color"],
                        [ "广东省" , 111     , "#3871BF"],
                        [ "浙江省" , 100     , "#3871BF"]
                    ];
                    var options = {}
                    Chartx.map(#el , data , options);
                </code></pre>
        </div>
    </div>
</div>


<div class="example">
    <div class="content">
        <div class="content-header">
            <div>地图配置</div>
        </div>
        <div class="content-body" style="padding:0;">
<ul data-anchor-id="72xn">
<li><p>area </p>

<ul><li>strokeStyle --&gt; path区域边框颜色，默认为"white"</li>
<li>lineWidth  --&gt; path区域的lineWidth大小，默认为1</li>
<li>linkage --&gt; 是否开启省市联动，目前只有mapName为“china”的时候才有效</li>
<li>text <br>
<ul><li>fillStyle --&gt; 区域名字文本颜色，默认为"#000"</li>
<li>enabled --&gt; 是否显示区域名字文本</li></ul></li>
<li><p>fillStyle --&gt; 单个区域填充色，该配置可以是一个颜色值，也可以是一个函数，如果是函数的话，其参数如下：</p>

<ul><li>area --&gt; 单个区域的对象，包括了{id, name , path,}等属性。</li>
<li>data --&gt; 假如该区域在data中存在，就代表该行的data数据，比如用上面的数据来渲染中国地图的时候，在绘制"广东省"区域的时候，其fillStyle函数的参数中的data，就是，并且数据已经被结合title序列化成了一个object：</li></ul></li>
<li><p>dataIndex --&gt; 和data一样，只是dataIndex返回的是该行，在整个data中的行的索引，那么”广东省“的dataIndex就是0（不包含title行）</p></li></ul></li>
</ul>
        </div>
    </div>
</div>