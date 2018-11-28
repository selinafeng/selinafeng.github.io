$(document).ready(function() {
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
