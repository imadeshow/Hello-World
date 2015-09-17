<?php
mb_http_output('UTF-8');
mb_internal_encoding('UTF-8');

$tags = array(
  'JavaScript',
  'AngularJS',
  'jQuery',
  'BackboneJS',
  'EmberJS',
  'jQuery UI',
  'jQuery Mobile',
  'Rails',
  'PHP'
);

$result = [];

array_walk(
  $tags,
  function($key) {
    global $result;
    if (mb_strpos(strtolower($key), strtolower($_GET['term'])) === 0) {
      $result[] = array('text' => $key);
    }
  });

print(json_encode($result));