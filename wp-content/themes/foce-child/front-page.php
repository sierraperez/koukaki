<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section  class="banner" data-anime="Retard"> 
            <video class="video" muted autoplay ='autoplay' loop='infinite' width="1440px" data-anime="Top">
                <source src="<?php echo get_stylesheet_directory_uri() . '/assets/video/video.mp4'; ?>" type="video/mp4"  data-anime="Top"/>
            </video>
                <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?>  "alt="logo Fleurs d'oranger & chats errants" data-anime="Down" id="bouncingImage">
        </section>
        <section id="story" class="story" data-fideIn="Down" >
            <h2 class="story_titre">L'histoire</h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <?php get_template_part( 'parts/characters' );?>
            <article id="place"  >
                <div>
                    <h3>Le Lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>
                <div id="nuage" class="cloud" >
                    <img class="nuages" src="<?php echo get_stylesheet_directory_uri() . '/assets/img/Nuages.png'; ?>" alt=" Nuages" >
                </div>

            </article>
        </section>


        <section id="studio">
            <h2>Studio Koukaki</h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>
        <section id="oscar">
            <h3>Fleurs d’oranger & chats errants est nominé aux Oscars Short Film Animated de 2022 !</h3>
            <img src="<?php echo home_url('/wp-content/uploads/2024/06/18-courts-metrages-francais-d-animation-eligibles-aux-oscars-2021-2.png');?> " alt=" Oscar LOGO">   
        </section>
    </main><!-- #main -->

<?php
get_footer();
