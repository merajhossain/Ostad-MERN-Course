//dialer generate
for (let index = 0; index < 60; index++) {
  $(".clock").append(
    '<div class="lines" style="transform:rotate(' + 6 * index + 'deg)"></div>'
  );
}

//on move dialer
clockCalculation = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let hourHand = hour * 30 + minute * (360 / 720);
  let minuteHand = minute * 6 + second * (360 / 3600);
  let secondHand = second * 6;
  // console.log('minuteHand', minuteHand);
  $(".hour").css("transform", "rotate(" + hourHand + "deg)");
  $(".minute").css("transform", "rotate(" + minuteHand + "deg)");
  $(".second").css("transform", "rotate(" + secondHand + "deg)");
  $(".hourNow").html(hour % 12 || 12);
  $(".minNow").html(minute);
  $(".secNow").html(second > 9 ? second : "0" + second);
};

dateGenerate = () => {
  let date = new Date();
  $(".date").html(date.getDate() > 9 ? date.getDate() : "0" + date.getDate());
  const formattedMonth =
    (date.getMonth() < 10 ? "0" : "") + (date.getMonth() + 1);
  $(".month").html(formattedMonth);
  $(".year").html(date.getFullYear());
};

$(document).ready(function () {
  Swal.fire({
    title: "Are you want to hear clock sound?",
    showCancelButton: true,
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      var audio = $("#myAudio")[0];
      audio.autoplay = true;
      audio.load();
    }
  });
  
  dateGenerate();
  //call function every one second
  setInterval(() => {
    clockCalculation();
  }, 100);
});
