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

<div bx-name="chart.spec.components/list/index"></div>

创建地图代码：

```js
Chartx.map(#el , data , options)
```

#### 地图数据格式

var data = [
    [ "area"   , "click" , "color"],
    [ "广东省" , 111     , "#3871BF"],
    [ "浙江省" , 100     , "#3871BF"]
];

#### 地图配置

```js
var options = {
    mapName : "china" ,//地图类型，默认为china中国地图，world则为世界地图
    areaField : "area" , //areaField字段,默认获取第一个字段，比如上面的data则就是默认area
    area : {}, //地图的单块区域配置样式，比如中国地图是由n个省地图块拼接而成的，area就是中国地图上面单个path比如湖南省地图的样式配置。
    tips : {}
}
```

 - area 
   + strokeStyle --> path区域边框颜色，默认为"white"
   + lineWidth  --> path区域的lineWidth大小，默认为1
   + linkage --> 是否开启省市联动，目前只有mapName为“china”的时候才有效
   + text
     - fillStyle --> 区域名字文本颜色，默认为"#000"
     - enabled --> 是否显示区域名字文本
   + fillStyle --> 单个区域填充色，该配置可以是一个颜色值，也可以是一个函数，如果是函数的话，其参数如下：
     - area --> 单个区域的对象，包括了{id, name , path,}等属性。
     - data --> 假如该区域在data中存在，就代表该行的data数据，比如用上面的数据来渲染中国地图的时候，在绘制"广东省"区域的时候，其fillStyle函数的参数中的data，就是<img src="./assets/charts/mapdataitem.png" style="width:200px;" />，并且数据已经被结合title序列化成了一个object：

         ```js
         data : {
             area  : "广东省",
             click : 111,
             color : "#3871BF"
         }
         ```

     - dataIndex --> 和data一样，只是dataIndex返回的是该行，在整个data中的行的索引，那么”广东省“的dataIndex就是0（不包含title行）

#### 地图事件

 - areaclick ：点击单块地域触发

 ```js
 map.on("areaclick" , function(e){
     //e.eventInfo 有两个属性
     //e.eventInfo.area 点击的目标area地域对象
     //e.eventInfo.data 该area对应再data中的数据（如果有的话）
 });
 ```