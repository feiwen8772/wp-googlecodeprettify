<?php
/*
Plugin Name:WP-googlecodeprettify
Plugin URI: http://www.css88.com/archives/4804
Description: 一个基于 Google Code Prettify 实现的WordPress代码高亮插件，在TinyMCE编辑器中提供了一个插入代码的按钮。在文本编辑器中，加入了pre-js,pre-css,pre-html 3个快捷按钮;
Version: 1.3
Author: 愚人码头
Author URI:  http://www.css88.com/
*/
function wpgcp_addbuttons()
{
    // Add only in Rich Editor mode
    if (get_user_option('rich_editing') == 'true') {
        // add the button for wp25 in a new way
        add_filter("mce_external_plugins", "add_wpgcp_tinymce_plugin", 5);
        add_filter('mce_buttons', 'register_wpgcp_button', 5);
    }
}

// used to insert button in wordpress 2.5x editor
function register_wpgcp_button($buttons)
{
    array_push($buttons, "separator", "wpgcp");
    return $buttons;
}

// Load the TinyMCE plugin : editor_plugin.js (wp2.5)
function add_wpgcp_tinymce_plugin($plugin_array)
{
    $plugin_array['wpgcp'] = get_option('siteurl') . '/wp-content/plugins/wp-googlecodeprettify/editor_plugin.js';
    return $plugin_array;
}

function wpgcp_mce_valid_elements($init)
{
    if (isset($init['extended_valid_elements'])
        && !empty($init['extended_valid_elements'])
    ) {
        $init['extended_valid_elements'] .= ',' . 'pre[lang|line|escaped]';
    } else {
        $init['extended_valid_elements'] = 'pre[lang|line|escaped]';
    }
    return $init;
}

function wpgcp_change_tinymce_version($version)
{
    return ++$version;
}

// Add pre as a valid element to TinyMCE with lang and line arguments
add_filter('tiny_mce_before_init', 'wpgcp_mce_valid_elements', 0);
// Modify the version when tinyMCE plugins are changed.
add_filter('tiny_mce_version', 'wpgcp_change_tinymce_version');
// init process for button control
add_action('init', 'wpgcp_addbuttons');

function wpgpcintegration_addquicktags()
{
    wp_enqueue_script('jquery');
    wp_enqueue_script(
        'wp_wpgcp_quickcode',
        plugin_dir_url(__FILE__) . 'wp-wpgcp-quicktag.js',
        array('quicktags')
    );
}

// load quicktag javascript if needed - why is there no separate action in the wordpress API?
if (in_array($pagenow, array('post.php', 'post-new.php', 'page.php', 'page-new.php'))) {
    add_action('admin_print_scripts', 'wpgpcintegration_addquicktags');
}

function wpjam_add_scripts()
{
    wp_register_script('plugin_script', plugins_url('/js/run_prettify.js', __FILE__), array('jquery'), '1.1', false);
    wp_enqueue_script('plugin_script');
}

add_action('wp_enqueue_scripts', 'wpjam_add_scripts');

function wpjam_add_styles()
{
    wp_register_style('plugin_stylesheet', plugins_url('/js/prettify.css', __FILE__));
    wp_enqueue_style('plugin_stylesheet');
}

add_action('wp_print_styles', 'wpjam_add_styles');

?>
