###前端组件化 CSS 框架: bootstrap 和 amaze ui

优化层面`<meta name="renderer" content="webkit">`

1.	bootstrap

	-	概览

	[bootstrap](http://getbootstrap.com/) 近些年很流行, 可能是目前市场占有最高的 css 框架, 尤其适用于企业那站, 平台建站等用途. 主要 css 基于media queries实现了响应式设计, 并且 bootstrap 对不同内核浏览器和 js , css 都有着良好的支持.

	-	模块和组件

	提供了完整的 CSS 及 JS 组件 , 最新版本依赖 jQuery-1.11.2 , 官方文档实现了包括 **排版 , 代码, 表格, 表单, 按钮, 图片** 五个主要 CSS 样式. 还实现或兼容了上百种 **font-face 字体图标, **

	-	js 支持

	, 23 理论支持所有 jQuery UI 或 Plugin

	-	css 支持

	CSS 使用 less 做为预编译实现, 现在官方已经实现 SASS 过渡. (可惜暂时没有 stylus , 用的话可能要自己实现了)

	PC浏览器和操作系统支持程度:

	![Selenium Test Status](http://pic.yupoo.com/lamentchina_v/EoHr14zF/zYvlq.jpg)

	移动端浏览器和操作系统支持:

	<table class="table table-bordered table-striped"> <thead> <tr> <td></td> <th>Chrome</th> <th>Firefox</th> <th>IE</th> <th>Opera</th> <th>Safari</th> </tr> </thead> <tbody> <tr> <th>Android</th> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-muted" rowspan="3" style="vertical-align: middle;">N/A</td> <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not Supported</td> <td class="text-muted">N/A</td> </tr> <tr> <th scope="row">iOS</th> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-muted">N/A</td> <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not Supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> </tr> <tr> <th scope="row">Mac OS X</th> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> </tr> <tr> <th scope="row">Windows</th> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not Supported</td> </tr> </tbody> </table>

	对 IE8 与 IE9 的支持程度:

	<table class="table table-bordered table-striped"> <thead> <tr> <th class="col-xs-4">Feature</th> <th class="col-xs-4">Internet Explorer 8</th> <th class="col-xs-4">Internet Explorer 9</th> </tr> </thead> <tbody> <tr> <th scope="row"><code>border-radius</code></th> <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> </tr> <tr> <th scope="row"><code>box-shadow</code></th> <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> </tr> <tr> <th scope="row"><code>transform</code></th> <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported, with <code>-ms</code> prefix</td> </tr> <tr> <th scope="row"><code>transition</code></th> <td colspan="2" class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not supported</td> </tr> <tr> <th scope="row"><code>placeholder</code></th> <td colspan="2" class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not supported</td> </tr> </tbody> </table>

2.	amaze ui
