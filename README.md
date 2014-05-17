WordPress代码高亮插件 WP-googlecodeprettify
=====
一个基于 Google Code Prettify 实现的WordPress代码高亮插件，在TinyMCE编辑器中提供了一个插入代码的按钮。在文本编辑器中，加入了pre-js,pre-css,pre-html 3个快捷按钮;

插件信息
------
> Plugin Name:WP-code-prettify
> Plugin URI: http://www.css88.com/archives/4804
> Description: 一个基于 Google Code Prettify 实现的WordPress代码高亮插件，在TinyMCE编辑器中提供了一个插入代码的按钮。在文本编辑器中，加入了pre-js,pre-css,pre-html 3个快捷按钮;
> Version: 0.1 
> Author: 愚人码头
> Author URL:  [http://www.css88.com/](http://www.css88.com/)

安装说明
-----
### 下载

### 安装启用

使用说明
-----
### TinyMCE富文本编辑器下使用
插件会在TinyMCE编辑器的工具栏中自动插入一个插入代码的按钮（名称：Google Code Prettify）。
如图：

![](https://github.com/feiwen8772/wp-googlecodeprettify/blob/master/doc/DCF4C61F-B524-4F71-8CE9-18E13BE2FEAB.png?raw=true)

点击这个按钮，弹出插入代码的对话框，如图：
![](https://github.com/feiwen8772/wp-googlecodeprettify/blob/master/doc/3CDAF47C-2C34-4101-A309-3E1D3D7DF907.png?raw=true)

**选择语言类型**，**插入代码**，点击 **确定插入** ，就可以了。

### 文本编辑器中快捷标签的使用
文本编辑器中，加入了`pre-js`,`pre-css`,`pre-html` 3个快捷按钮,如图：

![](https://github.com/feiwen8772/wp-googlecodeprettify/blob/master/doc/CEB25F25-57D9-4353-9EEB-E90E341B049C.png?raw=true)

1. 选中文本编辑器中的代码，点击相应的按钮：会使用`<pre class="prettyprint lang-js linenums:1">`（按`pre-js`按钮）和`</pre>`将你选中的代码包裹起来；
2. 不选中文本编辑器中的代码，直接点击相应的按钮：会在光标位置插入`<pre class="prettyprint lang-js linenums:1">`（按`pre-js`按钮）和`</pre>`；重新定位光标在这里两者中的行。