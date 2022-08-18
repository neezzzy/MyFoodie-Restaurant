$(document).ready(function () {
  $("#products").on("click", "input:checked", function (event) {
    if ($(this).val() === "third-party") {
      $(".third-party-delivery").removeClass("d-none");
      $(".in-house-delivery").addClass("d-none");
    } else {
      $(".in-house-delivery").removeClass("d-none");
      $(".third-party-delivery").addClass("d-none");
    }
  });
});
