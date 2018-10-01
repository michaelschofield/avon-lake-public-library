<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://alpl.org
 * @since             1.0.0
 * @package           Alpl
 *
 * @wordpress-plugin
 * Plugin Name:       Avon Lake Public Library
 * Plugin URI:        https://www.alpl.org
 * Description:       A plugin to help consolidate custom functionality for the Avon Lake Public Library
 * Version:           1.0.0
 * Author:            Nick Kelley, Michael Schofield
 * GitHub Plugin URI: https://github.com/michaelschofield/avon-lake-public-library
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       alpl
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-alpl.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_alpl() {

	$plugin = new Alpl();
	$plugin->run();

}
run_alpl();
