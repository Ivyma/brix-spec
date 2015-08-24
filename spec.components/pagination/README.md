<div class="mb40">
    <div class="fontsize-20">翻页器 <small>Pagination</small></div>
    <div class="color-999 mt4">在界面展示内容分为多页的情况下，翻页器为用户提供快速跳转到不同页面的功能。在后台系统中，当信息条目较多的时候，除了提供默认定义的显示行数外，还可以允许用户自定义每页的行数，以提高用户查看和检索信息的效率和灵活性。</div>
</div>

<div class="usage mb40">
    <div>基本规范</div>
    <ol>
        <li>向用户显示他们在产品的哪一个页面，以及共有多少个页面，并提供跳转至上一页、、下一页的功能 </li>
    </ol>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
            <div class="color-999 mt6 hide">翻页器最基本的元素为：当前页页码、总页码、上一页、下一页的按钮。默认显示第1页时，上一页置灰不可点击；最后一页时，下一页置灰不可点击。 </div>
        </div>
        <div class="content-body">
            <div bx-name="components/pagination" data-total="100" data-cursor="1" data-limit="9" data-simplify="true"></div>
        </div>
        <pre><code class="hljs html">
            <div bx-name="components/pagination" data-total="100" data-cursor="1" data-limit="9" data-simplify="true"></div>
        </code></pre>
    </div>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 列表完整版</div>
            <div class="color-999 mt6">显示当前页页码以及前后共7页的页码、首页页码、尾页页码、上一页、下一页的按钮，以及到任意页跳转输入框和触发按钮；后台系统中，要同时在列表左下角显示当前显示行数和范围、用户设置每页显示行数的输入框。</div>
        </div>
        <div class="content-body">
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
                        <td colspan="6">
                            <div bx-name="components/pagination" data-total="1000" data-cursor="1" data-limit="10" bx-options="{ step: 4 }"></div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 2 - 列表简洁版</div>
            <div class="color-999 mt6">适配较窄的列表宽度时，翻页器显示当前页页码、总页码、上一页、下一页的按钮，同时支持页面的输入跳转。</div>
        </div>
        <div class="content-body">
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
                            <div class="row paginationwrapper">
                                <div class="col-md-12" style="text-align: right;">
                                    <ul class="pagination" style="text-align: right;">
                                        <li class="disabled"><a href="javascript: void(0);" bx-click="moveTo(0)"><span class="brixfont"></span></a></li><!-- Previous -->
                                        <li class="pagination-statistics-simplify"><span>1/12</span></li>
                                        <li class=""><a href="javascript: void(0);" bx-click="moveTo(2)"><span class="brixfont"></span></a></li><!-- Next -->
                                        <li class="pagination-statistics-simplify" style="vertical-align: top;">
                                            <span style="display: inline-block; padding-right: 5px; font-weight: normal;">向第</span>
                                            <input style="width: 36px; float: left; text-align: center;" value="1">
                                            <span style="display: inline-block; padding-left:  5px; font-weight: normal;">页</span>
                                            <button class="btn" style="padding: 6px 9px;">跳转</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- <div bx-name="components/pagination" data-total="100" data-cursor="1" data-limit="9" data-simplify="true"></div>              -->
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 3 - 简介轮播版</div>
            <div class="color-999 mt6">当内容侧重于页面的引导浏览且页数少于7页时，则翻页不以数字来表达，而以图形（如实心圆）来表示。</div>
        </div>
        <div class="content-body">
            <div class="example-slider">
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

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>场景 4 - 前后文章切换</div>
            <div class="color-999 mt6">当用户阅读完一篇文章或消息时，可通过文章底部的上一篇，下一篇进行切换，继续阅读流程。</div>
        </div>
        <div class="content-body">
            <div>
                <p class="flat-text small"></p>
                <p class="flat-text full-width mt10"></p>
                <p class="flat-text full-width mt10"></p>
                <p class="flat-text full-width mt10"></p>
                <p class="flat-text full-width mt10"></p>
                <p class="flat-text full-width mt10"></p>
                <p class="flat-text full-width mt10"></p>
            </div>
            <div class="clearfix" style="padding: 20px;">
                <div class="pull-left"><a href="javascript:;" class="color-gray color-hover-brand">&lt; 上一篇</a></div>
                <div class="pull-right"><a href="javascript:;" class="color-gray color-hover-brand">下一篇 &gt;</a></div>
            </div>
        </div>
    </div>
    <pre><code class="hljs html">
        <div class="clearfix" style="padding: 20px;">
            <div class="pull-left"><a href="javascript:;" class="color-gray color-hover-brand">&lt; 上一篇</a></div>
            <div class="pull-right"><a href="javascript:;" class="color-gray color-hover-brand">下一篇 &gt;</a></div>
        </div>
    </code></pre>
</div>
