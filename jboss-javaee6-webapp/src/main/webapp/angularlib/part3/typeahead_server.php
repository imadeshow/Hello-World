<?php
mb_http_output('UTF-8');
mb_internal_encoding('UTF-8');

$keywords = array('ファーストトマト', '桃太郎トマト', 'ミディトマト', 'トマトベリー', '黒トマト', 'レモントマト', '千両ナス', '丸ナス', '小ナス', '米ナス', '水ナス', '白ナス', '白うり', 'はやとうり', 'はぐらうり', 'そうめんうり','トウガン','シシトウ', 'ピーマン', '赤ピーマン', 'パプリカ', 'バナナピーマン', 'トウモロコシ', '白トウモロコシ', '黒トウモロコシ', 'スイートコーン');

array_walk(
  $keywords,
  function($key) {
    global $result;
    if (mb_strpos(strtolower($key), strtolower($_GET['term'])) === 0) {
      $result[] = $key;
    }
  });

print(json_encode($result));