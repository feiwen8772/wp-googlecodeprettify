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
            width: 800,
            height: 540,

            html: ['<form name="wpgcp" action="#" style="padding: 20px">',
                '    <h3>插入代码：</h3>',
                '    <div><textarea name="" style="border: 1px solid #E1E1E1;height:300px; width:740px;" id="wpgcp_code"></textarea>',
                '    </div>',
                '    <table border="0" cellpadding="4" cellspacing="0"  style="margin-top:15px;">',
                '        <tbody>',
                '        <tr>',
                '            <td nowrap="nowrap" valign="top" style="padding:6px 0">选择语言</td>',
                '            <td  style="padding:6px 0"><label for="wpgcp_main1"><input type="radio" id="wpgcp_main1" name="wpgcp_lang" checked',
                '                                                value="JavaScript"/>',
                '                JavaScript',
                '            </label>',
                '                <label for="wpgcp_main2"><input type="radio" id="wpgcp_main2" name="wpgcp_lang"',
                '                                                value="CSS"/>',
                '                    CSS',
                '                </label>',
                '                <label for="wpgcp_main3"><input type="radio" id="wpgcp_main3" name="wpgcp_lang"',
                '                                                value="HTML"/>',
                '                    HTML',
                '                </label>',
                '                <label for="wpgcp_main4"><input type="radio" id="wpgcp_main4" name="wpgcp_lang"',
                '                                                value="CommandLine"/>',
                '                    CommandLine',
                '                </label>',
                '                <label for="wpgcp_main5"><input type="radio" id="wpgcp_main5" name="wpgcp_lang"',
                '                                                value="Sass"/>',
                '                    Sass',
                '                </label>',
                '                <label for="wpgcp_main6"><input type="radio" id="wpgcp_main6" name="wpgcp_lang"',
                '                                                value="jQuery"/>',
                '                    jQuery',
                '                </label>',
                '                <label for="wpgcp_main7"><input type="radio" id="wpgcp_main7" name="wpgcp_lang"',
                '                                                value="ECMAScript 6"/>',
                '                    ECMAScript 6',
                '                </label></td>',
                '        </tr>',
                '        <tr>',
                '            <td nowrap="nowrap" valign="top" style="padding:6px 0"><label for="wpgcp_filename">文件名</label></td>',
                '            <td style="padding:6px 0"><input type="text" name="filename" id="wpgcp_filename" value=""></td>',
                '        </tr>',
                '        <tr>',
                '            <td nowrap="nowrap" valign="top" style="padding:6px 0"><label for="wpgcp_linenumber">开始行</label></td>',
                '            <td style="padding:6px 0"><input type="text" name="linenumber" id="wpgcp_linenumber" value="1" size="3"> 开始行号</td>',
                '        </tr>',
                '        <tr>',
                '            <td nowrap="nowrap" valign="top" style="padding:6px 0"><label for="wpgcp_importlines">重点行</label></td>',
                '            <td style="padding:6px 0"><input type="text" name="importlines" id="wpgcp_importlines" value=""> 从1开始索引，多号以英文逗号 "," 隔开</td>',
                '        </tr>',
                '        </tbody>',
                '    </table>',
                '</form>'].join(""),
            buttons: [{
                text: ' 插入代码 ',
                subtype: 'primary',
                style: 'width:88px',
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
            var $win = $(win.$el);
            var tagtext;
            var langname = $win.find('input[name=wpgcp_lang]:checked').val();

            var linenumber = $.trim($win.find('#wpgcp_linenumber').val());
            var filename = $.trim($win.find('#wpgcp_filename').val());
            var importlines = $.trim($win.find('#wpgcp_importlines').val());
            var html = escapeHtml($win.find('#wpgcp_code').val());
            tagtext = '<pre class="prettyprint lang-' + langname + ' linenums:' + linenumber;
            if (!!filename) {
                tagtext += ' filename-' + filename;
            }
            if (!!importlines) {
                tagtext += ' importlines:' + importlines;
            }
            tagtext += '" >' + html + '</pre>';
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