###前端组件化 CSS 框架: bootstrap 和 amaze ui

优化层面`<meta name="renderer" content="webkit">`

1.  bootstrap

  - 概览

  bootstrap 提供了完整的 CSS 及 JS 组件 , 最新版本依赖 jQuery-1.11.2 , 官方文档实现了23

  理论支持所有 jQuery UI 或 Plugin

  浏览器和操作系统支持程度:

  ![Selenium Test Status](https://saucelabs.com/browser-matrix/bootstrap.svg)

  移动端浏览器和操作系统支持:

  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <td></td>
        <th>Chrome</th>
        <th>Firefox</th>
        <th>IE</th>
        <th>Opera</th>
        <th>Safari</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Android</th>
        <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td>
        <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td>
        <td class="text-muted" rowspan="3" style="vertical-align: middle;">N/A</td>
        <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not Supported</td>
        <td class="text-muted">N/A</td>
      </tr>
      <tr>
        <th scope="row">iOS</th>
        <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td>
        <td class="text-muted">N/A</td>
        <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not Supported</td>
        <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td>
      </tr>
      <tr>
        <th scope="row">Mac OS X</th>
        <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td>
        <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td>
        <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td>
        <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td>
      </tr>
      <tr>
        <th scope="row">Windows</th>
        <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td>
        <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td>
        <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td>
        <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td>
        <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not Supported</td>
      </tr>
    </tbody>
  </table>

  对 IE8 与 IE9 的支持程度:

  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th class="col-xs-4">Feature</th>
        <th class="col-xs-4">Internet Explorer 8</th>
        <th class="col-xs-4">Internet Explorer 9</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><code>border-radius</code></th>
        <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not supported</td>
        <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td>
      </tr>
      <tr>
        <th scope="row"><code>box-shadow</code></th>
        <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not supported</td>
        <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported</td>
      </tr>
      <tr>
        <th scope="row"><code>transform</code></th>
        <td class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not supported</td>
        <td class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Supported, with <code>-ms</code> prefix</td>
      </tr>
      <tr>
        <th scope="row"><code>transition</code></th>
        <td colspan="2" class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not supported</td>
      </tr>
      <tr>
        <th scope="row"><code>placeholder</code></th>
        <td colspan="2" class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Not supported</td>
      </tr>
    </tbody>
  </table>

2.  amaze ui
