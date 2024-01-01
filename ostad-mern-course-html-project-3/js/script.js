//dialer generate
for (let index = 0; index < 60; index++) {
    $(".clock").append('<div class="lines" style="transform:rotate('+ 6 * index +'deg)"></div>');
}

//on move dialer
clockCalculation = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let hourHand = hour * 30 + minute * (360/720);
    let minuteHand = minute * 6 + second * (360/3600);
    let secondHand = second * 6;
    // console.log('minuteHand', minuteHand);
    $('.hour').css('transform', 'rotate('+ hourHand +'deg)');
    $('.minute').css('transform', 'rotate('+ minuteHand +'deg)');
    $('.second').css('transform', 'rotate('+ secondHand +'deg)');
    $('.minNow').html(minute);
    $('.hourNow').html(hour);
    $('.secNow').html(second);
}

dateGenerate = () => {
    let date = new Date();
    $('.date').html(date.getDay());
    $('.month').html(date.getMonth() + 1);
    $('.year').html(date.getFullYear());
}

setInterval(() => {
    dateGenerate();
}, 86400);

//call function every one second
setInterval(() => {
    clockCalculation();
}, 100);
