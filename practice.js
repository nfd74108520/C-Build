$("input").keyup(function () {
  let value = $(this).val();
  $("div").text(value);
});
