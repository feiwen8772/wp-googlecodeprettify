function init() {
    tinyMCEPopup.resizeToInnerSize();
}

function getCheckedValue(radioObj) {
    if (!radioObj) {
        return "";
    }
    var radioLength = radioObj.length;

    if (radioLength == undefined)
        if (radioObj.checked) {
            return radioObj.value;
        }
        else {
            return "";
        }

    for (var i = 0; i < radioLength; i++) {
        if (radioObj[i].checked) {
            return radioObj[i].value;
        }
    }
    return "";
}
function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "'").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function insertwpgcpcode() {

    var tagtext;
    var langname_ddb = document.getElementById('wpgcp_lang');
    var langname = langname_ddb.value;
    var linenumber = document.getElementById('wpgcp_linenumber').value;
    //var inst = tinyMCE.getInstanceById('content');
    /*var inst = tinyMCE.getInstanceById('content');

            var html = inst.selection.getContent();*/
        //var html = window.tinyMCE.activeEditor.selection.getContent();

    var html = escapeHtml(document.getElementById('wpgcp_code').value);
    //tagtextOld = '<pre class="prettyprint lang-'+ langname + '>' + html + '</pre>';
    /*if (linenumber) {
        tagtext = '<pre class="prettyprint lang-'+ langname + ' linenums:' + linenumber + '" >' + html + '</pre>';
    } else{

    }*/
    tagtext = '<pre class="prettyprint lang-'+ langname + ' linenums:' + linenumber + '" >' + html + '</pre>';
    window.tinymce.activeEditor.insertContent(tagtext);
    /*window.tinyMCE.execInstanceCommand('content', 'mceInsertContent', false, tagtext + '>' + html + '</pre>');*/
    tinyMCEPopup.editor.execCommand('mceRepaint');
    tinyMCEPopup.close();
    return;
}
