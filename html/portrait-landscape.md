1.	css 判断横竖屏

	-	css 内部判断

```
   @media (orientation: portrait) { } 横屏  
   @media (orientation: landscape) { }竖屏  
```

-	css 引用判断

```
<link rel="stylesheet" media="all and (orientation:portrait)" href="portrait.css">横屏  
 <link rel="stylesheet" media="all and (orientation:landscape)" href="landscape.css">竖屏  
```

1.	js 判断横竖屏

	-	判断手机横竖屏

```
  function hengshuping(){  
  if(window.orientation==180||window.orientation==0){  
      console.log("竖屏状态！")
  }  
  if(window.orientation==90||window.orientation==-90){  
      console.log("横屏状态！")
  }  
  }  
  window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
  //移动端的浏览器一般都支持window.orientation这个参数，通过这个参数可以判断出手机是处在横屏还是竖屏状态。  
  从而根据实际需求而执行相应的程序。通过添加监听事件onorientationchange，进行执行就可以了。  
```
