<?php
$wpconfig = realpath("../../../wp-config.php");
if (!file_exists($wpconfig)) {
    echo "Could not found wp-config.php. Error in path :\n\n" . $wpconfig;
    die;
}
require_once($wpconfig);
require_once(ABSPATH . '/wp-admin/admin.php');
global $wpdb;
?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>WP-Syntax</title>
    <!-- 	<meta http-equiv="Content-Type" content="<?php // bloginfo('html_type'); ?>; charset=<?php //echo get_option('blog_charset'); ?>" /> -->
    <script language="javascript" type="text/javascript"
            src="<?php echo get_option('siteurl') ?>/wp-includes/js/tinymce/tiny_mce_popup.js"></script>
    <script language="javascript" type="text/javascript"
            src="<?php echo get_option('siteurl') ?>/wp-includes/js/tinymce/utils/form_utils.js"></script>
    <script language="javascript" type="text/javascript"
            src="<?php echo get_option('siteurl') ?>/wp-content/plugins/wp-googlecodeprettify/tinymce.js"></script>
    <base target="_self"/>
</head>
<body id="link" onload="tinyMCEPopup.executeOnLoad('init();');document.body.style.display='';" style="display: none">
<!-- <form onsubmit="insertLink();return false;" action="#"> -->
<form name="wpgcp" action="#">
    <!--<h3>选择语言</h3>-->
    <table border="0" cellpadding="4" cellspacing="0">
        <tr>
            <td nowrap="nowrap"><label for="wpgcp_main"><?php _e("选择语言", 'wpgcp_main'); ?></label></td>
            <td><select id="wpgcp_lang" name="wpgcp_main" style="width: 200px">
                    <option value="javascript" selected><?php _e("javascript", 'wpgcp_main'); ?></option>
                    <option value="css"><?php _e("css", 'wpgcp_main'); ?></option>
                    <option value="html"><?php _e("html", 'wpgcp_main'); ?></option>
                </select></td>
        </tr>
    </table>
    <h3>插入代码：</h3>

    <div>
        <textarea name="" id="wpgcp_code" style="height:300px; width: 400px;"></textarea>
    </div>
    <table border="0" cellpadding="4" cellspacing="0">
        <tr>
            <td nowrap="nowrap" valign="top"><label for="wpgcp_linenumber"><?php _e("开始行", 'wpgcp_main'); ?></label>
            </td>
            <td><input type="text" name="linenumber" id="wpgcp_linenumber" value="1" size="3"/></td>
        </tr>
        <tr>
            <td nowrap="nowrap" valign="top"></td>
            <td>
                <div style="float: left; margin-right: 10px">
                    <input type="submit" id="insert" name="insert" value="<?php _e("Insert", 'wpgcp_main'); ?>"
                           onclick="insertwpgcpcode();"/>
                </div>
                <div style="float: left">
                    <input type="button" id="cancel" name="cancel" value="<?php _e("Cancel", 'wpgcp_main'); ?>"
                           onclick="tinyMCEPopup.close();"/>
                </div>
            </td>
        </tr>
    </table>

</form>
<script>
    /*var inst = tinyMCE.getInstanceById('content');

     var html = inst.selection.getContent();*/
    var html = window.tinyMCE.activeEditor.selection.getContent();
    document.getElementById('wpgcp_code').value = html;
</script>
</body>
</html>