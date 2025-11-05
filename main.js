$(function () {
  const images = $("#art img");
  let index = 0;

  function show(i) {
    index = i;
    $("#lightbox-img").attr("src", $(images[index]).attr("src"));
    $("#lightbox").css("display", "flex");
  }

  images.on("click", function () {
    show(images.index(this));
  });

  $("#close").on("click", function () {
    $("#lightbox").hide();
  });

  $("#prev").on("click", function () {
    index = (index - 1 + images.length) % images.length;
    show(index);
  });

  $("#next").on("click", function () {
    index = (index + 1) % images.length;
    show(index);
  });

  // Close on background click
  $("#lightbox").on("click", function (e) {
    if (e.target.id === "lightbox") $("#lightbox").hide();
  });
});
