$(document).ready(function() {
  let activeModal = "";
  $("#container").mousemove(function(event) {
    x = event.pageX;
    y = event.pageY;
    if (x > 0) {
      $("#selina").css("transform", "translateX(100px)");
    }
    if (x < 0) {
      $("#selina").css("transform", "translateX(-100px)");
    }
    if (y > 0) {
      $("#selina").css("transform", "translateY(100px)");
    }
    if (y < 0) {
      $("#selina").css("transform", "translateY(-100px)");
    }
  });
  $(".element").click(function(e) {
    const elementId = $(this).attr("id");
    console.log("clicked element", elementId);
    $("#modal-container")
      .removeAttr("class")
      .addClass("active");
    // e.stopPropagation();
    activeModal = $("#" + elementId + "-modal");
    console.log("active modal");
    console.log(activeModal);
    activeModal.removeClass("hidden").addClass("active");
  });
  $(".modal-background").click(function() {
    console.log($(this));
    $("#modal-container")
      .removeAttr("class")
      .addClass("hidden");
    activeModal.removeClass("active").addClass("hidden");
  });
});
