<?php
$infos = array(
  array(
    'title' => '大阪出張',
    'start' => '2015-08-01',
    'backgroundColor' => '#0ff'
  ),
  array(
    'title' => '福岡へ帰省',
    'start' => '2015-08-13',
    'end' => '2015-08-16',
    'backgroundColor' => '#98fb98'
  ),
  array(
    'id' => 100,
    'title' => '英語レッスン',
    'start' => '2015-08-07T20:00:00'
  ),
  array(
    'id' => 100,
    'title' => '英語レッスン',
    'start' => '2015-08-21T20:00:00'
  ),
  array(
    'id' => 100,
    'title' => '英語レッスン',
    'start' => '2015-08-28T20:00:00'
  ),
  array(
    'title' => 'WINGS会議',
    'start' => '2015-08-10',
    'end' => '2015-08-12',
    'backgroundColor' => '#ff0'
  ),
  array(
    'title' => '年間発表',
    'start' => '2015-08-10T10:00:00',
    'end' => '2015-08-10T11:30:00'
  ),
  array(
    'title' => '昼食',
    'start' => '2015-08-10T12:00:00'
  ),
  array(
    'title' => '打ち合わせ',
    'start' => '2015-08-10T14:00:00'
  ),
  array(
    'title' => '懇親会',
    'start' => '2015-08-10T18:00:00'
  ),
  array(
    'title' => '企画会議',
    'start' => '2015-08-11T10:00:00'
  ),
  array(
    'title' => '解散',
    'start' => '2015-08-11T12:00:00'
  ),
  array(
    'title' => 'WINGS本部へ',
    'url' => 'http://www.wings.msn.to/',
    'start' => '2015-08-31'
  )
);

$s = strtotime($_GET['start']);
$e = strtotime($_GET['end']);

$result = array();
foreach($infos as $info) {
  $info_s = strtotime($info['start']);
  $info_e = strtotime($info['end']);
  if (($s <= $info_s && $e >= $info_s) || ($s <= $info_e && $e >= $info_e)) {
    $result[] = $info;
  }
}

print(json_encode($result));