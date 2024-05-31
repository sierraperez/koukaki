<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'koukaki' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'o(OEK-d{jY@@W>~z+J@|Z.>Al@bn8rQ]ow|FFv4(Gs4~(5WPUm)J~!P>*zR`V8S$' );
define( 'SECURE_AUTH_KEY',  'dXnWu0bxi#dt1.DLv*u`6~h[uN9KvHSh##D$aknpp&5O8Wb9:a{{T^`!P4Za,]8t' );
define( 'LOGGED_IN_KEY',    ']XWEWO!!f3C8]]1@N_EBve1wr8s>]aG$dd5*_= ,jEw<6$!Z^BC1)I+IR(+WU6k2' );
define( 'NONCE_KEY',        'RFFE*&=5cS!UT9-E|A V!gtL8.IE63&CiC0N|6?rJ*~:,w|$ DHQ+3sqWkCA_Y*E' );
define( 'AUTH_SALT',        'UtM6VpFno{nk$?8 0jy*q=G+Ga70]C-[O:1PRd>P8Gk8>e!{mzzRz.F%l8^n?N)h' );
define( 'SECURE_AUTH_SALT', '[(wUgI2*5GT<ukx7CDC[CV,ZLw&D5n[.sEY[za#7ot4Sm6Ar:[OL*i}p<rt|u/I-' );
define( 'LOGGED_IN_SALT',   '7{v+S7IQJ;awjfr><Kof=YYV.1ws{P{;6}P<#wEj!}OT<*3_ WEyEk-1iVSb0:lq' );
define( 'NONCE_SALT',       '2&/(,+&BwR-zv-H/[@cn.J]/n%E0PU.:`jY{@Cq,/6G `0BeA<-vl:LN;k3Q|Y]?' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
