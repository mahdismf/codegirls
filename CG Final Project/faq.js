$(".accordion-header").click(function () {
    console.log("Header clicked");
    $(this).next(".accordion-content").slideToggle(300);
    $(".accordion-content").not($(this).next()).slideUp(300);
  });
