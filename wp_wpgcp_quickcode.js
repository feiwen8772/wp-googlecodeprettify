//Add pre Button
QTags.addButton('ed_wpgcp-js', 'pre-js', WPSyntaxQTClick);
QTags.addButton('ed_wpgcp-css', 'pre-css', WPSyntaxQTClick);
QTags.addButton('ed_wpgcp-html', 'pre-html', WPSyntaxQTClick);
String.prototype.escapeHTML = function () {
    var div = document.createElement('div');
    var text = document.createTextNode(this);
    div.appendChild(text);
    return div.innerHTML;
};

//element, canvas, ed
function WPSyntaxQTClick(e, myField, ed) {

    var codetag = '<pre class="prettyprint lang-js linenums:1">\n';
    if (e.value == "pre-js") {
        codetag = '<pre class="prettyprint lang-js linenums:1">\n';
    } else if (e.value == "pre-css") {
        codetag = '<pre class="prettyprint lang-js linenums:1">\n';
    } else if (e.value == "pre-html") {
        codetag = '<pre class="prettyprint lang-js linenums:1">\n';
    }
    var t = this, escapedhtml;
    t.tagEnd = '</pre>';
    //IE support
    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
        if (sel.text.length > 0) {
            t.tagStart = codetag;
            sel.text = t.tagStart + sel.text.escapeHTML() + t.tagEnd;
        }
        else {
            alert('Sorry, in order to properly escape HTML entities you have to write the text first, select it and then press this button.');
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
        var scrollTop = myField.scrollTop;

        if (startPos != endPos) {
            t.tagStart = codetag;
            escapedhtml = myField.value.substring(startPos, endPos).escapeHTML();
            myField.value = myField.value.substring(0, startPos)
                + t.tagStart
                + escapedhtml
                + t.tagEnd
                + myField.value.substring(endPos, myField.value.length);
            cursorPos = startPos + t.tagStart.length + escapedhtml.length + t.tagEnd.length;
        }
        else {
            alert('Sorry, in order to properly escape HTML entities you have to write the text first, select it and then press this button.');
            /* We do not want to just start and open the tag since in this case HTML entities cannot be escaped
             */
        }
        myField.focus();
        myField.selectionStart = cursorPos;
        myField.selectionEnd = cursorPos;
        myField.scrollTop = scrollTop;
    }
    else {
        alert('Sorry, your browser is currently not supported');
    }
}
