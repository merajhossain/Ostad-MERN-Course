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
    $('.hourNow').html(hour % 12 || 12);
    $('.minNow').html(minute);
    $('.secNow').html(second > 9 ? second : '0'+second);
}

dateGenerate = () => {
    let date = new Date();
    $('.date').html(date.getDay() > 9 ? date.getDay() : '0'+date.getDay());
    const formattedDay = (date.getDate() < 10 ? '0' : '') + date.getDate();
    $('.month').html(formattedDay);
    $('.year').html(date.getFullYear());
}

setInterval(() => {
    dateGenerate();
}, 86400);

//call function every one second
setInterval(() => {
    clockCalculation();
}, 100);
