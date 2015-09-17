angular.module('myApp', ['ui.calendar'])
  .controller('MyController', ['$scope', function($scope) {

    $scope.myConfig = {
      defaultDate: new Date(),
      timeFormat: "H:mm",
      height: 550,
      header:{
        left: 'month basicWeek basicDay agendaWeek agendaDay',
        center: 'title',
        right: 'today,prev,next'
      },
      dayClick: function(date, allDay, jsEvent) {
        console.log(date.format());
        console.log(allDay);
        console.log(jsEvent);
      }
    };

    $scope.data = {
      backgroundColor: '#fff0f5',
      borderColor: '#c0c0c0',
      textColor: '#000',
      events: [
        {
          title: '大阪出張',
          start: '2015-08-01',
          backgroundColor: '#0ff'
        },
        {
          title: '福岡へ帰省',
          start: '2015-08-13',
          end: '2015-08-16',
          backgroundColor: '#98fb98'
        },
        {
          id: 100,
          title: '英語レッスン',
          start: '2015-08-07T20:00:00'
        },
        {
          id: 100,
          title: '英語レッスン',
          start: '2015-08-21T20:00:00'
        },
        {
          id: 100,
          title: '英語レッスン',
          start: '2015-08-28T20:00:00'
        },
        {
          title: 'WINGS会議',
          start: '2015-08-10',
          end: '2015-08-12',
          backgroundColor: '#ff0'
        },
        {
          title: '年間発表',
          start: '2015-08-10T10:00:00',
          end: '2015-08-10T11:30:00'
        },
        {
          title: '昼食',
          start: '2015-08-10T12:00:00'
        },
        {
          title: '打ち合わせ',
          start: '2015-08-10T14:00:00'
        },
        {
          title: '懇親会',
          start: '2015-08-10T18:00:00'
        },
        {
          title: '企画会議',
          start: '2015-08-11T10:00:00'
        },
        {
          title: '解散',
          start: '2015-08-11T12:00:00'
        },
        {
          title: 'WINGS本部へ',
          url: 'http://www.wings.msn.to/',
          start: '2015-08-31'
        }
      ]

      //url: 'cal.php'
    };
  }]);