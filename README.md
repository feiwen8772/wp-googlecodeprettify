WordPress代码高亮插件 WP-googlecodeprettify
=====
一个基于 Google Code Prettify 实现的WordPress代码高亮插件，在TinyMCE编辑器中提供了一个插入代码的按钮。在文本编辑器中，加入了pre-js,pre-css,pre-html 3个快捷按钮;

更新信息
------
2016年10月27日 更新：
- 在代码区上面增加了语言类型名称，名称值读取的是 `lang-`后面的值。你可以在文本编辑器中设置为`lang-CSS`，`lang-HTML`，`lang-JavaScript`，`lang-ES6`，`lang-ES5`，`lang-ECMAScript6`，`lang-js`,等。
- 增加了Sass 和 ECMAScript 6语法高亮。

插件信息
------
Author: 愚人码头

Author URL:  [http://www.css88.com/](http://www.css88.com/)

查看[代码高亮效果](http://www.css88.com/archives/4728)

安装说明
-----
### 下载""

目前还没有发布到WordPress官网，请在此页面[点击下载ZIP](https://github.com/feiwen8772/wp-googlecodeprettify/archive/master.zip)

### 安装启用

1. 下载的安装包，解压，传到插件目录，`/wp-content/plugins/`;
2. 在WordPress的后台管理页面中启用`WP-googlecodeprettify`; 

使用说明
-----
### TinyMCE富文本编辑器下使用
插件会在TinyMCE编辑器的工具栏中自动插入一个插入代码的按钮（名称：Google Code Prettify）。
如图：

![](https://github.com/feiwen8772/wp-googlecodeprettify/blob/master/doc/DCF4C61F-B524-4F71-8CE9-18E13BE2FEAB.png?raw=true)

点击这个按钮，弹出插入代码的对话框，如图：

![](https://github.com/feiwen8772/wp-googlecodeprettify/blob/master/doc/3CDAF47C-2C34-4101-A309-3E1D3D7DF907.png?raw=true)

**选择语言类型**，**插入代码**，点击 **确定插入** ，就可以了。

### 文本模式编辑器中快捷标签的使用
文本编辑器中，加入了`pre-js`,`pre-css`,`pre-html` 3个快捷按钮,如图：

![](https://github.com/feiwen8772/wp-googlecodeprettify/blob/master/doc/CEB25F25-57D9-4353-9EEB-E90E341B049C.png?raw=true)

1. 选中文本编辑器中的代码，点击相应的按钮：会使用`<pre class="prettyprint lang-js linenums:1">`（按`pre-js`按钮）和`</pre>`将你选中的代码包裹起来；
2. 不选中文本编辑器中的代码，直接点击相应的按钮：会在光标位置插入`<pre class="prettyprint lang-js linenums:1">`（按`pre-js`按钮）和`</pre>`；重新定位光标在这里两者中的行。

### 其他
本插件是基于Google Code Prettify实现的代码高亮。插件默认提供了`html`，`css`，`js`三种语言高亮的快捷按钮，如果你要高亮其他语言，可以在文本模式编辑器下通过`lang-*`CSS类指定的 **语言文件扩展名** 来手工修改语言类型。例如，下面是高亮`js`代码：

`<pre class="prettyprint lang-js linenums:1">`

修改为高亮`php`语言：

`<pre class="prettyprint lang-php linenums:1">`

在默认情况下支持的文件扩展名包括：`bsh`, `c`, `cc`, `cpp`, `cs`, `csh`, `cyc`, `cv`, `htm`, `html`,`java`, `js`, `m`, `mxml`, `perl`, `pl`, `pm`, `py`, `rb`, `sh`,`xhtml`, `xml`, `xsl`

 也就是说，Google Code Prettify支持高亮的语言：`C`, `Java`, `Python`, `Bash`, `HTML`, `XML`, `Javascript`, `Makefiles`, `Ruby`, `PHP`, `Awk`, `Perl`, `Basic`, `Clojure`, `CSS`, `Dart`, `Erlang`, `Go`, `Haskell`, `Lisp`, `Scheme`, `LLVM`, `Lua`, `Matlab`, `Pascal`, `R`, `Scala`, `SQL`, `LaTeX`等语言。

Google Code Prettify的官方说明和使用说明：[https://github.com/google/code-prettify](https://github.com/google/code-prettify)

主题风格
-----
本插件默认提供的主题非常漂亮，你可以根据你自己的需要修改主题风格。只要修改插件目录下 `/js/prettify.css` CSS文件就可以了，修改完成后上传覆盖就好了。

Google Code Prettify 官方提供了5套主题：[http://google-code-prettify.googlecode.com/svn/trunk/styles/index.html](http://google-code-prettify.googlecode.com/svn/trunk/styles/index.html)

还有GitHub几套更加漂亮的主题：[http://jmblog.github.io/color-themes-for-google-code-prettify/](http://jmblog.github.io/color-themes-for-google-code-prettify/)

你可以拷贝过来直接使用。

修改本插件
-----
本插件默认只提供了`html`，`css`，`js`三种语言高亮,这对于高亮其他语言很不方便。如果本插件将全部语言放出来，那么选择项太多，查找也不方便。

所以，你可以根据自身的需求修改本插件支持其他语言的高亮：

1. TinyMCE富文本编辑器下，你可以修改 `window.php` 文件中ID为 `wpgcp_lang` 的 `select` 控件,修改、增加、删除相应的 `option` 即可；
2. 文本模式编辑器下，修改对应的"QuickTags"按钮就可以了，在`wp-wpgcp-quicktag.js`下，怎么修改？你自己看代码吧。

改进完善
-----
本插件还有很多不尽如人意地方，就是上面所说的那样，其他语言高亮还需要用户自己手工修改。
由于本人PHP水平太差，对WordPress的插件机制又不熟悉，所以改进计划一直搁置。如果你有兴趣，欢迎你帮大家做个插件选项页面，主要是可以设置常用语言，等等。欢迎pull或微博上[@愚人码头](http://weibo.com/148246293) ，感激万分。

其他说明
-----
1. 本插件对Google Code Prettify 源代码做了个小修改，插件目录下 `/js/prettify.js` 文件最后加了一条初始化prettyPrint的语句。
2. Google Code Prettify的官方说明和使用说明：[http://google-code-prettify.googlecode.com/svn/trunk/README.html](http://google-code-prettify.googlecode.com/svn/trunk/README.html)