$(function() {
  /** Fonction pour remplir toute les formes de la page */
  $("#btn-fill").click(function() {
    resetAllState($(".form"));
    $(".form").addClass("formsColor");
  });

  /** Fonction pour vider toute les formes de la page */
  $("#btn-empty").click(function() {
    resetAllState($(".form"));
    $(".form").addClass("noColorClass");
  });

  /** Fonction pour remplir un seul cercle */
  $(".circle").click(function() {
    if ($(this).hasClass("circleColor")) {
      resetAllState($(this));
      $(this).removeClass("circleColor");
    } else {
      resetAllState($(this));
      $(this).addClass("circleColor");
    }
  });

  /** Fonction pour remplir un carre et sa rangé */
  $(".squarre").click(function() {
    let currentSuarre = $(this);
    currentSuarre.toggleClass("squarreColor");
    let idParent = currentSuarre.parent().attr("id");

    switch (idParent) {
      case "row1":
        if (currentSuarre.hasClass("squarreColor")) {
          resetAllState($("#row1").children());
          $("#row1")
            .children()
            .addClass("squarreColor");
        } else {
          resetAllState($("#row1").children());
          $("#row1")
            .children()
            .removeClass("squarreColor");
        }
        break;
      case "row2":
        if (currentSuarre.hasClass("squarreColor")) {
          resetAllState($("#row2").children());
          $("#row2")
            .children()
            .addClass("squarreColor");
        } else {
          resetAllState($("#row2").children());
          $("#row2")
            .children()
            .removeClass("squarreColor");
        }
        break;
      case "row4":
        if (currentSuarre.hasClass("squarreColor")) {
          resetAllState($("#row4").children());
          $("#row4")
            .children()
            .addClass("squarreColor");
        } else {
          resetAllState($("#row4").children());
          $("#row4")
            .children()
            .removeClass("squarreColor");
        }
        break;
      case "row5":
        if (currentSuarre.hasClass("squarreColor")) {
          resetAllState($("#row5").children());
          $("#row5")
            .children()
            .addClass("squarreColor");
        } else {
          resetAllState($("#row5").children());
          $("#row5")
            .children()
            .removeClass("squarreColor");
        }
        break;
      default:
        break;
    }
  });

  /** Fonction pour remplir le losange, sa rangé et sa colonne */
  $(".losange").click(function() {
    $(".losange").toggleClass("losangeColor");

    upToDateColKeeper(".col3");

    upToDateRowKeeper("#row3");
  });
});

function upToDateColKeeper(colName) {
  for (let elem of $(colName)) {
    if ($(".losange").hasClass("losangeColor")) {
      resetAllState($(elem));

      $(elem).addClass("losangeColor");
    } else {
      resetAllState($(elem));

      $(elem).addClass("noColorClass");
    }
  }
}

function upToDateRowKeeper(rowName) {
  for (let elem of $(rowName).children()) {
    if ($(".losange").hasClass("losangeColor")) {
      $(elem).removeClass("circleColor");
      $(elem).removeClass("squarreColor");
      $(elem).removeClass("formsColor");

      $(elem).addClass("losangeColor");
    } else {
      $(elem).removeClass("losangeColor");
      $(elem).removeClass("circleColor");
      $(elem).removeClass("squarreColor");
      $(elem).removeClass("formsColor");
      $(elem).addClass("noColorClass");
    }
  }
}

function resetAllState(elem) {
  elem.removeClass("losangeColor");
  elem.removeClass("circleColor");
  elem.removeClass("squarreColor");
  elem.removeClass("formsColor");
  elem.removeClass("noColorClass");
}
