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

创建饼图代码：

```js
Chartx.pie( #el , data , options );
```

#### pie数据格式：

```js
var data= [
    ["ie"     , 30],
    ["chrome" , 35],
    ["firefox", 20],
    ["safari" , 10],
    ["其他"   , 5]
];
```

TODO：目前pie图的数据格式是唯一不同没有titles行的数据格式，因为再pie里面是默认了第一列座位key字段，后续会统一过来。

#### pie图的配置

- innerRadius --> 内圆半径，默认为0，即为实心饼图
- animation --> 是否执行进场动画
- dataLabel --> 拼图的外接触角tips配置
  + enabled --> 是否显示
  + format --> 格式化模板，比如下面的代码：
 
      ```js
      //周边tip
      dataLabel: {
          enabled: true,
          format: '{point.name} : {point.percentage}'
      }
      ```
    会得到这样的效果<img src="./assets/charts/pielabeltip.png" style="width:200px;" />  


#### pie图方法

<table class="table">
    <thead>
    <tr>
        <th>方法名称</th>   
        <th>参数</th>   
        <th>描述</th>   
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>focusAt(@index)</td>
        <td>@index</td>
        <td>设置第@index位置的扇形为选中状态</td>
    </tr>
    <tr>
        <td>unfocusAt(@index)</td>
        <td>@index</td>
        <td>和focusAt刚好相反，取消第@index位置扇形的选中状态</td>
    </tr>
    </tbody>
</table>


#### pie图的事件

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