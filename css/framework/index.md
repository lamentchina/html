###前端组件化 CSS 框架: bootstrap 和 amaze ui

1.	bootstrap

	-	概览

	[bootstrap](http://getbootstrap.com/) 近些年很流行, 可能是目前市场占有最高的 css 框架, 尤其适用于企业建站, 平台搭建等用途. css 基于media queries实现了响应式设计, 并且 bootstrap 对不同内核浏览器和 js , css 都有着良好的支持.

	bootstrap 源码及打包文件目录:

	```
	  bootstrap/
	    ├── css/
	    │   ├── bootst rap.css
	    │   ├── bootstrap.css.map
	    │   ├── bootstrap.min.css
	    │   ├── bootstrap-theme.css
	    │   ├── bootstrap-theme.css.map
	    │   └── bootstrap-theme.min.css
	    ├── js/
	    │   ├── bootstrap.js
	    │   └── bootstrap.min.js
	    └── fonts/
	        ├── glyphicons-halflings-regular.eot
	        ├── glyphicons-halflings-regular.svg
	        ├── glyphicons-halflings-regular.ttf
	        ├── glyphicons-halflings-regular.woff
	        └── glyphicons-halflings-regular.woff2
	```

	-	模块和组件

	提供了完整的 CSS 及 JS 组件 , 最新版本依赖 jQuery-1.11.2 , 官方文档实现了包括 **排版 , 代码, 表格, 表单, 按钮, 图片** 五个主要[ CSS 样式](http://getbootstrap.com/css/). 还实现或兼容了**上百种 font-face 字体图标, 下拉菜单, 按钮组, 文本框定制, 面包屑, 导航, 分页, badge, banner, 警告框, 进度条, 列表组 ** 等近20个[ CSS 组件](http://getbootstrap.com/components/). 比如, 做出如下这样一个标准的 [form](http://docs.javapk.net/jqm/demo/4.html) 还是很容易的:

	![form](http://pic.yupoo.com/lamentchina_v/EoQEgviO/15fN9Z.jpg)

	-	js 支持

	bootstrap JS 模块基于 jQuery , 理论兼容或扩展所有已有 jQuery UI 或 Plugin

	-	css 支持

	CSS 使用 less 做为预编译实现, 现在官方已经提供 SASS 过渡项目. (可惜暂时没有 stylus , 用的话可能要自己实现了), 文后附 CSS 详细 less 目录, 可详见各个模块

	PC浏览器和操作系统支持程度:

	![Selenium Test Status](http://pic.yupoo.com/lamentchina_v/EoHr14zF/zYvlq.jpg)

	移动端浏览器和操作系统支持:

	<table class="table table-bordered table-striped"> <thead> <tr> <td></td> <th>Chrome</th> <th>Firefox</th> <th>IE</th> <th>Opera</th> <th>Safari</th> </tr> </thead> <tbody> <tr> <th>Android</th> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-muted" rowspan="3" style="vertical-align: middle;">N/A</td> <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not Supported</td> <td class="text-muted">N/A</td> </tr> <tr> <th scope="row">iOS</th> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-muted">N/A</td> <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not Supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> </tr> <tr> <th scope="row">Mac OS X</th> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> </tr> <tr> <th scope="row">Windows</th> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not Supported</td> </tr> </tbody> </table>

	对 IE8 与 IE9 的支持程度:

	<table class="table table-bordered table-striped"> <thead> <tr> <th class="col-xs-4">Feature</th> <th class="col-xs-4">Internet Explorer 8</th> <th class="col-xs-4">Internet Explorer 9</th> </tr> </thead> <tbody> <tr> <th scope="row"><code>border-radius</code></th> <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> </tr> <tr> <th scope="row"><code>box-shadow</code></th> <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td> </tr> <tr> <th scope="row"><code>transform</code></th> <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not supported</td> <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported, with <code>-ms</code> prefix</td> </tr> <tr> <th scope="row"><code>transition</code></th> <td colspan="2" class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not supported</td> </tr> <tr> <th scope="row"><code>placeholder</code></th> <td colspan="2" class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not supported</td> </tr> </tbody> </table>

	**通过上述, 可以看到 bootstrap 能够啃下 IE8 这个硬骨头, 已经是极限了. 只能对更低版本 IE 抱歉或通过第三方 hack 包实现了.**

2.	amaze ui

	-	amaze ui 是去年北京云适配公司开源的一个新式html5框架. 以移动优先为理念，从小屏逐步扩展到大屏，最终实现所有屏幕适配，适应移动互联潮流。

	-	组件丰富，模块化:

		Amaze UI 含近 20 个 CSS 组件、10 个 JS 组件，更有 17 款包含近 60 个主题的 Web 组件，可快速构建体验优秀的跨屏页面。

	-	兼容性及可用性

		amaze ui 最近刚刚发布了 2.0 正式版, 版本更新迭代较快.

3.	优劣:

	-	两款框架都可以方便的适配移动端, 但代码组织过分冗余, 建议仅在 PC 端使用. 移动端另行方案, 如 jQuery mobile 等.

	-	amaze ui 着手以移动优先, 现版本已经抛弃了 IE8 的支持. 而且设计规范与 bootstrap 相比还有差距. 贵在 amaze ui 在开发过程中, 吸收了一些较好的 css framework , 如 foundation, pure 等, 而且 css 代码组件与中文本地化较好, 可以借鉴. 我也没有使用过 amaze ui , 对它在 js 组织上存在一些未知因素.

	-	bootstrap 压缩文件97.2k, 开启gzip后21.9k左右, js 压缩文件(不含插件) 27.2k, gzip后8.8k , PC 上完全可接受范围

	-	amaze ui 开发依赖 gulp 构建工具, bootstrap 较为自由. 但从开发, 部署及前后端分离的角度看, 建议使用前端构建工具一站式开发.

4.	参考资料:

	[1] bootstrap github : [https://github.com/twbs/bootstrap](https://github.com/twbs/bootstrap)

	[2] bootstrap 中文网 : [http://www.bootcss.com](http://www.bootcss.com)

	[3] bootstrap css tree

	```
	less
	    ├── alerts.less
	    ├── badges.less
	    ├── bootstrap.less
	    ├── breadcrumbs.less
	    ├── button-groups.less
	    ├── buttons.less
	    ├── carousel.less
	    ├── close.less
	    ├── code.less
	    ├── component-animations.less
	    ├── dropdowns.less
	    ├── forms.less
	    ├── glyphicons.less
	    ├── grid.less
	    ├── input-groups.less
	    ├── jumbotron.less
	    ├── labels.less
	    ├── list-group.less
	    ├── media.less
	    ├── mixins
	    │   ├── alerts.less
	    │   ├── background-variant.less
	    │   ├── border-radius.less
	    │   ├── buttons.less
	    │   ├── center-block.less
	    │   ├── clearfix.less
	    │   ├── forms.less
	    │   ├── gradients.less
	    │   ├── grid-framework.less
	    │   ├── grid.less
	    │   ├── hide-text.less
	    │   ├── image.less
	    │   ├── labels.less
	    │   ├── list-group.less
	    │   ├── nav-divider.less
	    │   ├── nav-vertical-align.less
	    │   ├── opacity.less
	    │   ├── pagination.less
	    │   ├── panels.less
	    │   ├── progress-bar.less
	    │   ├── reset-filter.less
	    │   ├── resize.less
	    │   ├── responsive-visibility.less
	    │   ├── size.less
	    │   ├── tab-focus.less
	    │   ├── table-row.less
	    │   ├── text-emphasis.less
	    │   ├── text-overflow.less
	    │   └── vendor-prefixes.less
	    ├── mixins.less
	    ├── modals.less
	    ├── navbar.less
	    ├── navs.less
	    ├── normalize.less
	    ├── pager.less
	    ├── pagination.less
	    ├── panels.less
	    ├── popovers.less
	    ├── print.less
	    ├── progress-bars.less
	    ├── responsive-embed.less
	    ├── responsive-utilities.less
	    ├── scaffolding.less
	    ├── tables.less
	    ├── theme.less
	    ├── thumbnails.less
	    ├── tooltip.less
	    ├── type.less
	    ├── utilities.less
	    ├── variables.less
	    └── wells.less
	```

	[4] amaze ui : [https://github.com/allmobilize/amazeui](https://github.com/allmobilize/amazeui)
