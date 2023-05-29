<?php
ini_set('display_errors', 0);
ini_set('display_startup_errors',0);
error_reporting(E_ALL);
if(!defined('SLOPT_CMS')) 
	{ 
		die('Lo sentimos, pero no puedes acceder a este archivo'); 
	}
	define('Z', $_SERVER['DOCUMENT_ROOT'].'/');
	define('A', Z . 'config/');
	define('B', 'app/');
	define('C', 'classes/');
	define('E', 'languages/');
	define('G', 'content/');
	define('H', 'themes/');
	define('I', 'maintenance/');
	define('J', Z . 'adminpan/');
	define('K', 'plugins/');
	require_once A . '/slopt_config.php';
	require_once A . E . '/'.$config['lang'].'.php';
	require_once A . B . C . '/functions.php';
	require_once A . B . C . '/class.game.php';
	require_once A . B . C . '/class.user.php';
	require_once A . B . C . '/class.html.php';
	require_once A . B . C . '/class.admin.php';
	require_once A . B . C . '/class.db.php';
	define('S', $config['skin']);
	Html::loadPlugins();