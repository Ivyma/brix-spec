# 雷达图 radar

## 定义 

- 雷达图可以对两组变量进行多种项目的对比，反映数据相对中心点和其它数据点的变化情况；常用于多项指标的全面分析，使图表阅读者能够一目了然地各项指标变动情况和好坏趋向。

## 基础规范

- 场景：可用于评分系统、综合能力评估等等。

<div bx-name="chart.spec.components/list/index"></div>

#### 雷达图的配置

 - graphs 
     + fillStyle 
     + alpha
     + lineWidth 
    
#### 雷达图的事件

<table class='table'>
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
        <td>e.eventInfo.field(该分组对应的字段)</td>
        <td>点击雷达网触发</td>
    </tr>
    </tbody>
</table>