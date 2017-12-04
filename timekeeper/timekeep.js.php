<?php
/**
 * Created by PhpStorm.
 * User: ivanvelev
 * Date: 12/3/17
 * Time: 10:34 PM
 */

header("Content-type: application/javascript");

$js = file_get_contents('timer.js');
echo $js;