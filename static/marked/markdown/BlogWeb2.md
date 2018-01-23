##  1、行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？                                                                                 ```
首先：CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，如div的display默认值为“block”，则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。

  （1）行内元素有：a span img input select strong textarea（强调的语气）
  （2）块级元素有：div form table ul ol li dl dt dd h1 h2 h3 h4…p

  （3）常见的空元素：
  	<br> <hr> <img> <input> <link> <meta>
  	鲜为人知的是：
  	<area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>

  不同浏览器（版本）      
```

## 2、介绍一下你对浏览器内核的理解？
```
 主要分成两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎。
      渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

      JS引擎则：解析和执行javascript来实现网页的动态效果。

  最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。
```

## 3、常见的浏览器内核有哪些？
```
浏览器的内核是分为两个部分的，一是渲染引擎，另一个是JS引擎。现在JS引擎比较独立，内核更加倾向于说渲染引擎。

1、Trident内核：代表作品是IE，因IE捆绑在Windows中，所以占有极高的份额，又称为IE内核或MSHTML，此内核只能用于Windows平台，且不是开源的。
代表作品还有腾讯、Maxthon（遨游）、360浏览器等。但由于市场份额比较大，曾经出现脱离了W3C标准的时候，同时IE版本比较多，存在很多的兼容性问题。
2、Gecko内核：代表作品是Firefox，即火狐浏览器。因火狐是最多的用户，故常被称为firefox内核它是开源的，最大优势是跨平台，在Microsoft Windows、Linux、MacOs X等主要操作系统中使用。
  Mozilla是网景公司在第一次浏览器大战败给微软之后创建的。有兴趣的同学可以了解一下浏览器大战
3、Webkit内核：代表作品是Safari、曾经的Chrome，是开源的项目。
4、Presto内核：代表作品是Opera，Presto是由Opera Software开发的浏览器排版引擎，它是世界公认最快的渲染速度的引擎。在13年之后，Opera宣布加入谷歌阵营，弃用了Presto 
5、Blink内核：由Google和Opera Software开发的浏览器排版引擎，2013年4月发布。现在Chrome内核是Blink。
```
