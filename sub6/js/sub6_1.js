
$('.second.circle').circleProgress({
    value: 0.2,
    size: 200.0, //캔버스 사이즈
    lineCap:'round',
    fill: {
            gradient: ['#F4911D'] //그라디언트 색상
        },
    emptyFill: 'rgba(244, 149, 29, .1)',
    thickness:10,
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html('서류 심사');
});

$('.second2.circle').circleProgress({
    value: 0.4,
    size: 200.0, //캔버스 사이즈
    lineCap:'round',
    fill: {
            gradient: ['#F4911D'] //그라디언트 색상
        },
    emptyFill: 'rgba(244, 149, 29, .1)',
    thickness:10,
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html('적성 검사');
});

$('.second3.circle').circleProgress({
    value: 0.6,
    size: 200.0, //캔버스 사이즈
    lineCap:'round',
    emptyFill: 'rgba(244, 149, 29, .1)',
    fill: {
            gradient: ['#F4911D'] //그라디언트 색상
        },
    thickness:10,
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html('1차 면접');
});

$('.second4.circle').circleProgress({
    value: 0.8,  size: 200.0, //캔버스 사이즈
    lineCap:'round',
    fill: {
            gradient: ['#F4911D'] //그라디언트 색상
        },
    emptyFill: 'rgba(244, 149, 29, .1)',
    thickness:10,
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html('2차 면접');
});

$('.second5.circle').circleProgress({
    value: 1.0,  size: 200.0, //캔버스 사이즈
    // lineCap:'round',
    fill: {
            gradient: ['#F4911D'] //그라디언트 색상
        },
    emptyFill: 'rgba(244, 149, 29, .1)',
    thickness:10,
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html('최종 합격');
});