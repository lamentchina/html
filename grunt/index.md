#grunt 我常用的插件及配置

> 勿以善小而不为

---

_ 这周基本天天在外面跑面试, 简历上虽然留了 blog 和 github , 但极少聊技术, 考官问起时, 自己都不好意思. 勿以善小而不为, 以后尽量保持1月2篇, 对近期自己也是个总结. 这篇介绍一下我常用的 grunt 插件 _

##### load-grunt-tasks 替代 grunt.loadNpmTasks('xx') , 有了这个可以不用写一堆的 grunt.loadNpmTasks('xxx') , 添加任务只需写 require('load-grunt-tasks')(grunt) 即可

##### grunt-contrib-connect 静态文件服务器, 本身集成了 livereload 功能

##### grunt-contrib-jshint 检查语法错误

##### grunt-contrib-watch 监视文件的改变, 然后执行指定任务, 这里用来刷新 grunt serve 打开的页面

##### time-grunt 用来显示每一个任务所花的时间和百分比

##### grunt-contrib-concat 合并同类文件，它不仅可以合并JavaScript文件，还可以合并CSS文件

##### grunt-contrib-uglify 压缩代码

##### grunt-contrib-stylus grunt 下编译 stylus

##### grunt-autoprefixer css 预编译自动 hack 兼容不同内核浏览器

##### grunt-contrib-clean 删除文件或目录
