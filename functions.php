<?php

define( 'HEADER_IMAGE', 'http://ninkigumi.github.io/family1steyecatch.gif' );
define('THEMECDN', 'http://koba-ninkigumi.github.io/stinger3_child');
define('NOIMAGE', '/images/family1stlogo150.gif');

add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form' ) );

if ( ! function_exists( 'child_theme_setup' ) ):
function child_theme_setup() {
    remove_action('init','register_user_script');
    add_action('init','register_user_script_child');

}
endif;
add_action( 'after_setup_theme', 'child_theme_setup' );

function register_user_script_child() {
    if (!is_admin()) {
        $script_directory = get_template_directory_uri();
        wp_deregister_script('jquery');
        wp_enqueue_script('jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js');
        wp_deregister_script('jquery-ui-core');
        wp_deregister_script('jquery-ui-widget');
        wp_deregister_script('jquery-ui-tabs');
        wp_enqueue_script('jquery-ui-core','http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js', array(), false, true);
    }
}

?>