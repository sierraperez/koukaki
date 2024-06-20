<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    // Enfileirando o estilo do tema pai
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    
    // Enfileirando o estilo do Swiper
    wp_enqueue_style( 'swiper-style', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css' );
    
    // Enfileirando o script do Swiper
    wp_enqueue_script( 'swiper-script', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), null, true );
    
    // Enfileirando o jQuery (versão 2.1.3)
    wp_enqueue_script('jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js', array(), '2.1.3', true);
    
    // Enfileirando o script principal e garantindo que o jQuery seja uma dependência
    wp_enqueue_script( 'main-script', get_stylesheet_directory_uri() . '/assets/js/main.js', array('jquery'), null, true );
}



// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}