$(document).ready(function() {
  $(".element").click(function(e) {
    const elementId = $(this).attr("id");
    console.log("clicked element", elementId);
    $("#modal-container")
      .removeAttr("class")
      .addClass("active");
    e.stopPropagation();
    // $("body").addClass("modal-active");
  });
  $(".modal-background").click(function() {
    console.log($(this));
    $("#modal-container")
      .removeAttr("class")
      .addClass("hidden");
  });
});
