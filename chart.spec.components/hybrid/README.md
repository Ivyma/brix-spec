# 混合图表 hybrid

## 定义

- 混合图旨在突出具有可比数据的两个图表之间差异性的一种图表。通过类似值之间的变化，可以揭示数据集之间的差异。

## 基础规范

- 多种类型图表的混合显示，可用来查看不同的维度。比如柱折混合图（柱状图和折线图的混合图表）

<div bx-name="chart.spec.components/list/index"></div>

  - type --> "bar_line" 所有的混合图表都采用配置type为“charType1_chartType2”的格式
  - yAxis --> 
    + bar --> bar的yAxis配置
    + line --> line的yAxis配置

  ...其他的配置都沿用bar和line的现有配置不变