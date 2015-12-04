<div class="mb40">
    <div class="fontsize-20 mb10">
    饼图 <small>pie</small>
    </div class="fontsize-28">
    <p class="mb20"></p>
</div>

<div class="mb40">
    <div class="fontsize-20 mb10">
    定义 
    </div class="fontsize-28">
    <p class="mb20">
        饼图是将圆形切割成不同的扇形片段，每一片代表一个分类数据或一组数据，每一片的大小则反映其占饼图总面积的百分比或比例。
    </p>
</div>

<div class="mb40">
    <div class="fontsize-20 mb10">
    基础规范
    </div class="fontsize-28">
    <p class="mb20">
    在饼图中，各个构成部分的百分比之和必须是100%。
    <br />
    饼图需要有相关的辅助说明，表述饼图的构成内容及占比。       
    </p>
</div>

<div bx-name="chart.spec.components/list/index"></div>


<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
        </div>
        <div class="content-body" style="padding:18p 40px;">
                <pre class="example-pre"  style="background:white"><code class="hljs html">
                    var data= [
                        ["ie"     , 30],
                        ["chrome" , 35],
                        ["firefox", 20],
                        ["safari" , 10],
                        ["其他"   , 5]
                    ];
                    var options = {}
                    Chartx.pie(#el , data , options);
                </code></pre>
        </div>
    </div>
</div>


<div class="example">
    <div class="content">
        <div class="content-header">
            <div>pie图的配置</div>
        </div>
        <div class="content-body" style="padding:0;">

                <ul data-anchor-id="72xn">
                <li>innerRadius --&gt; 内圆半径，默认为0，即为实心饼图</li>
                <li>animation --&gt; 是否执行进场动画</li>
                <li>dataLabel --&gt; 拼图的外接触角tips配置 <br>
                <ul><li>enabled --&gt; 是否显示</li>
                <li>format --&gt; 格式化模板，比如下面的代码：</li></ul></li>
                </ul>
        </div>
    </div>
</div>



<div class="example">
    <div class="content">
        <div class="content-header">
            <div>pie图的事件</div>
        </div>
        <div class="content-body" style="padding:18px 40px;">

             <table class="table">
                <thead>
                <tr>
                    <th>事件名称</th>   
                    <th>参数</th>   
                    <th>描述</th>   
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>click</td>
                    <td>e.eventInfo.sectorIndex</td>
                    <td>点击扇形区域触发事件</td>
                </tr>
                <tr>
                    <td>focused</td>
                    <td>e.eventInfo.sectorIndex</td>
                    <td>hover到扇形区域触获得焦点发事件</td>
                </tr>
                <tr>
                    <td>unfocused</td>
                    <td>e.eventInfo.sectorIndex</td>
                    <td>mouseout扇形区域市区焦点后触发事件</td>
                </tr>
                </tbody>
            </table>

        </div>
    </div>
</div>
