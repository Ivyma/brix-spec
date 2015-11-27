# 图表  <small>Charts</small>

阿里妈妈 Chartx，专业的数据可视化解决方案，一个纯 Javascript 的图表库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE6/7/8/9/10/11，chrome，firefox，Safari等），底层依赖自有 Canvas 渲染引擎 Canvax。阿里妈妈 Chartx 目前已经覆盖了阿里妈妈所有产品，以及易传媒，聚划算，菜鸟，共享事业部，数据平台，kimi无线团队等兄弟部门的产品。我们开发了多达12种类的常规图表，和7个从产品的实际需求中诞生的自有原创图表。

#### 资源地址 

```js
DAILY 环境为： http://g-assets.daily.taobao.net/thx/charts/1.9.39/chartx/index[-min].js

CDN 环境为：http://g.tbcdn.cn/thx/charts/1.9.38/chartx/index[-min].js
```

<div bx-name="chart.spec.components/index/index"></div>

#### 简要名词解析

这里列举几个高频使用的名词做给简要的解析

<table class="table">
<thead>
    <tr><th>名词</th><th>解释</th></tr>
  </thead>
  <tbody>
    <tr>
        <td>axis</td>
        <td>直角坐标系中的一个坐标轴，坐标轴可分为类目型、数值型或时间型</td>
    </tr>
    <tr>
        <td>xAxis</td>
        <td>直角坐标系中的横轴，通常并默认为类目型</td>
    </tr>
    <tr>
        <td>yAxis</td>
        <td>直角坐标系中的纵轴，通常并默认为数值型</td>
    </tr>
    <tr>
        <td>zAxis</td>
        <td>直角坐标系中的z轴，通常并默认为数值型，比如在散点图上圆的大小维度</td>
    </tr>
    <tr>
        <td>field</td>
        <td>字段配置，在xAxis,yAxis,zAxis中都必选配置，用来定义该axis从data中取哪列数据</td>
    </tr>
    <tr>
        <td>tip</td>
        <td>图表中的提示框，用来显示更加完整详细的数据</td>
    </tr>
    </tbody>
 </table>