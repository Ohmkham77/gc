$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $(".navbar");
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > 20) {
        $(".navbar").addClass("active");
      } else {
        $(".navbar").removeClass("active");
      }
    });
    }
    
});
