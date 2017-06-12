/**
 * plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2015 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*global tinymce:true */

tinymce.PluginManager.add('wpgcp', function (editor, url) {
    var isArray = tinymce.util.Tools.isArray;
    var $ = window.jQuery;
    function escapeHtml(text) {
        return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "'").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function showDialog() {
        var win = editor.windowManager.open({
            title: '嵌入代码',
            width: 500,
            height: 440,

            html: ['<form name="wpgcp" action="#" style="padding: 20px">',
                '    <!--<h3>选择语言</h3>-->',
                '    <table border="0" cellpadding="4" cellspacing="0">',
                '        <tr>',
                '            <td nowrap="nowrap"><label for="wpgcp_main">选择语言</label></td>',
                '            <td><select id="wpgcp_lang" name="wpgcp_main"  style="width:300px;border: 1px solid' +
                ' #E1E1E1">',
                '                    <option value="JavaScript" selected>JavaScript</option>',
                '                    <option value="ECMAScript6">ECMAScript 6</option>',
                '                    <option value="CommandLine">CommandLine</option>',
                '                    <option value="jQuery">jQuery</option>',
                '                    <option value="CSS">CSS</option>',
                '                    <option value="Sass">Sass</option>',
                '                    <option value="HTML">HTML</option>',
                '                    <option value="package.json">package.json</option>',
                '                </select></td>',
                '        </tr>',
                '    </table>',
                '    <h3>插入代码：</h3>',
                '    <div>',
                '        <textarea name="" style="border: 1px solid #E1E1E1;height:300px; width:440px;" id="wpgcp_code"></textarea>',
                '    </div>',
                '    <table border="0" cellpadding="4" cellspacing="0">',
                '        <tr>',
                '            <td nowrap="nowrap" valign="top"><label for="wpgcp_linenumber">开始行</label>',
                '            </td>',
                '            <td><input type="text" name="linenumber" id="wpgcp_linenumber" value="1" size="3"/></td>',
                '        </tr>',
                '        ',
                '    </table>',
                '</form>'].join(""),
            buttons: [{
                text: ' 插入代码 ',
                subtype: 'primary',
                style:'width:88px',
                onclick: function () {
                    insertContents()
                }
            },
                {
                    text: 'Close',
                    onclick: 'close'
                }]

        });

        function insertContents() {
            var $win=$(win.$el);
            var tagtext;
            var langname = $win.find('#wpgcp_lang').val();
            var linenumber = $win.find('#wpgcp_linenumber').val();

            var html = escapeHtml($win.find('#wpgcp_code').val());
            tagtext = '<pre class="prettyprint lang-' + langname + ' linenums:' + linenumber + '" >' + html + '</pre>';
            editor.insertContent(tagtext);
            win.close();
        }
    }

    editor.addCommand('wpgcp', showDialog);

    editor.addButton('wpgcp', {
        title: 'google-code-prettify',
        cmd: 'wpgcp',
        image: url + '/crayon_tinymce.png'
    });

    return {};
});