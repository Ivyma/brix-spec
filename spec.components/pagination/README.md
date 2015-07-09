# 翻页器 <small>Pagination</small>

在界面展示内容分为多页的情况下，翻页器为用户提供快速跳转到不同页面的功能。在后台系统中，当信息条目较多的时候，除了提供默认定义的显示行数外，还可以允许用户自定义每页的行数，以提高用户查看和检索信息的效率和灵活性。

<div class="bs-example">
    <div class="content">
        <h3>基础用法</h3>
        <p>翻页器最基本的元素为：当前页页码、总页码、上一页、下一页的按钮。默认显示第1页时，上一页置灰不可点击；最后一页时，下一页置灰不可点击。 </p>
        <hr>
        <div bx-name="components/pagination" data-total="100" data-cursor="1" data-limit="9" data-simplify="true"></div>
    </div>
</div>

<div class="bs-example">
    <div class="content">
        <h3>场景 1 - 列表完整版</h3>
        <p>显示当前页页码以及前后共7页的页码、首页页码、尾页页码、上一页、下一页的按钮，以及到任意页跳转输入框和触发按钮；后台系统中，要同时在列表左下角显示当前显示行数和范围、用户设置每页显示行数的输入框。</p>
        <hr>
        <table class="table table-hover table-pagination">
            <thead>
                <tr><th>字段1</th><th>字段2</th><th>字段3</th><th>字段4</th><th>字段5</th><th>字段6</th></tr>
            </thead>
            <tbody>
                <tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                <tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5">
                        <div bx-name="components/pagination" data-total="100" data-cursor="1" data-limit="9"></div>             
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</div>

<div class="bs-example">
    <div class="content">
        <h3>场景 2 - 列表简洁版</h3>
        <p>适配较窄的列表宽度时，翻页器显示当前页页码、总页码、上一页、下一页的按钮，同时支持页面的输入跳转。</p>
        <hr>
        <table class="table table-hover table-pagination table-pagination">
            <thead>
                <tr><th>字段1</th><th>字段2</th><th>字段3</th><th>字段4</th></tr>
            </thead>
            <tbody>
                <tr><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                <tr><td>-</td><td>-</td><td>-</td><td>-</td></tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5">
                        <div bx-name="components/pagination" data-total="100" data-cursor="1" data-limit="9" data-simplify="true"></div>             
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</div>

<div class="bs-example">
    <div class="content">
        <h3>场景 3 - 简介轮播版</h3>
        <p>当内容侧重于页面的引导浏览且页数少于7页时，则翻页不以数字来表达，而以图形（如实心圆）来表示。</p>
        <hr>
        <div>
            <div class="bs-example-slider">
                <div class="items">
                    <div class="item"></div>
                </div>
                <ul class="navigator"><li class="active"></li><li></li><li></li><li></li></ul>
                <div class="arrows">
                    <div class="left"><span class="brixfont">&#xe62f;</span></div>
                    <div class="right"><span class="brixfont">&#xe630;</span></div>
                </div>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
    </code></pre>
</div>

<div class="bs-example">
    <div class="content">
        <h3>场景 4 - 前后文章切换</h3>
        <p>当用户阅读完一篇文章或消息时，可通过文章底部的上一篇，下一篇进行切换，继续阅读流程。</p>
        <hr>
        <div>
            <div style="padding: 15px;">
                <p class="flat-text small"></p>
                <p class="flat-text full-width"></p>
                <p class="flat-text full-width"></p>
                <p class="flat-text full-width"></p>
            </div>
            <div class="clearfix" style="padding: 15px;">
                <div class="pull-left"><a href="javascript:;">< 上一篇</a></div>
                <div class="pull-right"><a href="javascript:;">上一篇 ></a></div>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
        <div class="clearfix" style="padding: 15px;">
            <div class="pull-left"><a href="javascript:;">< 上一篇</a></div>
            <div class="pull-right"><a href="javascript:;">上一篇 ></a></div>
        </div>
    </code></pre>
</div>
