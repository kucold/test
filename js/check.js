$(".politick").click(function() {
    if (($(this).prop("checked"))) {
      $("#form__button").removeAttr("disabled");
    } else {
      $("#form__button").attr("disabled", "disabled");
    }
  })