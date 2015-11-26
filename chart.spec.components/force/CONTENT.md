
创建折线图代码 ，<a href="./demo/line/index.html" target="_blank">demo</a> 

 
```js
Chartx.line(#el , data , options);
```

#### 折线图数据

```js
var data= [
    ["xfield","uv" ,"pv","click"],
    [ 1      , 101 , 20 , 33    ],
    [ 2      , 67  , 51 , 26    ],
    [ 8      , 99  , 83 , 51    ]
];
```

#### 折线图配置

```js
var options = {
    xAxis : {}, //x轴组件配置
    yAxis : {}, //y轴组件配置
    back  : {}, //背景组件配置
    anchor: {}, //瞄准器组件配置，可选，不需要瞄准器可以不做配置
    tips  : {}, //tips组件配置
    graphs: {}  //折线图绘图配置
}
```
 options配置，从上面可以看出，一个图表的options，由一系列的组件配置xAxis,yAxis等，和自身的绘图配置组成。比如下面，组件配置部分会有标明。**注：（后续的文档里只会罗列自身绘图配置，组件配置不再说明，因为组件可以适用任何图表）**

 
 + [xAxis（x轴组件配置）](#xaxis)
 + [yAxis（y轴组件配置）](#yaxis)
 + [back（背景组件配置）](#back)
 + [tips（tips组件配置）](#tips)
 + [anchor（十字瞄准组件器配置）](#anchor)
 + [markPoint（标记点组件配置）](#markPoint)
 + [markLine（标记线组件配置）](#markLine)
 + graphs
     - biaxial --> 是否显示双Y轴（只适用yAxis配置了两个指标的情况）
     - line --> 折线的配置
       * enabled --> 是否显示
       * lineWidth --> 线条大小，默认为2
       * strokeStyle --> 可以是一个颜色值，也可以是一个颜色值的数组，也可以是一个自定义函数，[<a href="#color">颜色值的规则</a>]
       * smooth --> 是否显示平滑曲线效果的折线 默认未true
     - node --> 线上的圆点配置
       * enabled --> 是否显示
       * corner  --> 是否再拐角的时候才出现圆点
       * r --> 圆点的半径，默认未2
       * fillStyle --> 默认为白色#ffffff，和line.strokeStyle一样，也可以是值，数组，和自定义函数[<a href="#color">颜色值的规则</a>]
       * strokeStyle --> 默认和line.strokeStyle一致，和同样遵循[<a href="#color">颜色值的规则</a>]
       * lineWidth --> 圆点border大小，默认未2
     - fill --> 填满折线到x轴之间的填充样式配置
       * enabled --> 是否显示填充色，默认为true
       * fillStyle --> 默认和line.strokeStyle一致，遵循[<a href="#color">颜色值的规则</a>]
       * alpha --> 填充色的透明度，如果不需要填充色的折线图可以把该配置设置为0


<span style="margin-top:50px;" id="color">颜色值的配置规则</span>
<table style="margin-left:0;" class="table">
    <thead>
    	<tr><th style="width:100px;">类型</th><th>描述</th></tr>
    </thead>
    <tbody>
	    <tr><td>字符串</td><td>返回该值本身</td></tr>
	    <tr><td>数组</td><td>会从该数组中根据自身的索引获取对应的数据</td></tr>
	    <tr><td>自定义函数</td><td>获取该函数的返回值，该函数的参数为一个{iGroup: , iNode: }对象，其中iGroup变是第几条线的索引，iNode则是x方向第几个节点的索引，适用于配置线上面的圆点。</td></tr>
    </tbody>
</table>


#### 折线图事件

请再then promise 中给chart实例添加事件侦听。

```js
Chartx.line(#el , data , options).then(function( chart ){
    chart.on("click mouseover mousemove mouseout" , function( e ){
        if( e.type == "click" ){
            ... do something    
        }
    });
});
```

mobile端事件侦听目前已经全部对接了hammer.js的大部分手势，可以添加tap(点击)， panstart(手势准备移动) ，panmove(手势拖动中)， panend(手势移动结束)。全部手势可以前往[hammer.js](http://hammerjs.github.io/)参考。

##### PC事件  <a target="_blank" href="./demo/line/index_event.html">demo</a>

* click  --> 点击事件
* mouseover --> 进入graphs区域触发
* mousemove --> 再graphs区域移动时触发
* mouseout  --> 离开graphs区域触发

##### Mobile事件 <a target="_blank" href="./demo/line/index_touch.html">demo</a>

* tap --> 手势点击graphs区域触发
* panstart --> 手势点击graphs区域，然后开始移动时触发
* panmove --> 手势在graphs区域移动中触发
* panend --> 手势的移动结束时触发

