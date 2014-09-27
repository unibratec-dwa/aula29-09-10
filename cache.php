<?php
	header("Content-type: text/cache-manifest;");
	echo "CACHE MANIFEST\n\n";

	$hashes = md5_file("webapp.html");
	$hashes .= md5_file("cache.php");

	$cache = array();
	$network = array();
	$fallback = array();

	$cache[] = "bibliotecas/APP.js/APP.js";
	$cache[] = "bibliotecas/js/jquery.js";
	$cache[] = "codigoFonte/js/APP.DestaquesDoMes.js";
	$cache[] = "codigoFonte/js/APP.OnlineStatus.js";

	$network[] = "avatar/";

	$fallback[] = array("destaquesDoMes.php","destaquesOffline.html");
	$fallback[] = array("webcam/aovivo.jpg","webcam/offline.gif");


	echo  "\nCACHE:\n";

	foreach($cache as $entrada){
		echo $entrada."\n";
		$hashes .= md5_file($entrada);
	}

	echo  "\nNETWORK:\n";

	foreach($network as $entrada){
		echo $entrada."\n";
		$hashes .= md5_file($entrada);
	}
	echo  "\nFALLBACK:\n";

	foreach($fallback as $entrada){
		echo implode(" ", $entrada)."\n";
		$hashes .= md5_file($entrada[0]);
		$hashes .= md5_file($entrada[1]);
	}

	echo "\n#HASH:"; echo md5($hashes);
?>