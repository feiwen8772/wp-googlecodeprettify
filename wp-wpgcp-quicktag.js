//Add pre Button
QTags.addButton('ed_wpgcp-js', 'pre-js', WPGcpQTClick);
QTags.addButton('ed_wpgcp-css', 'pre-css', WPGcpQTClick);
QTags.addButton('ed_wpgcp-html', 'pre-html', WPGcpQTClick);
String.prototype.escapeHTML = function () {
    var div = document.createElement('div');
    var text = document.createTextNode(this);
    div.appendChild(text);
    return div.innerHTML;
}

//element, canvas, ed
function WPGcpQTClick(e, myField, ed) {

    var codetag = '<pre class="prettyprint lang-JavaScript linenums:1">\n';
    if (e.value == "pre-js") {
        codetag = '<pre class="prettyprint lang-JavaScript linenums:1">\n';
    } else if (e.value == "pre-css") {
        codetag = '<pre class="prettyprint lang-CSS linenums:1">\n';
    } else if (e.value == "pre-html") {
        codetag = '<pre class="prettyprint lang-HTML linenums:1">\n';
    }
    var t = this, escapedhtml;
    t.tagEnd = '</pre>';
    t.tagStart = codetag;
    //IE support
    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();

        if (sel.text.length > 0) {

            sel.text = t.tagStart + sel.text.escapeHTML() + t.tagEnd;
        }
        else {
            sel.text = t.tagStart + "\n" + t.tagEnd;
            //alert('对不起，请先选中要高亮的代码，在点击次按钮！');
            /* We do not want to just start and open the tag since in this case HTML entities cannot be escaped
             */
        }
        myField.focus();
    }
    //MOZILLA/NETSCAPE support
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        var cursorPos = endPos;
        //var scrollTop = myField.scrollTop;

        if (startPos != endPos) {
            escapedhtml = myField.value.substring(startPos, endPos).escapeHTML();
            myField.value = myField.value.substring(0, startPos)
                + t.tagStart
                + escapedhtml
                + t.tagEnd
                + myField.value.substring(endPos, myField.value.length);
            cursorPos = startPos + t.tagStart.length + escapedhtml.length + t.tagEnd.length;
        }
        else {
            myField.value = myField.value.substring(0, startPos)
                + t.tagStart
                + "\n"
                + t.tagEnd
                + myField.value.substring(endPos, myField.value.length);
            cursorPos = startPos + t.tagStart.length;
            //alert('对不起，请先选中要高亮的代码，在点击次按钮！');
            /* We do not want to just start and open the tag since in this case HTML entities cannot be escaped
             */
        }
        //myField.focus();
        myField.selectionStart = cursorPos;
        myField.selectionEnd = cursorPos;
        myField.focus();
        //myField.scrollTop = scrollTop;

    }
    else {
        alert('对不起，你的浏览器不支持选中文本！');
    }
}
